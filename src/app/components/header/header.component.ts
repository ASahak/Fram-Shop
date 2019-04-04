import { Component, OnInit, OnDestroy, HostListener, ElementRef, ViewChild, ContentChild, AfterContentInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { CreateUser } from '../../models/models';
import * as Actions from '../../store/actions/methods.actions'
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/app.state'
/* import * as Actions from '../../store/actions/todo.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs'; */
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute} from '@angular/router';
import { takeUntil } from 'rxjs/operators';
/* interface Todo {
    name: ;
    age:number;
    birthday:string;
}
interface AppState {
    userTodo:Todo
} */
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    host: {
        '(document:click)': 'hideDropdowns($event)',
        '(window:scroll)': 'headerFixed($event)',
    }
})
export class HeaderComponent implements OnInit, OnDestroy {
    name:string;
    /* public user:Todo = {
        name:"",
        age:null,
        birthday:''
    } */
    public userData:CreateUser = {
        id:'',
        firstName: '',
        lastName: '',
        emailTrue: '',
        password: '',
        confirmPass: '',
        publication:null
    };
    public selectLanguage: boolean  = true;
    public userWrap: boolean        = true;
    public toggleNavBar: boolean    = false;
    protected heightNavBar:number   = 0;
    protected heghtSub:number       = 0;
    public showList:boolean         = false;
    public topHide:boolean          = false;
    private topPanelHeight:number   = 0;
    private headerHeight:number     = 0;
    public isLogin:boolean          = true;
    public langIMG:string           = './assets/img/flag1.png';
    public langTXT:string           = "English";
    private showLoginForm:boolean   = false;
    private showRegForm:boolean     = false;
    public isClickedLogin:boolean   = false;
    private _loginSubscription: Subscription;
    // userTodo:Observable<Todo>;
    // constructor(public store:Store<AppState>) {
        // this.userTodo = this.store.select('userTodo');
    constructor(
        private translate: TranslateService,
        public authServ: AuthServiceService,
        private _store: Store<AppState>,
        ) {
        translate.setDefaultLang('en');
        // this.auth.__FlashMessage("eeee")
        
    }
    
    
    /* chenageUser(){
        [
            new Actions.NAME(this.user.name),
            new Actions.AGE(this.user.age),
            new Actions.BIRTHDAY(this.user.birthday)
        ].forEach((item)=>{
            this.store.dispatch(item);
        })
        this.user ={
            name:"",
            age:null,
            birthday:null
        }
    } */
    protected hideMobileMenu(){
        this.toggleNavBar = false;
        this.heightNavBar = 0;
        this.heghtSub = 0;
        this.navBarRef.nativeElement.style.height = this.heightNavBar+"px";
        this.subList.nativeElement.style.height = this.heghtSub+"px";
        
    }
    
    @ViewChild('toggleNavBar') navBarRef:ElementRef;
    @ViewChild('subList') subList:ElementRef;
    @HostListener('window:scroll', ['$event'])
    headerFixed(event){
        if(window.scrollY >= this.topPanelHeight){
            this.topHide = true;
        }
        else{
            this.topHide = false;
        }
    }
    @HostListener('document:click', ['$event'])
    hideDropdowns(event) {
        if (!<HTMLElement>event.target.closest(".changeLangualge")) {
            this.selectLanguage = true;    
        }
        if (!<HTMLElement>event.target.closest(".userOpenButton")) {
            this.userWrap = true;    
        }
        if(<HTMLElement>event.target.closest(".userWrapper") && !<HTMLElement>event.target.closest(".accountWrap")){
            this.userWrap = false;
        }
        if (window.matchMedia("(max-width: 767px)").matches) {
            if(<HTMLElement>event.target.closest(".toggleList") && !<HTMLElement>event.target.closest(".openDropDownList")){
                this.hideMobileMenu()
                setTimeout(()=>{
                    window.scrollTo({
                        top:0,
                        behavior: "smooth"
                    });
                }, 200)
            }
            if(!<HTMLElement>event.target.closest(".togleNavBar") && !<HTMLElement>event.target.closest(".toggleList")){
                this.hideMobileMenu()
            }
        }
        if(<HTMLElement>event.target.closest(".subNavBar") || !<HTMLElement>event.target.closest(".openDropDownList")){
            if (window.matchMedia("(max-width: 767px)").matches) {
                this.heightNavBar-=this.heghtSub;
                this.heghtSub = 0;
                this.subList.nativeElement.style.height = this.heghtSub+"px";
                this.navBarRef.nativeElement.style.height = this.heightNavBar+"px";
            }
            this.showList = false;
            
        }

        // Hide Login Or Register Form 
        if(this.showLoginForm && !<HTMLElement>event.target.closest(".loginForm")){
            this.showLoginForm = false;
            setTimeout(()=>{
                this.isClickedLogin = false
            }, 500)
        }
        if(this.showRegForm && !<HTMLElement>event.target.closest(".goRegister") && !<HTMLElement>event.target.closest(".registerForm")){
            this.showRegForm = false;
            setTimeout(()=>{
                this.isClickedLogin = false
            }, 500)
        }
        // _____________________________
        
    }
    ngOnInit() {
        this.topPanelHeight = document.querySelector(".topPanel").getBoundingClientRect().height;
        this.headerHeight   = document.querySelector("header").getBoundingClientRect().height;
        document.querySelector("body").style.paddingTop =this.headerHeight+"px";
        
        this._loginSubscription = this.authServ.__getAuth().subscribe(res=>{
            this.authServ.__getCurrentUser()
            .subscribe(res=>{
                (this.userData as any) = res;
                var objImg = new Image();
                objImg.src = this.userData['imgAvatar'];
                objImg.onerror = ()=>{
                    this.userData['imgAvatar'] = './assets/img/user.jpg'
                }
            })
            
            this.isLogin = (res)?true:false;
        })
    }
    openCart(){
        if(!this.isLogin){
            this._store.dispatch(new Actions.FlashMessage({message:"You must be Sign In", timeout:2500, classType:'dangerFlash'}))
        }
    }
    signOut(){
        this.authServ.__logOut();
    }
    
    ngOnDestroy(){
        this._loginSubscription.unsubscribe();
    }

    
    selectLang(event: Event) {
        this.selectLanguage = !this.selectLanguage
    }
    switchLanguage(language: string, langFlag:HTMLElement, event:Event) {
        setTimeout(()=>{
            this.langTXT = (event.target as HTMLElement).innerText;
        }, 200)
        this.langIMG = langFlag.getAttribute('src'); 
        this.translate.use(language);
      }
    userOpen(event: Event) {
        this.userWrap = !this.userWrap
    }
    toggleNav(){
        this.heghtSub = 0;
        this.heightNavBar = 0;
        this.toggleNavBar = !this.toggleNavBar;
        if(this.toggleNavBar){
            Array.prototype.map.call(this.navBarRef.nativeElement.children, (elem)=>{
                this.heightNavBar += elem.getBoundingClientRect().height;
            })
        }
        else{
            this.heightNavBar = 0;
        }
        this.navBarRef.nativeElement.style.height = this.heightNavBar+"px" ;
        this.subList.nativeElement.style.height = this.heghtSub+"px";
    }
    showListProducts(){
        this.showList = !this.showList;
        if (window.matchMedia("(max-width: 767px)").matches) {
            if(this.showList){
                Array.prototype.map.call(this.subList.nativeElement.children, (elem)=>{
                    this.heghtSub += elem.getBoundingClientRect().height;
                })
                this.heightNavBar+=this.heghtSub;
            }
            else{
                this.heightNavBar-=this.heghtSub;
                this.heghtSub = 0;
            }
            this.subList.nativeElement.style.height = this.heghtSub+"px";
            this.navBarRef.nativeElement.style.height = this.heightNavBar+"px" 
        }
    }
    passShowLogin(showLogin){
        this.showLoginForm = showLogin; 
        setTimeout(()=>{
            this.isClickedLogin = false
        }, 500)
    }
    passShowReg(showReg){
        this.showRegForm = showReg; 
        setTimeout(()=>{
            this.isClickedLogin = false
        }, 500)
    }
    showLogin(){
        this.isClickedLogin = true;
        setTimeout(()=>{
            this.showLoginForm = true
            this.showRegForm = false;
            (document.querySelector('.goRegister') as HTMLElement).onclick = ()=>{
                this.showLoginForm = false
                this.showRegForm = true;   
            } 
        }, 10);
    }
}
