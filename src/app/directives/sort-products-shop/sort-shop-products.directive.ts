import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
    selector: '[appSortShopProducts]',
    host: {
        '(window:click)': 'hideSortList($event)',
    }
})
export class SortShopProductsDirective {
    public isOpenSort:boolean = false;
    nextElement:HTMLElement;
    constructor(private elem: ElementRef, private renderer:Renderer) {
        
    }
    @HostListener("click") passData(){
        this.nextElement = this.elem.nativeElement.nextElementSibling;
        this.isOpenSort = !this.isOpenSort;
        if(this.isOpenSort){
            this.renderer.setElementClass(this.nextElement, "showSortList", true);
        }
        else{
            this.renderer.setElementClass(this.nextElement, "showSortList", false);
        }
    }
    @HostListener('window:click', ['$event'])
    hideSortList(e:KeyboardEvent){
        if(!(e.target as HTMLElement).closest('.sort_by_button') && this.nextElement){
            this.isOpenSort = false;
            this.renderer.setElementClass(this.nextElement, "showSortList", false);
        }
    }

}
