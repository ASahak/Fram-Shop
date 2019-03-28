import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    public toastShow:{} = {};
    public resetForm ={
        emailReset:'',
        passwordReset:''
    }
    constructor(private _authServ:AuthServiceService) { }

    ngOnInit() {
    }
    resetPassSubmit({value}){
        Object.assign(this.toastShow, {
            top:'20px',
            opacity:'1'
        })
        setTimeout(()=>{
            Object.assign(this.toastShow, {
                opacity:'0'
            })
        }, 4000)
        this._authServ.__updatePassword(/* this.userDocID */ value.emailReset)
    }
}
