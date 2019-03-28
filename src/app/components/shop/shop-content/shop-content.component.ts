import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Output , EventEmitter} from '@angular/core';
import { GalleryComponent } from '../../gallery/gallery.component';
import { ShopBadgesComponent } from '../../home-page/shop-badges/shop-badges.component';
import { ShopService } from '../../../services/shop.service'
@Component({
    selector: 'app-shop-content',
    templateUrl: './shop-content.component.html',
    styleUrls: ['./shop-content.component.scss']
})
export class ShopContentComponent implements OnInit, OnDestroy {
    public _allProducts: Object = {};
    constructor(private _shopData:ShopService) { }
    protected shopBadgesComponent:ShopBadgesComponent = new ShopBadgesComponent();
    protected galleryComponent:GalleryComponent = new GalleryComponent();
    obj
    @ViewChild('pageinationWrap') pageinationWrap: ElementRef;
    @Output() transferPositionPageination = new EventEmitter()
    
    ngOnInit() {
        this._shopData.__getAllUsers().subscribe(res=>{
            [].slice.call(res).forEach(response=>{
                this._allProducts[response.id] = response.myProduct 
            })
            this.obj = this._allProducts
        })
    }
    ngDoCheck(){
        this.transferPositionPageination.emit(this.pageinationWrap.nativeElement.offsetTop)
    }
    ngOnDestroy(){
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
