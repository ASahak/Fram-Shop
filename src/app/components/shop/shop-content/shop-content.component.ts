import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Output , EventEmitter, Input} from '@angular/core';
import { GalleryComponent } from '../../gallery/gallery.component';
import { ShopBadgesComponent } from '../../home-page/shop-badges/shop-badges.component';
import { ShopService } from '../../../services/shop.service'
import * as Actions from '../../../store/actions/methods.actions'
import { AppState } from '../../../store/app.state'
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthServiceService } from '../../../services/auth-service.service';
import { takeUntil, take, takeLast, tap } from 'rxjs/operators';
export interface addProductCart {
    _badge:Object,
    _inputValue:HTMLInputElement,
    _currentUserID:string
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
    protected shopBadgesComponent:ShopBadgesComponent = new ShopBadgesComponent();
    protected galleryComponent:GalleryComponent       = new GalleryComponent();
    public _allProducts:Array<Object>                 = [];
    public _prod:any                                  = {
        'VZSF3jW5Nmk3j9oeJo9B': [
            {
            idProduct: '1.1',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '1.2',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '1.3',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '1.4',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        }],
        'ut6iX7RvkwSRkjBFbrZC':[{
            idProduct: '2.1',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '2.2',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        }
        ],
        'w0cI9uMf4lb4WYQEBlMV':[{
            idProduct: '3.1',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '3.2',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '3.3',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '3.4',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '3.5',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '3.6',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '3.7',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '3.8',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '3.9',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '3.10',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '3.11',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '3.12',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '3.13',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '3.14',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '3.15',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '3.16',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '3.17',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '3.18',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        },
        {
            idProduct: '3.19',
            prodColors: ["#000000", "#008080", "#808000"],
            prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
            prodName: "Circle 1",
            prodPrice: 2000,
            prodSale: 10,
            prodSize: 2.3,
            prodType: "Jewellery",
            prodUsed: "notused",
            prodWeight: 10,
            raiting:{
                VZSF3jW5Nmk3j9oeJo9B: 4,
                VZSF3jW5Nmk3j9oeJo9B4: 5,
                VZSF3jW5Nmk3j9oeJo9B33: 5,
                VZSF3jW5Nmk3j9oeJo9f: 2,
                w0cI9uMf4lb4WYQEBlMV: 2
            }
        }
    ]};
    public productValue:number                        = 1;
    public _ActiveuserInfo;
    protected _potokNumberStart:number                = 0;
    protected _potokProductIndex:number               = 0;
    protected _paginationStart:number                 = 1;
    protected _showBadges:number                      = 10;
    public _commonObjectProducts:Object               = {};
    constructor(
        private _store: Store<AppState>,
        private _shopData:ShopService,
        private _router:Router,
        private _activeRouter:ActivatedRoute,
        private _authServ: AuthServiceService,
        ) { 
            let _unsub = this._store.pipe(select('_methods'))
            .subscribe(res=>{
                if(res.products){
                    // let _getProds = res.products;
                    // for (let i in _getProds){
                    //     this._prod[_getProds[i].id] = _getProds[i].myProduct
                    // }
                    // this._allProducts = this._prod
                    this._showBadges = res.showBadges
                    this.__getLimitProducts(res.showBadges, this._prod)
                    // _unsub.unsubscribe()
                }
            });
    }
    public __getLimitProducts(_badgesCount:number, _allProds:object){
        let _patokNumberStart:number = this._potokNumberStart;
        let _patokProdNumberStart:number = this._potokProductIndex;
        this._allProducts = []
        let _recursionProds = (start:number) => {
            for(let i = start; i < start + 1; i++){
                this._potokNumberStart = i
                for (let j = _patokProdNumberStart; j < Object.values(_allProds)[i].length; j++){
                    if (this._allProducts.length < _badgesCount){
                        this._potokProductIndex = j;
                        this._allProducts.push(Object.values(_allProds)[i][j])
                    } 
                }
            }
            if(this._allProducts.length < _badgesCount){
                _patokNumberStart++;
                _patokNumberStart < Object.keys(_allProds).length && _recursionProds(_patokNumberStart)
            }
        }
        _recursionProds(_patokNumberStart)
        this._commonObjectProducts[this._paginationStart] = this._allProducts
        console.log(this._allProducts, this._commonObjectProducts)
    }
    __prevPage(){
        this._potokProductIndex -= this._commonObjectProducts[this._paginationStart].length
        this._paginationStart--
        console.log(this._commonObjectProducts[this._paginationStart], 'minus')
    }
    __nextPage(){
        this._paginationStart++
        this._potokProductIndex++
        this.__getLimitProducts(this._showBadges, this._prod)
    }
    @ViewChild('pageinationWrap') pageinationWrap: ElementRef;
    @Output() transferPositionPageination = new EventEmitter()
    ngOnInit() {
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
