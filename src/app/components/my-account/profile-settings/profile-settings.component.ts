import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthServiceService } from '../../../services/auth-service.service';
import { CreateUser } from '../../../models/models';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
@Component({
    selector: 'app-profile-settings',
    templateUrl: './profile-settings.component.html',
    styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
    public message: string;
    ref: AngularFireStorageReference;
    task: AngularFireUploadTask;
    uploadProgress: Observable<number>;
    downloadURL: Observable<string>;
    uploadDictionary: Observable<any>;
    public userData: CreateUser = {
        id: '',
        firstName: '',
        lastName: '',
        emailTrue: '',
        password: '',
        confirmPass: '',
        publication: null
    };
    constructor(
        private _afStorage: AngularFireStorage,
        private _authServ: AuthServiceService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this._authServ.__getCurrentUser()
            .subscribe(res => {
                (this.userData as any) = res;
                var objImg = new Image();
                objImg.src = this.userData['imgAvatar'];
                objImg.onerror = ()=>{
                    this.userData['imgAvatar'] = './assets/img/user.jpg'
                }
            })
    }
    upload(event) {
        let file = event.target.files[0];
        // ____ Delete User Image
        this._authServ.__deleteStorageImage(`User/`, this.userData.id);
        // ___________

        let path = `User/${this.userData.id}`;
        if (file.type.split('/')[0] !== 'image') {
            return alert('Erreur, ce fichier n\'est pas une image');
        } else {
            let ref = this._afStorage.ref(path);
            let task = this._afStorage.upload(path, file);
            this.uploadProgress = task.percentageChanges();
            task.snapshotChanges().pipe(
                finalize(() => {
                    this.downloadURL = ref.getDownloadURL();
                    this.downloadURL.subscribe(url => {
                        this.userData['imgAvatar'] = url;
                    });
                })
            ).subscribe();
        }
    }
    updateUser({ value }: { value: CreateUser }) {
        value.id = this._route.snapshot.params['id'];
        value.firstName = this.userData.firstName;
        value.lastName = this.userData.lastName;
        value['imgAvatar'] = this.userData['imgAvatar'];
        this._authServ.__updateUser(value)
    }
    // upload(event) {
    //     let file = event.target.files[0];
    //     if (file.length === 0)
    //     return;

    //     var mimeType = file.type;
    //     if (mimeType.match(/image\/*/) == null) {
    //         this.message = "Only images are supported.";
    //         return;
    //     }

    //     var reader = new FileReader();
    //     this.imagePath = event.files;
    //     reader.readAsDataURL(file); 
    //     reader.onload = (_event) => { 
    //         this.userData['imgAvatar'] = reader.result; 
    //     }
    // }

}
