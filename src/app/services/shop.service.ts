import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateUser, Product } from '../models/models';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { AuthServiceService } from './auth-service.service';
import * as Actions from '../store/actions/methods.actions';
import { Store, select } from '@ngrx/store';

@Injectable({
    providedIn: 'root'
})
export class ShopService {
    _recetCollectionUsers: AngularFirestoreCollection<CreateUser>;
    _recetDocUsers: AngularFirestoreDocument<CreateUser>;
    _users: Observable<CreateUser[]>;
    _user: Observable<CreateUser>;
    public _methods:Observable<any>;
    constructor(
        private _afs: AngularFirestore,
        public _afAuth: AngularFireAuth,
        private _router: Router,
        private _storage: AngularFireStorage,
        private _store: Store<any>
    ) {
        this._recetCollectionUsers = this._afs.collection('Users')
        this._methods = this._store.pipe(select('_methods'))
       
     }
    __getAuth() {
        return this._afAuth.authState;
    }
    __getAllUsers():Observable<CreateUser[]> {
        this._users = this._recetCollectionUsers.snapshotChanges()
        .pipe(
            map(changes =>{
                return changes.map(action => {
                    const data = action.payload.doc.data() as CreateUser;
                    data.id = action.payload.doc.id;
                    return data;
                }) 
            })
        )
        return this._users
    }
    __addUsersProduct(value, _getCurrentUser){
        if(!_getCurrentUser.myProduct){
            _getCurrentUser.myProduct = []
        }
        _getCurrentUser.myProduct[_getCurrentUser.myProduct.length] = value;
        this._recetCollectionUsers.doc(_getCurrentUser.id).update(_getCurrentUser).then(()=>{
        this._store.dispatch(new Actions.FlashMessage({message:"Product was add successfull", timeout:3000, classType:'successFlash'}))
        }).catch(err=>this._store.dispatch(new Actions.FlashMessage({message:err, timeout:3000, classType:'dangerFlash'})));
    }
}
