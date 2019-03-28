import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({
    selector: '[appCountShopBadges]',
    host: {
        '(window:click)': 'hideCountList($event)',
    }
})
export class CountShopBadgesDirective {
    isOpen:boolean = false;
    nextElementCount:HTMLElement;
    constructor(private elem: ElementRef, private rendererCount: Renderer) { }


    @HostListener("click") passDataCount() {
        this.nextElementCount = this.elem.nativeElement.nextElementSibling;
        this.isOpen = !this.isOpen;
        if(this.isOpen){
            this.rendererCount.setElementClass(this.nextElementCount, "showCountList", true);
        }
        else{
            this.rendererCount.setElementClass(this.nextElementCount, "showCountList", false);
        }
    }
    @HostListener('window:click', ['$event'])
    hideCountList(e: KeyboardEvent) {
        if(!(e.target as HTMLElement).closest('.show_count_button') && this.nextElementCount){
            this.isOpen = false;
            this.rendererCount.setElementClass(this.nextElementCount, "showCountList", false);
        }
    }

}
