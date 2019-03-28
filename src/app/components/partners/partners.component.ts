import { Component, OnInit } from '@angular/core';
import { partners } from '../../models/models';
@Component({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
    public partnersData = <partners> [{}];
    constructor () { 
        this.partnersData = <partners> [
            {img:"partner1", companyName:"Partner 1", description:"Partner 1 description"},
            {img:"partner2", companyName:"Partner 2", description:"Partner 2 description"},
            {img:"partner3", companyName:"Partner 3", description:"Partner 3 description"},
            {img:"partner4", companyName:"Partner 4", description:"Partner 4 description"},
            {img:"partner5", companyName:"Partner 5", description:"Partner 5 description"},
            {img:"partner6", companyName:"Partner 6", description:"Partner 6 description"},
            {img:"partner7", companyName:"Partner 7", description:"Partner 7 description"},
            {img:"partner8", companyName:"Partner 8", description:"Partner 8 description"},
            {img:"partner9", companyName:"Partner 9", description:"Partner 9 description"},
            {img:"partner10", companyName:"Partner 10", description:"Partner 10 description"},
            {img:"partner11", companyName:"Partner 11", description:"Partner 11 description"},
            {img:"partner12", companyName:"Partner 12", description:"Partner 12 description"},
            {img:"partner13", companyName:"Partner 13", description:"Partner 13 description"}
        ];
    }
    
    ngOnInit() {
    }

}
