import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
    selector: 'app-top-sort',
    templateUrl: './top-sort.component.html',
    styleUrls: ['./top-sort.component.scss']
})
export class TopSortComponent implements OnInit {
    @ViewChild('sortDefault') sortText:ElementRef;
    public sortTxt:string; 
    countBadgesVal:number | string = '10';
    constructor(
    ) { 
        
    }
    @Input('loginedUser') loginedUser:boolean;
    ngOnInit() {
        setTimeout(()=>{
            this.sortTxt = this.sortText.nativeElement.innerHTML;
        }, 100)
        
    }
    // ngOnChanges(){
    //     console.log(this.loginedUser)
    // }
    ngDoCheck(){
    }
    sortProducts(sortBy:string, e:KeyboardEvent){ 
        this.sortTxt = (e.target as HTMLElement).innerText;
    }
    countBadges(count:number | string, e:KeyboardEvent){
        this.countBadgesVal = count; 
    }
}
