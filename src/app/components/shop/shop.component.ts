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
    public _TitleModal: string            = 'Add Product'
    public _saveOrAdd: string             = 'Add'
    public _editProduct: Object           = {}
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
    protected _saveButtonType: string     =  'edit'
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
            '#800001',
            '#808200',
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
            '#9e5062',
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
            '#C0C0C1',
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
    protected helpAttr: string       = ''
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
    @ViewChild('commonColorsParent', undefined) commonColorsParent: HTMLElement
    @ViewChild('uploadFile') uploadFile:ElementRef;
    __addProduct(type:string) {
        async function _imageUploading (_type:string) {
            if(this._uploadedImages[0]){
                let _countEqualBase64Image = 0
                for (let i = 0; i < this._uploadedImages.length; i++) {
                    if(!new RegExp('data:image/').test(this._uploadedImages[i])){
                        _countEqualBase64Image++
                        this._uploadedImgURL[i] = this._uploadedImages[i]
                        this._doneCount++;
                        this._loadingCount++;
                        if(this._uploadedImages.length-1 == this._loadingCount){
                            this._loadingCount = -1;
                        }
                        if(_countEqualBase64Image === this._uploadedImages.length && type === 'update'){
                            __callAfterUploadingUpdate()
                        }
                    } else {
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
                                        if(_type === 'add'){
                                            __callAfterUploading()
                                        } else if(type === 'update') {
                                            __callAfterUploadingUpdate()
                                        }
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
                 return true
            } else return false
        };
        const __callAfterUploadingUpdate = () => {
            for(let i in this._addProdForm.controls){
                this._editProduct[i] = this._addProdForm.controls[i].value
            }
            this._editProduct['prodImgs'] = this._uploadedImgURL
            this._editProduct['prodColors'] = this._selectedColors
            this._submited = false;
            this._doneCount = -1;
            this._loadingCount = -1;
            this._shopServ.__updateUsersProduct(this._editProduct, this._userInfo);
            setTimeout(()=>{
                this._render.setElementClass(document.querySelector('.addLayerForm'), 'addLayerFormClicked', false);
                this._isClickedPlus = {}
                this._editProduct = {}
                this._uploadedImgURL = []
            }, 1000)
        };
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
                        this._editProduct = {}
                    }, 1000)
                })()
            })()
        };
        if (type === 'add') {
            (async ()=> {
                this._submited = true;
                if (this._addProdForm.invalid) {
                    document.querySelector('.add_prod_form').scrollTo({
                        top:0,
                        behavior: "smooth"
                    });
                    return;
                }
                _imageUploading.bind(this)(type)
                if (!this._uploadedImages[0]){
                    await __callAfterUploading()
                }
            })();
        } else if (type === 'update'){
            _imageUploading.bind(this)(type)
            if (!this._uploadedImages[0]){
                __callAfterUploadingUpdate()
            }
        }
    }
    __openAddForm() {
        this._saveButtonType = 'add'
        this._TitleModal = 'Add Product'
        this._saveOrAdd = 'Add'
        this._selectedCateg = null
        this._addProdForm.reset();
        this._selectedColors = []
        this._render.setElementClass(document.querySelector('.addLayerForm'), 'addLayerFormClicked', true);
        Object.assign(this._isClickedPlus, {
            top: '85px',
            opacity: '1',
            visibility: 'visible',
            'z-index': '23456'
        })
    }
    __openEditProductModal(_product) {
        this.__openAddForm()
        this._saveButtonType = 'update'
        this._TitleModal = 'Edit Product'
        this._saveOrAdd = 'Save'
        this._dataCropper = {}
        setTimeout(()=>{
            this._selectedCateg = _product.prodType
            this._editProduct = _product
            this._addProdForm.controls.prodName.value = _product.prodName 
            this._addProdForm.controls.prodWeight.value = _product.prodWeight 
            this._addProdForm.controls.prodSize.value = _product.prodSize
            this._selectedColors = _product.prodColors 
            this._addProdForm.controls.prodColors.value = []
            this._selectedColors.map((_elem,_index)=>{
                this._addProdForm.controls.prodColors.value[_index] = _elem;
            });
            this._addProdForm.controls.prodImgs.value = []
            _product.prodImgs.map((_elem,_index)=>{
                this._addProdForm.controls.prodImgs.value[_index] = _elem;
            });
            this._addProdForm.controls.prodPrice.value = _product.prodPrice 
            this._addProdForm.controls.prodSale.value = _product.prodSale 
            this._addProdForm.controls.prodUsed.value = _product.prodUsed 
            this._addProdForm.controls.prodDesc.value = _product.prodDesc 
            this._uploadedImages = [..._product.prodImgs]
            this.__countChangeFile = _product.prodImgs.length
        }, 0)
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
        this.helpAttr = new Date().getTime().toString() 
        myReader.readAsDataURL(file);
    }
    __saveCropper() {
        setTimeout(()=>{
            if (this._uploadedImages.length < 4) {
                this.uploadedImg.forEach(elem=>{
                    if(elem.nativeElement.getAttribute('samehelpattr') === this.helpAttr){
                        this._allowSave = false
                        this._uploadedImages[this.__countChangeFile-1] = this._dataCropper.image;
                    }
                })
                if(this._allowSave){
                    this.__countChangeFile++;
                    this._uploadedImages.push(this._dataCropper.image)
                }
                setTimeout(() => {
                    this._render.setElementAttribute(this.uploadedImg.last.nativeElement, 'sameHelpAttr', this.helpAttr)
                }, 0)
            }
        }, 1)
        this._allowSave = true;
    }
    __spliceImgArr(_index:number){
        this.__countChangeFile--;
        this._uploadedImages.splice(_index, 1)
        if(this._uploadedImgURL.length) this._uploadedImgURL.splice(_index, 1)
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
            && !(_event.target as HTMLElement).closest('.plusProduct') && 
            !(_event.target as HTMLElement).closest('.open_edit_modal') && !(_event.target as HTMLElement).closest('.lnr-cross')) {
            this._render.setElementClass(document.querySelector('.addLayerForm'), 'addLayerFormClicked', false);
            this._isClickedPlus = {};
            this._selectedCateg = null
            this._addProdForm.reset();
            this._selectedColors = []
            this._dataCropper = {}
            this._uploadedImages = []
            this._editProduct = {}
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
        setTimeout(() => {
            [].slice.call(this.commonColorsParent['nativeElement'].children).forEach((element: HTMLSpanElement, index: number) => {
                [].slice.call(this._selectedColors).forEach((sel:string) => {
                    if(sel === this._colorsArr[index]) {
                        element.classList.add('activeColor')
                    }
                });
            });
        }, 0);
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
