import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import * as Actions from '../../store/actions/methods.actions'
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app.state'
import { ShopService } from '../../services/shop.service'
@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    public dataCart:{
        image?:string,
        name?:string,
        priceLatest?:string | number,
        prodCount?:number
    }                                    = {};
    public pageinationCount:number       = 5;
    public totalPrices?:number           = 0; 
    public pageItemsEnd:number           = this.pageinationCount;
    public countPageinationLength:number = 0;
    public _currentUserID:string         = '';
    constructor(
        private _authServ: AuthServiceService,
        private _store: Store<AppState>,
        public _shopServ:ShopService
    ) {
        let _unsub = this._store.pipe(select('_methods')).subscribe(res=>{
            if(res.cartItems){
                this.dataCart = res.cartItems;
                this.totalPrice()
                this.countPageinationLength = Math.ceil(Object.keys(this.dataCart).length/this.pageinationCount);
                // _unsub.unsubscribe()
            }
        });
    }
    protected totalPrice(){
        this.totalPrices = 0;
        for (let i in this.dataCart){
            this.totalPrices += Number(Math.round(this.dataCart[i]['priceLatest'])* this.dataCart[i]['prodCount'])
        }
    }
    @ViewChild('pageElement') pageElement:ElementRef;
    
    ngOnInit() {
        this._authServ.__getCurrentUser()
        .subscribe(res => {
            if(res['id']){
                this._currentUserID = res['id']
                if(res['myCart'])
                this._store.dispatch(new Actions.GetAllCartItems(res['myCart']))
            }
        })
    }
    pageClick(index:number){
        Array.prototype.map.call(this.pageElement.nativeElement.children, (elem:HTMLElement)=>{
            elem.classList.remove('activePage')
        })
        this.pageElement.nativeElement.children[index].classList.add('activePage');
        this.pageItemsEnd=((index+1)*this.pageinationCount);
        setTimeout(()=>{
            window.scrollTo({
                top:(document.querySelector("#tableCart") as HTMLElement).getBoundingClientRect().top,
                behavior: "smooth"
            });
        }, 200)
    }
    __minusCartItem(_prodCount:number, _key:string){
        if(_prodCount > 1){
            this.dataCart[_key].prodCount--;
            this._store.dispatch(new Actions.MinusCartItem({_itemKey:_key, _userID:this._currentUserID, _type:'minus'}))
        }
    }
    __plusCartItem(_prodCount:number, _key:string){
        if(_prodCount < 5){
            this.dataCart[_key].prodCount++;
            this._store.dispatch(new Actions.PlusCartItem({_itemKey:_key, _userID:this._currentUserID, _type:'plus'}))
        }
        else{
            this._store.dispatch(new Actions.FlashMessage({message:"You can't add more then 5 item", timeout:2500, classType:'dangerFlash'}))
        }
    }
     __deleteItem(item, index){
        if(this._currentUserID){
            this._store.dispatch(new Actions.DeleteItemInCart({_userID:this._currentUserID, _itemKey:item}))
            let _unsub = this._store.pipe(select('_methods')).subscribe(res=>{
                if(Object.keys(res.cartItems).length){
                    this.countPageinationLength = Math.ceil(Object.keys(this.dataCart).length/this.pageinationCount);
                    if(Object.keys(this.dataCart).length == this.pageItemsEnd-this.pageinationCount && Object.keys(this.dataCart).length> 0){
                        this.pageItemsEnd = this.pageItemsEnd-this.pageinationCount;
                        this.pageElement.nativeElement.children[(this.pageItemsEnd/this.pageinationCount)-1].classList.add('activePage');
                    }
                    this.totalPrice()
                    // _unsub.unsubscribe()
                }
            })
        }
    }
    deleteAllItems(){
        this._shopServ.__deleteCartItems(this._currentUserID).subscribe(res=>{
            this._store.dispatch(new Actions.FlashMessage({message:"Your cart is empty", timeout:2500, classType:'successFlash'}))
            this._store.dispatch(new Actions.ClearCart({}))
            this.countPageinationLength = 0;
            this.totalPrices = 0;
        })
    }

}