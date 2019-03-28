import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { dataGallery } from '../../models/models';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    host: {
        '(window:resize)': 'resizeGallery($event)',
    }
})
export class GalleryComponent implements OnInit {

    public categoriesProducts:Array<String> = [];
    public preloader:boolean                = true;
    private topActiveItem:number            = 10;
    private heightActiveItem:number         = 0;
    public dataGallery                      = <dataGallery>[];
    public itemHeight:number                = 0;
    public itemCount:number                 = 0;
    public rowItemCount:number              = 1;
    public rowCount:number                  = 0;
    public fancyShow:boolean                = false;
    public rowItemWidth:string              = "100%";
    public fancyArray:String[]              = [];
    public fancySliderNumbers:Object        = {};
    public fancySliderTransform:number      = null;
    public fancyPreloader:boolean           = false;
    protected findActive(ul, index){
        Array.prototype.map.call(ul.children, (element:HTMLElement)=>{
            if(element.children[0].classList.contains('active_categ')){
                element.children[0].classList.remove('active_categ');
            }
        })
        ul.children[index].children[0].classList.add('active_categ')
    }
    protected getWindowWidth(){
        if(window.matchMedia('(min-width:991px)').matches){
            this.rowItemCount = 4;
        }
        if(window.matchMedia('(max-width:991px) and (min-width:767px)').matches){
            this.rowItemCount = 3;
        }
        if(window.matchMedia('(max-width:767px) and (min-width:576px)').matches){
            this.rowItemCount = 2;
        }
        if(window.matchMedia('(max-width:576px)').matches){
            this.rowItemCount = 1;
        }
        this.rowItemWidth = this.imagesParent.nativeElement.getBoundingClientRect().width/this.rowItemCount+"px";
        Array.prototype.map.call(this.imagesParent.nativeElement.children, (elem:Element)=>{
            if((elem as HTMLElement).classList.contains('activeIzotope')){
                this.itemHeight = (elem.children[0] as HTMLElement).getBoundingClientRect().height+15;
            }
            (elem as HTMLElement).style.width = this.rowItemWidth;
            (elem as HTMLElement).style.height = (elem.children[0] as HTMLElement).getBoundingClientRect().height +15+'px';
        });
        this.imagesParent.nativeElement.style.minHeight = Math.ceil(this.itemCount/this.rowItemCount)*this.itemHeight+50 +'px';
    }
    protected windowNoScroll(fancyShow){
        if(fancyShow){
            document.querySelector("body").style.overflow = "hidden";
        }
        else{
            document.querySelector("body").style.overflow = "auto";
        }
    }
 
    public findElement(parentElement, findElem) {
        let _parent = parentElement,
            _childArr = [];
        function recursionFind(parent) {
            if (parent.children) {
                for (let i = 0; i < parent.children.length; i++) {
                    if (parent.children[i].classList.contains(findElem)
                        || parent.children[i].tagName == findElem.toUpperCase()
                        || parent.children[i].getAttribute('id') == findElem) {
                        _childArr.push(parent.children[i])
                    }
                    else {
                        recursionFind(parent.children[i])
                    }
                }
            }
        }
        recursionFind(_parent)
        return _childArr;
    }
    constructor() { 
        this.categoriesProducts = ['All', 'Jewellery', "Shoes", 'For Home', 'Dresses', 'Motors', 'Electronics'];
        this.dataGallery = <dataGallery>[
            {imgUrl:'kind1.1.jpg', dataType:"Jewellery"},
            {imgUrl:'kind1.2.jpg', dataType:"Jewellery"},
            {imgUrl:'kind1.3.jpg', dataType:"Jewellery"},
            {imgUrl:'kind1.4.jpg', dataType:"Jewellery"},
            {imgUrl:'kind1.5.jpg', dataType:"Jewellery"},
            {imgUrl:'kind1.6.jpg', dataType:"Jewellery"},
            {imgUrl:'kind2.1.jpg', dataType:"Shoes"},
            {imgUrl:'kind2.2.jpg', dataType:"Shoes"},
            {imgUrl:'kind2.3.jpg', dataType:"Shoes"},
            {imgUrl:'kind2.4.jpg', dataType:"Shoes"},
            {imgUrl:'kind2.5.jpg', dataType:"Shoes"},
            {imgUrl:'kind2.6.jpg', dataType:"Shoes"},
            {imgUrl:'kind3.1.jpg', dataType:"For Home"},
            {imgUrl:'kind3.2.jpg', dataType:"For Home"},
            {imgUrl:'kind3.3.jpg', dataType:"For Home"},
            {imgUrl:'kind3.4.jpg', dataType:"For Home"},
            {imgUrl:'kind3.5.jpg', dataType:"For Home"},
            {imgUrl:'kind3.6.jpg', dataType:"For Home"},
            {imgUrl:'kind4.1.jpg', dataType:"Dresses"},
            {imgUrl:'kind4.2.jpg', dataType:"Dresses"},
            {imgUrl:'kind4.3.jpg', dataType:"Dresses"},
            {imgUrl:'kind4.4.jpg', dataType:"Dresses"},
            {imgUrl:'kind4.5.jpg', dataType:"Dresses"},
            {imgUrl:'kind4.6.jpg', dataType:"Dresses"},
            {imgUrl:'kind5.1.jpg', dataType:"Motors"},
            {imgUrl:'kind5.2.jpg', dataType:"Motors"},
            {imgUrl:'kind5.3.jpg', dataType:"Motors"},
            {imgUrl:'kind5.4.jpg', dataType:"Motors"},
            {imgUrl:'kind5.5.jpg', dataType:"Motors"},
            {imgUrl:'kind5.6.jpg', dataType:"Motors"},
            {imgUrl:'kind6.1.jpg', dataType:"Electronics"},
            {imgUrl:'kind6.2.jpg', dataType:"Electronics"},
            {imgUrl:'kind6.3.png', dataType:"Electronics"},
            {imgUrl:'kind6.4.jpg', dataType:"Electronics"},
            {imgUrl:'kind6.5.png', dataType:"Electronics"},
            {imgUrl:'kind6.6.jpg', dataType:"Electronics"},
        ]
    }
    @ViewChild('mainCatgories') mnCategories:ElementRef;
    @ViewChild('imagesParent') imagesParent:ElementRef;
    @HostListener('window:resize', ['$event'])
    resizeGallery(event:Event){
        this.getWindowWidth()
    }
    ngOnInit() {
        setTimeout(()=>{
            this.heightActiveItem = this.mnCategories.nativeElement.children[0].getBoundingClientRect().height;
            this.mnCategories.nativeElement.style.setProperty('--heightActive', this.heightActiveItem+'px')
            this.mnCategories.nativeElement.style.setProperty('--topActive', this.topActiveItem+'px');
            this.getWindowWidth();
        },  10);
    }
    
    // img loading
    onLoad() {
        setTimeout(()=>{
            Array.prototype.map.call(this.imagesParent.nativeElement.children, (elem:Element)=>{
                this.itemHeight = (elem.children[0] as HTMLElement).getBoundingClientRect().height+15;
                (elem as HTMLElement).style.height = this.itemHeight+"px";
            })
        }, 10)
        this.preloader = false;
    }
    // ______________________

    // after transfer active Categorie
    activeTransfer(evt:KeyboardEvent, index:number, item:string){
        this.itemCount = 0;
        this.getWindowWidth();
        let arrClass= ['activeIzotope', 'disactiveIzotope'];
        Array.prototype.map.call(this.imagesParent.nativeElement.children, (elem:Element)=>{
            elem.classList.remove(...arrClass)
            if(item  != "All"){
                if(elem.children[0].hasAttribute('data-type') && elem.children[0].getAttribute('data-type')==item){
                    elem.classList.add('activeIzotope');
                    (elem as HTMLElement).style.height = this.itemHeight +'px'; 
                    this.itemCount++;
                }
                else{
                    (elem as HTMLElement).style.height = 0+'px'; 
                    elem.classList.add('disactiveIzotope')
                }
            }
            else{
                (elem as HTMLElement).style.height = this.itemHeight +'px';
            }
        })
        this.imagesParent.nativeElement.style.minHeight = Math.ceil(this.itemCount/this.rowItemCount)*this.itemHeight+50 +'px';
        this.findActive(this.mnCategories.nativeElement, index);
        this.topActiveItem = 0;
        this.heightActiveItem = (<HTMLElement>evt.target).getBoundingClientRect().height;
        for(let i =0; i < index; i++){
            this.topActiveItem+=this.mnCategories.nativeElement.children[i].getBoundingClientRect().height;
        }
        this.mnCategories.nativeElement.style.setProperty('--topActive', (this.topActiveItem+10)+'px')
        this.mnCategories.nativeElement.style.setProperty('--heightActive', (this.heightActiveItem)+'px')
    }
    // __________________

    startFancy(img){
        this.fancyArray = [];
        this.fancyShow = true;   
        this.windowNoScroll(this.fancyShow);
        if(document.querySelector(".activeIzotope")){
            document.querySelectorAll(".activeIzotope").forEach((element:HTMLElement)=>{
                this.fancyArray.push(this.findElement(element, 'img')[0].getAttribute("src"))
            })
        }
        else{
            Array.prototype.map.call(this.imagesParent.nativeElement.children, (element:HTMLElement)=>{
                this.fancyArray.push(this.findElement(element, 'img')[0].getAttribute("src"))
            })
        }
        let currectImgSrc = this.findElement(event.currentTarget, 'img')[0].getAttribute("src");
        for(let i =0; i< this.fancyArray.length; i++){
            if(this.fancyArray[i] == currectImgSrc){
                Object.assign(this.fancySliderNumbers, {
                    start:i+1,
                    end:this.fancyArray.length
                })
            }
        }
        setTimeout(()=>{
            this.fancySliderTransform = 0;
            this.fancyPreloader = true;
            setTimeout(()=>{
                for(let i =1; i < this.fancySliderNumbers['start']; i++){
                    this.fancySliderTransform-=document.querySelector('.slideFancyImages').children[i].getBoundingClientRect().width+20;
                }
                document.querySelector('.slideFancyImages').children[this.fancySliderNumbers['start']-1].classList.add('activeFancy')
            }, 10)
        }, 300)
    }
    fancySlideLeft(){
        if(this.fancySliderNumbers['start'] > 1){
            this.fancySliderNumbers['start']--;
            document.querySelector('.activeFancy').classList.remove('activeFancy')
            this.fancySliderTransform+=document.querySelector('.slideFancyImages').children[this.fancySliderNumbers['start']-1].getBoundingClientRect().width+20;
            document.querySelector('.slideFancyImages').children[this.fancySliderNumbers['start']-1].classList.add('activeFancy')
        }
    }
    fancySlideRight(){
        if(this.fancySliderNumbers['start'] < this.fancyArray.length){
            this.fancySliderNumbers['start']++;
            document.querySelector('.activeFancy').classList.remove('activeFancy')
            this.fancySliderTransform-=document.querySelector('.slideFancyImages').children[this.fancySliderNumbers['start']-1].getBoundingClientRect().width+20;
            document.querySelector('.slideFancyImages').children[this.fancySliderNumbers['start']-1].classList.add('activeFancy')
        }
    }
    hideFancy(event){
            if(!event.srcElement.closest('.slideFancyImages') && !event.srcElement.closest('.topPanel') && !event.srcElement.closest('.img-fluid')){
            this.fancyShow = false;
            this.fancyPreloader = false;   
            this.windowNoScroll(this.fancyShow)
        }
    }
    closeFancy(){
        this.fancyShow = false;
        this.fancyPreloader = false;   
        this.windowNoScroll(this.fancyShow)
    }
}
