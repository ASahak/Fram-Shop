import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Output , EventEmitter, Input} from '@angular/core';
import { GalleryComponent } from '../../gallery/gallery.component';
import { ShopBadgesComponent } from '../../home-page/shop-badges/shop-badges.component';
import { ShopService } from '../../../services/shop.service'
import * as Actions from '../../../store/actions/methods.actions'
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute} from '@angular/router';
import { AppState } from '../../../store/app.state'
// interface AppState {
//     _methods:Todo
// }
@Component({
    selector: 'app-shop-content',
    templateUrl: './shop-content.component.html',
    styleUrls: ['./shop-content.component.scss']
})
export class ShopContentComponent implements OnInit, OnDestroy {
    protected shopBadgesComponent:ShopBadgesComponent = new ShopBadgesComponent();
    protected galleryComponent:GalleryComponent = new GalleryComponent();
    public _allProducts;
    constructor(
        private _store: Store<AppState>,
        private _shopData:ShopService,
        private _router:Router,
        private _activeRouter:ActivatedRoute
        ) { 
        this._allProducts = this._store.pipe(select('_methods'));
    }
    @ViewChild('pageinationWrap') pageinationWrap: ElementRef;
    @Output() transferPositionPageination = new EventEmitter()
    @Input('ActiveuserInfo') ActiveuserInfo:Object;
    ngOnInit() {
        this._store.dispatch(new Actions.AllUsersProduct())
    }
    __appreciated(_indexStar:number, _userID:string, _indexMyProduct:number ){
        if(this.ActiveuserInfo && this.ActiveuserInfo['id']){
            let _currentUserID = this.ActiveuserInfo['id']
            this._store.dispatch(new Actions.ProductApreciated({_indexStar, _userID, _indexMyProduct, _currentUserID}))
        }
        // console.log(_indexStar, _userID, _indexMyProduct, this.ActiveuserInfo['id'])
        // this._shopData.__updateRaiting({_indexStar, _userID, _indexMyProduct})
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
