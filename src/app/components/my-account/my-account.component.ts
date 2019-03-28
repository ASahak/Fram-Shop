import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { CreateUser } from '../../models/models';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
    selector: 'app-my-account',
    templateUrl: './my-account.component.html',
    styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
    public tabChange:string = 'profileTab';
    public _userPassword:string = '';
    public userData:CreateUser = {
        id:'',
        firstName: '',
        lastName: '',
        emailTrue: '',
        password: '',
        confirmPass: '',
        publication:null
    };
    constructor(private _authServ:AuthServiceService, private _sanitizer:DomSanitizer) { }

    @ViewChild('settings') settings: ElementRef;
    ngOnInit() {
        Array.prototype.forEach.call(this.settings.nativeElement.children, element => {
            element.children[0].onclick = (e:KeyboardEvent) => {
                document.querySelector('.active-setting').classList.remove('active-setting');
                (e.target as HTMLElement).classList.add('active-setting');
                this.tabChange = (e.target as HTMLElement).getAttribute('data-tab');
            }
        });
        this._authServ.__getCurrentUser()
            .subscribe(res=>{
                (this.userData as any) = res;
                this._userPassword = this.userData.password; 
                var objImg = new Image();
                objImg.src = this.userData['imgAvatar'];
                objImg.onerror = ()=>{
                    this.userData['imgAvatar'] = './assets/img/user.jpg'
                }
        })
    }
    __signOut(){
        this._authServ.__logOut();
    }
    __sanitize(_url:string){
        return this._sanitizer.bypassSecurityTrustUrl('mailto:'+_url);
    }

}
