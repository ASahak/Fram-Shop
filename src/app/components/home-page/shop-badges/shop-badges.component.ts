import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {GalleryComponent} from '../../gallery/gallery.component';

declare var Swiper: any;
@Component({
    selector: 'app-shop-badges',
    templateUrl: './shop-badges.component.html',
    styleUrls: ['./shop-badges.component.scss']
})
export class ShopBadgesComponent implements OnInit  {

    constructor() { }

    protected findElementExtend:GalleryComponent = new GalleryComponent();

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
    ngOnInit() {
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
