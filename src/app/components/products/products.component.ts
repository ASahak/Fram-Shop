import { Component, OnInit, ViewChild,ViewChildren, ElementRef, QueryList, HostListener } from '@angular/core';
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
export class ProductsComponent implements OnInit {

    protected shopBadgesComponent:ShopBadgesComponent = new ShopBadgesComponent();
    protected galleryComponent:GalleryComponent       = new GalleryComponent();
    protected _idProduct:string;
    public _ProductMore:Observable<Array<Object>>
    constructor(
        private _store: Store<AppState>,
        public location:Location,
        private router:Router,
        public _activeRouter:ActivatedRoute,
        private _authServ: AuthServiceService   
    ) {
        this._store.pipe(select('_methods')).subscribe(res=>{
            if(res){
                this._ProductMore = res.product
            }
        });
     }

    @ViewChildren('imgBoxZoom') imgBoxZoom:QueryList<any>;
    @ViewChild('each_colors') each_colors:ElementRef;
    
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
    
    ngOnInit() {
        this._idProduct = this._activeRouter.params['value']['id'];
        this._store.dispatch(new Actions.OneProduct({_idProduct:this._idProduct.split("&")[0], _ownProductId:this._idProduct.split("&")[1]}))
        // this._authServ.__getCurrentUser()
        //     .subscribe(res => {
        //         // console.log(res)
        //         Array.prototype.map.call(res['myProduct'], item=>{
        //             // console.log(item)
        //         })
        //         // (this._ProductMore as any) = res;
        //     })
        setTimeout(()=>this.goSmooth(), 100)
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
    selectColorProds(index:number){
        if(document.querySelector('.activeColor')){
            document.querySelector('.activeColor').classList.remove('activeColor');
        }
        this.each_colors.nativeElement.children[index].classList.add('activeColor');
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

