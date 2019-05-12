import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { AngularFireStorage } from '@angular/fire/storage';
import { CreateUser } from '../models/models';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase'
import { map } from 'rxjs/operators';
import * as Actions from '../store/actions/methods.actions'
import { Store, select } from '@ngrx/store';
@Injectable({
    providedIn: 'root'
})
export class AuthServiceService {
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
        this._recetCollectionUsers = this._afs.collection('Users');
        // this._methods = this._store.pipe(select('_methods'));
    }

    __getAuth() {
        return this._afAuth.authState;
    }
    __getUsers() {
        let _usersToDomainObject = _action => {
            const object = _action.payload.doc.data();
            object.id = _action.payload.doc.id;
            return object;
        }
        this._users = this._recetCollectionUsers.snapshotChanges()
            .pipe(map(_actions => _actions.map(_usersToDomainObject)));
        return this._users;
    }
    __getCurrentUser() {
        return new Observable(observer => {
            this.__getUsers().subscribe(res => {
                [].slice.call(res).forEach(elem => {
                    if (firebase.auth().currentUser && firebase.auth().currentUser.email == elem.emailTrue) {
                        observer.next(elem);
                        observer.complete();
                    }
                })
            })
        })
        // Nuyn@ Promise ov________________
        // return new Promise((reject, resolve) => {
        //     this.__getUsers().subscribe(res => {
        //         [].slice.call(res).forEach(elem => {
        //             if (firebase.auth().currentUser.email == elem.emailTrue) {
        //                 return resolve(elem);
        //             }
        //         })
        //     })
        //     err => reject(err);
        // })
        // _______________________
    }

    __updateUser(user: CreateUser) {
        this._recetDocUsers = this._afs.doc(`Users/${user.id}`)
        this._recetDocUsers.update(user).then(() => {
            setTimeout(()=>{
                window.location.reload()
            }, 3000)
            this._store.dispatch(new Actions.FlashMessage({message:"User Profile was changed", timeout:3000, classType:'successFlash'}))
        })
    }
    __updatePassword(/*_userId: string*/ _userEmail:string) {
        var auth = firebase.auth();
        if(_userEmail == null){
            _userEmail = auth.currentUser.email; 
        }
        return auth.sendPasswordResetEmail(_userEmail)
            .then(() => this._store.dispatch(new Actions.FlashMessage({message:"Check Your E-mail", timeout:3000, classType:'successFlash'})))
            .catch((error) => this._store.dispatch(new Actions.FlashMessage({message:error, timeout:3000, classType:'dangerFlash'})))
        // let doc1 = this._afs.doc(`Users/${_userId}`);
        // doc1.snapshotChanges().subscribe(res=>{
        //     // const data = res.payload.data()
        //     const id = res.payload.id;
        //     this._afs.doc(`Users/${id}`).update({ 
        //         confirmPass:_value,
        //         password: _value,
        //     });
        //     setTimeout(()=>{
        //         window.location.reload()
        //     }, 3000)
        //     this.__FlashMessage("User password was changed", 3000, 'successFlash');
        // })
    }
    __deleteUser(userId, _userPass) {
        var user = firebase.auth().currentUser;
        var credential = firebase.auth.EmailAuthProvider.credential(user.email, _userPass);
        user.reauthenticateWithCredential(credential).then(() => {
            this._recetDocUsers = this._afs.doc(`Users/${userId}`)
            this._recetDocUsers.delete();
            this._afAuth.auth.currentUser.delete().then(() => {
                this._store.dispatch(new Actions.FlashMessage({message:"User is deleted", timeout:3000, classType:'successFlash'}))
                this._router.navigate(['/home']);
            });
        }, (error) => {
            this._store.dispatch(new Actions.FlashMessage({message:error, timeout:3000, classType:'dangerFlash'}))
        });
    }
    __logOut() {
        return this._afAuth.auth.signOut().then(() => {
            this._router.navigate(['/home']);
        });
    }
    __addNewUsers(user: CreateUser) {
        this._recetCollectionUsers.add(user)
    }

    __deleteStorageImage(_path, _userImageID) {
        return this._storage.ref(_path).child(_userImageID).delete()
    }


    SignUp(_email: string, _password: string, _userValue: CreateUser) {
        return this._afAuth.auth.createUserWithEmailAndPassword(_email, _password)
            .then((result) => {
                this.__addNewUsers(_userValue);
                this._store.dispatch(new Actions.FlashMessage({message:"User is registered", timeout:3000, classType:'successFlash'}))
                this._router.navigate(['/home']);
            }).catch((error) => {
                this._store.dispatch(new Actions.FlashMessage({message:error.message, timeout:3000, classType:'dangerFlash'}))
            })
    }
    // Sign in with email/password
    SignIn(_email, _password) {
        return this._afAuth.auth.signInWithEmailAndPassword(_email, _password)
            .then((result) => {
                this._store.dispatch(new Actions.FlashMessage({message:"User is signed", timeout:3000, classType:'successFlash'}))
                this._router.navigate(['/home']);
            }).catch((error) => {
                this._store.dispatch(new Actions.FlashMessage({message:error.message, timeout:3000, classType:'dangerFlash'}))
            })
    }
}
