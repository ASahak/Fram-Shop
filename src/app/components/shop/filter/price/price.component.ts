import { Component, OnInit } from '@angular/core';
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
        private _store: Store<AppState>
    ) { }
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
    }
    getAllValue(min, max){
        this._store.dispatch(new Actions.MinAndMaxFilter({min:min, max:max}))
    }

}
