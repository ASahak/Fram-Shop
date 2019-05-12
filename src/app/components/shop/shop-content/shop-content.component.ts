import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Output , EventEmitter, Input} from '@angular/core';
import { GalleryComponent } from '../../gallery/gallery.component';
import { ShopBadgesComponent } from '../../home-page/shop-badges/shop-badges.component';
import { ShopService } from '../../../services/shop.service'
import * as Actions from '../../../store/actions/methods.actions'
import { AppState } from '../../../store/app.state'
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart} from '@angular/router';
import { AuthServiceService } from '../../../services/auth-service.service';
import { takeUntil, take, takeLast, tap } from 'rxjs/operators';
export interface addProductCart {
    _badge:Object,
    _inputValue:HTMLInputElement,
    _currentUserID:string
}
interface objMaxAndMinVal {
    max: number;
    min:number;
}
// interface AppState {
//     _methods:Todo
// }
@Component({
    selector: 'app-shop-content',
    templateUrl: './shop-content.component.html',
    styleUrls: ['./shop-content.component.scss']
})
export class ShopContentComponent implements OnInit, OnDestroy {
    protected shopBadgesComponent:ShopBadgesComponent = new ShopBadgesComponent(
        this._store,
        this._shopData,
        this._router,
        this._activeRouter,
        this._authServ
    );
    protected galleryComponent:GalleryComponent       = new GalleryComponent();
    public _allProducts:Array<Object>                 = [];
    public loading:boolean                            = true;
    public _prod:any                                  = [];
    public productValue:number                        = 1;
    public _ActiveuserInfo;
    protected _potokProductIndexStart:number          = 0;
    protected _pagination:number                      = 1;
    protected _showBadges:number                      = null;
    public _ProductFilters:Object                     = {};
    public _prevIndex:number                          = 0;
    public _filteredArr                               = [];
    public _disabledPagePrev:boolean                  = false;
    public _disabledPageNext:boolean                  = true;
    public noData:boolean                             = false;
    public _allowStore:boolean                        = true;
    protected priceFilter:objMaxAndMinVal;
    protected sortBy: string;
    protected products: Array<Object>;
    unProducts$
    constructor(
        private _store: Store<AppState>,
        private _shopData:ShopService,
        private _router:Router,
        private _activeRouter:ActivatedRoute,
        private _authServ: AuthServiceService,
        ) {
            this.unProducts$ = this._store.pipe(select('_methods')).subscribe(res => {
                if(res.products){
                    this.sortBy = res.sortBy 
                    let priceFilter = res.shopContentMinAndMax
                    let _getProds = []
                    Array.prototype.map.call(res.products, elem => {
                        _getProds.push(...elem.myProduct)
                    });
                    this._showBadges = +res.showBadges
                    if(this.unProducts$){
                        this.callProds(_getProds, this, this.sortBy, priceFilter)
                        this._router.events.subscribe((ev) => {
                            if (ev instanceof NavigationEnd) {
                                this.callProds(_getProds, this, this.sortBy, priceFilter)
                            }
                        })
                    }
                    this.loading = false
                }
            });
    }
    protected callProds (_getProds, th, sortBy, objMaxAndMinVal:objMaxAndMinVal) {
        th._filteredArr = []
        th._pagination = 1
        th._potokProductIndexStart = 0
        th._disabledPagePrev = true
        th._ProductFilters['fragment'] = th._activeRouter.root.fragment['value'];
        objMaxAndMinVal.max = (!objMaxAndMinVal.max && objMaxAndMinVal.max !== 0) ? Infinity : objMaxAndMinVal.max;
        objMaxAndMinVal.min = (!objMaxAndMinVal.min) ? 0 : objMaxAndMinVal.min;
        [].slice.call(_getProds).forEach(element => {
            if(th._activeRouter.snapshot.queryParams['token']){
                if(element.prodName.toLowerCase().includes(th._activeRouter.snapshot.queryParams['token'].toLowerCase())){
                    th._filteredArr.push(element)
                }
            }
            else if(
                (element.prodType == th._ProductFilters['fragment'] || th._ProductFilters['fragment'] == null)
                && (element.prodPrice <= objMaxAndMinVal.max
                && element.prodPrice >= objMaxAndMinVal.min)    
                ){
                if (sortBy === 'only-my') {
                    if (element.idParentUser === th._ActiveuserInfo['id']) {
                        th._filteredArr.push(element)
                    }
                } else {
                    th._filteredArr.push(element)
                }
            }
        }); 
        if (sortBy) {
            let sortable = [];
            for (let prod in th._filteredArr) {
                sortable.push(th._filteredArr[prod]);
            }
            if(sortBy === 'a-f'){
                th._filteredArr = sortable.sort((a, b) => (a.prodName.toLowerCase() > b.prodName.toLowerCase()) ? 1: -1);
            } else if(sortBy === 'f-a'){
                th._filteredArr = sortable.sort((a, b) => (a.prodName.toLowerCase() < b.prodName.toLowerCase()) ? 1: -1);
            } else if(sortBy === 'lowest'){
                th._filteredArr = sortable.sort((a, b) => (a.prodPrice > b.prodPrice) ? 1: -1);
            } else if(sortBy === 'highest'){
                th._filteredArr = sortable.sort((a, b) => (a.prodPrice < b.prodPrice) ? 1: -1);
            } else {
                th._filteredArr = sortable
            }
        }
        th._disabledPageNext = !(th._filteredArr.length > th._showBadges)
        th.__getLimitProducts(th._showBadges, th._potokProductIndexStart, th._filteredArr, 'plus')
    }
    public __getLimitProducts(_badgesCount:number, potokProdStart:number, _allProds:Object, _typeStep:string){
        this._allProducts = [];
        for (let i = potokProdStart; i < potokProdStart + _badgesCount; i++) {
            if(_allProds[i]) {
                this._allProducts.push(_allProds[i])
            }
        }
        this.noData = (this._allProducts.length === 0)
    }
    __prevPage(){
        if(!this._disabledPagePrev) {
            if(this._pagination > 1) {
                this._disabledPageNext = false
                window.scrollTo({
                    top:0,
                    behavior: "smooth"
                });
                this._pagination--
                this._potokProductIndexStart-= this._showBadges
                this.__getLimitProducts(this._showBadges, this._potokProductIndexStart, this._filteredArr, 'minus')
                this._disabledPagePrev = (this._pagination === 1)
            }
        }
    }
    __nextPage(){
        if(this._pagination < Math.ceil(this._filteredArr.length / this._showBadges) && !this._disabledPageNext){
            this._disabledPagePrev = false
            window.scrollTo({
                top:0,
                behavior: "smooth"
            });
            this._pagination++
            this._potokProductIndexStart+= this._showBadges
            this.__getLimitProducts(this._showBadges, this._potokProductIndexStart,  this._filteredArr, 'plus')
            this._disabledPageNext = (this._pagination === Math.ceil(this._filteredArr.length / this._showBadges))
        }
    }
    __removeProduct(_product){
        if(confirm('Are you sure that you want to delete this product?')){
            this._store.dispatch(new Actions.RemoveProduct(_product))
        }
    }
    __editProduct (_product) {
        this.editProduct.emit(_product)
    }
    @Output('editProduct') editProduct: EventEmitter<Object> = new EventEmitter<Object>();
    @ViewChild('pageinationWrap') pageinationWrap: ElementRef;
    @Output() transferPositionPageination = new EventEmitter()
    ngOnInit() {
        this._ProductFilters['fragment'] = this._activeRouter.root.fragment['value']
        this._store.dispatch(new Actions.AllUsersProduct())
        this._authServ.__getCurrentUser()
            .subscribe(res => {
                (this._ActiveuserInfo as any) = res;
            })
    }
    __appreciated(_indexStar:number, _userID:string, _indexMyProduct:number ){
        if(this._ActiveuserInfo && this._ActiveuserInfo['id']){
            let _currentUserID = this._ActiveuserInfo['id']
            this._store.dispatch(new Actions.ProductApreciated({_indexStar, _userID, _indexMyProduct, _currentUserID}))
        }
        else{
            this._store.dispatch(new Actions.FlashMessage({message:"For aprecite you mus be sign in", timeout:4000, classType:'dangerFlash'}))
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
        })
    }
    ngDoCheck(){
        this.transferPositionPageination.emit(this.pageinationWrap.nativeElement.offsetTop)
    }
    ngOnDestroy(){
        this.unProducts$.unsubscribe()
        this._allowStore = false
    }
    upCount(event) {
        this.galleryComponent.findElement(this.shopBadgesComponent.getParent(event.target, "count-product-input"), 'input')[0].value++;
    }
    downCount(event) {
        if (this.galleryComponent.findElement(this.shopBadgesComponent.getParent(event.target, "count-product-input"), 'input')[0].value > 1) {
            this.galleryComponent.findElement(this.shopBadgesComponent.getParent(event.target, "count-product-input"), 'input')[0].value--;
        }
    }

}
