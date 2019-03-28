import { Component, OnInit, Output, EventEmitter, ɵConsole, ViewChildren, QueryList } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
    public pathOfCategories:string = "";
    public fragment:string;
    public fragmentBilingual:string;
    @ViewChildren('activeCategories') categListItem:QueryList<any>;
    protected setActiveA(){
        if(this.categListItem){
            [].slice.call(this.categListItem['_results']).forEach(elem=>{
                if(elem.nativeElement.getAttribute('data-category') == this.fragment){
                    if(document.querySelector('.active_categories')){
                        (document.querySelector('.active_categories') as HTMLElement).classList.remove('active_categories');
                    }
                    elem.nativeElement.classList.add('active_categories')
                    this.fragmentBilingual =  elem.nativeElement.innerText;
                }
            })
        }
    }
    constructor(private location: Location, private router:ActivatedRoute, public currentRouter:Router) {
            /* currentRouter.events.subscribe( (event: Event) => {
                if (event instanceof NavigationStart) {
                    // Show loading indicator
                }
                if (event instanceof NavigationEnd) {
                    // Hide loading indicator
                    try {
                        // this.changePath.emit(decodeURI(event.url.split("#")[event.url.split("#").length-1].replace(/%20/g, ' ')))
                        setTimeout(()=>{
                            this.changePath.emit(this.fragmentBilingual)
                        }, 10)
                    } catch(e) { // catches a malformed URI
                        console.error(e);
                    }
                }
                if (event instanceof NavigationError) {
                    // Hide loading indicator
                    console.log("error")
                }
            }); */
        
    }
    
    @Output() changePath = new EventEmitter();
    ngOnInit() {
    }
    ngDoCheck(){
        this.fragment = this.router.snapshot.fragment;
        this.setActiveA();
        this.changePath.emit(this.fragmentBilingual)
    }
}
