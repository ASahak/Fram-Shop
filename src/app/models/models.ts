export interface dataGallery{
    imgUrl?:string,
    dataType?:string
}
export interface SignIn {
    username:string;
    password:string;
}
export interface CreateUser {
    id:string,
    firstName: string;
    lastName: string;
    emailTrue: string;
    password: string;
    confirmPass: string;
    myProduct?: Array<Object>;
    publication:number | string
}
export interface partners{
    img?:string,
    companyName?:string,
    description?:string
}
export interface Product {
    prodName?:string;
    prodWeight?: number;
    prodSize?: number;
    prodColors?: Array<string>;
    prodPrice?: number;
    prodSale?: number;
    prodImgs?: Array<string>;
    prodUsed?: boolean;
}

