import { Component, OnInit, Input } from '@angular/core';
import { AuthServiceService } from '../../../services/auth-service.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
interface changePassword {
    newPassword:string;
    repeatPassword:string;
    oldPassword:string;
}
@Component({
    selector: 'app-account-settings',
    templateUrl: './account-settings.component.html',
    styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
    public userDocID:string          = "";
    public deletePassword:string     = "";
    public passRequiredMSG:string    = " ";
    public newPassword:string        = "";
    public repeatPassword:string     = "";
    public oldPassword:string        = "";
    public currecntPassMSG:boolean   = true;
    public isSamePassMSG:boolean     = true;
    public isEmptyPassMSG:boolean    = false;
    public isEmptyOldPassMSG:boolean = false;
    public showRegFormPassLargeThenSix:boolean = true;
    public wrongPassDelMSG:boolean   = true;
    public userData = {
        password: '',
    };
    constructor(
        private _authServ:AuthServiceService,
        private _router: Router,
        private _route: ActivatedRoute
        ) { 
            
    }
    @Input ('_transfer_password') _transfer_password:string;
    ngOnInit() {
        this.userDocID = this._route.snapshot.params['id'];
    }
    deleteAccount(){
        if(this.deletePassword == ""){
            this.passRequiredMSG = this.deletePassword; 
        }
        else{
            if(this.wrongPassDelMSG){
                this._authServ.__deleteUser(this.userDocID, this._transfer_password)
            }
        }
    }
    updatePassword({value}:{value:changePassword}){
        this._authServ.__updatePassword(/* this.userDocID */ null)
    }
    deleteInputPass(){
        this.wrongPassDelMSG = (this.deletePassword == this._transfer_password || this.deletePassword == '')?true:false;
        this.passRequiredMSG = this.deletePassword;
    }
    /* 
    newPassAndIsSameConfirm(){
        this.showRegFormPassLargeThenSix = (this.newPassword.length < 6 && this.newPassword.length != 0)?false:true
        this.isSamePassMSG = (this.newPassword == this.repeatPassword || this.repeatPassword == '')?true:false;
    }
    repeatPassInput(){
        this.isSamePassMSG = (this.newPassword == this.repeatPassword || this.repeatPassword == '')?true:false;
        this.isEmptyPassMSG = (this.repeatPassword == '')?true:false;
    }
    
    oldPassInput(){
        this.currecntPassMSG = (this.oldPassword == this._transfer_password || this.oldPassword == '')?true:false;
        this.isEmptyOldPassMSG = (this.oldPassword == '')?true:false;
    } */
}
