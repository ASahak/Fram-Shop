import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthServiceService } from "../../../services/auth-service.service";
import { SignIn } from '../../../models/models';

@Component({ 
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    
})
export class LoginFormComponent implements OnInit {
    public loadingGIF:boolean = false;
    @Input('isShowBoolean') isShowBoolean:boolean;
    @Output('showLogin') showLogin: EventEmitter<boolean> = new EventEmitter<boolean>();
    public logForm:SignIn={
        username:'',
        password:''
    }
    constructor(private authServ:AuthServiceService) { }

    ngOnInit() {
        // this.authServ.__FlashMessage("enter", 2000, 'success')
    }
    signIn({value}:{value: SignIn}){
        this.loadingGIF = true;
        this.authServ.SignIn(value.username, value.password).then((res)=>{
            this.loadingGIF = false;
            this.isShowBoolean = false;
            this.showLogin.emit(this.isShowBoolean)
        }).catch(error=>{
            alert(error)
        });
    }
    __goResetPass(){
        this.isShowBoolean = false;
        this.showLogin.emit(this.isShowBoolean)
    }
    

}
