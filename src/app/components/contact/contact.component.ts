import { Component, OnInit } from '@angular/core';
import * as Actions from '../../store/actions/methods.actions'
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/app.state'
import { Observable } from 'rxjs';
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    private inputFocus:HTMLInputElement;
    constructor(
        private _store: Store<AppState>,
    ) { }
    protected findElement(parentElement, findElem) {
        let _parent   = parentElement,
            _childArr = [];
        function recursionFind(parent) {
            if (parent.children) {
                for (let i = 0; i < parent.children.length; i++) {
                    if (parent.children[i].classList.contains(findElem)
                        || parent.children[i].tagName == findElem.toUpperCase()
                        || parent.children[i].getAttribute('id') == findElem) {
                        _childArr.push(parent.children[i])
                    }
                    else {
                        recursionFind(parent.children[i])
                    }
                }
            }
        }
        recursionFind(_parent)
        return _childArr;
    }

    protected getParent(target, limitParent) {
        limitParent = (limitParent == "") ? document.querySelector("body") : limitParent;
        function conains(_elem, limitParent){
            let result = null;
            result = _elem.className.split(" ").find((elem, ind)=>{
                return elem == limitParent
            })
            return result
        }
        for (var _e = target, _parent = []; _e && _e !== document; _e = _e.parentNode) {
            if (!conains(_e, limitParent)) {
                _parent.push(_e);
            }
            else{
                _parent.push(_e);
                break;
            }
        }
        return _parent[_parent.length - 1];
    }
    ngOnInit() {
    }
    focusInput(event) {
        this.inputFocus = this.findElement(this.getParent(event.target, "inputs-wrap"), 'input')[0];
        this.inputFocus.focus();
    }
    labelScale(){
        this.getParent(event.target, "inputs-wrap").classList.add("focus-element");
    }
    labelScaleOut(){
        this.inputFocus = this.findElement(this.getParent(event.target, "inputs-wrap"), 'input')[0];
        if(this.inputFocus.value ==""){
            this.getParent(event.target, "inputs-wrap").classList.remove("focus-element");
        }
    }
    onlyNumber(evt){
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    sendMail(form, event) {
        event.preventDefault();
        return new Observable (observer => {
            setTimeout(() => {
                observer.next()
            }, 1000)
        }).subscribe(_ => {
            this._store.dispatch(new Actions.FlashMessage({message:"Yous message sended successfully", timeout:2500, classType:'successFlash'}))
        })
    };
}
