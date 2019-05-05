import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Output , EventEmitter, Input} from '@angular/core';
import { GalleryComponent } from '../../gallery/gallery.component';
import { ShopBadgesComponent } from '../../home-page/shop-badges/shop-badges.component';
import { ShopService } from '../../../services/shop.service'
import * as Actions from '../../../store/actions/methods.actions'
import { AppState } from '../../../store/app.state'
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
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
    protected shopBadgesComponent:ShopBadgesComponent = new ShopBadgesComponent();
    protected galleryComponent:GalleryComponent       = new GalleryComponent();
    public _allProducts:Array<Object>                 = [];
    public loading:boolean                            = true;
    public _prod:any                                  = [];
    // public _prod:any                                  = [{
//         idParentUser: "VZSF3jW5Nmk3j9oeJo9B",
//         idProduct: 1553715406610,
//         prodColors: ["#000000", "#008080", "#808000"],
//         prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=dda95e5c-3c16-42e4-b892-c948f4edc669"],
//         prodName: "Circle 1",
//         prodPrice: 2000,
//         prodSale: 10,
//         prodSize: 2.3,
//         prodType: "Jewellery",
//         prodUsed: "notused",
//         prodWeight: 10,
//         raiting: {VZSF3jW5Nmk3j9oeJo9B: 4, VZSF3jW5Nmk3j9oeJo9B33: 5, VZSF3jW5Nmk3j9oeJo9B4: 5, VZSF3jW5Nmk3j9oeJo9f: 2, w0cI9uMf4lb4WYQEBlMV: 2},
//     },{
//         idParentUser: "VZSF3jW5Nmk3j9oeJo9B",
//         idProduct: 1553715504871,
//         prodColors: ["#FF0000", "#808080", "#800080", "#8B0000"],
//         prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=8a53019f-4c3c-44f6-916d-df9d6b761c2a", "https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=a096d9a7-fd17-4e46-a4dc-42b2297282b3"],
//         prodName: "Jacket",
//         prodPrice: 23,
//         prodSale: null,
//         prodSize: 23.4,
//         prodType: "Dresses",
//         prodUsed: "used",
//         prodWeight: null,
//         raiting: {w0cI9uMf4lb4WYQEBlMV: 1},
//     },{
//         idParentUser: "VZSF3jW5Nmk3j9oeJo9B",
//         idProduct: 1553715580356,
//         prodColors: [],
//         prodImgs: [],
//         prodName: "Kalgulyator",
//         prodPrice: 200,
//         prodSale: null,
//         prodSize: null,
//         prodType: "Motors",
//         prodUsed: "notused",
//         prodWeight: null,
//         raiting: {w0cI9uMf4lb4WYQEBlMV: 4},
//     }, {
//         idParentUser: "VZSF3jW5Nmk3j9oeJo9B",
//         idProduct: 1553715908534,
//         prodColors: ["#808000"],
//         prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=a6351a80-3bbd-492b-a451-31daba24c5a8"],
//         prodName: "Chair",
//         prodPrice: 24,
//         prodSale: null,
//         prodSize: null,
//         prodType: "For Home",
//         prodUsed: "notused",
//         prodWeight: null,
//         raiting: {w0cI9uMf4lb4WYQEBlMV: 2},
//     }, {
//         idParentUser: "ut6iX7RvkwSRkjBFbrZC",
//         idProduct: 1554024861458,
//         prodColors: [],
//         prodImgs: [],
//         prodName: "assd",
//         prodPrice: 11,
//         prodSale: null,
//         prodSize: null,
//         prodType: "Motors",
//         prodUsed: "notused",
//         prodWeight: null,
//         raiting: {ut6iX7RvkwSRkjBFbrZC: 2, ut6iX7RvkwSRkjBFbrZC3: 5, w0cI9uMf4lb4WYQEBlMV: 2},
//     }, {
//         idParentUser: "ut6iX7RvkwSRkjBFbrZC",
//         idProduct: 1555231857615,
//         prodColors: ["#FF0000", "#00FF00"],
//         prodDesc: "lorem",
//         prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=ab1b5d66-cb2e-47eb-842c-f6986627f922"],
//         prodName: "hasgdjsahgd",
//         prodPrice: 2333,
//         prodSale: 23,
//         prodSize: 45,
//         prodType: "Shoes",
//         prodUsed: "notused",
//         prodWeight: null,
//         raiting: {},
//     }, {
//         idParentUser: "w0cI9uMf4lb4WYQEBlMV",
//         idProduct: 1553200842504,
//         prodColors:  ["#F2AD10", "#FB88B3"],
//         prodImgs:  ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=5f97c3a6-4d95-4730-8e62-b5b58bdd4149", "https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=90946c6c-5218-4d97-a9f7-3248f609486f"],
//         prodName: "Xol",
//         prodPrice: 23,
//         prodSale: 23,
//         prodSize: null,
//         prodType: "For Home",
//         prodUsed: "notused",
//         prodWeight: null,
//         raiting: {},
//     }, {
//         idParentUser: "w0cI9uMf4lb4WYQEBlMV",
//         idProduct: 1553632520806,
//         prodColors:  ["#B192DE", "#45F77D"],
//         prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=ca9f78c3-b849-4250-8e23-608a998d190a"],
//         prodName: "prod",
//         prodPrice: 1300,
//         prodSale: 0,
//         prodSize: null,
//         prodType: "Shoes",
//         prodUsed: "notused",
//         prodWeight: null,
//         raiting: {w0cI9uMf4lb4WYQEBlMV: 2},
//     }, {
//         idParentUser: "w0cI9uMf4lb4WYQEBlMV",
//         idProduct: 1553712994191,
//         prodColors: ["#C7BF93", "#63AADB"],
//         prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=bfedec3f-4781-4d27-9287-e1e1443553ce"],
//         prodName: "Computer 1",
//         prodPrice: 1200,
//         prodSale: 12,
//         prodSize: null,
//         prodType: "Shoes",
//         prodUsed: "notused",
//         prodWeight: null,
//         raiting: {w0cI9uMf4lb4WYQEBlMV: 1, w0cI9uMf4lb4WYQEBlMVtt: 4},
//     }, {
//         idParentUser: "w0cI9uMf4lb4WYQEBlMV",
//         idProduct: 1553713258381,
//         prodColors:  ["#3ECC31", "#A6FC09"],
//         prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=d882f92e-a39d-431b-aff9-20c16ea26f5a"],
//         prodName: "Scanner 1",
//         prodPrice: 1400,
//         prodSale: 10,
//         prodSize: null,
//         prodType: "Electronics",
//         prodUsed: "notused",
//         prodWeight: null,
//         raiting: {},
//     }, {
//         idParentUser: "w0cI9uMf4lb4WYQEBlMV",
//         idProduct: 1553713492901,
//         prodColors: ["#170335", "#089F86"],
//         prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=7565ee6b-8384-4b1c-9d3c-09608d08e9d8"],
//         prodName: "Shoes 1",
//         prodPrice: 200,
//         prodSale: 0,
//         prodSize: 40,
//         prodType: "Shoes",
//         prodUsed: "notused",
//         prodWeight: null,
//         raiting: {},
//     }, {
//         idParentUser: "w0cI9uMf4lb4WYQEBlMV",
//         idProduct: 1553713553844,
//         prodColors: ["#C2C400", "#AFCF31"],
//         prodImgs: ["https://firebasestorage.googleapis.com/v0/b/fram-s…=media&token=cbc4c285-8339-4c8d-8ea3-cd03670dc9f9"],
//         prodName: "Shoes 2",
//         prodPrice: 230,
//         prodSale: 2,
//         prodSize: 30,
//         prodType: "Shoes",
//         prodUsed: "used",
//         prodWeight: null,
//         raiting: {w0cI9uMf4lb4WYQEBlMV: 3},
//     }, {
//         idParentUser: "w0cI9uMf4lb4WYQEBlMV",
//         idProduct: 1553714851587,
//         prodColors:  ["#FFFF00", "#800000", "#808000"],
//         prodImgs: [],
//         prodName: "Motor 1",
//         prodPrice: 1000,
//         prodSale: 2,
//         prodSize: null,
//         prodType: "Shoes",
//         prodUsed: "used",
//         prodWeight: null,
//         raiting: {},
//     }, {
//         idParentUser: "w0cI9uMf4lb4WYQEBlMV", 
//         idProduct: 1553714881664, 
//         prodColors: ["#FF0000", "#00FF00", "#00FFFF"], 
//         prodImgs: [], 
//         prodName: "Xol 2", 
//         prodPrice: 390, 
//         prodSale: null, 
//         prodSize: null, 
//         prodType: "For Home", 
//         prodUsed: "used", 
//         prodWeight: null, 
//         raiting: {}, 
//     }, {
//         idParentUser: "w0cI9uMf4lb4WYQEBlMV", 
//         idProduct: 1554055784891, 
//         prodColors: [], 
//         prodDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nulla metus. Maecenas commodo turpis dui, porttitor tincidunt enim mollis a. Curabitur eu velit mi. Nullam congue turpis id metus sollicitudin, id cursus nulla laoreet. Proin commodo eu felis at malesuada. Nulla ac facilisis justo, eget vulputate ex. Nulla nec laoreet nulla. Cras auctor leo at diam congue, quis convallis urna pulvinar. Nunc ut mi nulla. Nunc ligula massa, vulputate sed scelerisque sit amet, dapibus semper est. Sed sed blandit turpis. Vestibulum id porttitor ligula, at iaculis ligula. Pellentesque vel tellus sit amet mauris aliquet bibendum id et lorem.", 
//         prodImgs: [], 
//         prodName: "Akumlyatr", 
//         prodPrice: 12, 
//         prodSale: null, 
//         prodSize: null, 
//         prodType: "Motors", 
//         prodUsed: "used", 
//         prodWeight: null, 
//         raiting: {w0cI9uMf4lb4WYQEBlMV: 4}
//     }
// ] 
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
    private sortBy:string                             = ''
    constructor(
        private _store: Store<AppState>,
        private _shopData:ShopService,
        private _router:Router,
        private _activeRouter:ActivatedRoute,
        private _authServ: AuthServiceService,
        ) { 
            let _unsub = this._store.pipe(select('_methods')).subscribe(res=>{
                if(res.products){
                    this.sortBy = res.sortBy 
                    let priceFilter = res.shopContentMinAndMax
                    let _getProds = []
                    Array.prototype.map.call(res.products, elem => {
                        _getProds.push(...elem.myProduct)
                    });
                    this._showBadges = +res.showBadges
                    if(_unsub){
                        callProds(_getProds, this, this.sortBy, priceFilter)
                        this._router.events.subscribe((ev) => {
                            if (ev instanceof NavigationEnd) {
                                callProds(_getProds, this, this.sortBy, priceFilter)
                            }
                        })
                        // _unsub.unsubscribe()
                    }
                    this.loading = false
                }
            });
            function callProds (_getProds, th, sortBy, objMaxAndMinVal:objMaxAndMinVal) {
                th._filteredArr = []
                th._pagination = 1
                th._potokProductIndexStart = 0
                th._disabledPagePrev = true
                th._ProductFilters['fragment'] = th._activeRouter.root.fragment['value'];
                objMaxAndMinVal.max = (!objMaxAndMinVal.max && objMaxAndMinVal.max !== 0) ? Infinity : objMaxAndMinVal.max;
                objMaxAndMinVal.min = (!objMaxAndMinVal.min) ? 0 : objMaxAndMinVal.min;
                [].slice.call(_getProds).forEach(element => {
                    if(
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
