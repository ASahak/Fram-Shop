import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Output , EventEmitter, Input} from '@angular/core';
import { GalleryComponent } from '../../gallery/gallery.component';
import { ShopService } from '../../../services/shop.service'
import * as Actions from '../../../store/actions/methods.actions'
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app.state'
import { getMethodProducts, getMethodAllProducts } from '../../../store/reducers/methods.reducer'
import { Observable, combineLatest } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart} from '@angular/router';
import { AuthServiceService } from '../../../services/auth-service.service';
import { takeUntil, take, takeLast, tap, flatMap, takeWhile, last, map, withLatestFrom, mergeMap } from 'rxjs/operators';

import { from } from 'rxjs';

declare var Swiper: any;
@Component({
    selector: 'app-shop-badges',
    templateUrl: './shop-badges.component.html',
    styleUrls: ['./shop-badges.component.scss']
})
export class ShopBadgesComponent implements OnInit, OnDestroy  {
    public _shuffleProds: Array<Object>    = []
    public _allProductsres: Array<Object>  = []
    public _staticIndexes: Array<number>   = []
    protected _relatedProdsCount:number    = 6;
    public _ActiveuserInfo;
    public loading:boolean                 = true;
    public noData:boolean                  = false;
    public isShuffle: boolean              = true;
    products$;
    unproducts$;
    productsAll$;
    unproductsAll$
    @ViewChild('continerRelatedProds') continerRelatedProds:ElementRef
    @ViewChild('swiperClonewrapper') swiperClonewrapper:ElementRef
    @ViewChild('appendToSection') appendToSection:ElementRef
    constructor(
        private _store: Store<AppState>,
        private _shopData:ShopService,
        private _router:Router,
        private _activeRouter:ActivatedRoute,
        private _authServ: AuthServiceService
    ) { 
        this.products$  = this._store.select(getMethodProducts)
        this.productsAll$  = this._store.select(getMethodAllProducts)
        this.unproducts$ = this.products$.subscribe(res=>{
            if(res){
                this.unproductsAll$ = this.productsAll$.subscribe(resp => {
                    this._allProductsres = []
                    Array.prototype.map.call(res, elem => {
                        this._allProductsres.push(...elem.myProduct)
                    });
                    if(this._shuffleProds.length === 0){
                        let _maxLength:number = (this._allProductsres.length > 100) ? 100 : this._allProductsres.length
                        for(let i = 0; i < _maxLength; i++){
                            this._staticIndexes.push(i)
                        }
                        this._staticIndexes = this.__shuffleArray(this._staticIndexes)
                    }
                    this._shuffleProds = []
                    for (let i = 0; i < this._relatedProdsCount; i++) {
                        this._shuffleProds.push(this._allProductsres[this._staticIndexes[i]])
                    }
                    if(this.swiperClonewrapper){
                        let _cloneWrapper = this.swiperClonewrapper.nativeElement.cloneNode(true)
                        this.appendToSection.nativeElement.appendChild(_cloneWrapper)
                        this.swiperClonewrapper.nativeElement.style.display = 'none'
                        setTimeout(() => {
                            this.swiperClonewrapper.nativeElement.style.display = 'block'
                            this.appendToSection.nativeElement.removeChild(_cloneWrapper)
                            this.__initSwiperProds()
                            setTimeout(()=>{
                                this.loading = false
                                this.noData = (this._shuffleProds.length === 0)
                            }, 500)
                        },0)
                    }
                })
            }
        })
    }
    protected __shuffleArray = function(array) {
        this.isShuffle = false
        var m = array.length, t, i;
        while (m) {
          i = Math.floor(Math.random() * m--);
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
        return array;
    }
    protected findElementExtend:GalleryComponent = new GalleryComponent();
    __appreciated(_indexStar:number, _userID:string, _indexMyProduct:number ){
        if(this._ActiveuserInfo && this._ActiveuserInfo['id']){
            let _currentUserID = this._ActiveuserInfo['id']
            this._store.dispatch(new Actions.ProductApreciated({_indexStar, _userID, _indexMyProduct, _currentUserID}))
        }
        else{
            this._store.dispatch(new Actions.FlashMessage({message:"For aprecite you must be sign in", timeout:4000, classType:'dangerFlash'}))
        }
    }
    __addProductToCart(_inputValue, _badge){
        this._authServ.__getCurrentUser()
        .subscribe(res => {
            (this._ActiveuserInfo as any) = res;
            if(this._ActiveuserInfo && this._ActiveuserInfo['id']){
                let _currentUserID = this._ActiveuserInfo['id'],
                _prodCount     = 0;
                if(this._ActiveuserInfo['myCart'] && this._ActiveuserInfo['myCart'][_badge[0]]){
                    _prodCount = Number(this._ActiveuserInfo['myCart'][_badge[0]]['prodCount'])
                }
                if(Number(_inputValue.value)>5){
                    this._store.dispatch(new Actions.FlashMessage({message:"You can't add more then 5 item", timeout:4000, classType:'dangerFlash'}))
                }
                else{
                    if(Number(_inputValue.value)+_prodCount <= 5){
                        let _inputVal = Number(_inputValue.value)+_prodCount
                        this._store.dispatch(new Actions.ProductAddToCart({_inputVal, _badge, _currentUserID}))
                        setTimeout(()=>{
                            _inputValue.value = 1
                        }, 0)
                    }
                    else{
                        this._store.dispatch(new Actions.FlashMessage({message:`Your Cart have this item currectly ${_prodCount} (Max items not more than 5)`, timeout:6000, classType:'dangerFlash'}))
                    }
                }
            }
        },
        err => this._store.dispatch(new Actions.FlashMessage({message:err, timeout:4000, classType:'dangerFlash'})),
        )
    }
    public getParent(target, limitParent){
        limitParent = (limitParent == "") ? document.querySelector("body") : limitParent;
        function contains(_elem, limitParent){
            let result = null;
            result = _elem.className.split(" ").find((elem, ind)=>{
                return elem == limitParent
            })
            return result
        }
        for (var _e = target, _parent = []; _e && _e !== document; _e = _e.parentNode) {
            if (!contains(_e, limitParent)) {
                _parent.push(_e);
            }
            else{
                _parent.push(_e);
                break;
            }
        }
        return _parent[_parent.length - 1];
    }
    protected __initSwiperProds () {
        let related_slider = new Swiper('.swiper_related_home', {
            paginationClickable: true,
            slidesPerView: 5,
            prevButton: '.customR-prev',
            nextButton: '.customR-next',
            spaceBetween: 15,
            autoHeight: true,
            breakpoints: {
                480: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 4
                }
            }
        });
    }
    ngOnInit() {
        this._store.dispatch(new Actions.LoadRequested());
        this._store.dispatch(new Actions.AllUsersProduct())
        this._authServ.__getCurrentUser()
        .subscribe(res => {
            (this._ActiveuserInfo as any) = res;
        })
    }
    ngOnDestroy(){
        if(this.unproductsAll$){
            this.unproductsAll$.unsubscribe()
        }
        this.unproducts$.unsubscribe()
    }
    upCount(event){
        this.getParent(event.target, "count-product-input");
        this.findElementExtend.findElement(this.getParent(event.target, "count-product-input"), 'input')[0].value++;
    }
    downCount(event){
        this.getParent(event.target, "count-product-input");
        if(this.findElementExtend.findElement(this.getParent(event.target, "count-product-input"), 'input')[0].value > 1){
            this.findElementExtend.findElement(this.getParent(event.target, "count-product-input"), 'input')[0].value--;
        }
    }
}
