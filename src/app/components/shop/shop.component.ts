import {  Component, OnDestroy, OnInit, HostListener, ViewChild, ViewChildren, ElementRef, Renderer, Renderer2, QueryList } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { FormControl, FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../../services/auth-service.service';
import { Subscription } from "rxjs";
import { ImageCropperComponent, CropperSettings } from 'ngx-img-cropper';
import * as firebase from 'firebase'
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';


@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss'],
    
    host: {
        '(window:scroll)': 'leftBarFixed($event)',
        '(window:resize)': 'leftBarRes($event)',
        '(window:click)': 'hideColorList($event)',
    },
})

export class ShopComponent implements  OnInit,OnDestroy {
    ref: AngularFireStorageReference;
    task: AngularFireUploadTask;
    uploadProgress: Observable<number>;
    downloadURL: Observable<string>;
    public _refSubscribe:Subscription;
    public _selectedColors: Array<string> = [];
    public _pathWay: string;
    public _fixedLeftBar                  = { width: null, left: null, top: null };
    private _paginationTop: number | string;
    public msgCateg: string;
    public _isUser: boolean               = false;
    public _submited: boolean             = false;
    public _appearColors: boolean         = false;
    public _allowSave: boolean            = true;
    public _loadingCount: number          = -1;
    public _doneCount: number             = -1;
    public _userInfo;
    public _isClickedPlus: Object         = {};
    public _uploadImage: string           = './assets/img/products/product-no-image.jpg';
    public _selectedCateg: undefined      = null;
    
    public _uploadedImages: Array<string> = [];
    public _uploadedImgURL: Array<string> = [];
    public __countChangeFile: number      = 0;
    public _addProdForm;
    public _categoryArr: Array<string>    = [
        'Jewellery',
        'Shoes',
        'For Home',
        'Dresses',
        'Motors',
        'Electronics'
    ];
    public _colorsArr: Array<string>      = [];
    public _dataCropper: any;
    public _cropperSettings: CropperSettings;

    public __generateColors () {
        this._colorsArr = [
            '#000000',
            '#FFFFFF',
            '#FF0000',
            '#00FF00',
            '#0000FF',
            '#FFFF00',
            '#00FFFF',
            '#FF00FF',
            '#C0C0C0',
            '#808080',
            '#800000',
            '#808000',
            '#008000',
            '#800080',
            '#008080',
            '#000080',
            '#800000',
            '#8B0000',
            '#A52A2A',
            '#B22222',
            '#EEE8AA',
            '#BDB76B',
            '#F0E68C',
            '#808000',
            '#FFFF00',
            '#9ACD32',
            '#556B2F',
            '#6B8E23',
            '#4169E1',
            '#8A2BE2',
            '#4B0082',
            '#483D8B',
            '#6A5ACD',
            '#7B68EE',
            '#9370DB',
            '#8B008B',
            '#9400D3',
            '#9932CC',
            '#708090',
            '#778899',
            '#B0C4DE',
            '#E6E6FA',
            '#FFFAF0',
            '#696969',
            '#808080',
            '#A9A9A9',
            '#C0C0C0',
            '#D3D3D3'
        ]
    }
    protected _commonFormGen: Object = {
        'Jewellery': {
            name: true,
            weight: true,
            size: true,
            color: true,
            price: true,
            sale: true,
            isUsed: true,
            desc:true
        },
        'Shoes': {
            name: true,
            size: true,
            weight: false,
            color: true,
            price: true,
            sale: true,
            isUsed: true,
            desc:true
        },
        'For Home': {
            name: true,
            size: false,
            weight: false,
            color: true,
            price: true,
            isUsed: true,
            desc:true,
            sale: true
        },
        'Dresses': {
            name: true,
            size: true,
            weight: false,
            color: true,
            price: true,
            isUsed: true,
            desc:true,
            sale: true
        },
        'Motors': {
            name: true,
            size: false,
            weight: false,
            color: true,
            price: true,
            isUsed: true,
            desc:true,
            sale: true
        },
        'Electronics': {
            name: true,
            size: false,
            weight: false,
            color: true,
            price: true,
            isUsed: true,
            desc:true,
            sale: true
        }
    }
    constructor(
        private _render: Renderer,
        private _render2: Renderer2,
        private _shopServ: ShopService,
        private _authServ: AuthServiceService,
        private _afStorage: AngularFireStorage,
        private _formBuilder: FormBuilder
    ) {
        this._cropperSettings               = new CropperSettings();
        this._cropperSettings.width         = 100;
        this._cropperSettings.height        = 100;
        this._cropperSettings.croppedWidth  = 480;
        this._cropperSettings.croppedHeight = 360;
        this._cropperSettings.canvasWidth   = 300;
        this._cropperSettings.canvasHeight  = 200;
        this._dataCropper                   = {};

        this.__createForm();
    }
   
    @ViewChildren('uploadedImg') uploadedImg:QueryList<any>;
    @ViewChild('cropper', undefined)
    cropper: ImageCropperComponent;
    @ViewChild('uploadFile') uploadFile:ElementRef;
    __addProduct() {
        (async ()=> {
            this._submited = true;
            if (this._addProdForm.invalid) {
                document.querySelector('.add_prod_form').scrollTo({
                    top:0,
                    behavior: "smooth"
                });
                return;
            }
            const __callAfterUploading = () => {
                this._addProdForm.controls.prodColors.value = [];
                this._addProdForm.controls.prodImgs.value = [];
                this._uploadedImgURL.map((_elem,_index)=>{
                    this._addProdForm.controls.prodImgs.value[_index] = _elem;
                });
                this._selectedColors.map((_elem,_index)=>{
                    this._addProdForm.controls.prodColors.value[_index] = _elem;
                });
                for(let i in this._addProdForm.controls){
                    this._addProdForm.value[i] = this._addProdForm.controls[i].value
                }
                this._addProdForm.value.prodType = this._selectedCateg
                this._addProdForm.value.idProduct = new Date().getTime();
                this._addProdForm.value.raiting = {};
                this._addProdForm.value['idParentUser'] = this._userInfo.id;
                (async ()=>{
                    await this._shopServ.__addUsersProduct(this._addProdForm.value, this._userInfo);
                    await (()=>{
                        this._addProdForm.reset();
                        [this._selectedColors,this._uploadedImgURL,this._uploadedImages ] = [[], [], []];
                        this.__countChangeFile = 0; 
                        this._dataCropper = {};
                        this._submited = false;
                        this._doneCount = -1;
                        this._loadingCount = -1;
                        this._colorsArr = [];
                        this.uploadFile.nativeElement.value = '';
                        setTimeout(()=>{
                            this._render.setElementClass(document.querySelector('.addLayerForm'), 'addLayerFormClicked', false);
                            this._isClickedPlus = {}
                        }, 1000)
                    })()
                })()
            };
            if(this._uploadedImages[0]){
                for (let i = 0; i < this._uploadedImages.length; i++) {
                    await new Promise((resolve, reject) => {
                        this._loadingCount++;
                        let path = `User/${this._userInfo.id}/${(new Date()).getTime()}.png`;
                        const ref = this._afStorage.ref(path);
                        ref
                        .putString(this._uploadedImages[i], 'data_url', { contentType: 'image/jpeg' })
                        .then(()=>{
                            this._refSubscribe = ref.getDownloadURL().
                                subscribe(urlImage=>{
                                this._addProdForm.controls.prodImgs[i] = urlImage;
                                this._uploadedImgURL[i] = urlImage
                                if(i == this._uploadedImages.length-1){
                                    __callAfterUploading()
                                }
                            })
                            this._doneCount++;
                            if(this._uploadedImages.length-1 == this._loadingCount){
                                this._loadingCount = -1;
                                // this._doneCount++;
                            }
                                resolve()
                            }).catch(error=>{
                                reject(error);
                            })
                    });
                }
            }
            else{
               await __callAfterUploading()
            }
            
        })();
        
    }
    __fileUpload($event) {
        this._allowSave = true;
        var image: any = new Image();
        var file: File = $event.target.files[0];
        var myReader: FileReader = new FileReader();
        if (file && file.type.split('/')[0] !== 'image') {
            return alert('Erreur, ce fichier n\'est pas une image');
        }
        myReader.onloadend = (loadEvent: any) => {
            image.src = loadEvent.target.result;
            this.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
    }
    __saveCropper() {
        if (this._uploadedImages.length < 4 && this._allowSave) {
            this.__countChangeFile++;
            this._uploadedImages.push(this._dataCropper.image)
        }
        setTimeout(()=>{
            this.uploadedImg.forEach(elem=>{
                if(Number(elem.nativeElement.getAttribute('data-diff-index')) == this.__countChangeFile){
                    this._uploadedImages[this.__countChangeFile-1] = this._dataCropper.image;
                }
            })
        }, 1)
        this._allowSave = false;
    }
    __spliceImgArr(_index:number){
        this._allowSave = true;
        this.__countChangeFile--;
        this._uploadedImages.splice(_index, 1)
    }
    @ViewChild('fixedLeftBar') fixedLeftBar: ElementRef;

    @HostListener('window:click', ['$event'])
    hideColorList(_event: KeyboardEvent) {
        // Color Extension hide ------------
        if (!(_event.target as HTMLElement).closest('.colorExtenstion') && !(_event.target as HTMLElement).closest('.colorEach')) {
            this._appearColors = false;
        }
        if ((_event.target as HTMLElement).closest('.colorExtenstion')) {
            this._appearColors = true;
        }
        // _____________________

        // addForm Open ___________
        if (this._isUser && !(_event.target as HTMLElement).closest('.add_prod_form') 
            && !(_event.target as HTMLElement).closest('.plusProduct') && !(_event.target as HTMLElement).closest('.lnr-cross')) {
            this._render.setElementClass(document.querySelector('.addLayerForm'), 'addLayerFormClicked', false);
            this._isClickedPlus = {};
        }
        // __________________
    }
    @HostListener('window:resize', ['$event'])
    leftBarRes($event) {
        this._fixedLeftBar.width = this.fixedLeftBar.nativeElement.parentNode.getBoundingClientRect().width - 30 + 'px';
    }
    @HostListener('window:scroll', ['$event'])
    leftBarFixed($event) {
        const headerHeight = document.querySelector('header').getBoundingClientRect().height,
            parent = this.fixedLeftBar.nativeElement.parentNode,
            parentBounding = this.fixedLeftBar.nativeElement.parentNode.getBoundingClientRect(),
            nativeElm = this.fixedLeftBar.nativeElement,
            nativeElmBounding = nativeElm.getBoundingClientRect(),
            footer = document.querySelector('footer');

        Object.assign(this._fixedLeftBar, {
            width: parentBounding.width - 30 + "px",
            left: parentBounding.left + 15 + "px",
            top: headerHeight + 5 + 'px'
        })
        if (window.matchMedia('(min-width: 577px)').matches) {
            if (window.scrollY > parent.offsetTop - headerHeight) {
                nativeElm.classList.add('sticky')
            }
            else {
                nativeElm.classList.remove('sticky')

            }
            if (document.querySelector('.abs')) {
                if (window.scrollY < footer.offsetTop -
                    nativeElmBounding.height + headerHeight - 30) {
                    nativeElm.classList.add('sticky')
                    nativeElm.classList.remove('abs')

                }
            }
            if (window.scrollY + nativeElmBounding.height + headerHeight > footer.offsetTop - 15) {
                nativeElm.classList.remove('sticky')
                nativeElm.classList.add('abs')
            }
        }
    }
    __createForm() {
        this._addProdForm = this._formBuilder.group({
            prodName: [, Validators.required],
            prodWeight: [],
            prodSize: [],
            prodColors: [],
            prodPrice: [, Validators.required],
            prodSale: [],
            prodImgs: [],
            prodUsed: [, Validators.required],
            prodDesc: [, Validators.required],
        });
    }
    // convenience getter for easy access to form fields
    get __formAddControls() { return this._addProdForm.controls; }
    _selectedColorArr(_color: string, _activeColor: Element) {
        var _boolPush: boolean = false;
        if (this._selectedColors.length) {
            for (let i = 0; i < this._selectedColors.length; i++) {
                if (this._selectedColors.length >= 1 && this._selectedColors[i] == _color) {
                    _activeColor.classList.remove('activeColor')
                    _boolPush = true;
                    this._selectedColors.splice(i, 1);
                }
            }
        }
        if (!_boolPush && this._selectedColors.length < 6) {
            _activeColor.classList.toggle('activeColor')
            this._selectedColors.push(_color);
        }
    }
    
    ngOnInit() {
        this._authServ.__getCurrentUser()
            .subscribe(res => {
                (this._userInfo as any) = res;
            })
        this._shopServ.__getAuth().subscribe(res => {
            this._isUser = (res) ? true : false;
        });
    }
    ngOnDestroy(){
        if(this._refSubscribe){
            this._refSubscribe.unsubscribe()
        }
    }
    _goSelectForm(_event) {
        return this._commonFormGen[_event];
    }
    __appearColors() {
        this.__generateColors();
        this._appearColors = !this._appearColors
    }
    __openAddForm() {
        this._render.setElementClass(document.querySelector('.addLayerForm'), 'addLayerFormClicked', true);
        Object.assign(this._isClickedPlus, {
            top: '85px',
            opacity: '1',
            visibility: 'visible',
            'z-index': '23456'
        })
    }
    
    getPositonPageination(event) {
        this._paginationTop = event;
    }
    ngDoCheck() {
        this.changePathParent(this._pathWay);
    }
    changePathParent(msg) {
        this._pathWay = msg;
    }

};
