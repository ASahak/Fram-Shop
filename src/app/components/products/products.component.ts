import { Component, OnInit, OnDestroy, ViewChild,ViewChildren, ElementRef, QueryList, HostListener } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import { ShopBadgesComponent } from '../home-page/shop-badges/shop-badges.component';
import { Location } from '@angular/common';
import { AuthServiceService } from '../../services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as Actions from '../../store/actions/methods.actions'
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app.state'
declare var Swiper:any;
declare var  $: any;
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
   
})
export class ProductsComponent implements OnInit, OnDestroy {

    protected shopBadgesComponent:ShopBadgesComponent = new ShopBadgesComponent();
    protected galleryComponent:GalleryComponent       = new GalleryComponent();
    protected _idProduct:string;
    public _loadingProduct:boolean                    = false;
    public _ProductMore:Observable<Array<Object>>;
    public _ActiveuserInfo;
    constructor(
        private _store: Store<AppState>,
        public location:Location,
        private router:Router,
        public _activeRouter:ActivatedRoute,
        private _authServ: AuthServiceService   
    ) {
        this._store.pipe(select('_methods')).subscribe(res=>{
            this._loadingProduct = false;
            if(res){
                this._ProductMore = res.product
                this._loadingProduct = true;
                setTimeout(()=>{
                    this.__initSliders()
                    this.image_zoom();
                }, 0)
            }
        })
     }

    @ViewChildren('imgBoxZoom') imgBoxZoom:QueryList<any>;
    
    protected goSmooth(){
        // document scroll to 0
        try {
            window.scrollTo({
                top:0,
                behavior: "smooth"
            });
                                            
        } catch (e) { console.log(e)}
        // ______________________
    }
    protected image_zoom(){
        this.imgBoxZoom.forEach(elem=>{
            $(elem.nativeElement).imgZoom({
                boxWidth: 300,
                boxHeight: 300,
                marginLeft: 5,
                origin: 'data-origin'
            });
        })
    }
    refresh(){
        setTimeout(()=>this.goSmooth(), 100)
        // location.reload();
    }
    ngAfterViewInit(){
        this.image_zoom();
        
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
    protected __initSliders (){
        let related_slider = new Swiper('.swiper_related_prod', {
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

        var largeSlider = new Swiper('.prod-slider-large', {
            paginationClickable: true,
            spaceBetween: 15,
            autoHeight: true
        });
        var thumbSlider = new Swiper('.prod-slider-thumb', {
            paginationClickable: true,
            nextButton: '.thumb-arrow-right',
            prevButton: '.thumb-arrow-left',
            spaceBetween: 10,
            slidesPerView: 4,
            autoHeight: true,
            breakpoints: {
                480:{
                    slidesPerView: 3
                },
                767: {
                    slidesPerView: 3
                },
                991: {
                    slidesPerView: 4
                }
            }

        });

        // related
        // customR = new Swiper('.swiper-customR', {
        //     paginationClickable: true,
        //     slidesPerView: 5,
        //     prevButton: '.customR-prev',
        //     nextButton: '.customR-next',
        //     spaceBetween: 15,
        //     autoHeight: true,
        // });
        Array.from(document.querySelectorAll('.swipe-slide-to')).forEach(element=>{
            (element as HTMLElement).onclick = ()=>{
                var index = element.getAttribute('data-slide-to');
                largeSlider.slideTo(index, 500);
            } 
        });
    }
    ngOnInit() {
        this._idProduct = this._activeRouter.params['value']['id'];
        this._store.dispatch(new Actions.OneProduct({_idProduct:this._idProduct.split("&")[0], _ownProductId:this._idProduct.split("&")[1]}))
        setTimeout(()=>this.goSmooth(), 100)
       
    }
    ngOnDestroy(){
        this._loadingProduct = false;
    }
    upCount(event){
        this.galleryComponent.findElement(this.shopBadgesComponent.getParent(event.target, "count-product-input"), 'input')[0].value++;
    }
    downCount(event){
        if(this.galleryComponent.findElement(this.shopBadgesComponent.getParent(event.target, "count-product-input"), 'input')[0].value > 1){
            this.galleryComponent.findElement(this.shopBadgesComponent.getParent(event.target, "count-product-input"), 'input')[0].value--;
        }
    }
  
}

