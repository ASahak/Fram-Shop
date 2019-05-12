import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import * as Actions from '../../../store/actions/methods.actions'
import { Router, ActivatedRoute, NavigationEnd, NavigationStart} from '@angular/router';
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
    _txtDefault:string; 
    countBadgesVal:number | string = '12';
    constructor(
        private _store: Store<AppState>,
        private _router:Router,
        private _activeRouter:ActivatedRoute,
    ) {
         this._router.events.subscribe( (event) => {
            if (event instanceof NavigationEnd) {
                if(this._activeRouter.snapshot.queryParams['token']){
                    this.sortTxt = this._txtDefault
                    this._store.dispatch(new Actions.SortBy('default'))
                    this.countBadgesVal = '12'
                    this._store.dispatch(new Actions.ProductsBadgeCount(this.countBadgesVal))   
                }
            }
        })
        this._store.dispatch(new Actions.ProductsBadgeCount(this.countBadgesVal))
    }
    @Input('loginedUser') loginedUser:boolean;
    ngOnInit() {
        setTimeout(()=>{
            this._txtDefault = this.sortText.nativeElement.innerHTML;
            this.sortTxt = this.sortText.nativeElement.innerHTML;
            this._store.dispatch(new Actions.SortBy('default'))
        }, 100)
    }
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
