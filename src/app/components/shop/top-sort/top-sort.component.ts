import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import * as Actions from '../../../store/actions/methods.actions'
import { AppState } from '../../../store/app.state'
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-top-sort',
    templateUrl: './top-sort.component.html',
    styleUrls: ['./top-sort.component.scss']
})
export class TopSortComponent implements OnInit {
    @ViewChild('sortDefault') sortText:ElementRef;
    public sortTxt:string; 
    countBadgesVal:number | string = '12';
    constructor(
        private _store: Store<AppState>
    ) { 
        this._store.dispatch(new Actions.ProductsBadgeCount(this.countBadgesVal))
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
        this._store.dispatch(new Actions.SortBy(sortBy))
        this.sortTxt = (e.target as HTMLElement).innerText;
    }
    countBadges(count:number | string, e:KeyboardEvent){
        this.countBadgesVal = count; 
        this._store.dispatch(new Actions.ProductsBadgeCount(this.countBadgesVal))
    }
}
