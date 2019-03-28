import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    public dataCart:{
        img?:string,
        name?:string,
        price?:string | number,
        countProduct?:number
    }[]                                  = [];
    public pageinationCount:number       = 5;
    public totalPrices?:number           = 0; 
    public pageItemsEnd:number           = this.pageinationCount;
    public countPageinationLength:number =0;
    constructor() {
        this.dataCart = [
            {img:'prod1.png', name:'Product 1', price:'200.00', countProduct:1},
            {img:'prod2.png', name:'Product 2', price:'300.00', countProduct:1},
            {img:'prod3.png', name:'Product 3', price:'230.00', countProduct:2},
            {img:'prod4.png', name:'Product 4', price:'340.00', countProduct:1},
            {img:'prod5.png', name:'Product 5', price:'210.00', countProduct:1},
            {img:'prod6.png', name:'Product 6', price:'290.00', countProduct:1},
            {img:'prod1.png', name:'Product 7', price:'200.00', countProduct:1},
            {img:'prod2.png', name:'Product 8', price:'300.00', countProduct:1},
            {img:'prod3.png', name:'Product 9', price:'230.00', countProduct:2},
            {img:'prod4.png', name:'Product 10', price:'340.00', countProduct:1},
            {img:'prod5.png', name:'Product 11', price:'210.00', countProduct:1},
            {img:'prod6.png', name:'Product 12', price:'290.00', countProduct:1}
        ];
        this.countPageinationLength = Math.ceil(this.dataCart.length/this.pageinationCount);
    }
    protected totalPrice(){
        this.totalPrices = 0;
        Array.prototype.map.call(this.dataCart, (elem)=>{
            this.totalPrices += Number(elem.price* elem.countProduct)
        })
    }
    @ViewChild('pageElement') pageElement:ElementRef;
    
    ngOnInit() {
        this.totalPrice()
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
    minusCartItem(event:Event, index:number){
        if(this.dataCart[index].countProduct > 1){
            this.dataCart[index].countProduct--;
        }
        this.totalPrice();
    }
    plusCartItem(event:Event, index:number){
        this.dataCart[index].countProduct++;
        this.totalPrice();
    }
    deleteItem(item, index){
        this.dataCart.splice(index, 1);
        this.countPageinationLength = Math.ceil(this.dataCart.length/this.pageinationCount);
        if(this.dataCart.length == this.pageItemsEnd-this.pageinationCount && this.dataCart.length> 0){
            this.pageItemsEnd = this.pageItemsEnd-this.pageinationCount;
            this.pageElement.nativeElement.children[(this.pageItemsEnd/this.pageinationCount)-1].classList.add('activePage');
        }
        this.totalPrice();
    }
    deleteAllItems(){
        this.countPageinationLength = 0;
        this.dataCart = [];
        this.totalPrices = 0;
    }

}