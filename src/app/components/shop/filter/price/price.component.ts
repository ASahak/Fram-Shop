import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Options } from 'ng5-slider';
import * as Actions from '../../../../store/actions/methods.actions'
import { AppState } from '../../../../store/app.state'
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-price',
    templateUrl: './price.component.html',
    styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

    constructor(
        private _store: Store<AppState>,
        public currentRouter:Router,
        private router:ActivatedRoute,
    ) { 
         currentRouter.events.subscribe( (event: Event) => {
            if (event instanceof NavigationEnd) {
                if(router.snapshot.queryParams['token']){
                    this.minValue = 0
                    this.maxValue = 100000
                    this._store.dispatch(new Actions.MinAndMaxFilter({min:this.minValue, max:this.maxValue}))
                }
            }
        })
    }
    minValue: number = 0;
    maxValue: number = 100000;
    options: Options = {
        floor: 0,
        ceil: 100000,
        translate: (value: number): string => {
        return '$' + value;
        },
        combineLabels: (minValue: string, maxValue: string): string => {
        return 'from ' + minValue + ' up to ' + maxValue;
        }
    };
    ngOnInit() {
        this._store.dispatch(new Actions.MinAndMaxFilter({min:this.minValue, max:this.maxValue}))
    }
    getAllValue(min, max){
        this._store.dispatch(new Actions.MinAndMaxFilter({min:min, max:max}))
    }

}
