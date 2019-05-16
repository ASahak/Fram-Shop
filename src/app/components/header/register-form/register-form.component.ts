import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import * as firebase from "firebase/app";
import { AuthServiceService } from "../../../services/auth-service.service";
import { CreateUser } from '../../../models/models';
import * as Actions from '../../../store/actions/methods.actions'
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app.state'

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
    public showRegFormPassNotSame: boolean      = false;
    public showRegFormPassLargeThenSix: boolean = true;
    public loadingGIF:boolean                   = false;
    public regForms:CreateUser[];
    public regForm:CreateUser = {
        id:'',
        firstName: '',
        lastName: '',
        emailTrue: '',
        password: '',
        confirmPass: '',
        publication:null
    }
    constructor(
        private _store: Store<AppState>,
        private authServ:AuthServiceService
    ) { }
    @Input('isShowBoolean') isShowBoolean: boolean;
    @Output('showReg') showReg: EventEmitter<boolean> = new EventEmitter<boolean>();
    ngOnInit() {
    }

    createUser({ value }: { value: CreateUser }) {
        this.loadingGIF = true;
        value.publication = new Date().getTime();
        this.authServ.SignUp(value.emailTrue, value.password, value).then(()=>{
            this.loadingGIF = false;
            this.isShowBoolean = false;
            this.showReg.emit(this.isShowBoolean)
            this._store.dispatch(new Actions.Login(true))
        }).catch(error=>{
            alert(error)
        });
    }
    regPasswordInput(){
        this.showRegFormPassLargeThenSix = 
        (this.regForm.password.length < 6 && this.regForm.password.length != 0)?false:true;
        this.showRegFormPassNotSame = 
        (this.regForm.password != this.regForm.confirmPass && this.regForm.password !='' && this.regForm.confirmPass != '')?true:false;
    }
    confirmRegPasswordInput(){
        this.showRegFormPassNotSame = 
        (this.regForm.password != this.regForm.confirmPass && this.regForm.password !='' && this.regForm.confirmPass != '')?true:false;
    }
}

