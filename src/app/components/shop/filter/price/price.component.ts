import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
@Component({
    selector: 'app-price',
    templateUrl: './price.component.html',
    styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

    constructor() { }
    minValue: number = 100;
    maxValue: number = 400;
    options: Options = {
        floor: 0,
        ceil: 500,
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
        console.log(min, max)
    }

}
