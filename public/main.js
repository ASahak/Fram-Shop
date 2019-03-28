(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/not-found-page/not-found-page.component */ "./src/app/components/not-found-page/not-found-page.component.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_partners_partners_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/partners/partners.component */ "./src/app/components/partners/partners.component.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _components_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/my-account/my-account.component */ "./src/app/components/my-account/my-account.component.ts");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "./src/app/components/reset-password/reset-password.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/shop/shop.component */ "./src/app/components/shop/shop.component.ts");



// Block AllPages

// ________________________










var routes = [
    { path: "", redirectTo: '', pathMatch: 'full', component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] },
    { path: "home", component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] },
    { path: "about-us", component: _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"] },
    { path: "contact", component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    { path: "partners", component: _components_partners_partners_component__WEBPACK_IMPORTED_MODULE_7__["PartnersComponent"] },
    { path: "gallery", component: _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"] },
    { path: "cart", component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"] },
    { path: "my-account", component: _components_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_10__["MyAccountComponent"] },
    { path: "reset-password", component: _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordComponent"] },
    { path: "products/:id", component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"], pathMatch: 'full' },
    { path: "shop", component: _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_13__["ShopComponent"] },
    { path: "**", component: _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundPageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: false })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header--> \n<app-header></app-header>\n<!-- Header--> \n<router-outlet></router-outlet>\n<!-- Footer--> \n<app-footer></app-footer>\n<!-- Footer--> "

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'fram-shop';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/not-found-page/not-found-page.component */ "./src/app/components/not-found-page/not-found-page.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_home_page_slider_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home-page/slider/slider.component */ "./src/app/components/home-page/slider/slider.component.ts");
/* harmony import */ var _components_home_page_services_part_services_part_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home-page/services-part/services-part.component */ "./src/app/components/home-page/services-part/services-part.component.ts");
/* harmony import */ var _components_home_page_shop_categories_shop_categories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home-page/shop-categories/shop-categories.component */ "./src/app/components/home-page/shop-categories/shop-categories.component.ts");
/* harmony import */ var _components_home_page_shop_badges_shop_badges_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home-page/shop-badges/shop-badges.component */ "./src/app/components/home-page/shop-badges/shop-badges.component.ts");
/* harmony import */ var _components_home_page_partners_home_partners_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home-page/partners-home/partners-home.component */ "./src/app/components/home-page/partners-home/partners-home.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_partners_partners_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/partners/partners.component */ "./src/app/components/partners/partners.component.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _components_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/my-account/my-account.component */ "./src/app/components/my-account/my-account.component.ts");
/* harmony import */ var _components_my_account_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/my-account/profile-settings/profile-settings.component */ "./src/app/components/my-account/profile-settings/profile-settings.component.ts");
/* harmony import */ var _components_my_account_account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/my-account/account-settings/account-settings.component */ "./src/app/components/my-account/account-settings/account-settings.component.ts");
/* harmony import */ var _components_header_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/header/login-form/login-form.component */ "./src/app/components/header/login-form/login-form.component.ts");
/* harmony import */ var _components_header_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/header/register-form/register-form.component */ "./src/app/components/header/register-form/register-form.component.ts");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "./src/app/components/reset-password/reset-password.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/shop/shop.component */ "./src/app/components/shop/shop.component.ts");
/* harmony import */ var _components_shop_categories_categories_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/shop/categories/categories.component */ "./src/app/components/shop/categories/categories.component.ts");
/* harmony import */ var _components_shop_top_sort_top_sort_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/shop/top-sort/top-sort.component */ "./src/app/components/shop/top-sort/top-sort.component.ts");
/* harmony import */ var _components_shop_shop_content_shop_content_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/shop/shop-content/shop-content.component */ "./src/app/components/shop/shop-content/shop-content.component.ts");
/* harmony import */ var _directives_sort_products_shop_sort_shop_products_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./directives/sort-products-shop/sort-shop-products.directive */ "./src/app/directives/sort-products-shop/sort-shop-products.directive.ts");
/* harmony import */ var _directives_count_badges_shop_count_shop_badges_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./directives/count-badges-shop/count-shop-badges.directive */ "./src/app/directives/count-badges-shop/count-shop-badges.directive.ts");
/* harmony import */ var _components_shop_filter_price_price_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/shop/filter/price/price.component */ "./src/app/components/shop/filter/price/price.component.ts");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






// Block AllPages



// ________________________
// Home Page components 






// ______________________________
















// Directives



// _______________
// Plugins




// ____________________
// Firebase____________________




// ______________________
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_37__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundPageComponent"],
                _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_home_page_slider_slider_component__WEBPACK_IMPORTED_MODULE_10__["SliderComponent"],
                _components_home_page_services_part_services_part_component__WEBPACK_IMPORTED_MODULE_11__["ServicesPartComponent"],
                _components_home_page_shop_categories_shop_categories_component__WEBPACK_IMPORTED_MODULE_12__["ShopCategoriesComponent"],
                _components_home_page_shop_badges_shop_badges_component__WEBPACK_IMPORTED_MODULE_13__["ShopBadgesComponent"],
                _components_home_page_partners_home_partners_home_component__WEBPACK_IMPORTED_MODULE_14__["PartnersHomeComponent"],
                _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_15__["AboutUsComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"],
                _components_partners_partners_component__WEBPACK_IMPORTED_MODULE_17__["PartnersComponent"],
                _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_18__["GalleryComponent"],
                _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_19__["CartComponent"],
                _components_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_20__["MyAccountComponent"],
                _components_my_account_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_21__["ProfileSettingsComponent"],
                _components_my_account_account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_22__["AccountSettingsComponent"],
                _components_header_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_23__["LoginFormComponent"],
                _components_header_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_24__["RegisterFormComponent"],
                _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_25__["ResetPasswordComponent"],
                _components_products_products_component__WEBPACK_IMPORTED_MODULE_26__["ProductsComponent"],
                _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_27__["ShopComponent"],
                _components_shop_categories_categories_component__WEBPACK_IMPORTED_MODULE_28__["CategoriesComponent"],
                _components_shop_top_sort_top_sort_component__WEBPACK_IMPORTED_MODULE_29__["TopSortComponent"],
                _components_shop_shop_content_shop_content_component__WEBPACK_IMPORTED_MODULE_30__["ShopContentComponent"],
                _directives_sort_products_shop_sort_shop_products_directive__WEBPACK_IMPORTED_MODULE_31__["SortShopProductsDirective"],
                _directives_count_badges_shop_count_shop_badges_directive__WEBPACK_IMPORTED_MODULE_32__["CountShopBadgesDirective"],
                _components_shop_filter_price_price_component__WEBPACK_IMPORTED_MODULE_33__["PriceComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_34__["Ng5SliderModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClient"]]
                    }
                }),
                _angular_fire__WEBPACK_IMPORTED_MODULE_38__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_41__["environment"].firebaseConfig),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_40__["AngularFireDatabaseModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_39__["AngularFireAuthModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about-us/about-us.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container  mt-4\">\n    <div class=\"row\">\n        <div class=\"w-100\">\n            <div class=\"top-direction\">\n                <div class=\"dicrection-path\">\n                    <a routerLink=\"/home\"><span class=\"lnr lnr-home\"></span> {{'header.navBar.button1' | translate}}</a>\n                    <span>{{'header.navBar.button3' | translate}}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<section class=\"container border_soft\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"about_background\">\n                    <div class=\"welcome-pres\">\n                        <h2>{{'header.navBar.button3' | translate}}</h2>\n                    </div>\n                    <div class=\"welcome-text-pres\">\n                        <div>\n                            <p>{{'aboutUS.p1' | translate}}</p>\n                            <p>{{'aboutUS.p2' | translate}}</p>\n                            <p>{{'aboutUS.p3' | translate}}</p>\n                            <p>{{'aboutUS.p4' | translate}}</p>\n                            <p><strong>«{{'aboutUS.name' | translate}}»</strong></p>\n                            <p><strong>{{'aboutUS.bottomTxt' | translate}}</strong></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"back_image_about\" style=\"background-image:url('./assets/img/about-us.jpg')\">\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.top-direction {\n  margin-bottom: 20px; }\n.top-direction .dicrection-path {\n    padding: 10px;\n    background-color: #F2F2F2; }\n.top-direction .dicrection-path a {\n      text-decoration: none;\n      color: #262626;\n      position: relative; }\n.top-direction .dicrection-path a:after {\n        margin: 0 5px;\n        position: relative;\n        content: \"»\"; }\n.top-direction .dicrection-path a span {\n        margin-right: 3px; }\n.top-direction .dicrection-path span {\n      color: #616161; }\n.border_soft {\n  border: 1px solid #e9ecef;\n  padding: 25px 0;\n  padding-bottom: 30px;\n  /* margin-bottom: 25px; */\n  background: #fff; }\n.border_soft .about_background {\n    background: #fff;\n    height: 100%;\n    padding: 15px 5px 0 20px;\n    box-shadow: 0px 1px 5px -1px #e9ecef; }\n.border_soft .about_background .welcome-pres {\n      position: relative; }\n.border_soft .about_background .welcome-pres h2 {\n        margin-bottom: 2.5rem;\n        font-weight: 700;\n        font-size: 26px;\n        display: inline-block;\n        position: relative; }\n.border_soft .about_background .welcome-pres h2:after {\n          position: absolute;\n          left: 25px;\n          content: \"\";\n          margin: auto;\n          height: 1px;\n          width: 40px;\n          background-color: #689F38;\n          bottom: -6px; }\n.border_soft .about_background .welcome-pres h2:before {\n          position: absolute;\n          left: 35px;\n          content: \"\";\n          margin: auto;\n          height: 1px;\n          width: 40px;\n          background-color: #689F38;\n          bottom: -10px; }\n.border_soft .back_image_about {\n    height: 100%;\n    background-size: cover; }\n@media (max-width: 767px) {\n  .back_image_about {\n    height: 300px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFib3V0LXVzXFxhYm91dC11cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxnbG9iYWxTQ1NTXFxnbG9iYWxTQ1NTLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDSWpCO0VBQ0ksb0JBQW1CLEVBc0J0QjtBQXZCRDtJQUdRLGNBQWE7SUFDYiwwQkNKVSxFRHNCYjtBQXRCTDtNQU1ZLHNCQUFxQjtNQUNyQixlQ05DO01ET0QsbUJBQWtCLEVBU3JCO0FBakJUO1FBVWdCLGNBQVk7UUFDWixtQkFBa0I7UUFDbEIsYUFBWSxFQUNmO0FBYmI7UUFlZ0Isa0JBQWlCLEVBQ3BCO0FBaEJiO01BbUJZLGVDakJDLEVEa0JKO0FBSVQ7RUFDSSwwQkFBeUI7RUFDekIsZ0JBQWU7RUFDZixxQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLGlCQUFnQixFQXlDbkI7QUE5Q0Q7SUFPUSxpQkFBZ0I7SUFDaEIsYUFBWTtJQUNaLHlCQUF3QjtJQUN4QixxQ0FBb0MsRUErQnZDO0FBekNMO01BWVksbUJBQWtCLEVBNEJyQjtBQXhDVDtRQWNnQixzQkFBcUI7UUFDckIsaUJBQWdCO1FBQ2hCLGdCQUFlO1FBQ2Ysc0JBQXFCO1FBQ3JCLG1CQUFrQixFQXFCckI7QUF2Q2I7VUFvQm9CLG1CQUFrQjtVQUNsQixXQUFVO1VBQ1YsWUFBVztVQUNYLGFBQVk7VUFDWixZQUFXO1VBQ1gsWUFBVztVQUNYLDBCQ3RETjtVRHVETSxhQUFZLEVBQ2Y7QUE1QmpCO1VBOEJvQixtQkFBa0I7VUFDbEIsV0FBVTtVQUNWLFlBQVc7VUFDWCxhQUFZO1VBQ1osWUFBVztVQUNYLFlBQVc7VUFDWCwwQkNoRU47VURpRU0sY0FBYSxFQUNoQjtBQXRDakI7SUEyQ1EsYUFBWTtJQUNaLHVCQUFzQixFQUN6QjtBQUVMO0VBQ0k7SUFDSSx5QkFBd0IsRUFDM0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udG9wLWRpcmVjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbiAgLnRvcC1kaXJlY3Rpb24gLmRpY3JlY3Rpb24tcGF0aCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyOyB9XG4gICAgLnRvcC1kaXJlY3Rpb24gLmRpY3JlY3Rpb24tcGF0aCBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAjMjYyNjI2O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAudG9wLWRpcmVjdGlvbiAuZGljcmVjdGlvbi1wYXRoIGE6YWZ0ZXIge1xuICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGNvbnRlbnQ6IFwiwrtcIjsgfVxuICAgICAgLnRvcC1kaXJlY3Rpb24gLmRpY3JlY3Rpb24tcGF0aCBhIHNwYW4ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDsgfVxuICAgIC50b3AtZGlyZWN0aW9uIC5kaWNyZWN0aW9uLXBhdGggc3BhbiB7XG4gICAgICBjb2xvcjogIzYxNjE2MTsgfVxuXG4uYm9yZGVyX3NvZnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuICBwYWRkaW5nOiAyNXB4IDA7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAvKiBtYXJnaW4tYm90dG9tOiAyNXB4OyAqL1xuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XG4gIC5ib3JkZXJfc29mdCAuYWJvdXRfYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweCA1cHggMCAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IC0xcHggI2U5ZWNlZjsgfVxuICAgIC5ib3JkZXJfc29mdCAuYWJvdXRfYmFja2dyb3VuZCAud2VsY29tZS1wcmVzIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgLmJvcmRlcl9zb2Z0IC5hYm91dF9iYWNrZ3JvdW5kIC53ZWxjb21lLXByZXMgaDIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgICAgLmJvcmRlcl9zb2Z0IC5hYm91dF9iYWNrZ3JvdW5kIC53ZWxjb21lLXByZXMgaDI6YWZ0ZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAyNXB4O1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2ODlGMzg7XG4gICAgICAgICAgYm90dG9tOiAtNnB4OyB9XG4gICAgICAgIC5ib3JkZXJfc29mdCAuYWJvdXRfYmFja2dyb3VuZCAud2VsY29tZS1wcmVzIGgyOmJlZm9yZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDM1cHg7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY4OUYzODtcbiAgICAgICAgICBib3R0b206IC0xMHB4OyB9XG4gIC5ib3JkZXJfc29mdCAuYmFja19pbWFnZV9hYm91dCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iYWNrX2ltYWdlX2Fib3V0IHtcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7IH0gfVxuIiwiXHJcbkBpbXBvcnQgJy4uLy4uLy4uL2dsb2JhbFNDU1MvZXh0ZW5kcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2dsb2JhbFNDU1MvZ2xvYmFsU0NTUyc7XHJcblxyXG4udG9wLWRpcmVjdGlvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAuZGljcmVjdGlvbi1wYXRoe1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hXYXlCRztcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZGFyaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjAgNXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCLCu1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjogJGdyZXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4uYm9yZGVyX3NvZnQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcclxuICAgIHBhZGRpbmc6IDI1cHggMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMjVweDsgKi9cclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAuYWJvdXRfYmFja2dyb3VuZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCA1cHggMCAyMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IC0xcHggI2U5ZWNlZjtcclxuICAgICAgICAud2VsY29tZS1wcmVzIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmFja19pbWFnZV9hYm91dCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhICN7JHNtLWRldmljZU1heH17XHJcbiAgICAuYmFja19pbWFnZV9hYm91dCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiJGdyZWVuOiM2ODlGMzg7XHJcbiRncmVlbkRhcms6IzUwOGMxYztcclxuJGdyZWVuUkdCQTojNjg5ZjM4OGM7XHJcbiRkaXNhYmxlZEJ1dHRvbjojOWJhMjk1O1xyXG4kaGlnaFdheUJHOiNGMkYyRjI7XHJcbiRkYXJrOiMyNjI2MjY7XHJcbiRncmV5OiM2MTYxNjE7XHJcbiRyZWQ6ICNGNDQzMzY7XHJcbiR5ZWxsb3c6ICNGQkMwMkQ7XHJcblxyXG4kY29sOiBcIihtYXgtd2lkdGg6IDU3NnB4KVwiO1xyXG4kc20tZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDc2N3B4KVwiO1xyXG4kc20tZGV2aWNlOiBcIihtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG1pbi13aWR0aDo1NzdweClcIjtcclxuJG1kLWRldmljZU1heDogXCIobWF4LXdpZHRoOiA5OTFweClcIjtcclxuJG1kLWRldmljZTogXCIobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6NzY4cHgpXCI7XHJcbiRsZy1kZXZpY2U6IFwiKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDo5OTJweClcIjtcclxuJHhsLWRldmljZU1heDogXCIobWF4LXdpZHRoOiAxMjAwcHgpXCI7XHJcbiR4bC1kZXZpY2U6IFwiKG1pbi13aWR0aDogMTIwMXB4KVwiOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/components/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/components/about-us/about-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/components/cart/cart.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/cart/cart.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"cart_section\">\n    <div class=\"container mt-4\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"top-direction\">\n                    <div class=\"dicrection-path\">\n                        <a routerLink=\"/home\"><span class=\"lnr lnr-home\"></span> {{'header.navBar.button1' | translate}}</a>\n                        <span>{{'cart.title' | translate}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"collapseTableResponsive\">\n                    <table id=\"tableCart\">\n                        <thead>\n                            <th>{{'cart.table.prodTh' | translate}}</th>\n                            <th>{{'cart.table.nameTh' | translate}}</th>\n                            <th>{{'cart.table.priceTh' | translate}}</th>\n                            <th>{{'cart.table.quantityTh' | translate}}</th>\n                            <th>{{'cart.table.totalTh' | translate}}</th>\n                            <th><button *ngIf=\"dataCart.length > 0\" (click)=\"deleteAllItems()\">{{'cart.table.clear' | translate}}</button></th>\n                        </thead>\n                        <tbody>\n                            <ng-container  *ngFor=\"let item of dataCart; let i = index\">\n                                <tr *ngIf=\"i < pageItemsEnd && i >= (pageItemsEnd-pageinationCount)\">\n                                    <td><img src=\"./assets/img/products/{{item.img}}\" class=\"img-fluid\" alt=\"\"></td>\n                                    <td>{{item.name}}</td>\n                                    <td>{{item.price | currency:'CAD':'symbol-narrow'}}</td>\n                                    <td>\n                                        <div class=\"add-and-remove\">\n                                            <span class=\"minusCart\" (click)=\"minusCartItem($event, i)\">-</span>\n                                            <span class=\"countProducts\">{{item.countProduct}}</span>\n                                            <span class=\"plusCart\" (click)=\"plusCartItem($event, i)\">+</span>\n                                        </div>\n                                    </td>\n                                    <td>{{item.countProduct * item.price | currency:'CAD':'symbol-narrow'}}</td>\n                                    <td><span class=\"lnr lnr-cross\" (click)=\"deleteItem(item, i)\"></span></td>\n                                </tr>\n                            </ng-container>\n                        </tbody>\n                    </table>   \n                </div>\n                <div class=\"totalAmount\" *ngIf=\"dataCart.length > 0\" >\n                    {{'cart.table.totPrice' | translate}} <b>{{totalPrices | currency:'CAD':'symbol-narrow'}}</b>\n                </div>\n                <div class=\"paginationCart\" #pageElement>\n                    <a *ngFor=\"let page of [].constructor(countPageinationLength); let i = index\" [class.activePage]=\"i == 0\" href=\"javascript:void(0)\" (click)=\"pageClick(i)\">{{i+1}}</a>\n                </div>\n            </div> \n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/cart/cart.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/cart/cart.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n#cart_section .top-direction {\n  margin-bottom: 20px; }\n#cart_section .top-direction .dicrection-path {\n    padding: 10px;\n    background-color: #F2F2F2; }\n#cart_section .top-direction .dicrection-path a {\n      text-decoration: none;\n      color: #262626;\n      position: relative; }\n#cart_section .top-direction .dicrection-path a:after {\n        margin: 0 5px;\n        position: relative;\n        content: \"»\"; }\n#cart_section .top-direction .dicrection-path a span {\n        margin-right: 3px; }\n#cart_section .top-direction .dicrection-path span {\n      color: #616161; }\n#cart_section .collapseTableResponsive {\n  width: 100%;\n  overflow-x: auto;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n#cart_section table#tableCart {\n  width: 100%;\n  min-width: 600px; }\n#cart_section table#tableCart thead {\n    box-shadow: 0px 2px 3px -1px #ccc;\n    background-color: #f0f0f0; }\n#cart_section table#tableCart thead th {\n      text-align: center;\n      padding: 10px;\n      position: relative; }\n#cart_section table#tableCart thead th:after {\n        content: \"\";\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        height: 60%;\n        margin: auto;\n        width: 1px;\n        background-color: #ccc; }\n#cart_section table#tableCart thead th:last-child:after {\n      display: none; }\n#cart_section table#tableCart thead th:last-child button {\n      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n      background-color: #689F38;\n      color: #fff;\n      padding: 5px 10px;\n      text-decoration: none;\n      font-size: 13px;\n      border: none;\n      cursor: pointer; }\n#cart_section table#tableCart tbody tr {\n    box-shadow: 0px 2px 2px -2px #ccc; }\n#cart_section table#tableCart tbody tr td {\n      position: relative;\n      text-align: center;\n      padding: 10px; }\n#cart_section table#tableCart tbody tr td:after {\n        content: \"\";\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        height: 80%;\n        margin: auto;\n        width: 1px;\n        background-color: #ccc; }\n#cart_section table#tableCart tbody tr td img {\n        max-width: 120px; }\n#cart_section table#tableCart tbody tr td .lnr-cross {\n        width: 25px;\n        height: 25px;\n        display: inline-block;\n        text-align: center;\n        line-height: 25px;\n        background-color: #F44336;\n        color: #fff;\n        font-size: 20px;\n        border-radius: 50%;\n        cursor: pointer; }\n#cart_section table#tableCart tbody tr td .add-and-remove .countProducts {\n        margin: 5px 10px; }\n#cart_section table#tableCart tbody tr td .add-and-remove .minusCart, #cart_section table#tableCart tbody tr td .add-and-remove .plusCart {\n        font-size: 20px;\n        cursor: pointer; }\n#cart_section table#tableCart tbody tr td:last-child:after {\n      display: none; }\n#cart_section .paginationCart {\n  text-align: center;\n  margin-top: 20px; }\n#cart_section .paginationCart a {\n    padding: 10px;\n    display: inline-block;\n    border: 1px solid #ccc;\n    color: #000;\n    margin: 5px;\n    width: 30px;\n    height: 30px;\n    line-height: 10px;\n    text-align: center; }\n#cart_section .paginationCart .activePage {\n    background-color: #689F38;\n    color: #fff;\n    border: 1px solid #689F38; }\n#cart_section .totalAmount {\n  text-align: right;\n  margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhcnRcXGNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxnbG9iYWxTQ1NTXFxnbG9iYWxTQ1NTLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDSWpCO0VBR1Esb0JBQW1CLEVBc0J0QjtBQXpCTDtJQUtZLGNBQWE7SUFDYiwwQkNOTSxFRHdCVDtBQXhCVDtNQVFnQixzQkFBcUI7TUFDckIsZUNSSDtNRFNHLG1CQUFrQixFQVNyQjtBQW5CYjtRQVlvQixjQUFZO1FBQ1osbUJBQWtCO1FBQ2xCLGFBQVksRUFDZjtBQWZqQjtRQWlCb0Isa0JBQWlCLEVBQ3BCO0FBbEJqQjtNQXFCZ0IsZUNuQkgsRURvQkE7QUF0QmI7RUEyQlEsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixnSEFBbUcsRUFDdEc7QUE5Qkw7RUFnQ1EsWUFBVztFQUNYLGlCQUFnQixFQXNGbkI7QUF2SEw7SUFtQ1ksa0NBQWdDO0lBQ2hDLDBCQUF5QixFQWdDNUI7QUFwRVQ7TUFzQ2dCLG1CQUFrQjtNQUNsQixjQUFhO01BQ2IsbUJBQWtCLEVBWXJCO0FBcERiO1FBMENvQixZQUFXO1FBQ1gsbUJBQWtCO1FBQ2xCLFNBQVE7UUFDUixPQUFNO1FBQ04sVUFBUztRQUNULFlBQVc7UUFDWCxhQUFZO1FBQ1osV0FBVTtRQUNWLHVCQUFzQixFQUN6QjtBQW5EakI7TUF1RG9CLGNBQWEsRUFDaEI7QUF4RGpCO01BMERvQixnSEFBbUc7TUFDbkcsMEJDL0ROO01EZ0VNLFlBQVc7TUFDWCxrQkFBaUI7TUFDakIsc0JBQXFCO01BQ3JCLGdCQUFlO01BQ2YsYUFBWTtNQUNaLGdCQUFlLEVBQ2xCO0FBbEVqQjtJQXVFZ0Isa0NBQWlDLEVBOENwQztBQXJIYjtNQXlFb0IsbUJBQWtCO01BZWxCLG1CQUFrQjtNQUNsQixjQUFhLEVBc0JoQjtBQS9HakI7UUEyRXdCLFlBQVc7UUFDWCxtQkFBa0I7UUFDbEIsU0FBUTtRQUNSLE9BQU07UUFDTixVQUFTO1FBQ1QsWUFBVztRQUNYLGFBQVk7UUFDWixXQUFVO1FBQ1YsdUJBQXNCLEVBQ3pCO0FBcEZyQjtRQXNGd0IsaUJBQWdCLEVBQ25CO0FBdkZyQjtRQTJGd0IsWUFBVztRQUNYLGFBQVk7UUFDWixzQkFBcUI7UUFDckIsbUJBQWtCO1FBQ2xCLGtCQUFpQjtRQUNqQiwwQkM3Rlg7UUQ4RlcsWUFBVztRQUNYLGdCQUFlO1FBQ2YsbUJBQWtCO1FBQ2xCLGdCQUFlLEVBQ2xCO0FBckdyQjtRQXdHNEIsaUJBQWdCLEVBQ25CO0FBekd6QjtRQTJHNEIsZ0JBQWM7UUFDZCxnQkFBZSxFQUNsQjtBQTdHekI7TUFrSHdCLGNBQWEsRUFDaEI7QUFuSHJCO0VBeUhRLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFpQm5CO0FBM0lMO0lBNEhZLGNBQWE7SUFDYixzQkFBcUI7SUFDckIsdUJBQXNCO0lBQ3RCLFlBQVc7SUFDWCxZQUFXO0lBQ1gsWUFBVztJQUNYLGFBQVk7SUFDWixrQkFBaUI7SUFDakIsbUJBQWtCLEVBQ3JCO0FBcklUO0lBdUlZLDBCQzNJRTtJRDRJRixZQUFXO0lBQ1gsMEJDN0lFLEVEOElMO0FBMUlUO0VBNklRLGtCQUFpQjtFQUNqQixhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbiNjYXJ0X3NlY3Rpb24gLnRvcC1kaXJlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG4gICNjYXJ0X3NlY3Rpb24gLnRvcC1kaXJlY3Rpb24gLmRpY3JlY3Rpb24tcGF0aCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyOyB9XG4gICAgI2NhcnRfc2VjdGlvbiAudG9wLWRpcmVjdGlvbiAuZGljcmVjdGlvbi1wYXRoIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICMyNjI2MjY7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgICNjYXJ0X3NlY3Rpb24gLnRvcC1kaXJlY3Rpb24gLmRpY3JlY3Rpb24tcGF0aCBhOmFmdGVyIHtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb250ZW50OiBcIsK7XCI7IH1cbiAgICAgICNjYXJ0X3NlY3Rpb24gLnRvcC1kaXJlY3Rpb24gLmRpY3JlY3Rpb24tcGF0aCBhIHNwYW4ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDsgfVxuICAgICNjYXJ0X3NlY3Rpb24gLnRvcC1kaXJlY3Rpb24gLmRpY3JlY3Rpb24tcGF0aCBzcGFuIHtcbiAgICAgIGNvbG9yOiAjNjE2MTYxOyB9XG5cbiNjYXJ0X3NlY3Rpb24gLmNvbGxhcHNlVGFibGVSZXNwb25zaXZlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4jY2FydF9zZWN0aW9uIHRhYmxlI3RhYmxlQ2FydCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDYwMHB4OyB9XG4gICNjYXJ0X3NlY3Rpb24gdGFibGUjdGFibGVDYXJ0IHRoZWFkIHtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCAtMXB4ICNjY2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDsgfVxuICAgICNjYXJ0X3NlY3Rpb24gdGFibGUjdGFibGVDYXJ0IHRoZWFkIHRoIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgICNjYXJ0X3NlY3Rpb24gdGFibGUjdGFibGVDYXJ0IHRoZWFkIHRoOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7IH1cbiAgICAjY2FydF9zZWN0aW9uIHRhYmxlI3RhYmxlQ2FydCB0aGVhZCB0aDpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgICAjY2FydF9zZWN0aW9uIHRhYmxlI3RhYmxlQ2FydCB0aGVhZCB0aDpsYXN0LWNoaWxkIGJ1dHRvbiB7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5RjM4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAjY2FydF9zZWN0aW9uIHRhYmxlI3RhYmxlQ2FydCB0Ym9keSB0ciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggLTJweCAjY2NjOyB9XG4gICAgI2NhcnRfc2VjdGlvbiB0YWJsZSN0YWJsZUNhcnQgdGJvZHkgdHIgdGQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTBweDsgfVxuICAgICAgI2NhcnRfc2VjdGlvbiB0YWJsZSN0YWJsZUNhcnQgdGJvZHkgdHIgdGQ6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzsgfVxuICAgICAgI2NhcnRfc2VjdGlvbiB0YWJsZSN0YWJsZUNhcnQgdGJvZHkgdHIgdGQgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjBweDsgfVxuICAgICAgI2NhcnRfc2VjdGlvbiB0YWJsZSN0YWJsZUNhcnQgdGJvZHkgdHIgdGQgLmxuci1jcm9zcyB7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0NDMzNjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgICNjYXJ0X3NlY3Rpb24gdGFibGUjdGFibGVDYXJ0IHRib2R5IHRyIHRkIC5hZGQtYW5kLXJlbW92ZSAuY291bnRQcm9kdWN0cyB7XG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHg7IH1cbiAgICAgICNjYXJ0X3NlY3Rpb24gdGFibGUjdGFibGVDYXJ0IHRib2R5IHRyIHRkIC5hZGQtYW5kLXJlbW92ZSAubWludXNDYXJ0LCAjY2FydF9zZWN0aW9uIHRhYmxlI3RhYmxlQ2FydCB0Ym9keSB0ciB0ZCAuYWRkLWFuZC1yZW1vdmUgLnBsdXNDYXJ0IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAjY2FydF9zZWN0aW9uIHRhYmxlI3RhYmxlQ2FydCB0Ym9keSB0ciB0ZDpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cblxuI2NhcnRfc2VjdGlvbiAucGFnaW5hdGlvbkNhcnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cbiAgI2NhcnRfc2VjdGlvbiAucGFnaW5hdGlvbkNhcnQgYSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBjb2xvcjogIzAwMDtcbiAgICBtYXJnaW46IDVweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICNjYXJ0X3NlY3Rpb24gLnBhZ2luYXRpb25DYXJ0IC5hY3RpdmVQYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5RjM4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ODlGMzg7IH1cblxuI2NhcnRfc2VjdGlvbiAudG90YWxBbW91bnQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luOiAxMHB4OyB9XG4iLCIgXHJcbkBpbXBvcnQgJy4uLy4uLy4uL2dsb2JhbFNDU1MvZXh0ZW5kcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2dsb2JhbFNDU1MvZ2xvYmFsU0NTUyc7XHJcblxyXG4jY2FydF9zZWN0aW9ue1xyXG4gICAgXHJcbiAgICAudG9wLWRpcmVjdGlvbntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIC5kaWNyZWN0aW9uLXBhdGh7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoaWdoV2F5Qkc7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRhcms7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIDVweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLCu1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb2xsYXBzZVRhYmxlUmVzcG9uc2l2ZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAgIH1cclxuICAgIHRhYmxlI3RhYmxlQ2FydCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2MDBweDtcclxuICAgICAgICB0aGVhZHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzowcHggMnB4IDNweCAtMXB4ICNjY2M7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICAgICAgICAgIHRoe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGJvZHl7XHJcbiAgICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IC0ycHggI2NjYztcclxuICAgICAgICAgICAgICAgIHRke1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAubG5yLWNyb3Nze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6JHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGQtYW5kLXJlbW92ZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvdW50UHJvZHVjdHN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5taW51c0NhcnQsIC5wbHVzQ2FydHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRkOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucGFnaW5hdGlvbkNhcnR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3RpdmVQYWdle1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JlZW5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudG90YWxBbW91bnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxufSIsIiRncmVlbjojNjg5RjM4O1xyXG4kZ3JlZW5EYXJrOiM1MDhjMWM7XHJcbiRncmVlblJHQkE6IzY4OWYzODhjO1xyXG4kZGlzYWJsZWRCdXR0b246IzliYTI5NTtcclxuJGhpZ2hXYXlCRzojRjJGMkYyO1xyXG4kZGFyazojMjYyNjI2O1xyXG4kZ3JleTojNjE2MTYxO1xyXG4kcmVkOiAjRjQ0MzM2O1xyXG4keWVsbG93OiAjRkJDMDJEO1xyXG5cclxuJGNvbDogXCIobWF4LXdpZHRoOiA1NzZweClcIjtcclxuJHNtLWRldmljZU1heDogXCIobWF4LXdpZHRoOiA3NjdweClcIjtcclxuJHNtLWRldmljZTogXCIobWF4LXdpZHRoOiA3NjdweCkgYW5kIChtaW4td2lkdGg6NTc3cHgpXCI7XHJcbiRtZC1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogOTkxcHgpXCI7XHJcbiRtZC1kZXZpY2U6IFwiKG1heC13aWR0aDogOTkxcHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KVwiO1xyXG4kbGctZGV2aWNlOiBcIihtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6OTkycHgpXCI7XHJcbiR4bC1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogMTIwMHB4KVwiO1xyXG4keGwtZGV2aWNlOiBcIihtaW4td2lkdGg6IDEyMDFweClcIjsiXX0= */"

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartComponent = /** @class */ (function () {
    function CartComponent() {
        this.dataCart = [];
        this.pageinationCount = 5;
        this.totalPrices = 0;
        this.pageItemsEnd = this.pageinationCount;
        this.countPageinationLength = 0;
        this.dataCart = [
            { img: 'prod1.png', name: 'Product 1', price: '200.00', countProduct: 1 },
            { img: 'prod2.png', name: 'Product 2', price: '300.00', countProduct: 1 },
            { img: 'prod3.png', name: 'Product 3', price: '230.00', countProduct: 2 },
            { img: 'prod4.png', name: 'Product 4', price: '340.00', countProduct: 1 },
            { img: 'prod5.png', name: 'Product 5', price: '210.00', countProduct: 1 },
            { img: 'prod6.png', name: 'Product 6', price: '290.00', countProduct: 1 },
            { img: 'prod1.png', name: 'Product 7', price: '200.00', countProduct: 1 },
            { img: 'prod2.png', name: 'Product 8', price: '300.00', countProduct: 1 },
            { img: 'prod3.png', name: 'Product 9', price: '230.00', countProduct: 2 },
            { img: 'prod4.png', name: 'Product 10', price: '340.00', countProduct: 1 },
            { img: 'prod5.png', name: 'Product 11', price: '210.00', countProduct: 1 },
            { img: 'prod6.png', name: 'Product 12', price: '290.00', countProduct: 1 }
        ];
        this.countPageinationLength = Math.ceil(this.dataCart.length / this.pageinationCount);
    }
    CartComponent.prototype.totalPrice = function () {
        var _this = this;
        this.totalPrices = 0;
        Array.prototype.map.call(this.dataCart, function (elem) {
            _this.totalPrices += Number(elem.price * elem.countProduct);
        });
    };
    CartComponent.prototype.ngOnInit = function () {
        this.totalPrice();
    };
    CartComponent.prototype.pageClick = function (index) {
        Array.prototype.map.call(this.pageElement.nativeElement.children, function (elem) {
            elem.classList.remove('activePage');
        });
        this.pageElement.nativeElement.children[index].classList.add('activePage');
        this.pageItemsEnd = ((index + 1) * this.pageinationCount);
        setTimeout(function () {
            window.scrollTo({
                top: document.querySelector("#tableCart").getBoundingClientRect().top,
                behavior: "smooth"
            });
        }, 200);
    };
    CartComponent.prototype.minusCartItem = function (event, index) {
        if (this.dataCart[index].countProduct > 1) {
            this.dataCart[index].countProduct--;
        }
        this.totalPrice();
    };
    CartComponent.prototype.plusCartItem = function (event, index) {
        this.dataCart[index].countProduct++;
        this.totalPrice();
    };
    CartComponent.prototype.deleteItem = function (item, index) {
        this.dataCart.splice(index, 1);
        this.countPageinationLength = Math.ceil(this.dataCart.length / this.pageinationCount);
        if (this.dataCart.length == this.pageItemsEnd - this.pageinationCount && this.dataCart.length > 0) {
            this.pageItemsEnd = this.pageItemsEnd - this.pageinationCount;
            this.pageElement.nativeElement.children[(this.pageItemsEnd / this.pageinationCount) - 1].classList.add('activePage');
        }
        this.totalPrice();
    };
    CartComponent.prototype.deleteAllItems = function () {
        this.countPageinationLength = 0;
        this.dataCart = [];
        this.totalPrices = 0;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pageElement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CartComponent.prototype, "pageElement", void 0);
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/components/cart/cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"top-direction\">\n                    <div class=\"dicrection-path\">\n                        <a routerLink=\"/home\"><span class=\"lnr lnr-home\"></span>{{'header.navBar.button1' | translate}}</a>\n                        <span>{{'header.navBar.button4' | translate}}</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12\">\n                <div class=\"common-section-form\">\n                    <div class=\"parts-form-top\">\n                        <div class=\"row\">\n                            <div class=\"col-12 col-sm-4 parts-contact-info\">\n                                <img src=\"./assets/img/contact/icon1.png\" class=\"img-fluid\">\n                                <b>{{'contactUs.iconTxt1' | translate}}</b>\n                                <p>{{'footer.address' | translate}}</p>\n                            </div>\n                            <div class=\"col-12 col-sm-4 parts-contact-info\">\n                                <img src=\"./assets/img/contact/icon2.png\" class=\"img-fluid\">\n                                <b>{{'contactUs.iconTxt2' | translate}}</b>\n                                <p><a href=\"tel:(212)4572308\">(212) 457-2308</a></p>\n                                <p><a href=\"tel:(212)4572309\">(212) 457-2309</a></p>\n                            </div>\n                            <div class=\"col-12 col-sm-4 parts-contact-info\">\n                                <img src=\"./assets/img/contact/icon3.png\" class=\"img-fluid\">\n                                <b>{{'contactUs.iconTxt3' | translate}}</b>\n                                <p><a href=\"emailto:contact@framshop.com\">contact@fram-shop.com</a></p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"parts-form-bottom\">\n                        <h3 class=\"mt-2 mb-2 text-center\">{{'header.navBar.button4' | translate}}</h3>\n                        <form action=\"\" id=\"sendMessageForm\">\n                            <div class=\"first-row\">\n                                <div class=\"inputs-wrap\">\n                                    <input type=\"text\" name=\"nameUser\" (focusout)=\"labelScaleOut()\" (focus)=\"labelScale()\"id=\"name-input\" required>\n                                    <label (click)=\"focusInput($event)\" for=\"name-input\">{{'contactUs.form.name' | translate}}</label>\n                                </div>\n                                <div class=\"inputs-wrap\">\n                                    <input type=\"text\"  name=\"emailUser\" (focusout)=\"labelScaleOut()\" (focus)=\"labelScale()\" id=\"email-input\" required>\n                                    <label (click)=\"focusInput($event)\" for=\"email-input\">{{'contactUs.form.email' | translate}}</label>\n                                </div>\n                                <div class=\"inputs-wrap\">\n                                    <input type=\"text\"  name=\"phoneUser\" (keypress)=\"onlyNumber($event)\" (focusout)=\"labelScaleOut()\" (focus)=\"labelScale()\"id=\"phone-input\" required>\n                                    <label (click)=\"focusInput($event)\" for=\"phone-input\">{{'contactUs.form.phone' | translate}}</label>\n                                </div>\n                            </div>\n                            <div class=\"second-row\">\n                                <div class=\"inputs-wrap\">\n                                    <input type=\"text\" (focusout)=\"labelScaleOut()\" (focus)=\"labelScale()\"id=\"message-input\" required>\n                                    <label (click)=\"focusInput($event)\" for=\"message-input\">{{'contactUs.form.message' | translate}}</label>\n                                </div>\n                            </div>\n                            <input type=\"submit\" class=\"send-msg-button\" value=\"{{'contactUs.submit' | translate}}\">\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>  "

/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n#contact {\n  margin-top: 20px; }\n#contact .top-direction {\n    margin-bottom: 20px; }\n#contact .top-direction .dicrection-path {\n      padding: 10px;\n      background-color: #F2F2F2; }\n#contact .top-direction .dicrection-path a {\n        text-decoration: none;\n        color: #262626;\n        position: relative; }\n#contact .top-direction .dicrection-path a:after {\n          margin: 0 5px;\n          position: relative;\n          content: \"»\"; }\n#contact .top-direction .dicrection-path a span {\n          margin-right: 3px; }\n#contact .top-direction .dicrection-path span {\n        color: #616161; }\n#contact .common-section-form {\n    padding: 20px 10px;\n    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n    background-color: #fff; }\n#contact .common-section-form .parts-form-top {\n      padding-bottom: 10px;\n      border-bottom: 1px solid #ccc; }\n#contact .common-section-form .parts-form-top .parts-contact-info {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        color: #616161; }\n#contact .common-section-form .parts-form-top .parts-contact-info a {\n          color: #616161;\n          text-decoration: none; }\n#contact .common-section-form .parts-form-top .parts-contact-info b {\n          padding: 10px 0; }\n#contact .common-section-form .parts-form-top .parts-contact-info p {\n          text-align: center;\n          margin-bottom: 0; }\n#contact .common-section-form .parts-form-bottom {\n      padding-top: 20px; }\n#contact .common-section-form .parts-form-bottom #sendMessageForm {\n        padding: 25px 0;\n        width: 60%;\n        margin: auto; }\n#contact .common-section-form .parts-form-bottom #sendMessageForm > div {\n          margin-bottom: 45px;\n          display: flex;\n          justify-content: space-between; }\n#contact .common-section-form .parts-form-bottom #sendMessageForm > div .focus-element label {\n            font-size: 12px;\n            top: -15px !important; }\n#contact .common-section-form .parts-form-bottom #sendMessageForm > div .focus-element:before {\n            width: calc(100% - 10px) !important; }\n#contact .common-section-form .parts-form-bottom #sendMessageForm > div .inputs-wrap {\n            width: 100%;\n            padding: 0 10px;\n            position: relative; }\n#contact .common-section-form .parts-form-bottom #sendMessageForm > div .inputs-wrap:before {\n              transition: .4s;\n              position: absolute;\n              left: 0;\n              right: 0;\n              content: \"\";\n              margin: auto;\n              width: 0;\n              height: 2px;\n              background-color: #689F38;\n              bottom: -10px; }\n#contact .common-section-form .parts-form-bottom #sendMessageForm > div .inputs-wrap:after {\n              position: absolute;\n              left: 0;\n              right: 0;\n              content: \"\";\n              margin: auto;\n              width: calc(100% - 10px);\n              height: 0.8px;\n              background-color: #689F38;\n              bottom: -9px; }\n#contact .common-section-form .parts-form-bottom #sendMessageForm > div .inputs-wrap input {\n              width: 100%;\n              border: none;\n              outline: none; }\n#contact .common-section-form .parts-form-bottom #sendMessageForm > div .inputs-wrap label {\n              position: absolute;\n              bottom: 0;\n              left: 15px;\n              margin-bottom: 0;\n              top: 0;\n              margin: auto;\n              color: #a29e9e;\n              cursor: auto;\n              transition: .4s; }\n#contact .common-section-form .parts-form-bottom #sendMessageForm .send-msg-button {\n          box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          cursor: pointer;\n          background-color: #689F38;\n          color: #fff;\n          border: none;\n          padding: 5px 10px;\n          border-radius: 3px;\n          transition: .4s;\n          margin: auto;\n          display: block; }\n#contact .common-section-form .parts-form-bottom #sendMessageForm .send-msg-button:hover {\n            background-color: #689f388c; }\n@media (max-width: 991px) and (min-width: 768px) {\n  #contact .common-section-form .parts-form-bottom #sendMessageForm {\n    width: 90%; } }\n@media (max-width: 767px) {\n  #contact .common-section-form .parts-form-top .parts-contact-info {\n    margin-bottom: 10px; }\n  #contact .common-section-form .parts-form-bottom #sendMessageForm {\n    width: 100%; }\n    #contact .common-section-form .parts-form-bottom #sendMessageForm .inputs-wrap:after {\n      bottom: -10px !important; } }\n@media (max-width: 576px) {\n  #contact .common-section-form .parts-form-bottom #sendMessageForm .first-row {\n    flex-direction: column;\n    margin-bottom: 0; }\n    #contact .common-section-form .parts-form-bottom #sendMessageForm .first-row .inputs-wrap {\n      margin-bottom: 45px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxnbG9iYWxTQ1NTXFxnbG9iYWxTQ1NTLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDR2pCO0VBQ0ksaUJBQWdCLEVBb0luQjtBQXJJRDtJQUdRLG9CQUFtQixFQXNCdEI7QUF6Qkw7TUFLWSxjQUFhO01BQ2IsMEJDTE0sRUR1QlQ7QUF4QlQ7UUFRZ0Isc0JBQXFCO1FBQ3JCLGVDUEg7UURRRyxtQkFBa0IsRUFTckI7QUFuQmI7VUFZb0IsY0FBWTtVQUNaLG1CQUFrQjtVQUNsQixhQUFZLEVBQ2Y7QUFmakI7VUFpQm9CLGtCQUFpQixFQUNwQjtBQWxCakI7UUFxQmdCLGVDbEJILEVEbUJBO0FBdEJiO0lBMkJRLG1CQUFrQjtJQUNsQixnSEFBbUc7SUFDbkcsdUJBQXNCLEVBdUd6QjtBQXBJTDtNQStCWSxxQkFBb0I7TUFDcEIsOEJBQTZCLEVBa0JoQztBQWxEVDtRQWtDZ0IsY0FBYTtRQUNiLHVCQUFzQjtRQUN0QixvQkFBbUI7UUFZbkIsZUM3Q0gsRUQ4Q0E7QUFqRGI7VUFzQ29CLGVDbkNQO1VEb0NPLHNCQUFxQixFQUN4QjtBQXhDakI7VUEwQ29CLGdCQUFlLEVBQ2xCO0FBM0NqQjtVQTZDb0IsbUJBQWtCO1VBQ2xCLGlCQUFnQixFQUNuQjtBQS9DakI7TUFvRFksa0JBQWlCLEVBK0VwQjtBQW5JVDtRQXNEZ0IsZ0JBQWU7UUFDZixXQUFVO1FBQ1YsYUFBWSxFQTBFZjtBQWxJYjtVQTBEb0Isb0JBQW1CO1VBQ25CLGNBQWE7VUFDYiwrQkFBOEIsRUFzRGpDO0FBbEhqQjtZQStENEIsZ0JBQWU7WUFDZixzQkFBcUIsRUFDeEI7QUFqRXpCO1lBbUU0QixvQ0FBbUMsRUFDdEM7QUFwRXpCO1lBdUV3QixZQUFXO1lBQ1gsZ0JBQWM7WUFDZCxtQkFBa0IsRUF3Q3JCO0FBakhyQjtjQTJFNEIsZ0JBQWU7Y0FDZixtQkFBa0I7Y0FDbEIsUUFBTztjQUNQLFNBQVE7Y0FDUixZQUFXO2NBQ1gsYUFBWTtjQUNaLFNBQVE7Y0FDUixZQUFXO2NBQ1gsMEJBQXlCO2NBQ3pCLGNBQWEsRUFDaEI7QUFyRnpCO2NBdUY0QixtQkFBa0I7Y0FDbEIsUUFBTztjQUNQLFNBQVE7Y0FDUixZQUFXO2NBQ1gsYUFBWTtjQUNaLHlCQUF3QjtjQUN4QixjQUFhO2NBQ2IsMEJDakdkO2NEa0djLGFBQVksRUFDZjtBQWhHekI7Y0FrRzRCLFlBQVc7Y0FDWCxhQUFZO2NBQ1osY0FBYSxFQUNoQjtBQXJHekI7Y0F1RzRCLG1CQUFrQjtjQUNsQixVQUFTO2NBQ1QsV0FBUztjQUNULGlCQUFnQjtjQUNoQixPQUFNO2NBQ04sYUFBWTtjQUNaLGVBQWM7Y0FDZCxhQUFZO2NBQ1osZ0JBQWUsRUFDbEI7QUFoSHpCO1VBb0hvQixnSEFBa0c7VUFDbEcsZ0JBQWU7VUFDZiwwQkN6SE47VUQwSE0sWUFBVztVQUNYLGFBQVk7VUFDWixrQkFBaUI7VUFDakIsbUJBQWtCO1VBQ2xCLGdCQUFlO1VBQ2YsYUFBWTtVQUNaLGVBQWMsRUFJakI7QUFqSWpCO1lBK0h3Qiw0QkNoSUosRURpSUM7QUFNckI7RUFDSTtJQUlnQixXQUFVLEVBQ2IsRUFBQTtBQUtqQjtFQUNJO0lBSWdCLG9CQUFtQixFQUN0QjtFQUxiO0lBU2dCLFlBQVcsRUFNZDtJQWZiO01BWXdCLHlCQUF3QixFQUMzQixFQUFBO0FBT3pCO0VBQ0k7SUFLb0IsdUJBQXNCO0lBQ3RCLGlCQUFnQixFQUluQjtJQVZqQjtNQVF3QixvQkFBbUIsRUFDckIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuI2NvbnRhY3Qge1xuICBtYXJnaW4tdG9wOiAyMHB4OyB9XG4gICNjb250YWN0IC50b3AtZGlyZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG4gICAgI2NvbnRhY3QgLnRvcC1kaXJlY3Rpb24gLmRpY3JlY3Rpb24tcGF0aCB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjsgfVxuICAgICAgI2NvbnRhY3QgLnRvcC1kaXJlY3Rpb24gLmRpY3JlY3Rpb24tcGF0aCBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzI2MjYyNjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAgICNjb250YWN0IC50b3AtZGlyZWN0aW9uIC5kaWNyZWN0aW9uLXBhdGggYTphZnRlciB7XG4gICAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgY29udGVudDogXCLCu1wiOyB9XG4gICAgICAgICNjb250YWN0IC50b3AtZGlyZWN0aW9uIC5kaWNyZWN0aW9uLXBhdGggYSBzcGFuIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDsgfVxuICAgICAgI2NvbnRhY3QgLnRvcC1kaXJlY3Rpb24gLmRpY3JlY3Rpb24tcGF0aCBzcGFuIHtcbiAgICAgICAgY29sb3I6ICM2MTYxNjE7IH1cbiAgI2NvbnRhY3QgLmNvbW1vbi1zZWN0aW9uLWZvcm0ge1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuICAgICNjb250YWN0IC5jb21tb24tc2VjdGlvbi1mb3JtIC5wYXJ0cy1mb3JtLXRvcCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjOyB9XG4gICAgICAjY29udGFjdCAuY29tbW9uLXNlY3Rpb24tZm9ybSAucGFydHMtZm9ybS10b3AgLnBhcnRzLWNvbnRhY3QtaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjNjE2MTYxOyB9XG4gICAgICAgICNjb250YWN0IC5jb21tb24tc2VjdGlvbi1mb3JtIC5wYXJ0cy1mb3JtLXRvcCAucGFydHMtY29udGFjdC1pbmZvIGEge1xuICAgICAgICAgIGNvbG9yOiAjNjE2MTYxO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgICAgICAjY29udGFjdCAuY29tbW9uLXNlY3Rpb24tZm9ybSAucGFydHMtZm9ybS10b3AgLnBhcnRzLWNvbnRhY3QtaW5mbyBiIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7IH1cbiAgICAgICAgI2NvbnRhY3QgLmNvbW1vbi1zZWN0aW9uLWZvcm0gLnBhcnRzLWZvcm0tdG9wIC5wYXJ0cy1jb250YWN0LWluZm8gcCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cbiAgICAjY29udGFjdCAuY29tbW9uLXNlY3Rpb24tZm9ybSAucGFydHMtZm9ybS1ib3R0b20ge1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7IH1cbiAgICAgICNjb250YWN0IC5jb21tb24tc2VjdGlvbi1mb3JtIC5wYXJ0cy1mb3JtLWJvdHRvbSAjc2VuZE1lc3NhZ2VGb3JtIHtcbiAgICAgICAgcGFkZGluZzogMjVweCAwO1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBtYXJnaW46IGF1dG87IH1cbiAgICAgICAgI2NvbnRhY3QgLmNvbW1vbi1zZWN0aW9uLWZvcm0gLnBhcnRzLWZvcm0tYm90dG9tICNzZW5kTWVzc2FnZUZvcm0gPiBkaXYge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cbiAgICAgICAgICAjY29udGFjdCAuY29tbW9uLXNlY3Rpb24tZm9ybSAucGFydHMtZm9ybS1ib3R0b20gI3NlbmRNZXNzYWdlRm9ybSA+IGRpdiAuZm9jdXMtZWxlbWVudCBsYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB0b3A6IC0xNXB4ICFpbXBvcnRhbnQ7IH1cbiAgICAgICAgICAjY29udGFjdCAuY29tbW9uLXNlY3Rpb24tZm9ybSAucGFydHMtZm9ybS1ib3R0b20gI3NlbmRNZXNzYWdlRm9ybSA+IGRpdiAuZm9jdXMtZWxlbWVudDpiZWZvcmUge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpICFpbXBvcnRhbnQ7IH1cbiAgICAgICAgICAjY29udGFjdCAuY29tbW9uLXNlY3Rpb24tZm9ybSAucGFydHMtZm9ybS1ib3R0b20gI3NlbmRNZXNzYWdlRm9ybSA+IGRpdiAuaW5wdXRzLXdyYXAge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgICAgICAgICNjb250YWN0IC5jb21tb24tc2VjdGlvbi1mb3JtIC5wYXJ0cy1mb3JtLWJvdHRvbSAjc2VuZE1lc3NhZ2VGb3JtID4gZGl2IC5pbnB1dHMtd3JhcDpiZWZvcmUge1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5RjM4O1xuICAgICAgICAgICAgICBib3R0b206IC0xMHB4OyB9XG4gICAgICAgICAgICAjY29udGFjdCAuY29tbW9uLXNlY3Rpb24tZm9ybSAucGFydHMtZm9ybS1ib3R0b20gI3NlbmRNZXNzYWdlRm9ybSA+IGRpdiAuaW5wdXRzLXdyYXA6YWZ0ZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAwLjhweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY4OUYzODtcbiAgICAgICAgICAgICAgYm90dG9tOiAtOXB4OyB9XG4gICAgICAgICAgICAjY29udGFjdCAuY29tbW9uLXNlY3Rpb24tZm9ybSAucGFydHMtZm9ybS1ib3R0b20gI3NlbmRNZXNzYWdlRm9ybSA+IGRpdiAuaW5wdXRzLXdyYXAgaW5wdXQge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAgICAgICAjY29udGFjdCAuY29tbW9uLXNlY3Rpb24tZm9ybSAucGFydHMtZm9ybS1ib3R0b20gI3NlbmRNZXNzYWdlRm9ybSA+IGRpdiAuaW5wdXRzLXdyYXAgbGFiZWwge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIGNvbG9yOiAjYTI5ZTllO1xuICAgICAgICAgICAgICBjdXJzb3I6IGF1dG87XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IC40czsgfVxuICAgICAgICAjY29udGFjdCAuY29tbW9uLXNlY3Rpb24tZm9ybSAucGFydHMtZm9ybS1ib3R0b20gI3NlbmRNZXNzYWdlRm9ybSAuc2VuZC1tc2ctYnV0dG9uIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2ODlGMzg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgICAgICAgI2NvbnRhY3QgLmNvbW1vbi1zZWN0aW9uLWZvcm0gLnBhcnRzLWZvcm0tYm90dG9tICNzZW5kTWVzc2FnZUZvcm0gLnNlbmQtbXNnLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZjM4OGM7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgI2NvbnRhY3QgLmNvbW1vbi1zZWN0aW9uLWZvcm0gLnBhcnRzLWZvcm0tYm90dG9tICNzZW5kTWVzc2FnZUZvcm0ge1xuICAgIHdpZHRoOiA5MCU7IH0gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgI2NvbnRhY3QgLmNvbW1vbi1zZWN0aW9uLWZvcm0gLnBhcnRzLWZvcm0tdG9wIC5wYXJ0cy1jb250YWN0LWluZm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbiAgI2NvbnRhY3QgLmNvbW1vbi1zZWN0aW9uLWZvcm0gLnBhcnRzLWZvcm0tYm90dG9tICNzZW5kTWVzc2FnZUZvcm0ge1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgI2NvbnRhY3QgLmNvbW1vbi1zZWN0aW9uLWZvcm0gLnBhcnRzLWZvcm0tYm90dG9tICNzZW5kTWVzc2FnZUZvcm0gLmlucHV0cy13cmFwOmFmdGVyIHtcbiAgICAgIGJvdHRvbTogLTEwcHggIWltcG9ydGFudDsgfSB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAjY29udGFjdCAuY29tbW9uLXNlY3Rpb24tZm9ybSAucGFydHMtZm9ybS1ib3R0b20gI3NlbmRNZXNzYWdlRm9ybSAuZmlyc3Qtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1ib3R0b206IDA7IH1cbiAgICAjY29udGFjdCAuY29tbW9uLXNlY3Rpb24tZm9ybSAucGFydHMtZm9ybS1ib3R0b20gI3NlbmRNZXNzYWdlRm9ybSAuZmlyc3Qtcm93IC5pbnB1dHMtd3JhcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0NXB4OyB9IH1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL2dsb2JhbFNDU1MvZXh0ZW5kcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2dsb2JhbFNDU1MvZ2xvYmFsU0NTUyc7XHJcblxyXG4jY29udGFjdHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAudG9wLWRpcmVjdGlvbntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIC5kaWNyZWN0aW9uLXBhdGh7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoaWdoV2F5Qkc7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRhcms7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIDVweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLCu1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb21tb24tc2VjdGlvbi1mb3Jte1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAucGFydHMtZm9ybS10b3B7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgLnBhcnRzLWNvbnRhY3QtaW5mb3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucGFydHMtZm9ybS1ib3R0b217XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAjc2VuZE1lc3NhZ2VGb3Jte1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgID4gZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgLmZvY3VzLWVsZW1lbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmlucHV0cy13cmFwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2ODlGMzg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IC0xMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwLjhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6MTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2EyOWU5ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zZW5kLW1zZy1idXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzowIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6JGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW5SR0JBO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgI3skbWQtZGV2aWNlfXtcclxuICAgICNjb250YWN0e1xyXG4gICAgICAgIC5jb21tb24tc2VjdGlvbi1mb3Jte1xyXG4gICAgICAgICAgICAucGFydHMtZm9ybS1ib3R0b217XHJcbiAgICAgICAgICAgICAgICAjc2VuZE1lc3NhZ2VGb3Jte1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhICN7JHNtLWRldmljZU1heH17XHJcbiAgICAjY29udGFjdHtcclxuICAgICAgICAuY29tbW9uLXNlY3Rpb24tZm9ybXtcclxuICAgICAgICAgICAgLnBhcnRzLWZvcm0tdG9we1xyXG4gICAgICAgICAgICAgICAgLnBhcnRzLWNvbnRhY3QtaW5mb3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wYXJ0cy1mb3JtLWJvdHRvbXtcclxuICAgICAgICAgICAgICAgICNzZW5kTWVzc2FnZUZvcm17XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLmlucHV0cy13cmFwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAjeyRjb2x9e1xyXG4gICAgI2NvbnRhY3R7XHJcbiAgICAgICAgLmNvbW1vbi1zZWN0aW9uLWZvcm17XHJcbiAgICAgICAgICAgIC5wYXJ0cy1mb3JtLWJvdHRvbXtcclxuICAgICAgICAgICAgICAgICNzZW5kTWVzc2FnZUZvcm17XHJcbiAgICAgICAgICAgICAgICAgICAgLmZpcnN0LXJvd3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0cy13cmFwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkZ3JlZW46IzY4OUYzODtcclxuJGdyZWVuRGFyazojNTA4YzFjO1xyXG4kZ3JlZW5SR0JBOiM2ODlmMzg4YztcclxuJGRpc2FibGVkQnV0dG9uOiM5YmEyOTU7XHJcbiRoaWdoV2F5Qkc6I0YyRjJGMjtcclxuJGRhcms6IzI2MjYyNjtcclxuJGdyZXk6IzYxNjE2MTtcclxuJHJlZDogI0Y0NDMzNjtcclxuJHllbGxvdzogI0ZCQzAyRDtcclxuXHJcbiRjb2w6IFwiKG1heC13aWR0aDogNTc2cHgpXCI7XHJcbiRzbS1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogNzY3cHgpXCI7XHJcbiRzbS1kZXZpY2U6IFwiKG1heC13aWR0aDogNzY3cHgpIGFuZCAobWluLXdpZHRoOjU3N3B4KVwiO1xyXG4kbWQtZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDk5MXB4KVwiO1xyXG4kbWQtZGV2aWNlOiBcIihtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDo3NjhweClcIjtcclxuJGxnLWRldmljZTogXCIobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOjk5MnB4KVwiO1xyXG4keGwtZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDEyMDBweClcIjtcclxuJHhsLWRldmljZTogXCIobWluLXdpZHRoOiAxMjAxcHgpXCI7Il19 */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.findElement = function (parentElement, findElem) {
        var _parent = parentElement, _childArr = [];
        function recursionFind(parent) {
            if (parent.children) {
                for (var i = 0; i < parent.children.length; i++) {
                    if (parent.children[i].classList.contains(findElem)
                        || parent.children[i].tagName == findElem.toUpperCase()
                        || parent.children[i].getAttribute('id') == findElem) {
                        _childArr.push(parent.children[i]);
                    }
                    else {
                        recursionFind(parent.children[i]);
                    }
                }
            }
        }
        recursionFind(_parent);
        return _childArr;
    };
    ContactComponent.prototype.getParent = function (target, limitParent) {
        limitParent = (limitParent == "") ? document.querySelector("body") : limitParent;
        function conains(_elem, limitParent) {
            var result = null;
            result = _elem.className.split(" ").find(function (elem, ind) {
                return elem == limitParent;
            });
            return result;
        }
        for (var _e = target, _parent = []; _e && _e !== document; _e = _e.parentNode) {
            if (!conains(_e, limitParent)) {
                _parent.push(_e);
            }
            else {
                _parent.push(_e);
                break;
            }
        }
        return _parent[_parent.length - 1];
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.focusInput = function (event) {
        this.inputFocus = this.findElement(this.getParent(event.target, "inputs-wrap"), 'input')[0];
        this.inputFocus.focus();
    };
    ContactComponent.prototype.labelScale = function () {
        this.getParent(event.target, "inputs-wrap").classList.add("focus-element");
    };
    ContactComponent.prototype.labelScaleOut = function () {
        this.inputFocus = this.findElement(this.getParent(event.target, "inputs-wrap"), 'input')[0];
        if (this.inputFocus.value == "") {
            this.getParent(event.target, "inputs-wrap").classList.remove("focus-element");
        }
    };
    ContactComponent.prototype.onlyNumber = function (evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"mt-3\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-sm-6 col-md-3\">\n                <div class=\"part_footer\">\n                    <h3>{{ 'footer.title1' | translate}}</h3>\n                    <ul type=\"none\">\n                        <li>\n                            <a routerLink=\"/home\">{{ 'header.navBar.button1' | translate }}</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/about-us\">{{ 'header.navBar.button3' | translate }}</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/contact\">{{ 'header.navBar.button4' | translate }}</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/partners\">{{ 'header.navBar.button5' | translate }}</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/gallery\">{{ 'header.navBar.button6' | translate }}</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-md-3\">\n                <div class=\"part_footer\">\n                    <h3>{{ 'footer.title2' | translate}}</h3>\n                    <ul type=\"none\">\n                        <li>\n                            <span>\n                                <i class=\"lnr lnr-map-marker\"></i>\n                                <a href=\"javascript:void(0)\">{{'footer.address' | translate}}</a>\n                            </span>\n                        </li>\n                        <li>\n                            <span>\n                                <i class=\"lnr lnr-phone-handset\"></i>\n                                <a href=\"tel:+37494129604\" > (+374) 94 12-96-04</a>\n                            </span>\n                        </li>\n                        <li>\n                            <span>\n                                <i class=\"lnr lnr-history\"></i>\n                                <a href=\"javascript:void(0)\" >{{ 'footer.workingDays' | translate}}</a>\n                            </span>\n                        </li>\n                        <li>\n                            <span>\n                                <i class=\"lnr lnr-envelope\"></i>\n                                <a href=\"mailto:contact@fram-shop.com\"  target=\"_top\">contact@fram-shop.com</a>\n                            </span>\n                        </li>\n                        \n                        \n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-12 col-md-6\">\n                <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193747.6573470243!2d-74.08508191621037!3d40.64515936305116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C+NY!5e0!3m2!1sen!2s!4v1546021139402\" width=\"100%\" height=\"100%\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n    <div class=\"bottom_panel\">\n        <div class=\"container\">\n            <p>{{ 'footer.copyRight' | translate:copyYear}}</p>\n            <p>{{ 'footer.development' | translate}} <a href=\"https://my-cv-ac336.firebaseapp.com\" target=\"_blank\">{{ 'footer.developer' | translate}}</a></p>\n        </div>\n        \n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background-color: #689F38;\n  padding: 25px 0px 0; }\n  footer .part_footer h3 {\n    color: #fff;\n    margin-bottom: 20px; }\n  footer .part_footer ul {\n    padding: 0; }\n  footer .part_footer ul li {\n      padding: 3px 0; }\n  footer .part_footer ul li a, footer .part_footer ul li span {\n        display: flex;\n        color: #fff;\n        text-decoration: none; }\n  footer .part_footer ul li a i, footer .part_footer ul li span i {\n          position: relative;\n          top: 3px;\n          margin-right: 10px; }\n  footer .bottom_panel {\n    padding: 10px;\n    background-color: #508c1c;\n    margin-top: 10px; }\n  footer .bottom_panel .container {\n      display: flex;\n      justify-content: space-between; }\n  footer .bottom_panel p {\n      font-size: 14px;\n      color: #fff;\n      margin-bottom: 0; }\n  footer .bottom_panel p a {\n        color: #3a3e42; }\n  @media (max-width: 1200px) and (min-width: 992px) {\n  footer .part_footer h3 {\n    font-size: 20px; } }\n  @media (max-width: 991px) {\n  .bottom_panel .container p {\n    font-size: 12px !important; } }\n  @media (max-width: 991px) and (min-width: 768px) {\n  footer .part_footer h3 {\n    font-size: 18px; } }\n  @media (max-width: 576px) {\n  .bottom_panel .container {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcZnJhbS1zaG9wL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcZnJhbS1zaG9wL3NyY1xcZ2xvYmFsU0NTU1xcZ2xvYmFsU0NTUy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksMEJDSlU7RURLVixvQkFBbUIsRUF3Q3RCO0VBMUNEO0lBS1ksWUFBVztJQUNYLG9CQUFtQixFQUN0QjtFQVBUO0lBU1ksV0FBVSxFQWNiO0VBdkJUO01BV2dCLGVBQWMsRUFXakI7RUF0QmI7UUFhb0IsY0FBYTtRQU1iLFlBQVc7UUFDWCxzQkFBcUIsRUFDeEI7RUFyQmpCO1VBZXdCLG1CQUFrQjtVQUNsQixTQUFRO1VBQ1IsbUJBQ0osRUFBQztFQWxCckI7SUEwQlEsY0FBYTtJQUNiLDBCQzdCVTtJRDhCVixpQkFBZ0IsRUFhbkI7RUF6Q0w7TUE4QlksY0FBYTtNQUNiLCtCQUE4QixFQUNqQztFQWhDVDtNQWtDWSxnQkFBZTtNQUNmLFlBQVc7TUFDWCxpQkFBZ0IsRUFJbkI7RUF4Q1Q7UUFzQ2dCLGVBQWMsRUFDakI7RUFJYjtFQUNJO0lBR1ksZ0JBQ0osRUFBQyxFQUFBO0VBSWI7RUFDSTtJQUdZLDJCQUF5QixFQUM1QixFQUFBO0VBSWI7RUFDSTtJQUdZLGdCQUNKLEVBQUMsRUFBQTtFQUliO0VBQ0k7SUFFUSxjQUFhO0lBQ2Isd0JBQXVCO0lBQ3ZCLHVCQUFzQjtJQUN0QixvQkFBbUIsRUFDdEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2dsb2JhbFNDU1MvZXh0ZW5kcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2dsb2JhbFNDU1MvZ2xvYmFsU0NTUyc7XHJcblxyXG5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgICBwYWRkaW5nOiAyNXB4IDBweCAwO1xyXG4gICAgLnBhcnRfZm9vdGVye1xyXG4gICAgICAgIGgze1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDA7XHJcbiAgICAgICAgICAgICAgICBhLCBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5ib3R0b21fcGFuZWx7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW5EYXJrO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzYTNlNDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhICN7JGxnLWRldmljZX17XHJcbiAgICBmb290ZXJ7XHJcbiAgICAgICAgLnBhcnRfZm9vdGVye1xyXG4gICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAjeyRtZC1kZXZpY2VNYXh9e1xyXG4gICAgLmJvdHRvbV9wYW5lbHtcclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjEycHggIWltcG9ydGFudDsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhICN7JG1kLWRldmljZX17XHJcbiAgICBmb290ZXJ7XHJcbiAgICAgICAgLnBhcnRfZm9vdGVye1xyXG4gICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAjeyRjb2x9e1xyXG4gICAgLmJvdHRvbV9wYW5lbHtcclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkZ3JlZW46IzY4OUYzODtcclxuJGdyZWVuRGFyazojNTA4YzFjO1xyXG4kZ3JlZW5SR0JBOiM2ODlmMzg4YztcclxuJGRpc2FibGVkQnV0dG9uOiM5YmEyOTU7XHJcbiRoaWdoV2F5Qkc6I0YyRjJGMjtcclxuJGRhcms6IzI2MjYyNjtcclxuJGdyZXk6IzYxNjE2MTtcclxuJHJlZDogI0Y0NDMzNjtcclxuJHllbGxvdzogI0ZCQzAyRDtcclxuXHJcbiRjb2w6IFwiKG1heC13aWR0aDogNTc2cHgpXCI7XHJcbiRzbS1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogNzY3cHgpXCI7XHJcbiRzbS1kZXZpY2U6IFwiKG1heC13aWR0aDogNzY3cHgpIGFuZCAobWluLXdpZHRoOjU3N3B4KVwiO1xyXG4kbWQtZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDk5MXB4KVwiO1xyXG4kbWQtZGV2aWNlOiBcIihtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDo3NjhweClcIjtcclxuJGxnLWRldmljZTogXCIobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOjk5MnB4KVwiO1xyXG4keGwtZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDEyMDBweClcIjtcclxuJHhsLWRldmljZTogXCIobWluLXdpZHRoOiAxMjAxcHgpXCI7Il19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.thisYear = null;
        this.copyYear = {};
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.thisYear = new Date().getUTCFullYear();
        this.copyYear["year"] = this.thisYear;
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"gallery\" class=\"mt-4\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"top-direction\">\n                    <div class=\"dicrection-path\">\n                        <a routerLink=\"/home\"><span class=\"lnr lnr-home\"></span> {{'header.navBar.button1' | translate}}</a>\n                        <span>{{'header.navBar.button6' | translate}}</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-4 col-md-3\">\n                <ul type=\"none\" class=\"categories-gallery\" #mainCatgories>\n                    <li *ngFor=\"let item of [\n                    'header.navBar.button2.childrens.all' | translate,\n                    'header.navBar.button2.childrens.button2_1' | translate,\n                    'header.navBar.button2.childrens.button2_2' | translate,\n                    'header.navBar.button2.childrens.button2_3' | translate,\n                    'header.navBar.button2.childrens.button2_4' | translate,\n                    'header.navBar.button2.childrens.button2_5' | translate,\n                    'header.navBar.button2.childrens.button2_6' | translate\n                    ]; let i = index\"  [attr.data-categories]=\"categoriesProducts[i]\" (click)=\"activeTransfer($event, i, categoriesProducts[i])\">\n                        <span  [class.active_categ]=\"i=='0'\">{{item}}</span>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-9 pl-0\"> \n                <div class=\"izotopeCol\" #imagesParent>\n                    <div *ngFor=\"let img of dataGallery; let i = index\">\n                        <a class=\"gallBadge d-block\" [attr.data-type]=\"img.dataType\" (click)=\"startFancy(img)\">\n                            <span class=\"lnr lnr-magnifier\"></span>\n                            <img src=\"./assets/img/gallery/imgPreloader.gif\" *ngIf=\"preloader\" class=\"img-fluid p-5\" alt=\"\">\n                            <img [hidden]=\"preloader\" (load)=\"onLoad()\" src=\"./assets/img/gallery/{{img.imgUrl}}\" class=\"img-fluid\" alt=\"\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"plugin_image_fancy\" *ngIf=\"fancyShow\" (click)=\"hideFancy($event)\">\n    <div class=\"topPanel\">\n        <div class=\"arrowsBlock\">\n            <span class=\"lnr lnr-arrow-left\" (click)=\"fancySlideLeft()\"></span>\n            <span>{{fancySliderNumbers.start}}/{{fancySliderNumbers.end}}</span>\n            <span class=\"lnr lnr-arrow-right\" (click)=\"fancySlideRight()\"></span>\n        </div>\n        <span class=\"lnr lnr-cross\" (click)=\"closeFancy()\"></span>\n    </div>\n    <img src=\"./assets/img/gallery/preloaderWhite.gif\" *ngIf=\"!fancyPreloader\" class=\"preloaderFancy\" alt=\"\">\n    <div class=\"fancyWrapper\" >\n        <div class=\"slideFancyImages\" *ngIf=\"fancyPreloader\" [ngStyle]=\"{'transform':'translate('+fancySliderTransform+'px)'}\">\n            <div class=\"image_part\" *ngFor=\"let imgFancy of fancyArray\">\n                <img src=\"{{imgFancy}}\" alt=\"\" class=\"img-fluid\">\n            </div>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n#gallery .top-direction {\n  margin-bottom: 20px; }\n#gallery .top-direction .dicrection-path {\n    padding: 10px;\n    background-color: #F2F2F2; }\n#gallery .top-direction .dicrection-path a {\n      text-decoration: none;\n      color: #262626;\n      position: relative; }\n#gallery .top-direction .dicrection-path a:after {\n        margin: 0 5px;\n        position: relative;\n        content: \"»\"; }\n#gallery .top-direction .dicrection-path a span {\n        margin-right: 3px; }\n#gallery .top-direction .dicrection-path span {\n      color: #616161; }\n#gallery .categories-gallery {\n  padding: 10px;\n  background-color: #F2F2F2;\n  position: relative; }\n#gallery .categories-gallery:after {\n    content: \"\";\n    position: absolute;\n    top: var(--topActive);\n    left: 10px;\n    transition: .4s;\n    width: calc(100% - 20px);\n    height: var(--heightActive);\n    background-color: #fff;\n    z-index: 0; }\n#gallery .categories-gallery li {\n    position: relative;\n    z-index: 1; }\n#gallery .categories-gallery li span {\n      padding: 2px;\n      display: block;\n      cursor: pointer;\n      padding-left: 10px;\n      transition: .4s; }\n#gallery .izotopeCol > div {\n  display: inline-block;\n  transition: .7s;\n  display: inline-block;\n  padding: 0 0 15px 15px; }\n@media (max-width: 576px) {\n    #gallery .izotopeCol > div {\n      width: 100%; } }\n@media (max-width: 767px) and (min-width: 577px) {\n    #gallery .izotopeCol > div {\n      width: 50%; } }\n@media (max-width: 991px) and (min-width: 768px) {\n    #gallery .izotopeCol > div {\n      width: 33.3%; } }\n@media (max-width: 1200px) and (min-width: 992px) {\n    #gallery .izotopeCol > div {\n      width: 25%; } }\n@media (min-width: 1201px) {\n    #gallery .izotopeCol > div {\n      width: 25%; } }\n#gallery .izotopeCol .activeIzotope {\n  opacity: 1; }\n#gallery .izotopeCol .disactiveIzotope {\n  height: 0px;\n  transition-property: height, width, opacity,-webkit-transform;\n  transition-property: height, width, opacity,transform;\n  transition-property: height, width, opacity,transform, -webkit-transform;\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  width: 0 !important;\n  padding: 0; }\n#gallery .izotopeCol .gallBadge {\n  position: relative;\n  background-color: #fff;\n  cursor: pointer;\n  box-shadow: 0px 0px 2px 0px #ccc;\n  text-align: center; }\n#gallery .izotopeCol .gallBadge img {\n    padding: 10px; }\n#gallery .izotopeCol .gallBadge:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin: auto;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n    opacity: 0;\n    transition: .4s; }\n#gallery .izotopeCol .gallBadge:hover:after {\n    opacity: 1; }\n#gallery .izotopeCol .gallBadge:hover .lnr-magnifier {\n    opacity: 1;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5); }\n#gallery .izotopeCol .gallBadge .lnr-magnifier {\n    opacity: 0;\n    transition: .4s;\n    z-index: 22;\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin: auto;\n    height: 20px;\n    width: 20px;\n    bottom: 0;\n    top: 0;\n    color: #fff; }\n.plugin_image_fancy {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 22445; }\n.plugin_image_fancy .topPanel {\n    background-color: #000;\n    padding: 15px; }\n.plugin_image_fancy .topPanel .arrowsBlock {\n      text-align: center;\n      color: #fff; }\n.plugin_image_fancy .topPanel .arrowsBlock span.lnr {\n        cursor: pointer; }\n.plugin_image_fancy .topPanel .arrowsBlock span {\n        font-size: 20px;\n        margin: 5px; }\n.plugin_image_fancy .topPanel .lnr-cross {\n      color: #fff;\n      font-size: 20px;\n      right: 20px;\n      position: absolute;\n      border: 1px solid #fff;\n      padding: 10px;\n      top: 5px;\n      cursor: pointer; }\n.plugin_image_fancy .preloaderFancy {\n    top: 0;\n    max-width: 90px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto; }\n.plugin_image_fancy .fancyWrapper {\n    display: flex;\n    overflow: hidden;\n    height: 100%; }\n.plugin_image_fancy .fancyWrapper .slideFancyImages {\n      display: flex;\n      justify-content: start;\n      align-items: center;\n      transition: .4s;\n      max-width: 60%;\n      margin: auto;\n      z-index: 222;\n      position: relative; }\n.plugin_image_fancy .fancyWrapper .slideFancyImages .image_part {\n        width: 100%;\n        flex-shrink: 0;\n        text-align: center;\n        margin: auto 10px;\n        opacity: 0.5;\n        transition: .4s; }\n.plugin_image_fancy .fancyWrapper .slideFancyImages .image_part img {\n          max-height: 100%; }\n.plugin_image_fancy .fancyWrapper .slideFancyImages .activeFancy {\n        opacity: 1 !important; }\n@media (max-width: 576px) {\n  .izotopeCol > div .gallBadge {\n    margin: 15px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxhcHBcXGNvbXBvbmVudHNcXGdhbGxlcnlcXGdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxnbG9iYWxTQ1NTXFxnbG9iYWxTQ1NTLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDdUJqQjtFQUdRLG9CQUFtQixFQXNCdEI7QUF6Qkw7SUFLWSxjQUFhO0lBQ2IsMEJDekJNLEVEMkNUO0FBeEJUO01BUWdCLHNCQUFxQjtNQUNyQixlQzNCSDtNRDRCRyxtQkFBa0IsRUFTckI7QUFuQmI7UUFZb0IsY0FBWTtRQUNaLG1CQUFrQjtRQUNsQixhQUFZLEVBQ2Y7QUFmakI7UUFpQm9CLGtCQUFpQixFQUNwQjtBQWxCakI7TUFxQmdCLGVDdENILEVEdUNBO0FBdEJiO0VBMkJRLGNBQWE7RUFDYiwwQkMvQ1U7RURnRFYsbUJBQWtCLEVBMEJyQjtBQXZETDtJQStCWSxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLHNCQUFxQjtJQUNyQixXQUFVO0lBQ1YsZ0JBQWU7SUFDZix5QkFBd0I7SUFDeEIsNEJBQTJCO0lBQzNCLHVCQUFzQjtJQUN0QixXQUFVLEVBQ2I7QUF4Q1Q7SUEwQ1ksbUJBQWtCO0lBQ2xCLFdBQVUsRUFXYjtBQXREVDtNQTZDZ0IsYUFBWTtNQUNaLGVBQWM7TUFDZCxnQkFBZTtNQUNmLG1CQUFrQjtNQUNsQixnQkFBZSxFQUNsQjtBQWxEYjtFQTREWSxzQkFBcUI7RUFDckIsZ0JBQWU7RUFNZixzQkFBcUI7RUFDckIsdUJBQXNCLEVBQ3pCO0FBckZIO0lBZ0JOO01BOERxQyxZQUFXLEVBT3ZDLEVBQUE7QUFsRkg7SUFhTjtNQStEdUMsV0FBVSxFQU14QyxFQUFBO0FBL0VIO0lBVU47TUFnRXdDLGFBQVksRUFLM0MsRUFBQTtBQTVFRDtJQU9SO01BaUV1QyxXQUFVLEVBSXhDLEVBQUE7QUF6RUQ7SUFJUjtNQWtFNEMsV0FBVSxFQUc3QyxFQUFBO0FBckVUO0VBdUVZLFdBQVUsRUFDYjtBQXhFVDtFQTBFWSxZQUFXO0VBQ1gsOERBQW9EO0VBQXBELHNEQUFvRDtFQUFwRCx5RUFBb0Q7RUFDcEQsV0FBVTtFQUNWLDRCQUFtQjtVQUFuQixvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLFdBQVUsRUFDYjtBQWhGVDtFQWtGWSxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLGdCQUFlO0VBQ2YsaUNBQWdDO0VBQ2hDLG1CQUFrQixFQXFDckI7QUEzSFQ7SUF3RmdCLGNBQWEsRUFDaEI7QUF6RmI7SUEyRmdCLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsUUFBTTtJQUNOLFNBQVE7SUFDUixhQUFXO0lBQ1gsWUFBVztJQUNYLGFBQVk7SUFDWixxQ0FBaUM7SUFDakMsV0FBVTtJQUNWLGdCQUFlLEVBQ2xCO0FBckdiO0lBdUdnQixXQUFVLEVBQ2I7QUF4R2I7SUEwR2dCLFdBQVU7SUFDViw4QkFBcUI7WUFBckIsc0JBQXFCLEVBQ3hCO0FBNUdiO0lBOEdnQixXQUFVO0lBQ1YsZ0JBQWU7SUFDZixZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFFBQU87SUFDUCxTQUFRO0lBQ1IsYUFBVztJQUNYLGFBQVk7SUFDWixZQUFXO0lBQ1gsVUFBUztJQUNULE9BQU07SUFDTixZQUFXLEVBQ2Q7QUFJYjtFQUNJLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLFFBQU87RUFDUCxZQUFXO0VBQ1gsYUFBWTtFQUNaLHFDQUFpQztFQUNqQyxlQUFjLEVBZ0VqQjtBQXZFRDtJQVNRLHVCQUFzQjtJQUN0QixjQUFhLEVBc0JoQjtBQWhDTDtNQVlZLG1CQUFrQjtNQUNsQixZQUFXLEVBUWQ7QUFyQlQ7UUFlZ0IsZ0JBQWUsRUFDbEI7QUFoQmI7UUFrQmdCLGdCQUFlO1FBQ2YsWUFBVyxFQUNkO0FBcEJiO01BdUJZLFlBQVc7TUFDWCxnQkFBZTtNQUNmLFlBQVc7TUFDWCxtQkFBa0I7TUFDbEIsdUJBQXNCO01BQ3RCLGNBQWE7TUFDYixTQUFRO01BQ1IsZ0JBQWUsRUFDbEI7QUEvQlQ7SUFrQ1EsT0FBTTtJQUNOLGdCQUFlO0lBQ2YsbUJBQWtCO0lBQ2xCLFFBQU87SUFDUCxTQUFRO0lBQ1IsVUFBUztJQUNULGFBQVksRUFDZjtBQXpDTDtJQTJDUSxjQUFhO0lBQ2IsaUJBQWdCO0lBQ2hCLGFBQVksRUF5QmY7QUF0RUw7TUErQ1ksY0FBYTtNQUNiLHVCQUFxQjtNQUNyQixvQkFBbUI7TUFDbkIsZ0JBQWU7TUFDZixlQUFjO01BQ2QsYUFBWTtNQUNaLGFBQVk7TUFDWixtQkFBa0IsRUFlckI7QUFyRVQ7UUF3RGdCLFlBQVc7UUFDWCxlQUFjO1FBQ2QsbUJBQWtCO1FBQ2xCLGtCQUFpQjtRQUNqQixhQUFZO1FBQ1osZ0JBQWUsRUFJbEI7QUFqRWI7VUErRG9CLGlCQUFnQixFQUNuQjtBQWhFakI7UUFtRWdCLHNCQUFxQixFQUN4QjtBQUliO0VBRUk7SUFHWSx3QkFBdUIsRUFDMUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuI2dhbGxlcnkgLnRvcC1kaXJlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG4gICNnYWxsZXJ5IC50b3AtZGlyZWN0aW9uIC5kaWNyZWN0aW9uLXBhdGgge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjsgfVxuICAgICNnYWxsZXJ5IC50b3AtZGlyZWN0aW9uIC5kaWNyZWN0aW9uLXBhdGggYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogIzI2MjYyNjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgI2dhbGxlcnkgLnRvcC1kaXJlY3Rpb24gLmRpY3JlY3Rpb24tcGF0aCBhOmFmdGVyIHtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb250ZW50OiBcIsK7XCI7IH1cbiAgICAgICNnYWxsZXJ5IC50b3AtZGlyZWN0aW9uIC5kaWNyZWN0aW9uLXBhdGggYSBzcGFuIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7IH1cbiAgICAjZ2FsbGVyeSAudG9wLWRpcmVjdGlvbiAuZGljcmVjdGlvbi1wYXRoIHNwYW4ge1xuICAgICAgY29sb3I6ICM2MTYxNjE7IH1cblxuI2dhbGxlcnkgLmNhdGVnb3JpZXMtZ2FsbGVyeSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAjZ2FsbGVyeSAuY2F0ZWdvcmllcy1nYWxsZXJ5OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IHZhcigtLXRvcEFjdGl2ZSk7XG4gICAgbGVmdDogMTBweDtcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgIGhlaWdodDogdmFyKC0taGVpZ2h0QWN0aXZlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHotaW5kZXg6IDA7IH1cbiAgI2dhbGxlcnkgLmNhdGVnb3JpZXMtZ2FsbGVyeSBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7IH1cbiAgICAjZ2FsbGVyeSAuY2F0ZWdvcmllcy1nYWxsZXJ5IGxpIHNwYW4ge1xuICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICB0cmFuc2l0aW9uOiAuNHM7IH1cblxuI2dhbGxlcnkgLml6b3RvcGVDb2wgPiBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IC43cztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwIDAgMTVweCAxNXB4OyB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICNnYWxsZXJ5IC5pem90b3BlQ29sID4gZGl2IHtcbiAgICAgIHdpZHRoOiAxMDAlOyB9IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG1pbi13aWR0aDogNTc3cHgpIHtcbiAgICAjZ2FsbGVyeSAuaXpvdG9wZUNvbCA+IGRpdiB7XG4gICAgICB3aWR0aDogNTAlOyB9IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAjZ2FsbGVyeSAuaXpvdG9wZUNvbCA+IGRpdiB7XG4gICAgICB3aWR0aDogMzMuMyU7IH0gfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAjZ2FsbGVyeSAuaXpvdG9wZUNvbCA+IGRpdiB7XG4gICAgICB3aWR0aDogMjUlOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDFweCkge1xuICAgICNnYWxsZXJ5IC5pem90b3BlQ29sID4gZGl2IHtcbiAgICAgIHdpZHRoOiAyNSU7IH0gfVxuXG4jZ2FsbGVyeSAuaXpvdG9wZUNvbCAuYWN0aXZlSXpvdG9wZSB7XG4gIG9wYWNpdHk6IDE7IH1cblxuI2dhbGxlcnkgLml6b3RvcGVDb2wgLmRpc2FjdGl2ZUl6b3RvcGUge1xuICBoZWlnaHQ6IDBweDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB3aWR0aCwgb3BhY2l0eSx0cmFuc2Zvcm07XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7IH1cblxuI2dhbGxlcnkgLml6b3RvcGVDb2wgLmdhbGxCYWRnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAwcHggI2NjYztcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICNnYWxsZXJ5IC5pem90b3BlQ29sIC5nYWxsQmFkZ2UgaW1nIHtcbiAgICBwYWRkaW5nOiAxMHB4OyB9XG4gICNnYWxsZXJ5IC5pem90b3BlQ29sIC5nYWxsQmFkZ2U6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiAuNHM7IH1cbiAgI2dhbGxlcnkgLml6b3RvcGVDb2wgLmdhbGxCYWRnZTpob3ZlcjphZnRlciB7XG4gICAgb3BhY2l0eTogMTsgfVxuICAjZ2FsbGVyeSAuaXpvdG9wZUNvbCAuZ2FsbEJhZGdlOmhvdmVyIC5sbnItbWFnbmlmaWVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTsgfVxuICAjZ2FsbGVyeSAuaXpvdG9wZUNvbCAuZ2FsbEJhZGdlIC5sbnItbWFnbmlmaWVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICB6LWluZGV4OiAyMjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gICAgY29sb3I6ICNmZmY7IH1cblxuLnBsdWdpbl9pbWFnZV9mYW5jeSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHotaW5kZXg6IDIyNDQ1OyB9XG4gIC5wbHVnaW5faW1hZ2VfZmFuY3kgLnRvcFBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDE1cHg7IH1cbiAgICAucGx1Z2luX2ltYWdlX2ZhbmN5IC50b3BQYW5lbCAuYXJyb3dzQmxvY2sge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICNmZmY7IH1cbiAgICAgIC5wbHVnaW5faW1hZ2VfZmFuY3kgLnRvcFBhbmVsIC5hcnJvd3NCbG9jayBzcGFuLmxuciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLnBsdWdpbl9pbWFnZV9mYW5jeSAudG9wUGFuZWwgLmFycm93c0Jsb2NrIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogNXB4OyB9XG4gICAgLnBsdWdpbl9pbWFnZV9mYW5jeSAudG9wUGFuZWwgLmxuci1jcm9zcyB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB0b3A6IDVweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAucGx1Z2luX2ltYWdlX2ZhbmN5IC5wcmVsb2FkZXJGYW5jeSB7XG4gICAgdG9wOiAwO1xuICAgIG1heC13aWR0aDogOTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvOyB9XG4gIC5wbHVnaW5faW1hZ2VfZmFuY3kgLmZhbmN5V3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTsgfVxuICAgIC5wbHVnaW5faW1hZ2VfZmFuY3kgLmZhbmN5V3JhcHBlciAuc2xpZGVGYW5jeUltYWdlcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiAuNHM7XG4gICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHotaW5kZXg6IDIyMjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgLnBsdWdpbl9pbWFnZV9mYW5jeSAuZmFuY3lXcmFwcGVyIC5zbGlkZUZhbmN5SW1hZ2VzIC5pbWFnZV9wYXJ0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogYXV0byAxMHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIHRyYW5zaXRpb246IC40czsgfVxuICAgICAgICAucGx1Z2luX2ltYWdlX2ZhbmN5IC5mYW5jeVdyYXBwZXIgLnNsaWRlRmFuY3lJbWFnZXMgLmltYWdlX3BhcnQgaW1nIHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlOyB9XG4gICAgICAucGx1Z2luX2ltYWdlX2ZhbmN5IC5mYW5jeVdyYXBwZXIgLnNsaWRlRmFuY3lJbWFnZXMgLmFjdGl2ZUZhbmN5IHtcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50OyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaXpvdG9wZUNvbCA+IGRpdiAuZ2FsbEJhZGdlIHtcbiAgICBtYXJnaW46IDE1cHggIWltcG9ydGFudDsgfSB9XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9nbG9iYWxTQ1NTL2V4dGVuZHMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9nbG9iYWxTQ1NTL2dsb2JhbFNDU1MnO1xyXG5cclxuXHJcblxyXG5AbWl4aW4gaXRlbVdpZHRoKCRkZXZpY2UpIHtcclxuICAgIEBpZiAkZGV2aWNlID09IGNvbCB7XHJcbiAgICAgIEBtZWRpYSAjeyRjb2x9IHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBlbHNlIGlmICRkZXZpY2UgPT0gc21hbGwge1xyXG4gICAgICBAbWVkaWEgI3skc20tZGV2aWNlfSB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkZGV2aWNlID09IG1lZGl1bSB7XHJcbiAgICAgIEBtZWRpYSAjeyRtZC1kZXZpY2V9ICB7IEBjb250ZW50OyB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAkZGV2aWNlID09IGxhcmdlIHtcclxuICAgICAgICBAbWVkaWEgI3skbGctZGV2aWNlfSAgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJGRldmljZSA9PSBleHRyYUxhcmdlIHtcclxuICAgICAgICBAbWVkaWEgI3skeGwtZGV2aWNlfSAgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gIFxyXG59XHJcbiNnYWxsZXJ5e1xyXG5cclxuICAgIC50b3AtZGlyZWN0aW9ueyBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIC5kaWNyZWN0aW9uLXBhdGh7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoaWdoV2F5Qkc7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRhcms7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIDVweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLCu1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXRlZ29yaWVzLWdhbGxlcnl7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGlnaFdheUJHO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogdmFyKC0tdG9wQWN0aXZlKTtcclxuICAgICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0taGVpZ2h0QWN0aXZlKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hY3RpdmVfY2F0ZWd7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLml6b3RvcGVDb2x7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgID5kaXZ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjdzO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBpdGVtV2lkdGgoY29sKSB7d2lkdGg6IDEwMCU7fVxyXG4gICAgICAgICAgICBAaW5jbHVkZSBpdGVtV2lkdGgoc21hbGwpIHt3aWR0aDogNTAlO31cclxuICAgICAgICAgICAgQGluY2x1ZGUgaXRlbVdpZHRoKG1lZGl1bSkge3dpZHRoOiAzMy4zJTt9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGl0ZW1XaWR0aChsYXJnZSkge3dpZHRoOiAyNSU7fVxyXG4gICAgICAgICAgICBAaW5jbHVkZSBpdGVtV2lkdGgoZXh0cmFMYXJnZSkge3dpZHRoOiAyNSU7fVxyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAxNXB4IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3RpdmVJem90b3Ble1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGlzYWN0aXZlSXpvdG9wZXtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6aGVpZ2h0LCB3aWR0aCwgb3BhY2l0eSx0cmFuc2Zvcm07XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5nYWxsQmFkZ2V7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAwcHggI2NjYztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIC5sbnItbWFnbmlmaWVye1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sbnItbWFnbmlmaWVye1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDIyO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5wbHVnaW5faW1hZ2VfZmFuY3kge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgei1pbmRleDogMjI0NDU7XHJcbiAgICAudG9wUGFuZWwge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAuYXJyb3dzQmxvY2t7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHNwYW4ubG5ye1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubG5yLWNyb3Nze1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcmVsb2FkZXJGYW5jeXtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICAuZmFuY3lXcmFwcGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLnNsaWRlRmFuY3lJbWFnZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3RhcnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgei1pbmRleDogMjIyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIC5pbWFnZV9wYXJ0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gMTBweDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hY3RpdmVGYW5jeXtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgI3skY29sfXtcclxuICAgIFxyXG4gICAgLml6b3RvcGVDb2x7XHJcbiAgICAgICAgPmRpdntcclxuICAgICAgICAgICAgLmdhbGxCYWRnZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIiRncmVlbjojNjg5RjM4O1xyXG4kZ3JlZW5EYXJrOiM1MDhjMWM7XHJcbiRncmVlblJHQkE6IzY4OWYzODhjO1xyXG4kZGlzYWJsZWRCdXR0b246IzliYTI5NTtcclxuJGhpZ2hXYXlCRzojRjJGMkYyO1xyXG4kZGFyazojMjYyNjI2O1xyXG4kZ3JleTojNjE2MTYxO1xyXG4kcmVkOiAjRjQ0MzM2O1xyXG4keWVsbG93OiAjRkJDMDJEO1xyXG5cclxuJGNvbDogXCIobWF4LXdpZHRoOiA1NzZweClcIjtcclxuJHNtLWRldmljZU1heDogXCIobWF4LXdpZHRoOiA3NjdweClcIjtcclxuJHNtLWRldmljZTogXCIobWF4LXdpZHRoOiA3NjdweCkgYW5kIChtaW4td2lkdGg6NTc3cHgpXCI7XHJcbiRtZC1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogOTkxcHgpXCI7XHJcbiRtZC1kZXZpY2U6IFwiKG1heC13aWR0aDogOTkxcHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KVwiO1xyXG4kbGctZGV2aWNlOiBcIihtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6OTkycHgpXCI7XHJcbiR4bC1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogMTIwMHB4KVwiO1xyXG4keGwtZGV2aWNlOiBcIihtaW4td2lkdGg6IDEyMDFweClcIjsiXX0= */"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.categoriesProducts = [];
        this.preloader = true;
        this.topActiveItem = 10;
        this.heightActiveItem = 0;
        this.dataGallery = [];
        this.itemHeight = 0;
        this.itemCount = 0;
        this.rowItemCount = 1;
        this.rowCount = 0;
        this.fancyShow = false;
        this.rowItemWidth = "100%";
        this.fancyArray = [];
        this.fancySliderNumbers = {};
        this.fancySliderTransform = null;
        this.fancyPreloader = false;
        this.categoriesProducts = ['All', 'Jewellery', "Shoes", 'For Home', 'Dresses', 'Motors', 'Electronics'];
        this.dataGallery = [
            { imgUrl: 'kind1.1.jpg', dataType: "Jewellery" },
            { imgUrl: 'kind1.2.jpg', dataType: "Jewellery" },
            { imgUrl: 'kind1.3.jpg', dataType: "Jewellery" },
            { imgUrl: 'kind1.4.jpg', dataType: "Jewellery" },
            { imgUrl: 'kind1.5.jpg', dataType: "Jewellery" },
            { imgUrl: 'kind1.6.jpg', dataType: "Jewellery" },
            { imgUrl: 'kind2.1.jpg', dataType: "Shoes" },
            { imgUrl: 'kind2.2.jpg', dataType: "Shoes" },
            { imgUrl: 'kind2.3.jpg', dataType: "Shoes" },
            { imgUrl: 'kind2.4.jpg', dataType: "Shoes" },
            { imgUrl: 'kind2.5.jpg', dataType: "Shoes" },
            { imgUrl: 'kind2.6.jpg', dataType: "Shoes" },
            { imgUrl: 'kind3.1.jpg', dataType: "For Home" },
            { imgUrl: 'kind3.2.jpg', dataType: "For Home" },
            { imgUrl: 'kind3.3.jpg', dataType: "For Home" },
            { imgUrl: 'kind3.4.jpg', dataType: "For Home" },
            { imgUrl: 'kind3.5.jpg', dataType: "For Home" },
            { imgUrl: 'kind3.6.jpg', dataType: "For Home" },
            { imgUrl: 'kind4.1.jpg', dataType: "Dresses" },
            { imgUrl: 'kind4.2.jpg', dataType: "Dresses" },
            { imgUrl: 'kind4.3.jpg', dataType: "Dresses" },
            { imgUrl: 'kind4.4.jpg', dataType: "Dresses" },
            { imgUrl: 'kind4.5.jpg', dataType: "Dresses" },
            { imgUrl: 'kind4.6.jpg', dataType: "Dresses" },
            { imgUrl: 'kind5.1.jpg', dataType: "Motors" },
            { imgUrl: 'kind5.2.jpg', dataType: "Motors" },
            { imgUrl: 'kind5.3.jpg', dataType: "Motors" },
            { imgUrl: 'kind5.4.jpg', dataType: "Motors" },
            { imgUrl: 'kind5.5.jpg', dataType: "Motors" },
            { imgUrl: 'kind5.6.jpg', dataType: "Motors" },
            { imgUrl: 'kind6.1.jpg', dataType: "Electronics" },
            { imgUrl: 'kind6.2.jpg', dataType: "Electronics" },
            { imgUrl: 'kind6.3.png', dataType: "Electronics" },
            { imgUrl: 'kind6.4.jpg', dataType: "Electronics" },
            { imgUrl: 'kind6.5.png', dataType: "Electronics" },
            { imgUrl: 'kind6.6.jpg', dataType: "Electronics" },
        ];
    }
    GalleryComponent.prototype.findActive = function (ul, index) {
        Array.prototype.map.call(ul.children, function (element) {
            if (element.children[0].classList.contains('active_categ')) {
                element.children[0].classList.remove('active_categ');
            }
        });
        ul.children[index].children[0].classList.add('active_categ');
    };
    GalleryComponent.prototype.getWindowWidth = function () {
        var _this = this;
        if (window.matchMedia('(min-width:991px)').matches) {
            this.rowItemCount = 4;
        }
        if (window.matchMedia('(max-width:991px) and (min-width:767px)').matches) {
            this.rowItemCount = 3;
        }
        if (window.matchMedia('(max-width:767px) and (min-width:576px)').matches) {
            this.rowItemCount = 2;
        }
        if (window.matchMedia('(max-width:576px)').matches) {
            this.rowItemCount = 1;
        }
        this.rowItemWidth = this.imagesParent.nativeElement.getBoundingClientRect().width / this.rowItemCount + "px";
        Array.prototype.map.call(this.imagesParent.nativeElement.children, function (elem) {
            if (elem.classList.contains('activeIzotope')) {
                _this.itemHeight = elem.children[0].getBoundingClientRect().height + 15;
            }
            elem.style.width = _this.rowItemWidth;
            elem.style.height = elem.children[0].getBoundingClientRect().height + 15 + 'px';
        });
        this.imagesParent.nativeElement.style.minHeight = Math.ceil(this.itemCount / this.rowItemCount) * this.itemHeight + 50 + 'px';
    };
    GalleryComponent.prototype.windowNoScroll = function (fancyShow) {
        if (fancyShow) {
            document.querySelector("body").style.overflow = "hidden";
        }
        else {
            document.querySelector("body").style.overflow = "auto";
        }
    };
    GalleryComponent.prototype.findElement = function (parentElement, findElem) {
        var _parent = parentElement, _childArr = [];
        function recursionFind(parent) {
            if (parent.children) {
                for (var i = 0; i < parent.children.length; i++) {
                    if (parent.children[i].classList.contains(findElem)
                        || parent.children[i].tagName == findElem.toUpperCase()
                        || parent.children[i].getAttribute('id') == findElem) {
                        _childArr.push(parent.children[i]);
                    }
                    else {
                        recursionFind(parent.children[i]);
                    }
                }
            }
        }
        recursionFind(_parent);
        return _childArr;
    };
    GalleryComponent.prototype.resizeGallery = function (event) {
        this.getWindowWidth();
    };
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.heightActiveItem = _this.mnCategories.nativeElement.children[0].getBoundingClientRect().height;
            _this.mnCategories.nativeElement.style.setProperty('--heightActive', _this.heightActiveItem + 'px');
            _this.mnCategories.nativeElement.style.setProperty('--topActive', _this.topActiveItem + 'px');
            _this.getWindowWidth();
        }, 10);
    };
    // img loading
    GalleryComponent.prototype.onLoad = function () {
        var _this = this;
        setTimeout(function () {
            Array.prototype.map.call(_this.imagesParent.nativeElement.children, function (elem) {
                _this.itemHeight = elem.children[0].getBoundingClientRect().height + 15;
                elem.style.height = _this.itemHeight + "px";
            });
        }, 10);
        this.preloader = false;
    };
    // ______________________
    // after transfer active Categorie
    GalleryComponent.prototype.activeTransfer = function (evt, index, item) {
        var _this = this;
        this.itemCount = 0;
        this.getWindowWidth();
        var arrClass = ['activeIzotope', 'disactiveIzotope'];
        Array.prototype.map.call(this.imagesParent.nativeElement.children, function (elem) {
            var _a;
            (_a = elem.classList).remove.apply(_a, arrClass);
            if (item != "All") {
                if (elem.children[0].hasAttribute('data-type') && elem.children[0].getAttribute('data-type') == item) {
                    elem.classList.add('activeIzotope');
                    elem.style.height = _this.itemHeight + 'px';
                    _this.itemCount++;
                }
                else {
                    elem.style.height = 0 + 'px';
                    elem.classList.add('disactiveIzotope');
                }
            }
            else {
                elem.style.height = _this.itemHeight + 'px';
            }
        });
        this.imagesParent.nativeElement.style.minHeight = Math.ceil(this.itemCount / this.rowItemCount) * this.itemHeight + 50 + 'px';
        this.findActive(this.mnCategories.nativeElement, index);
        this.topActiveItem = 0;
        this.heightActiveItem = evt.target.getBoundingClientRect().height;
        for (var i = 0; i < index; i++) {
            this.topActiveItem += this.mnCategories.nativeElement.children[i].getBoundingClientRect().height;
        }
        this.mnCategories.nativeElement.style.setProperty('--topActive', (this.topActiveItem + 10) + 'px');
        this.mnCategories.nativeElement.style.setProperty('--heightActive', (this.heightActiveItem) + 'px');
    };
    // __________________
    GalleryComponent.prototype.startFancy = function (img) {
        var _this = this;
        this.fancyArray = [];
        this.fancyShow = true;
        this.windowNoScroll(this.fancyShow);
        if (document.querySelector(".activeIzotope")) {
            document.querySelectorAll(".activeIzotope").forEach(function (element) {
                _this.fancyArray.push(_this.findElement(element, 'img')[0].getAttribute("src"));
            });
        }
        else {
            Array.prototype.map.call(this.imagesParent.nativeElement.children, function (element) {
                _this.fancyArray.push(_this.findElement(element, 'img')[0].getAttribute("src"));
            });
        }
        var currectImgSrc = this.findElement(event.currentTarget, 'img')[0].getAttribute("src");
        for (var i = 0; i < this.fancyArray.length; i++) {
            if (this.fancyArray[i] == currectImgSrc) {
                Object.assign(this.fancySliderNumbers, {
                    start: i + 1,
                    end: this.fancyArray.length
                });
            }
        }
        setTimeout(function () {
            _this.fancySliderTransform = 0;
            _this.fancyPreloader = true;
            setTimeout(function () {
                for (var i = 1; i < _this.fancySliderNumbers['start']; i++) {
                    _this.fancySliderTransform -= document.querySelector('.slideFancyImages').children[i].getBoundingClientRect().width + 20;
                }
                document.querySelector('.slideFancyImages').children[_this.fancySliderNumbers['start'] - 1].classList.add('activeFancy');
            }, 10);
        }, 300);
    };
    GalleryComponent.prototype.fancySlideLeft = function () {
        if (this.fancySliderNumbers['start'] > 1) {
            this.fancySliderNumbers['start']--;
            document.querySelector('.activeFancy').classList.remove('activeFancy');
            this.fancySliderTransform += document.querySelector('.slideFancyImages').children[this.fancySliderNumbers['start'] - 1].getBoundingClientRect().width + 20;
            document.querySelector('.slideFancyImages').children[this.fancySliderNumbers['start'] - 1].classList.add('activeFancy');
        }
    };
    GalleryComponent.prototype.fancySlideRight = function () {
        if (this.fancySliderNumbers['start'] < this.fancyArray.length) {
            this.fancySliderNumbers['start']++;
            document.querySelector('.activeFancy').classList.remove('activeFancy');
            this.fancySliderTransform -= document.querySelector('.slideFancyImages').children[this.fancySliderNumbers['start'] - 1].getBoundingClientRect().width + 20;
            document.querySelector('.slideFancyImages').children[this.fancySliderNumbers['start'] - 1].classList.add('activeFancy');
        }
    };
    GalleryComponent.prototype.hideFancy = function (event) {
        if (!event.srcElement.closest('.slideFancyImages') && !event.srcElement.closest('.topPanel') && !event.srcElement.closest('.img-fluid')) {
            this.fancyShow = false;
            this.fancyPreloader = false;
            this.windowNoScroll(this.fancyShow);
        }
    };
    GalleryComponent.prototype.closeFancy = function () {
        this.fancyShow = false;
        this.fancyPreloader = false;
        this.windowNoScroll(this.fancyShow);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mainCatgories'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GalleryComponent.prototype, "mnCategories", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imagesParent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GalleryComponent.prototype, "imagesParent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], GalleryComponent.prototype, "resizeGallery", null);
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/components/gallery/gallery.component.html"),
            host: {
                '(window:resize)': 'resizeGallery($event)',
            },
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/components/gallery/gallery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header [ngClass]=\"{'fixedHeader':topHide}\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"topPanel d-flex justify-content-between align-items-center\" [ngStyle]=\"topHide && {'height':0, 'overflow':'hidden', 'opacity':0}\">\n                    <p class=\"phoneHeader\">\n                        <span class=\"lnr lnr-phone\"></span>\n                        {{ 'header.hotline' | translate }} (+374) 94 12-96-04\n                    </p>\n                    <p>\n                        {{ 'header.welcomeStatus' | translate }}\n                    </p>\n                    <div class=\"rightSectionUser d-flex align-items-center\">\n                        <div class=\"langBar\"  (click)=\"selectLang($event)\">\n                            <a href=\"javascript:void(0)\"  class=\"changeLangualge\">\n                                <img [src]=\"langIMG\" alt=\"english\"> {{langTXT}}\n                                <span class=\"lnr lnr-chevron-down\"></span>\n                            </a> \n                            <span class=\"langDropdown\" [hidden]=\"selectLanguage\">\n                                <a href=\"javascript:void(0)\" (click)=\"switchLanguage('en', lang1, $event)\">\n                                    <img src=\"./assets/img/flag1.png\" alt=\"english\" #lang1> {{ 'header.languageENG' | translate }}\n                                </a>\n                                <a href=\"javascript:void(0)\" (click)=\"switchLanguage('am', lang2, $event)\">\n                                    <img src=\"./assets/img/flag2.png\" alt=\"armenian\" #lang2> {{ 'header.languageARM' | translate }}\n                                </a>\n                            </span>\n                        </div>\n                        <a href=\"javascript:void(0)\" (click)=\"showLogin()\" class=\"signInClick\" *ngIf=\"isLogin;else Loginelse\"><span class=\"lnr lnr-enter\"></span> {{ 'header.signIN' | translate }}</a>   \n                        <ng-template *ngIf=\"isClickedLogin; then loginAndRegister\"></ng-template>\n                        <ng-template #loginAndRegister>\n                            <div class=\"loginFormReader\"> \n                                <app-login-form [isShowBoolean]='showLoginForm'></app-login-form>\n                                <app-register-form [isShowBoolean]='showRegForm'></app-register-form>\n                            </div>\n                        </ng-template>\n                        <ng-template #Loginelse>\n                            <div class=\"userBlock\" >\n                                <a href=\"javascript:void(0)\"  (click)=\"userOpen($event)\" class=\"userOpenButton\">\n                                    <span class=\"lnr lnr-user\"></span>\n                                    {{ 'header.account' | translate }}\n                                    <span class=\"lnr lnr-chevron-down\"></span>\n                                </a>\n                                <div class=\"userWrapper\" [hidden]=\"userWrap\">\n                                    <a class=\"accountWrap\" routerLink=\"/my-account\">\n                                        <img src=\"./assets/img/user.jpg\" alt=\"user\">\n                                        <span>Emilio Gonsales</span>\n                                    </a>\n                                    <hr>\n                                    <a href=\"javascript:void(0)\" class=\"signOut\"> <span class=\"lnr lnr-exit\"></span>{{ 'header.signOUT' | translate }}</a>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </div>\n                </div>\n                <div class=\"middlePanel d-flex align-items-center justify-content-between\">\n                    <div class=\"logoWrap order-0\">\n                        <a routerLink=\"/home\">\n                            <span data-green=\"Shop\">Fram</span>\n                        </a>\n                    </div>\n                    <form id=\"searchProducts\" class=\"order-2 order-md-1\">\n                        <input type=\"text\" placeholder=\"{{'header.serach' | translate}}\">\n                        <span class=\"lnr lnr-magnifier\"></span>\n                    </form>\n                    <div class=\"shoppingCartWrap order-1 order-md-2\">\n                        <a href=\"javascript:void(0)\" routerLink=\"/cart\">\n                            <span class=\"cartCount\">2</span>\n                            <span class=\"lnr lnr-cart\"></span>\n                            {{ 'header.shopCart' | translate }}\n                        </a>\n                    </div>\n                </div> \n            </div>\n        </div>\n    </div>\n    <nav>\n        <span class=\"lnr lnr-menu togleNavBar d-inline-block d-md-none\" (click)=\"toggleNav()\"></span>\n        <ul type=\"none\" #toggleNavBar class=\"toggleList\">\n            <li>\n                <a routerLinkActive=\"activeNavItem\" routerLink=\"/home\">{{ 'header.navBar.button1' | translate }}</a>\n            </li>\n            <li>\n                <a  class=\"openDropDownList\" href=\"javascript:void(0)\" (click)=\"showListProducts()\">{{ 'header.navBar.button2.main' | translate }} <span class=\"lnr lnr-chevron-down\"></span></a>\n                <ul type=\"none\" class=\"subNavBar\" [ngClass]='{\"showList\":showList}' #subList>\n                    <li>\n                        <a href=\"javascript:void(0)\" routerLink=\"/shop\"  fragment=\"Jewellery\">{{ 'header.navBar.button2.childrens.button2_1' | translate }}</a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\" routerLink=\"/shop\" fragment=\"Shoes\">{{ 'header.navBar.button2.childrens.button2_2' | translate }}</a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\" routerLink=\"/shop\" fragment=\"For Home\">{{ 'header.navBar.button2.childrens.button2_3' | translate }}</a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\" routerLink=\"/shop\" fragment=\"Dresses\">{{ 'header.navBar.button2.childrens.button2_4' | translate }}</a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\" routerLink=\"/shop\" fragment=\"Motors\">{{ 'header.navBar.button2.childrens.button2_5' | translate }}</a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\" routerLink=\"/shop\" fragment=\"Electronics\">{{ 'header.navBar.button2.childrens.button2_6' | translate }}</a>\n                    </li>\n                </ul>\n            </li>\n            <li>\n                <a routerLinkActive=\"activeNavItem\" routerLink=\"/about-us\">{{ 'header.navBar.button3' | translate }}</a>\n            </li>\n            <li>\n                <a routerLinkActive=\"activeNavItem\" routerLink=\"/contact\">{{ 'header.navBar.button4' | translate }}</a>\n            </li>\n            <li>\n                <a routerLinkActive=\"activeNavItem\" routerLink=\"/partners\">{{ 'header.navBar.button5' | translate }}</a>\n            </li>\n            <li>\n                <a routerLinkActive=\"activeNavItem\" routerLink=\"/gallery\">{{ 'header.navBar.button6' | translate }}</a>\n            </li>\n        </ul>\n    </nav>\n</header>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixedHeader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%; }\n\nheader {\n  z-index: 9999;\n  position: fixed;\n  width: 100%;\n  left: 0;\n  top: 0;\n  background-color: #262626;\n  color: #fff;\n  transition: .4s; }\n\nheader p {\n    margin-bottom: 0; }\n\nheader .topPanel {\n    box-shadow: 0px 3px 5px -5px #ffff;\n    transition: .4s;\n    opacity: 1;\n    height: 35px; }\n\nheader .topPanel p {\n      font-size: 13px; }\n\nheader .topPanel .rightSectionUser {\n      position: relative; }\n\nheader .topPanel .rightSectionUser > div {\n        padding-left: 15px; }\n\nheader .topPanel .rightSectionUser .loginFormReader {\n        position: absolute;\n        right: 0;\n        top: 100%; }\n\nheader .topPanel .rightSectionUser .langBar {\n        position: relative; }\n\nheader .topPanel .rightSectionUser .langBar a {\n          display: flex;\n          align-items: center;\n          font-size: 13px;\n          padding: 8px 0;\n          text-decoration: none;\n          color: #fff; }\n\nheader .topPanel .rightSectionUser .langBar a span {\n            position: relative;\n            top: 2px;\n            left: 2px;\n            font-size: 10px; }\n\nheader .topPanel .rightSectionUser .langBar a img {\n            max-width: 18px;\n            margin-right: 5px; }\n\nheader .topPanel .rightSectionUser .langBar .langDropdown {\n          position: absolute;\n          z-index: 2;\n          left: 15px;\n          top: 100%;\n          background-color: #fff;\n          box-shadow: 0px 1px 2px 0px #ccc;\n          min-width: 100px; }\n\nheader .topPanel .rightSectionUser .langBar .langDropdown a {\n            padding: 5px;\n            color: #000;\n            text-decoration: none;\n            display: block; }\n\nheader .topPanel .rightSectionUser .signInClick {\n        text-decoration: none;\n        color: #fff;\n        font-size: 14px;\n        margin-left: 10px; }\n\nheader .topPanel .rightSectionUser .userBlock {\n        position: relative; }\n\nheader .topPanel .rightSectionUser .userBlock a {\n          padding: 8px 0;\n          font-size: 13px;\n          color: #fff;\n          text-decoration: none;\n          display: block; }\n\nheader .topPanel .rightSectionUser .userBlock a span:last-child {\n            font-size: 10px; }\n\nheader .topPanel .rightSectionUser .userBlock .userWrapper {\n          padding: 8px;\n          min-width: 150px;\n          position: absolute;\n          z-index: 2;\n          right: 0;\n          top: 100%;\n          background-color: #fff;\n          box-shadow: 0px 1px 2px 0px #ccc;\n          color: #000; }\n\nheader .topPanel .rightSectionUser .userBlock .userWrapper hr {\n            margin: 10px 0 0 0; }\n\nheader .topPanel .rightSectionUser .userBlock .userWrapper .accountWrap {\n            display: flex;\n            align-items: center; }\n\nheader .topPanel .rightSectionUser .userBlock .userWrapper .accountWrap span {\n              font-size: 13px;\n              padding-left: 10px;\n              display: inline-block;\n              width: 60%;\n              text-overflow: ellipsis;\n              overflow: hidden;\n              color: #000;\n              white-space: nowrap; }\n\nheader .topPanel .rightSectionUser .userBlock .userWrapper .signOut {\n            color: #000;\n            padding-bottom: 0; }\n\nheader .topPanel .rightSectionUser .userBlock .userWrapper .signOut span {\n              font-size: 15px;\n              font-weight: 600;\n              position: relative;\n              top: 2px;\n              margin-right: 5px; }\n\nheader .topPanel .rightSectionUser .userBlock .userWrapper img {\n            max-width: 45px; }\n\nheader .middlePanel {\n    padding: 15px 0; }\n\nheader .middlePanel .logoWrap a {\n      text-decoration: none; }\n\nheader .middlePanel .logoWrap a span {\n        position: relative;\n        color: #fff;\n        letter-spacing: 3px;\n        font-size: 20px;\n        font-style: italic; }\n\nheader .middlePanel .logoWrap a span:after {\n          position: relative;\n          content: attr(data-green);\n          font-size: 36px;\n          font-weight: 600;\n          color: #689F38;\n          font-style: initial; }\n\nheader .middlePanel #searchProducts {\n      position: relative;\n      width: 50%; }\n\nheader .middlePanel #searchProducts input {\n        border-radius: 20px;\n        border: none;\n        padding: 5px 10px;\n        display: block;\n        width: 100%; }\n\nheader .middlePanel #searchProducts input:focus {\n          outline: none; }\n\nheader .middlePanel #searchProducts span {\n        position: absolute;\n        right: 10px;\n        color: #000;\n        top: 0;\n        bottom: 0;\n        margin: auto;\n        height: 16px; }\n\nheader .middlePanel .shoppingCartWrap > a {\n      position: relative;\n      color: #fff;\n      display: flex;\n      text-decoration: none;\n      align-items: center;\n      font-size: 15px; }\n\nheader .middlePanel .shoppingCartWrap > a .cartCount {\n        position: absolute;\n        top: -4px;\n        width: 15px;\n        text-align: center;\n        height: 15px;\n        background-color: #689F38;\n        border-radius: 50%;\n        left: 15px;\n        font-size: 11px;\n        z-index: 1; }\n\nheader .middlePanel .shoppingCartWrap > a span.lnr-cart {\n        font-size: 25px;\n        font-weight: 600;\n        position: relative;\n        top: -2px;\n        margin-right: 5px; }\n\nheader nav {\n    background-color: #fff;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\nheader nav .togleNavBar {\n      color: #616161;\n      font-size: 30px;\n      cursor: pointer; }\n\nheader nav > ul {\n      padding: 0;\n      display: flex;\n      justify-content: center;\n      margin-bottom: 0; }\n\nheader nav > ul > li {\n        padding: 0 15px;\n        position: relative; }\n\nheader nav > ul > li > a {\n          display: block;\n          color: #616161;\n          text-decoration: none;\n          padding: 10px; }\n\nheader nav > ul > li > a > span {\n            font-size: 12px; }\n\nheader nav > ul > li > a:hover {\n            background-color: rgba(0, 0, 0, 0.06); }\n\nheader nav > ul > li .activeNavItem {\n          background-color: #689F38;\n          color: #fff; }\n\nheader nav > ul > li .activeNavItem:hover {\n            background-color: #689F38; }\n\nheader nav > ul > li .subNavBar {\n          position: absolute;\n          top: 100%;\n          padding: 0;\n          left: 15px;\n          background-color: #fff;\n          width: 160px;\n          box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          visibility: hidden;\n          opacity: 0;\n          transition: all 0.4s cubic-bezier(0.87, -0.41, 0.19, 1.44);\n          -webkit-transform: scale(0.8);\n                  transform: scale(0.8); }\n\nheader nav > ul > li .subNavBar > li > a {\n            padding: 4px 10px;\n            color: #616161;\n            display: block;\n            text-decoration: none;\n            transition: .4s; }\n\nheader nav > ul > li .subNavBar > li > a:hover {\n              margin-left: 5px;\n              background-color: rgba(0, 0, 0, 0.06); }\n\nheader nav > ul > li .showList {\n          visibility: visible;\n          opacity: 1;\n          -webkit-transform: scale(1);\n                  transform: scale(1); }\n\n@media (max-width: 991px) and (min-width: 768px) {\n  header nav > ul > li > a {\n    font-size: 14px;\n    padding: 10px 4px; } }\n\n@media (max-width: 767px) {\n  .topPanel > p:nth-child(2) {\n    display: none !important; }\n  .middlePanel {\n    padding-top: 0 !important;\n    flex-wrap: wrap; }\n    .middlePanel .logoWrap, .middlePanel .shoppingCartWrap {\n      width: 50%;\n      text-align: center; }\n    .middlePanel #searchProducts {\n      width: 100% !important; }\n    .middlePanel .shoppingCartWrap > a {\n      display: inline-flex !important;\n      justify-content: center;\n      top: 7px; }\n  nav {\n    padding: 5px 0; }\n    nav .togleNavBar {\n      margin-left: 20px; }\n    nav > ul {\n      flex-direction: column;\n      transition: all 0.4s cubic-bezier(0.87, -0.41, 0.19, 1.44);\n      overflow: hidden;\n      height: 0px;\n      position: absolute;\n      z-index: 22;\n      background-color: #fff;\n      width: 100%;\n      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n      nav > ul .subNavBar {\n        position: relative !important;\n        -webkit-transform: scale(1) !important;\n                transform: scale(1) !important;\n        width: 100% !important;\n        height: 0;\n        top: 0px !important; } }\n\n@media screen and (max-width: 480px) {\n  .phoneHeader {\n    display: none; }\n  .rightSectionUser {\n    width: 100%;\n    justify-content: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcZnJhbS1zaG9wL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcZnJhbS1zaG9wL3NyY1xcZ2xvYmFsU0NTU1xcZ2xvYmFsU0NTUy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksZ0JBQWU7RUFDZixPQUFNO0VBQ04sUUFBTztFQUNQLFlBQVcsRUFDZDs7QUFDRDtFQUNJLGNBQWE7RUFDYixnQkFBZTtFQUNmLFlBQVc7RUFDWCxRQUFPO0VBQ1AsT0FBTTtFQUNOLDBCQ1ZTO0VEV1QsWUFBVztFQUNYLGdCQUFlLEVBeVFsQjs7QUFqUkQ7SUFVUSxpQkFBZSxFQUNsQjs7QUFYTDtJQWFRLG1DQUFrQztJQUNsQyxnQkFBZTtJQUNmLFdBQVU7SUFDVixhQUFZLEVBZ0hmOztBQWhJTDtNQWtCWSxnQkFBZSxFQUNsQjs7QUFuQlQ7TUFxQlksbUJBQWtCLEVBMEdyQjs7QUEvSFQ7UUF1QmdCLG1CQUFrQixFQUNyQjs7QUF4QmI7UUEwQmdCLG1CQUFrQjtRQUNsQixTQUFRO1FBQ1IsVUFBUyxFQUNaOztBQTdCYjtRQStCZ0IsbUJBQWtCLEVBa0NyQjs7QUFqRWI7VUFpQ29CLGNBQWE7VUFDYixvQkFBbUI7VUFDbkIsZ0JBQWU7VUFDZixlQUFhO1VBQ2Isc0JBQXFCO1VBQ3JCLFlBQVcsRUFXZDs7QUFqRGpCO1lBd0N3QixtQkFBa0I7WUFDbEIsU0FBUTtZQUNSLFVBQVM7WUFDVCxnQkFBZSxFQUNsQjs7QUE1Q3JCO1lBOEN3QixnQkFBZTtZQUNmLGtCQUFpQixFQUNwQjs7QUFoRHJCO1VBbURvQixtQkFBa0I7VUFDbEIsV0FBVTtVQUNWLFdBQVU7VUFDVixVQUFTO1VBQ1QsdUJBQXNCO1VBQ3RCLGlDQUFnQztVQUNoQyxpQkFBZ0IsRUFPbkI7O0FBaEVqQjtZQTJEd0IsYUFBVztZQUNYLFlBQVc7WUFDWCxzQkFBcUI7WUFDckIsZUFBYyxFQUNqQjs7QUEvRHJCO1FBbUVnQixzQkFBcUI7UUFDckIsWUFBVztRQUNYLGdCQUFlO1FBQ2Ysa0JBQWlCLEVBQ3BCOztBQXZFYjtRQXlFZ0IsbUJBQWtCLEVBcURyQjs7QUE5SGI7VUEyRW9CLGVBQWE7VUFDYixnQkFBZTtVQUNmLFlBQVc7VUFDWCxzQkFBcUI7VUFDckIsZUFBYyxFQUlqQjs7QUFuRmpCO1lBaUZ3QixnQkFBZSxFQUNsQjs7QUFsRnJCO1VBcUZvQixhQUFZO1VBQ1osaUJBQWdCO1VBQ2hCLG1CQUFrQjtVQUNsQixXQUFVO1VBQ1YsU0FBUTtVQUNSLFVBQVM7VUFDVCx1QkFBc0I7VUFDdEIsaUNBQStCO1VBQy9CLFlBQVcsRUFnQ2Q7O0FBN0hqQjtZQStGd0IsbUJBQWlCLEVBQ3BCOztBQWhHckI7WUFrR3dCLGNBQWE7WUFDYixvQkFBbUIsRUFXdEI7O0FBOUdyQjtjQXFHNEIsZ0JBQWU7Y0FDZixtQkFBa0I7Y0FDbEIsc0JBQXFCO2NBQ3JCLFdBQVU7Y0FDVix3QkFBdUI7Y0FDdkIsaUJBQWdCO2NBQ2hCLFlBQVc7Y0FDWCxvQkFBbUIsRUFDdEI7O0FBN0d6QjtZQWdId0IsWUFBVztZQUNYLGtCQUFpQixFQVFwQjs7QUF6SHJCO2NBbUg0QixnQkFBZTtjQUNmLGlCQUFnQjtjQUNoQixtQkFBa0I7Y0FDbEIsU0FBUTtjQUNSLGtCQUFpQixFQUNwQjs7QUF4SHpCO1lBMkh3QixnQkFBZSxFQUNsQjs7QUE1SHJCO0lBa0lRLGdCQUFlLEVBeUVsQjs7QUEzTUw7TUFxSWdCLHNCQUFxQixFQWdCeEI7O0FBckpiO1FBdUlvQixtQkFBa0I7UUFDbEIsWUFBVztRQUNYLG9CQUFtQjtRQUNuQixnQkFBZTtRQUNmLG1CQUFrQixFQVNyQjs7QUFwSmpCO1VBNkl3QixtQkFBa0I7VUFDbEIsMEJBQXlCO1VBQ3pCLGdCQUFlO1VBQ2YsaUJBQWdCO1VBQ2hCLGVDMUpWO1VEMkpVLG9CQUFtQixFQUN0Qjs7QUFuSnJCO01Bd0pZLG1CQUFrQjtNQUNsQixXQUFVLEVBb0JiOztBQTdLVDtRQTJKZ0Isb0JBQW1CO1FBQ25CLGFBQVk7UUFDWixrQkFBaUI7UUFDakIsZUFBYztRQUNkLFlBQVcsRUFJZDs7QUFuS2I7VUFpS29CLGNBQWEsRUFDaEI7O0FBbEtqQjtRQXFLZ0IsbUJBQWtCO1FBQ2xCLFlBQVc7UUFDWCxZQUFXO1FBQ1gsT0FBTTtRQUNOLFVBQVM7UUFDVCxhQUFZO1FBQ1osYUFBWSxFQUNmOztBQTVLYjtNQTRMZ0IsbUJBQWtCO01BQ2xCLFlBQVc7TUFDWCxjQUFhO01BQ2Isc0JBQXFCO01BQ3JCLG9CQUFtQjtNQUNuQixnQkFBZSxFQVFsQjs7QUF6TWI7UUFpTG9CLG1CQUFrQjtRQUNsQixVQUFTO1FBQ1QsWUFBVztRQUNYLG1CQUFrQjtRQUNsQixhQUFZO1FBQ1osMEJDL0xOO1FEZ01NLG1CQUFrQjtRQUNsQixXQUFVO1FBQ1YsZ0JBQWU7UUFDZixXQUFVLEVBQ2I7O0FBM0xqQjtRQW1Nb0IsZ0JBQWU7UUFDZixpQkFBZ0I7UUFDaEIsbUJBQWtCO1FBQ2xCLFVBQVM7UUFDVCxrQkFBaUIsRUFDcEI7O0FBeE1qQjtJQTZNUSx1QkFBc0I7SUFDdEIsZ0hBQW1HLEVBa0V0Rzs7QUFoUkw7TUFnTlksZUNuTkM7TURvTkQsZ0JBQWU7TUFDZixnQkFBZSxFQUNsQjs7QUFuTlQ7TUFxTlksV0FBVTtNQUNWLGNBQWE7TUFDYix3QkFBdUI7TUFDdkIsaUJBQWdCLEVBdURuQjs7QUEvUVQ7UUEwTmdCLGdCQUFlO1FBQ2YsbUJBQWtCLEVBbURyQjs7QUE5UWI7VUE2Tm9CLGVBQWM7VUFDZCxlQ2pPUDtVRGtPTyxzQkFBcUI7VUFDckIsY0FBYSxFQU9oQjs7QUF2T2pCO1lBa093QixnQkFBZSxFQUNsQjs7QUFuT3JCO1lBcU93QixzQ0FBcUMsRUFDeEM7O0FBdE9yQjtVQXlPb0IsMEJDbFBOO1VEbVBNLFlBQVcsRUFJZDs7QUE5T2pCO1lBNE93QiwwQkNyUFYsRURzUE87O0FBN09yQjtVQWdQb0IsbUJBQWtCO1VBQ2xCLFVBQVM7VUFDVCxXQUFVO1VBQ1YsV0FBVTtVQUNWLHVCQUFzQjtVQUN0QixhQUFZO1VBQ1osZ0hBQStHO1VBQy9HLG1CQUFrQjtVQUNsQixXQUFVO1VBQ1YsMkRBQW9EO1VBQ3BELDhCQUFxQjtrQkFBckIsc0JBQXFCLEVBY3hCOztBQXhRakI7WUE2UDRCLGtCQUFpQjtZQUNqQixlQ2pRZjtZRGtRZSxlQUFjO1lBQ2Qsc0JBQXFCO1lBQ3JCLGdCQUFlLEVBS2xCOztBQXRRekI7Y0FtUWdDLGlCQUFnQjtjQUNoQixzQ0FBcUMsRUFDeEM7O0FBclE3QjtVQTBRb0Isb0JBQW1CO1VBQ25CLFdBQVU7VUFDViw0QkFBbUI7a0JBQW5CLG9CQUFtQixFQUN0Qjs7QUFNakI7RUFDSTtJQUtvQixnQkFBZTtJQUNmLGtCQUFpQixFQUNwQixFQUFBOztBQU1yQjtFQUNJO0lBQ0kseUJBQXVCLEVBQzFCO0VBQ0Q7SUFDSSwwQkFBeUI7SUFDekIsZ0JBQWUsRUFhbEI7SUFmRDtNQUlRLFdBQVU7TUFDVixtQkFBa0IsRUFDckI7SUFOTDtNQVFRLHVCQUFzQixFQUN6QjtJQVRMO01BV1EsZ0NBQStCO01BQy9CLHdCQUF1QjtNQUN2QixTQUNKLEVBQUM7RUFFTDtJQUNJLGVBQWEsRUFzQmhCO0lBdkJEO01BR1Esa0JBQWlCLEVBQ3BCO0lBSkw7TUFNUSx1QkFBc0I7TUFDdEIsMkRBQW9EO01BQ3BELGlCQUFnQjtNQUNoQixZQUFXO01BQ1gsbUJBQWtCO01BQ2xCLFlBQVc7TUFDWCx1QkFBc0I7TUFDdEIsWUFBVztNQUNYLGdIQUErRyxFQVFsSDtNQXRCTDtRQWdCWSw4QkFBNkI7UUFDN0IsdUNBQThCO2dCQUE5QiwrQkFBOEI7UUFDOUIsdUJBQXNCO1FBQ3RCLFVBQVM7UUFDVCxvQkFBa0IsRUFDckIsRUFBQTs7QUFJYjtFQUNJO0lBQ0ksY0FBYSxFQUNoQjtFQUNEO0lBQ0ksWUFBVztJQUNYLHdCQUF1QixFQUMxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vZ2xvYmFsU0NTUy9nbG9iYWxTQ1NTJztcclxuXHJcblxyXG4uZml4ZWRIZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaGVhZGVye1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MDtcclxuICAgIH1cclxuICAgIC50b3BQYW5lbHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtNXB4ICNmZmZmO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodFNlY3Rpb25Vc2Vye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgID5kaXZ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvZ2luRm9ybVJlYWRlcntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYW5nQmFye1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6OHB4IDA7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sYW5nRHJvcGRvd257XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAwcHggI2NjYztcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNpZ25JbkNsaWNre1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlckJsb2Nre1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjhweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnVzZXJXcmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjBweCAxcHggMnB4IDBweCAjY2NjO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGhye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MTBweCAwIDAgMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFjY291bnRXcmFwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2lnbk91dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1pZGRsZVBhbmVse1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgICAgICAubG9nb1dyYXB7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNzZWFyY2hQcm9kdWN0c3tcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7ICAgIFxyXG4gICAgICAgICAgICAgICAgJjpmb2N1c3tcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zaG9wcGluZ0NhcnRXcmFwe1xyXG4gICAgICAgICAgICA+YXtcclxuICAgICAgICAgICAgICAgIC5jYXJ0Q291bnR7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTRweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBzcGFuLmxuci1jYXJ0e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0ycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuYXZ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgICAgICAgLnRvZ2xlTmF2QmFye1xyXG4gICAgICAgICAgICBjb2xvcjogJGdyZXk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICA+dWx7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICA+bGl7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICA+YXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgPnNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFjdGl2ZU5hdkl0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc3ViTmF2QmFye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoLjg3LC0uNDEsLjE5LDEuNDQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgICAgICAgICAgICAgICAgICA+bGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5he1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNob3dMaXN0e1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IFxyXG5cclxuQG1lZGlhICN7JG1kLWRldmljZX17XHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgICAgbmF2e1xyXG4gICAgICAgICAgICA+IHVse1xyXG4gICAgICAgICAgICAgICAgPmxpe1xyXG4gICAgICAgICAgICAgICAgICAgID5he1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgI3skc20tZGV2aWNlTWF4fXtcclxuICAgIC50b3BQYW5lbCA+IHA6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1pZGRsZVBhbmVse1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC5sb2dvV3JhcCwgLnNob3BwaW5nQ2FydFdyYXB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3NlYXJjaFByb2R1Y3Rze1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2hvcHBpbmdDYXJ0V3JhcCA+IGF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB0b3A6IDdweFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG5hdiB7XHJcbiAgICAgICAgcGFkZGluZzo1cHggMDsgXHJcbiAgICAgICAgLnRvZ2xlTmF2QmFye1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgPnVse1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoLjg3LC0uNDEsLjE5LDEuNDQpO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyMjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICAgICAgLnN1Yk5hdkJhcntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgIHRvcDowcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ4MHB4KXtcclxuICAgIC5waG9uZUhlYWRlcntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0U2VjdGlvblVzZXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iLCIkZ3JlZW46IzY4OUYzODtcclxuJGdyZWVuRGFyazojNTA4YzFjO1xyXG4kZ3JlZW5SR0JBOiM2ODlmMzg4YztcclxuJGRpc2FibGVkQnV0dG9uOiM5YmEyOTU7XHJcbiRoaWdoV2F5Qkc6I0YyRjJGMjtcclxuJGRhcms6IzI2MjYyNjtcclxuJGdyZXk6IzYxNjE2MTtcclxuJHJlZDogI0Y0NDMzNjtcclxuJHllbGxvdzogI0ZCQzAyRDtcclxuXHJcbiRjb2w6IFwiKG1heC13aWR0aDogNTc2cHgpXCI7XHJcbiRzbS1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogNzY3cHgpXCI7XHJcbiRzbS1kZXZpY2U6IFwiKG1heC13aWR0aDogNzY3cHgpIGFuZCAobWluLXdpZHRoOjU3N3B4KVwiO1xyXG4kbWQtZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDk5MXB4KVwiO1xyXG4kbWQtZGV2aWNlOiBcIihtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDo3NjhweClcIjtcclxuJGxnLWRldmljZTogXCIobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOjk5MnB4KVwiO1xyXG4keGwtZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDEyMDBweClcIjtcclxuJHhsLWRldmljZTogXCIobWluLXdpZHRoOiAxMjAxcHgpXCI7Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate) {
        this.translate = translate;
        this.selectLanguage = true;
        this.userWrap = true;
        this.toggleNavBar = false;
        this.heightNavBar = 0;
        this.heghtSub = 0;
        this.showList = false;
        this.topHide = false;
        this.topPanelHeight = 0;
        this.headerHeight = 0;
        this.isLogin = true;
        this.langIMG = './assets/img/flag1.png';
        this.langTXT = "English";
        this.showLoginForm = false;
        this.showRegForm = false;
        this.isClickedLogin = false;
        translate.setDefaultLang('en');
    }
    HeaderComponent.prototype.hideMobileMenu = function () {
        this.toggleNavBar = false;
        this.heightNavBar = 0;
        this.heghtSub = 0;
        this.navBarRef.nativeElement.style.height = this.heightNavBar + "px";
        this.subList.nativeElement.style.height = this.heghtSub + "px";
    };
    HeaderComponent.prototype.headerFixed = function (event) {
        if (window.scrollY >= this.topPanelHeight) {
            this.topHide = true;
        }
        else {
            this.topHide = false;
        }
    };
    HeaderComponent.prototype.hideDropdowns = function (event) {
        if (!event.target.closest(".changeLangualge")) {
            this.selectLanguage = true;
        }
        if (!event.target.closest(".userOpenButton")) {
            this.userWrap = true;
        }
        if (event.target.closest(".userWrapper") && !event.target.closest(".accountWrap")) {
            this.userWrap = false;
        }
        if (window.matchMedia("(max-width: 767px)").matches) {
            if (event.target.closest(".toggleList") && !event.target.closest(".openDropDownList")) {
                this.hideMobileMenu();
                setTimeout(function () {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                }, 200);
            }
            if (!event.target.closest(".togleNavBar") && !event.target.closest(".toggleList")) {
                this.hideMobileMenu();
            }
        }
        if (event.target.closest(".subNavBar") || !event.target.closest(".openDropDownList")) {
            if (window.matchMedia("(max-width: 767px)").matches) {
                this.heightNavBar -= this.heghtSub;
                this.heghtSub = 0;
                this.subList.nativeElement.style.height = this.heghtSub + "px";
                this.navBarRef.nativeElement.style.height = this.heightNavBar + "px";
            }
            this.showList = false;
        }
        // Hide Login Or Register Form 
        if (this.showLoginForm && !event.target.closest(".loginForm")) {
            this.showLoginForm = false;
        }
        if (this.showRegForm && !event.target.closest(".goRegister") && !event.target.closest(".registerForm")) {
            this.showRegForm = false;
        }
        // _____________________________
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.topPanelHeight = document.querySelector(".topPanel").getBoundingClientRect().height;
        this.headerHeight = document.querySelector("header").getBoundingClientRect().height;
        document.querySelector("body").style.paddingTop = this.headerHeight + "px";
    };
    HeaderComponent.prototype.selectLang = function (event) {
        this.selectLanguage = !this.selectLanguage;
    };
    HeaderComponent.prototype.switchLanguage = function (language, langFlag, event) {
        var _this = this;
        setTimeout(function () {
            _this.langTXT = event.target.innerText;
        }, 200);
        this.langIMG = langFlag.getAttribute('src');
        this.translate.use(language);
    };
    HeaderComponent.prototype.userOpen = function (event) {
        this.userWrap = !this.userWrap;
    };
    HeaderComponent.prototype.toggleNav = function () {
        var _this = this;
        this.heghtSub = 0;
        this.heightNavBar = 0;
        this.toggleNavBar = !this.toggleNavBar;
        if (this.toggleNavBar) {
            Array.prototype.map.call(this.navBarRef.nativeElement.children, function (elem) {
                _this.heightNavBar += elem.getBoundingClientRect().height;
            });
        }
        else {
            this.heightNavBar = 0;
        }
        this.navBarRef.nativeElement.style.height = this.heightNavBar + "px";
        this.subList.nativeElement.style.height = this.heghtSub + "px";
    };
    HeaderComponent.prototype.showListProducts = function () {
        var _this = this;
        this.showList = !this.showList;
        if (window.matchMedia("(max-width: 767px)").matches) {
            if (this.showList) {
                Array.prototype.map.call(this.subList.nativeElement.children, function (elem) {
                    _this.heghtSub += elem.getBoundingClientRect().height;
                });
                this.heightNavBar += this.heghtSub;
            }
            else {
                this.heightNavBar -= this.heghtSub;
                this.heghtSub = 0;
            }
            this.subList.nativeElement.style.height = this.heghtSub + "px";
            this.navBarRef.nativeElement.style.height = this.heightNavBar + "px";
        }
    };
    HeaderComponent.prototype.showLogin = function () {
        var _this = this;
        this.isClickedLogin = true;
        setTimeout(function () {
            _this.showLoginForm = true;
            _this.showRegForm = false;
            document.querySelector('.goRegister').onclick = function () {
                _this.showLoginForm = false;
                _this.showRegForm = true;
            };
        }, 0);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toggleNavBar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HeaderComponent.prototype, "navBarRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('subList'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HeaderComponent.prototype, "subList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HeaderComponent.prototype, "headerFixed", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HeaderComponent.prototype, "hideDropdowns", null);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            host: {
                '(document:click)': 'hideDropdowns($event)',
                '(window:scroll)': 'headerFixed($event)',
            },
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/header/login-form/login-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/header/login-form/login-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginForm\" [class.showForm]=\"isShowBoolean\">\n    <h3 class=\"headerForm text-left\">{{'header.loginForm.title' | translate}}</h3>\n    <form name=\"\" action=\"\" method=\"\" #loginForm=\"ngForm\" (ngSubmit)=\"signIn(loginForm)\"  id=\"loginForma\" class=\"d-flex align-items-start flex-column\">\n        <input type=\"text\" name=\"username\" [(ngModel)]=\"logForm.username\"  placeholder=\"{{ 'header.loginForm.namePlace' | translate}}\"  required>\n        <input type=\"password\" name=\"password\" [(ngModel)]=\"logForm.password\"  placeholder=\"{{ 'header.loginForm.passPlace' | translate}}\" required>\n        <a href=\"javascript:void(0)\" (click)=\"isShowBoolean = false\" routerLink=\"/reset-password\">{{ 'header.loginForm.forgetTxt' | translate}}</a>\n        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"loginButton\">{{ 'header.loginForm.loginButton' | translate}}</button>\n        <a href=\"javascript:void(0)\" class=\"registerFunc goRegister\">{{ 'header.loginForm.orRegButton' | translate}}</a> \n    </form>    \n</div> "

/***/ }),

/***/ "./src/app/components/header/login-form/login-form.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/header/login-form/login-form.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginForm, .registerForm {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 32px 22px 24px;\n  background: #fff;\n  width: 280px;\n  z-index: 27;\n  -webkit-transform-origin: 100% 0%;\n  -o-transform-origin: 100% 0%;\n  -moz-transform-origin: 100% 0%;\n  -o-transform: scale(0);\n  -moz-transform: scale(0);\n  -webkit-transform: scale(0);\n  transition: all 0.5s ease;\n  opacity: 0;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n  .loginForm .headerForm, .registerForm .headerForm {\n    text-transform: uppercase;\n    font-size: 18px;\n    padding: 10px;\n    color: #000; }\n  .loginForm #loginForma > a, .loginForm #registerForma > a, .registerForm #loginForma > a, .registerForm #registerForma > a {\n    color: #F44336;\n    font-size: 14px;\n    font-weight: bold;\n    text-decoration: underline;\n    padding: 4px 0; }\n  .showForm {\n  -o-transform: scale(1);\n  -moz-transform: scale(1);\n  -webkit-transform: scale(1);\n  opacity: 1; }\n  #loginForma input, #registerForma input:not(.notSelect) {\n  background: #f4efec;\n  border: none;\n  margin-bottom: 11px;\n  font-size: 14px;\n  font-weight: normal;\n  color: #b1b1b1;\n  padding: 10px 14px;\n  width: 100% !important;\n  box-shadow: none;\n  transition: all 0.4s ease;\n  cursor: auto;\n  border: 1px solid #fafafa;\n  outline: none; }\n  #loginForma .loginButton, #registerForma .loginButton {\n  border: none;\n  border-radius: 0;\n  background: #689F38;\n  color: #fff;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  outline: none;\n  padding: 7px 19px;\n  text-shadow: none;\n  box-shadow: none;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all 0.4s ease;\n  cursor: pointer;\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvbG9naW4tZm9ybS9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcbG9naW4tZm9ybVxcbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvbG9naW4tZm9ybS9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxnbG9iYWxTQ1NTXFxnbG9iYWxTQ1NTLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFNBQVE7RUFDUix3QkFBdUI7RUFDdkIsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixZQUFXO0VBQ1gsa0NBQWlDO0VBQ2pDLDZCQUE0QjtFQUM1QiwrQkFBOEI7RUFDOUIsdUJBQXNCO0VBQ3RCLHlCQUF3QjtFQUN4Qiw0QkFBMkI7RUFJM0IsMEJBQXlCO0VBQ3pCLFdBQVU7RUFDVixnSEFBK0csRUFnQmxIO0VBbkNEO0lBcUJRLDBCQUF5QjtJQUN6QixnQkFBZTtJQUNmLGNBQWE7SUFDYixZQUFXLEVBQ2Q7RUF6Qkw7SUE0QlksZUN4QkM7SUR5QkQsZ0JBQWU7SUFDZixrQkFBaUI7SUFDakIsMkJBQTBCO0lBQzFCLGVBQWMsRUFDakI7RUFHVDtFQUNJLHVCQUFzQjtFQUN0Qix5QkFBd0I7RUFDeEIsNEJBQTJCO0VBQzNCLFdBQVUsRUFDYjtFQUNEO0VBQ0ksb0JBQW1CO0VBQ25CLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsZUFBYztFQUNkLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsaUJBQWdCO0VBSWhCLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osMEJBQXlCO0VBQ3pCLGNBQWEsRUFFaEI7RUFDRDtFQUNJLGFBQVk7RUFHWixpQkFBZ0I7RUFDaEIsb0JDckVVO0VEc0VWLFlBQVc7RUFDWCxzQkFBcUI7RUFDckIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLGNBQWE7RUFDYixrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsMEJBQXlCO0VBSXpCLDBCQUF5QjtFQUN6QixnQkFBZTtFQUNmLGNBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9nbG9iYWxTQ1NTL2V4dGVuZHMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9nbG9iYWxTQ1NTL2dsb2JhbFNDU1MnO1xyXG5cclxuLmxvZ2luRm9ybSwgLnJlZ2lzdGVyRm9ybSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDMycHggMjJweCAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIHotaW5kZXg6IDI3O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAlO1xyXG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAuaGVhZGVyRm9ybSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgICNsb2dpbkZvcm1hLCAjcmVnaXN0ZXJGb3JtYXtcclxuICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBjb2xvcjogJHJlZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uc2hvd0Zvcm17XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4jbG9naW5Gb3JtYSBpbnB1dCwgI3JlZ2lzdGVyRm9ybWEgaW5wdXQ6bm90KC5ub3RTZWxlY3QpIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNGVmZWM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjYjFiMWIxO1xyXG4gICAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIGN1cnNvcjogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmYWZhZmE7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgXHJcbn1cclxuI2xvZ2luRm9ybWEgLmxvZ2luQnV0dG9uLCAgI3JlZ2lzdGVyRm9ybWEgLmxvZ2luQnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZ3JlZW47XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA3cHggMTlweDtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbn0iLCIkZ3JlZW46IzY4OUYzODtcclxuJGdyZWVuRGFyazojNTA4YzFjO1xyXG4kZ3JlZW5SR0JBOiM2ODlmMzg4YztcclxuJGRpc2FibGVkQnV0dG9uOiM5YmEyOTU7XHJcbiRoaWdoV2F5Qkc6I0YyRjJGMjtcclxuJGRhcms6IzI2MjYyNjtcclxuJGdyZXk6IzYxNjE2MTtcclxuJHJlZDogI0Y0NDMzNjtcclxuJHllbGxvdzogI0ZCQzAyRDtcclxuXHJcbiRjb2w6IFwiKG1heC13aWR0aDogNTc2cHgpXCI7XHJcbiRzbS1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogNzY3cHgpXCI7XHJcbiRzbS1kZXZpY2U6IFwiKG1heC13aWR0aDogNzY3cHgpIGFuZCAobWluLXdpZHRoOjU3N3B4KVwiO1xyXG4kbWQtZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDk5MXB4KVwiO1xyXG4kbWQtZGV2aWNlOiBcIihtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDo3NjhweClcIjtcclxuJGxnLWRldmljZTogXCIobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOjk5MnB4KVwiO1xyXG4keGwtZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDEyMDBweClcIjtcclxuJHhsLWRldmljZTogXCIobWluLXdpZHRoOiAxMjAxcHgpXCI7Il19 */"

/***/ }),

/***/ "./src/app/components/header/login-form/login-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/header/login-form/login-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth-service.service */ "./src/app/services/auth-service.service.ts");



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(authServ) {
        this.authServ = authServ;
        this.logForm = {
            username: '',
            password: ''
        };
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.signIn = function (_a) {
        var value = _a.value;
        this.authServ.SignIn(value.username, value.password);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isShowBoolean'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], LoginFormComponent.prototype, "isShowBoolean", void 0);
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/components/header/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/components/header/login-form/login-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/components/header/register-form/register-form.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/header/register-form/register-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registerForm\" [class.showForm]=\"isShowBoolean\">\n    <h3 class=\"headerForm text-left\">{{'header.regForm.title' | translate}}</h3>\n    <form name=\"\" action=\"\" method=\"\" #registerForm=\"ngForm\" (ngSubmit)=\"createUser(registerForm)\" id=\"registerForma\" class=\"d-flex align-items-start flex-column\">\n        <input type=\"text\" required name=\"firstName\" [(ngModel)]=\"regForm.firstName\" placeholder=\"{{'header.regForm.fName' | translate}}\">\n        <input type=\"text\" required name=\"lastName\" [(ngModel)]=\"regForm.lastName\" placeholder=\"{{'header.regForm.lName' | translate}}\">\n        <input pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" id=\"emailTrue\" [(ngModel)]=\"regForm.emailTrue\" ngModel\n            #emailref=\"ngModel\" required name=\"emailTrue\" placeholder=\"{{'header.regForm.email' | translate}}\">\n        <div [hidden]=\"!emailref.errors?.pattern\" *ngIf=\"emailref.errors &&(emailref.touched || emailref.dirty)\" class=\"alert alert-danger w-100\">\n            <div style=\"font-size:12px\">\n                {{'header.regForm.wrongEmailMsg' | translate}}\n            </div>\n        </div>\n        <input type=\"password\" required name=\"password\" (input)=\"showRegFormPassLargeThenSix = \n        (regForm.password.length < 6 && regForm.password.length != 0)?false:true\" placeholder=\"{{'header.regForm.password' | translate}}\" \n        [(ngModel)]=\"regForm.password\">\n        <span style=\"color:red\" [hidden]=\"showRegFormPassLargeThenSix\">{{'header.regForm.passMoreThenSix' | translate}}</span>\n        <input type=\"password\" required name=\"confirmPass\" (input)=\"showRegFormPassNotSame = \n        (regForm.password != regForm.confirmPass && regForm.password !='' && regForm.confirmPass != '')?true:false;\" \n        placeholder=\"{{'header.regForm.confPassword' | translate}}\" [(ngModel)]=\"regForm.confirmPass\">\n        <span style=\"color:red\" [hidden]=\"!showRegFormPassNotSame\">{{'header.regForm.confirmMsg' | translate}}</span>\n        <button type=\"submit\" [disabled]=\"!registerForm.valid\" class=\"loginButton\">{{'header.regForm.regButton' | translate}}</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/header/register-form/register-form.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/header/register-form/register-form.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginForm, .registerForm {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 32px 22px 24px;\n  background: #fff;\n  width: 280px;\n  z-index: 27;\n  -webkit-transform-origin: 100% 0%;\n  -o-transform-origin: 100% 0%;\n  -moz-transform-origin: 100% 0%;\n  -o-transform: scale(0);\n  -moz-transform: scale(0);\n  -webkit-transform: scale(0);\n  transition: all 0.5s ease;\n  opacity: 0;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n  .loginForm .headerForm, .registerForm .headerForm {\n    text-transform: uppercase;\n    font-size: 18px;\n    padding: 10px;\n    color: #000; }\n  .loginForm #loginForma > a, .loginForm #registerForma > a, .registerForm #loginForma > a, .registerForm #registerForma > a {\n    color: #F44336;\n    font-size: 14px;\n    font-weight: bold;\n    text-decoration: underline;\n    padding: 4px 0; }\n  .showForm {\n  -o-transform: scale(1);\n  -moz-transform: scale(1);\n  -webkit-transform: scale(1);\n  opacity: 1; }\n  #loginForma input, #registerForma input:not(.notSelect) {\n  background: #f4efec;\n  border: none;\n  margin-bottom: 11px;\n  font-size: 14px;\n  font-weight: normal;\n  color: #b1b1b1;\n  padding: 10px 14px;\n  width: 100% !important;\n  box-shadow: none;\n  transition: all 0.4s ease;\n  cursor: auto;\n  border: 1px solid #fafafa;\n  outline: none; }\n  #loginForma .loginButton, #registerForma .loginButton {\n  border: none;\n  border-radius: 0;\n  background: #689F38;\n  color: #fff;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  outline: none;\n  padding: 7px 19px;\n  text-shadow: none;\n  box-shadow: none;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all 0.4s ease;\n  cursor: pointer;\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvcmVnaXN0ZXItZm9ybS9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcbG9naW4tZm9ybVxcbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvcmVnaXN0ZXItZm9ybS9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxnbG9iYWxTQ1NTXFxnbG9iYWxTQ1NTLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFNBQVE7RUFDUix3QkFBdUI7RUFDdkIsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixZQUFXO0VBQ1gsa0NBQWlDO0VBQ2pDLDZCQUE0QjtFQUM1QiwrQkFBOEI7RUFDOUIsdUJBQXNCO0VBQ3RCLHlCQUF3QjtFQUN4Qiw0QkFBMkI7RUFJM0IsMEJBQXlCO0VBQ3pCLFdBQVU7RUFDVixnSEFBK0csRUFnQmxIO0VBbkNEO0lBcUJRLDBCQUF5QjtJQUN6QixnQkFBZTtJQUNmLGNBQWE7SUFDYixZQUFXLEVBQ2Q7RUF6Qkw7SUE0QlksZUN4QkM7SUR5QkQsZ0JBQWU7SUFDZixrQkFBaUI7SUFDakIsMkJBQTBCO0lBQzFCLGVBQWMsRUFDakI7RUFHVDtFQUNJLHVCQUFzQjtFQUN0Qix5QkFBd0I7RUFDeEIsNEJBQTJCO0VBQzNCLFdBQVUsRUFDYjtFQUNEO0VBQ0ksb0JBQW1CO0VBQ25CLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsZUFBYztFQUNkLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsaUJBQWdCO0VBSWhCLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osMEJBQXlCO0VBQ3pCLGNBQWEsRUFFaEI7RUFDRDtFQUNJLGFBQVk7RUFHWixpQkFBZ0I7RUFDaEIsb0JDckVVO0VEc0VWLFlBQVc7RUFDWCxzQkFBcUI7RUFDckIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLGNBQWE7RUFDYixrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsMEJBQXlCO0VBSXpCLDBCQUF5QjtFQUN6QixnQkFBZTtFQUNmLGNBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9nbG9iYWxTQ1NTL2V4dGVuZHMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9nbG9iYWxTQ1NTL2dsb2JhbFNDU1MnO1xyXG5cclxuLmxvZ2luRm9ybSwgLnJlZ2lzdGVyRm9ybSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDMycHggMjJweCAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIHotaW5kZXg6IDI3O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAlO1xyXG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAuaGVhZGVyRm9ybSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgICNsb2dpbkZvcm1hLCAjcmVnaXN0ZXJGb3JtYXtcclxuICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBjb2xvcjogJHJlZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uc2hvd0Zvcm17XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4jbG9naW5Gb3JtYSBpbnB1dCwgI3JlZ2lzdGVyRm9ybWEgaW5wdXQ6bm90KC5ub3RTZWxlY3QpIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNGVmZWM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjYjFiMWIxO1xyXG4gICAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIGN1cnNvcjogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmYWZhZmE7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgXHJcbn1cclxuI2xvZ2luRm9ybWEgLmxvZ2luQnV0dG9uLCAgI3JlZ2lzdGVyRm9ybWEgLmxvZ2luQnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZ3JlZW47XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA3cHggMTlweDtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbn0iLCIkZ3JlZW46IzY4OUYzODtcclxuJGdyZWVuRGFyazojNTA4YzFjO1xyXG4kZ3JlZW5SR0JBOiM2ODlmMzg4YztcclxuJGRpc2FibGVkQnV0dG9uOiM5YmEyOTU7XHJcbiRoaWdoV2F5Qkc6I0YyRjJGMjtcclxuJGRhcms6IzI2MjYyNjtcclxuJGdyZXk6IzYxNjE2MTtcclxuJHJlZDogI0Y0NDMzNjtcclxuJHllbGxvdzogI0ZCQzAyRDtcclxuXHJcbiRjb2w6IFwiKG1heC13aWR0aDogNTc2cHgpXCI7XHJcbiRzbS1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogNzY3cHgpXCI7XHJcbiRzbS1kZXZpY2U6IFwiKG1heC13aWR0aDogNzY3cHgpIGFuZCAobWluLXdpZHRoOjU3N3B4KVwiO1xyXG4kbWQtZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDk5MXB4KVwiO1xyXG4kbWQtZGV2aWNlOiBcIihtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDo3NjhweClcIjtcclxuJGxnLWRldmljZTogXCIobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOjk5MnB4KVwiO1xyXG4keGwtZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDEyMDBweClcIjtcclxuJHhsLWRldmljZTogXCIobWluLXdpZHRoOiAxMjAxcHgpXCI7Il19 */"

/***/ }),

/***/ "./src/app/components/header/register-form/register-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/header/register-form/register-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth-service.service */ "./src/app/services/auth-service.service.ts");



var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent(authServ) {
        this.authServ = authServ;
        this.showRegFormPassNotSame = false;
        this.showRegFormPassLargeThenSix = true;
        this.regForm = {
            firstName: '',
            lastName: '',
            emailTrue: '',
            password: '',
            confirmPass: '',
        };
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
    };
    RegisterFormComponent.prototype.createUser = function (_a) {
        var value = _a.value;
        this.authServ.SignUp(value.emailTrue, value.password);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isShowBoolean'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], RegisterFormComponent.prototype, "isShowBoolean", void 0);
    RegisterFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-form',
            template: __webpack_require__(/*! ./register-form.component.html */ "./src/app/components/header/register-form/register-form.component.html"),
            styles: [__webpack_require__(/*! ./register-form.component.scss */ "./src/app/components/header/register-form/register-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/home-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- Slider--> \n<app-slider></app-slider>\n<!-- Slider--> \n\n<!-- Services-part--> \n<app-services-part></app-services-part>\n<!-- Services-part--> \n\n<!-- Shop-categories--> \n<app-shop-categories></app-shop-categories>\n<!-- Shop-categories-->\n\n<!-- Shop-Badges--> \n<app-shop-badges></app-shop-badges>\n<!-- Shop-Badges-->\n\n<!-- Partners-Badges--> \n<app-partners-home></app-partners-home>\n<!-- Partners-Badges--> \n\n"

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/components/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/components/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/partners-home/partners-home.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/home-page/partners-home/partners-home.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-4\">\n    <div class=\"col-12\">\n        <h3 class=\"partnersTitle text-center\">{{ 'partnersHome.title' | translate }}</h3>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"swiper-container swiper_partners_home\">\n            <div class=\"swiper-wrapper\">\n                <div class=\"swiper-slide p-1\">\n                    <img src=\"./assets/img/partners/partner1.png\" alt=\"\" class=\"img-fluid\">\n                </div>\n                <div class=\"swiper-slide p-1\">\n                    <img src=\"./assets/img/partners/partner2.png\" alt=\"\" class=\"img-fluid\">\n                </div>\n                <div class=\"swiper-slide p-1\">\n                    <img src=\"./assets/img/partners/partner3.png\" alt=\"\" class=\"img-fluid\">\n                </div>\n                <div class=\"swiper-slide p-1\">\n                    <img src=\"./assets/img/partners/partner4.png\" alt=\"\" class=\"img-fluid\">\n                </div>\n                <div class=\"swiper-slide p-1\">\n                    <img src=\"./assets/img/partners/partner5.png\" alt=\"\" class=\"img-fluid\">\n                </div>\n                <div class=\"swiper-slide p-1\">\n                    <img src=\"./assets/img/partners/partner6.png\" alt=\"\" class=\"img-fluid\">\n                </div>\n                <div class=\"swiper-slide p-1\">\n                    <img src=\"./assets/img/partners/partner7.png\" alt=\"\" class=\"img-fluid\">\n                </div>\n                <div class=\"swiper-slide p-1\">\n                    <img src=\"./assets/img/partners/partner8.png\" alt=\"\" class=\"img-fluid\">\n                </div>\n                <div class=\"swiper-slide p-1\">\n                    <img src=\"./assets/img/partners/partner9.png\" alt=\"\" class=\"img-fluid\">\n                </div>\n                <div class=\"swiper-slide p-1\">\n                    <img src=\"./assets/img/partners/partner10.png\" alt=\"\" class=\"img-fluid\">\n                </div>\n                <div class=\"swiper-slide p-1\">\n                    <img src=\"./assets/img/partners/partner11.png\" alt=\"\" class=\"img-fluid\">\n                </div>\n                <div class=\"swiper-slide p-1\">\n                    <img src=\"./assets/img/partners/partner12.png\" alt=\"\" class=\"img-fluid\">\n                </div>\n                <div class=\"swiper-slide p-1\">\n                    <img src=\"./assets/img/partners/partner13.png\" alt=\"\" class=\"img-fluid\">\n                </div>\n            </div>\n            <div class=\"swiper-button-next pr_butt_slider\"><span class=\"lnr lnr-chevron-right\"></span></div>\n            <div class=\"swiper-button-prev pr_butt_slider\"><span class=\"lnr lnr-chevron-left\"></span></div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home-page/partners-home/partners-home.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/home-page/partners-home/partners-home.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".partnersTitle {\n  position: relative;\n  margin-bottom: 25px; }\n  .partnersTitle::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 2px;\n    width: 75px;\n    background-color: #689F38;\n    margin: auto;\n    bottom: -6px; }\n  .swiper_partners_home .pr_butt_slider {\n  background-image: none; }\n  .swiper_partners_home .pr_butt_slider span {\n    font-size: 20px;\n    height: 35px;\n    width: 35px;\n    background-color: #689F38;\n    display: inline-flex;\n    border-radius: 50%;\n    justify-content: center;\n    align-items: center;\n    color: #fff;\n    position: relative;\n    top: 5px; }\n  .swiper_partners_home .swiper-slide img {\n  border: 1px solid #689F38;\n  height: 70px;\n  padding: 10px;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvcGFydG5lcnMtaG9tZS9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWUtcGFnZVxccGFydG5lcnMtaG9tZVxccGFydG5lcnMtaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvcGFydG5lcnMtaG9tZS9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxnbG9iYWxTQ1NTXFxnbG9iYWxTQ1NTLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxtQkFBa0I7RUFDbEIsb0JBQW1CLEVBWXRCO0VBZEQ7SUFJUSxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFFBQU87SUFDUCxTQUFRO0lBQ1IsWUFBVztJQUNYLFlBQVc7SUFDWCwwQkNkTTtJRGVOLGFBQVk7SUFDWixhQUFZLEVBQ2Y7RUFFTDtFQUVRLHVCQUFzQixFQWN6QjtFQWhCTDtJQUlZLGdCQUFlO0lBQ2YsYUFBWTtJQUNaLFlBQVc7SUFDWCwwQkMxQkU7SUQyQkYscUJBQW9CO0lBQ3BCLG1CQUFrQjtJQUNsQix3QkFBdUI7SUFDdkIsb0JBQW1CO0lBQ25CLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsU0FBUSxFQUNYO0VBZlQ7RUFtQlksMEJDdENFO0VEdUNGLGFBQVk7RUFDWixjQUFhO0VBQ2IsWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvcGFydG5lcnMtaG9tZS9wYXJ0bmVycy1ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vZ2xvYmFsU0NTUy9leHRlbmRzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vZ2xvYmFsU0NTUy9nbG9iYWxTQ1NTJztcclxuXHJcblxyXG4ucGFydG5lcnNUaXRsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAmOjphZnRlcntcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgYm90dG9tOiAtNnB4O1xyXG4gICAgfVxyXG59XHJcbi5zd2lwZXJfcGFydG5lcnNfaG9tZXtcclxuICAgIC5wcl9idXR0X3NsaWRlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN3aXBlci1zbGlkZXtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgJGdyZWVuO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiRncmVlbjojNjg5RjM4O1xyXG4kZ3JlZW5EYXJrOiM1MDhjMWM7XHJcbiRncmVlblJHQkE6IzY4OWYzODhjO1xyXG4kZGlzYWJsZWRCdXR0b246IzliYTI5NTtcclxuJGhpZ2hXYXlCRzojRjJGMkYyO1xyXG4kZGFyazojMjYyNjI2O1xyXG4kZ3JleTojNjE2MTYxO1xyXG4kcmVkOiAjRjQ0MzM2O1xyXG4keWVsbG93OiAjRkJDMDJEO1xyXG5cclxuJGNvbDogXCIobWF4LXdpZHRoOiA1NzZweClcIjtcclxuJHNtLWRldmljZU1heDogXCIobWF4LXdpZHRoOiA3NjdweClcIjtcclxuJHNtLWRldmljZTogXCIobWF4LXdpZHRoOiA3NjdweCkgYW5kIChtaW4td2lkdGg6NTc3cHgpXCI7XHJcbiRtZC1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogOTkxcHgpXCI7XHJcbiRtZC1kZXZpY2U6IFwiKG1heC13aWR0aDogOTkxcHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KVwiO1xyXG4kbGctZGV2aWNlOiBcIihtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6OTkycHgpXCI7XHJcbiR4bC1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogMTIwMHB4KVwiO1xyXG4keGwtZGV2aWNlOiBcIihtaW4td2lkdGg6IDEyMDFweClcIjsiXX0= */"

/***/ }),

/***/ "./src/app/components/home-page/partners-home/partners-home.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/home-page/partners-home/partners-home.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PartnersHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersHomeComponent", function() { return PartnersHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PartnersHomeComponent = /** @class */ (function () {
    function PartnersHomeComponent() {
    }
    PartnersHomeComponent.prototype.ngOnInit = function () {
        var swiper_rev = new Swiper('.swiper_partners_home', {
            slidesPerView: 8,
            autoplay: 1000,
            speed: 1500,
            autoplayDisableOnInteraction: false,
            paginationClickable: true,
            spaceBetween: 8,
            breakpoints: {
                480: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 5
                },
                991: {
                    slidesPerView: 6
                }
            },
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        });
    };
    PartnersHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partners-home',
            template: __webpack_require__(/*! ./partners-home.component.html */ "./src/app/components/home-page/partners-home/partners-home.component.html"),
            styles: [__webpack_require__(/*! ./partners-home.component.scss */ "./src/app/components/home-page/partners-home/partners-home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PartnersHomeComponent);
    return PartnersHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/services-part/services-part.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/home-page/services-part/services-part.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"servicesPart\">\n    <div class=\"container\">\n        <div class=\"bgServices\">\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3  d-flex align-items-center\">\n                    <img src=\"./assets/img/services1.png\" alt=\"\">\n                    <div class=\"descServices\">\n                        <b class=\"d-block\">{{ 'servicePart.part1Tit' | translate }}</b>\n                        <p class=\"text-muted mb-0\">{{ 'servicePart.part1SubTit' | translate }}</p>\n                    </div>\n                </div>\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3  d-flex align-items-center\">\n                    <img src=\"./assets/img/services2.png\" alt=\"\">\n                    <div class=\"descServices\">\n                        <b class=\"d-block\">{{ 'servicePart.part2Tit' | translate }}</b>\n                        <p class=\"text-muted mb-0\">{{ 'servicePart.part2SubTit' | translate }}</p>\n                    </div>\n                </div>\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3  d-flex align-items-center\">\n                    <img src=\"./assets/img/services3.png\" alt=\"\">\n                    <div class=\"descServices\">\n                        <b class=\"d-block\">{{ 'servicePart.part3Tit' | translate }}</b>\n                        <p class=\"text-muted mb-0\">{{ 'servicePart.part3SubTit' | translate }}</p>\n                    </div>\n                </div>\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3  d-flex align-items-center\">\n                    <img src=\"./assets/img/services4.png\" alt=\"\">\n                    <div class=\"descServices\">\n                        <b class=\"d-block\">{{ 'servicePart.part4Tit' | translate }}</b>\n                        <p class=\"text-muted mb-0\">{{ 'servicePart.part4SubTit' | translate }}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/home-page/services-part/services-part.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/home-page/services-part/services-part.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#servicesPart .bgServices {\n  margin: 15px 0;\n  background-color: #F2F2F2;\n  padding: 15px; }\n  #servicesPart .bgServices img {\n    max-width: 50px; }\n  #servicesPart .bgServices .descServices {\n    padding-left: 15px; }\n  #servicesPart .bgServices .descServices b {\n      color: #6F6F6F;\n      font-size: 16px;\n      margin-bottom: 7px; }\n  #servicesPart .bgServices .descServices p {\n      font-size: 13px;\n      line-height: 15px;\n      height: 30px;\n      overflow: hidden; }\n  @media (max-width: 1200px) {\n  .bgServices > div.row > div {\n    margin-bottom: 15px; } }\n  @media (max-width: 767px) {\n  .bgServices > div.row > div {\n    justify-content: center;\n    flex-direction: column;\n    align-items: center; }\n    .bgServices > div.row > div .descServices {\n      text-align: center;\n      padding-left: 0 !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2Uvc2VydmljZXMtcGFydC9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWUtcGFnZVxcc2VydmljZXMtcGFydFxcc2VydmljZXMtcGFydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2Uvc2VydmljZXMtcGFydC9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxnbG9iYWxTQ1NTXFxnbG9iYWxTQ1NTLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFUSxlQUFjO0VBQ2QsMEJDQVU7RURDVixjQUFhLEVBa0JoQjtFQXRCTDtJQU1ZLGdCQUFlLEVBQ2xCO0VBUFQ7SUFTWSxtQkFBa0IsRUFZckI7RUFyQlQ7TUFXZ0IsZUFBYztNQUNkLGdCQUFlO01BQ2YsbUJBQWtCLEVBQ3JCO0VBZGI7TUFnQmdCLGdCQUFlO01BQ2Ysa0JBQWlCO01BQ2pCLGFBQVk7TUFDWixpQkFBZ0IsRUFDbkI7RUFJYjtFQUNJO0lBR1ksb0JBQW1CLEVBQ3RCLEVBQUE7RUFLYjtFQUNJO0lBR1ksd0JBQXVCO0lBQ3ZCLHVCQUFzQjtJQUN0QixvQkFBbUIsRUFLdEI7SUFWVDtNQU9nQixtQkFBa0I7TUFDbEIsMkJBQTBCLEVBQzdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUtcGFnZS9zZXJ2aWNlcy1wYXJ0L3NlcnZpY2VzLXBhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9nbG9iYWxTQ1NTL2dsb2JhbFNDU1MnO1xyXG4jc2VydmljZXNQYXJ0e1xyXG4gICAgLmJnU2VydmljZXN7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hXYXlCRztcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVzY1NlcnZpY2Vze1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzZGNkY2RjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAjeyR4bC1kZXZpY2VNYXh9IHtcclxuICAgIC5iZ1NlcnZpY2VzIHtcclxuICAgICAgICA+ZGl2LnJvd3tcclxuICAgICAgICAgICAgPiBkaXZ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgI3skc20tZGV2aWNlTWF4fXtcclxuICAgIC5iZ1NlcnZpY2VzIHtcclxuICAgICAgICA+ZGl2LnJvd3tcclxuICAgICAgICAgICAgPiBkaXZ7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLmRlc2NTZXJ2aWNlc3tcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiJGdyZWVuOiM2ODlGMzg7XHJcbiRncmVlbkRhcms6IzUwOGMxYztcclxuJGdyZWVuUkdCQTojNjg5ZjM4OGM7XHJcbiRkaXNhYmxlZEJ1dHRvbjojOWJhMjk1O1xyXG4kaGlnaFdheUJHOiNGMkYyRjI7XHJcbiRkYXJrOiMyNjI2MjY7XHJcbiRncmV5OiM2MTYxNjE7XHJcbiRyZWQ6ICNGNDQzMzY7XHJcbiR5ZWxsb3c6ICNGQkMwMkQ7XHJcblxyXG4kY29sOiBcIihtYXgtd2lkdGg6IDU3NnB4KVwiO1xyXG4kc20tZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDc2N3B4KVwiO1xyXG4kc20tZGV2aWNlOiBcIihtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG1pbi13aWR0aDo1NzdweClcIjtcclxuJG1kLWRldmljZU1heDogXCIobWF4LXdpZHRoOiA5OTFweClcIjtcclxuJG1kLWRldmljZTogXCIobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6NzY4cHgpXCI7XHJcbiRsZy1kZXZpY2U6IFwiKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDo5OTJweClcIjtcclxuJHhsLWRldmljZU1heDogXCIobWF4LXdpZHRoOiAxMjAwcHgpXCI7XHJcbiR4bC1kZXZpY2U6IFwiKG1pbi13aWR0aDogMTIwMXB4KVwiOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/home-page/services-part/services-part.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/home-page/services-part/services-part.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ServicesPartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPartComponent", function() { return ServicesPartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesPartComponent = /** @class */ (function () {
    function ServicesPartComponent() {
    }
    ServicesPartComponent.prototype.ngOnInit = function () {
    };
    ServicesPartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services-part',
            template: __webpack_require__(/*! ./services-part.component.html */ "./src/app/components/home-page/services-part/services-part.component.html"),
            styles: [__webpack_require__(/*! ./services-part.component.scss */ "./src/app/components/home-page/services-part/services-part.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesPartComponent);
    return ServicesPartComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/shop-badges/shop-badges.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/home-page/shop-badges/shop-badges.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"shop_badges\" class=\"pt-4 pb-4\">\n    <div class=\"container\">\n        <div class=\"swiper-container swiper_related_home\">\n            <div class=\"swiperArrows\">\n                <h4>{{ 'relatedSec.title' | translate }}</h4>\n                <div class=\"scn-icons-cont\">\n                    <span class=\"custom-slide-button customR-prev\"><i class=\"lnr lnr-chevron-left\"></i></span>\n                    <span class=\"custom-slide-button customR-next\"><i class=\"lnr lnr-chevron-right\"></i></span>\n                </div>\n            </div>\n            <div class=\"swiper-wrapper \">\n                <div class=\"swiper-slide p-1\">\n                    <div class=\"products-fram\">\n                        <span class=\"sale-badge\">-20%</span>\n                        <a routerLink=\"/products/1\" class=\"d-block text-center\" href=\"javascript:void(0)\">\n                            <img src=\"./assets/img/products/prod1.png\" class=\"img-fluid\" alt=\"\">\n                            <div class=\"name-and-section\">\n                                <p>Jewellery</p>\n                                <p>Products 1</p>\n                            </div>\n                        </a>\n                        <hr>\n                        <div class=\"price-and-rating d-flex justify-content-between\">\n                            <div class=\"product-price d-flex flex-column align-items-start\">\n                                <del class=\"text-muted\">1300$</del>\n                                <span>1000$</span>\n                            </div>\n                            <div class=\"product-ratings\">\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star\"></span>\n                                <span class=\"lnr lnr-star\"></span>\n                            </div>\n                        </div>\n                        <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                            <div class=\"count-product-input\">\n                                <input class=\"productCount\" type=\"number\" value=\"1\">\n                                <p class=\"up-down-arrows d-flex flex-column\">\n                                    <span class=\"lnr lnr-chevron-up\" (click)=\"upCount($event)\"></span>\n                                    <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                                </p>\n                            </div>\n                            <button class=\"add-to-cart\">\n                                <span class=\"lnr lnr-cart\"></span>\n                                {{ 'relatedSec.addButton' | translate }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"swiper-slide p-1\">\n                    <div class=\"products-fram\">\n                        <a routerLink=\"/products/2\" class=\"d-block text-center\" href=\"javascript:void(0)\">\n                            <img src=\"./assets/img/products/prod2.png\" class=\"img-fluid\" alt=\"\">\n                            <div class=\"name-and-section\">\n                                <p> Clothes</p>\n                                <p>Products 2</p>\n                            </div>\n                        </a>\n                        <hr>\n                        <div class=\"price-and-rating d-flex justify-content-between\">\n                            <div class=\"product-price d-flex flex-column align-items-start\">\n                                <del class=\"text-muted\">1300$</del>\n                                <span>1000$</span>\n                            </div>\n                            <div class=\"product-ratings\">\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star\"></span>\n                                <span class=\"lnr lnr-star\"></span>\n                                <span class=\"lnr lnr-star\"></span>\n                            </div>\n                        </div>\n                        <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                            <div class=\"count-product-input\">\n                                <input class=\"productCount\" type=\"number\" value=\"1\">\n                                <p class=\"up-down-arrows d-flex flex-column\">\n                                    <span class=\"lnr lnr-chevron-up\" (click)=\"upCount($event)\"></span>\n                                    <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                                </p>\n                            </div>\n                            <button class=\"add-to-cart\">\n                                <span class=\"lnr lnr-cart\"></span>\n                                {{ 'relatedSec.addButton' | translate }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"swiper-slide p-1\">\n                    <div class=\"products-fram\">\n                        <a routerLink=\"/products/3\" class=\"d-block text-center\" href=\"javascript:void(0)\">\n                            <img src=\"./assets/img/products/prod3.png\" class=\"img-fluid\" alt=\"\">\n                            <div class=\"name-and-section\">\n                                <p>For Home</p>\n                                <p>Products 3</p>\n                            </div>\n                        </a>\n                        <hr>\n                        <div class=\"price-and-rating d-flex justify-content-between\">\n                            <div class=\"product-price d-flex flex-column align-items-start\">\n                                <del class=\"text-muted\">1300$</del>\n                                <span>1000$</span>\n                            </div>\n                            <div class=\"product-ratings\">\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star\"></span>\n                            </div>\n                        </div>\n                        <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                            <div class=\"count-product-input\">\n                                <input class=\"productCount\" type=\"number\" value=\"1\">\n                                <p class=\"up-down-arrows d-flex flex-column\">\n                                    <span class=\"lnr lnr-chevron-up\" (click)=\"upCount($event)\"></span>\n                                    <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                                </p>\n                            </div>\n                            <button class=\"add-to-cart\">\n                                <span class=\"lnr lnr-cart\"></span>\n                                {{ 'relatedSec.addButton' | translate }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"swiper-slide p-1\">\n                    <div class=\"products-fram\">\n                        <a routerLink=\"/products/4\" class=\"d-block text-center\" href=\"javascript:void(0)\">\n                            <img src=\"./assets/img/products/prod4.png\" class=\"img-fluid\" alt=\"\">\n                            <div class=\"name-and-section\">\n                                <p>Dresses</p>\n                                <p>Products 4</p>\n                            </div>\n                        </a>\n                        <hr>\n                        <div class=\"price-and-rating d-flex justify-content-between\">\n                            <div class=\"product-price d-flex flex-column align-items-start\">\n                                <del class=\"text-muted\">1300$</del>\n                                <span>1000$</span>\n                            </div>\n                            <div class=\"product-ratings\">\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star\"></span>\n                                <span class=\"lnr lnr-star\"></span>\n                            </div>\n                        </div>\n                        <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                            <div class=\"count-product-input\">\n                                <input class=\"productCount\" type=\"number\" value=\"1\">\n                                <p class=\"up-down-arrows d-flex flex-column\">\n                                    <span class=\"lnr lnr-chevron-up\" (click)=\"upCount($event)\"></span>\n                                    <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                                </p>\n                            </div>\n                            <button class=\"add-to-cart\">\n                                <span class=\"lnr lnr-cart\"></span>\n                                {{ 'relatedSec.addButton' | translate }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"swiper-slide p-1\">\n                    <div class=\"products-fram\">\n                        <a routerLink=\"/products/5\" class=\"d-block text-center\" href=\"javascript:void(0)\">\n                            <img src=\"./assets/img/products/prod5.png\" class=\"img-fluid\" alt=\"\">\n                            <div class=\"name-and-section\">\n                                <p>Motors</p>\n                                <p>Products 5</p>\n                            </div>\n                        </a>\n                        <hr>\n                        <div class=\"price-and-rating d-flex justify-content-between\">\n                            <div class=\"product-price d-flex flex-column align-items-start\">\n                                <del class=\"text-muted\">1300$</del>\n                                <span>1000$</span>\n                            </div>\n                            <div class=\"product-ratings\">\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                            </div>\n                        </div>\n                        <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                            <div class=\"count-product-input\">\n                                <input class=\"productCount\" type=\"number\" value=\"1\">\n                                <p class=\"up-down-arrows d-flex flex-column\">\n                                    <span class=\"lnr lnr-chevron-up\" (click)=\"upCount($event)\"></span>\n                                    <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                                </p>\n                            </div>\n                            <button class=\"add-to-cart\">\n                                <span class=\"lnr lnr-cart\"></span>\n                                {{ 'relatedSec.addButton' | translate }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"swiper-slide p-1\">\n                    <div class=\"products-fram\">\n                        <a routerLink=\"/products/6\" class=\"d-block text-center\" href=\"javascript:void(0)\">\n                            <img src=\"./assets/img/products/prod6.png\" class=\"img-fluid\" alt=\"\">\n                            <div class=\"name-and-section\">\n                                <p>Electronics</p>\n                                <p>Products 6</p>\n                            </div>\n                        </a>\n                        <hr>\n                        <div class=\"price-and-rating d-flex justify-content-between\">\n                            <div class=\"product-price d-flex flex-column align-items-start\">\n                                <del class=\"text-muted\">1300$</del>\n                                <span>1000$</span>\n                            </div>\n                            <div class=\"product-ratings\">\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star appreciated\"></span>\n                                <span class=\"lnr lnr-star\"></span>\n                                <span class=\"lnr lnr-star\"></span>\n                            </div>\n                        </div>\n                        <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                            <div class=\"count-product-input\">\n                                <input class=\"productCount\" type=\"number\" value=\"1\">\n                                <p class=\"up-down-arrows d-flex flex-column\">\n                                    <span class=\"lnr lnr-chevron-up\"></span>\n                                    <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                                </p>\n                            </div>\n                            <button class=\"add-to-cart\">\n                                <span class=\"lnr lnr-cart\"></span>\n                                {{ 'relatedSec.addButton' | translate }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/home-page/shop-badges/shop-badges.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/home-page/shop-badges/shop-badges.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#shop_badges .products-fram > a .name-and-section p:last-child {\n  color: #000;\n  font-weight: 600;\n  font-size: 24px;\n  height: 50px;\n  overflow: hidden;\n  margin-bottom: 0; }\n\n#shop_badges .products-fram .add-to-cart-wrap .count-product-input input {\n  width: 100%;\n  border: 0;\n  box-shadow: 0px 0px 0px 1px #ccc;\n  border-radius: 2px;\n  padding: 3px;\n  text-align: center; }\n\n#shop_badges .products-fram .sale-badge:after {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  content: \"\";\n  left: -6px;\n  top: 11px;\n  border-radius: 50%;\n  background: #fff; }\n\n#shop_badges .products-fram .sale-badge:before {\n  top: 4px;\n  position: absolute;\n  content: \"\";\n  left: -9px;\n  width: 19px;\n  height: 19px;\n  background: linear-gradient(to bottom right, #F44336 50%, transparent 51%);\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n#shop_badges .products-fram .sale-badge {\n  background-color: #F44336;\n  transition: all 0.2s linear;\n  padding: 4px;\n  width: 40px;\n  position: absolute;\n  font-size: 13px;\n  color: black;\n  border-right: none;\n  text-align: center;\n  right: 0px;\n  top: 20px;\n  color: #fff;\n  z-index: 2; }\n\n#shop_badges .products-fram .add-to-cart-wrap .add-to-cart {\n  background-color: #689F38;\n  color: #fff;\n  border: 0;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: .4s; }\n\n#shop_badges .products-fram .add-to-cart-wrap .count-product-input .up-down-arrows span {\n  background-color: rgba(104, 159, 56, 0.52);\n  font-size: 13px;\n  padding: 2px;\n  height: 50%;\n  width: 20px;\n  text-align: center;\n  color: #fff;\n  cursor: pointer; }\n\n#shop_badges .products-fram > a .name-and-section p:first-child {\n  width: 100%;\n  height: 25px;\n  color: #787878;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-bottom: 0; }\n\n#shop_badges .swiperArrows {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px; }\n\n#shop_badges .swiperArrows h4 {\n    position: relative; }\n\n#shop_badges .swiperArrows h4:after {\n      position: absolute;\n      left: 0;\n      bottom: -5px;\n      width: 100%;\n      background-color: #689F38;\n      height: 2px;\n      content: \"\"; }\n\n#shop_badges .swiperArrows .scn-icons-cont span {\n    cursor: pointer; }\n\n#shop_badges .products-fram {\n  background-color: #fff;\n  padding: 10px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  transition: .4s;\n  position: relative; }\n\n#shop_badges .products-fram:hover {\n    -webkit-transform: scale(1.01);\n            transform: scale(1.01);\n    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n\n#shop_badges .products-fram > a {\n    text-decoration: none; }\n\n#shop_badges .products-fram > a img {\n      max-width: 95%;\n      transition: .4s; }\n\n#shop_badges .products-fram > a:hover img {\n      opacity: 0.6; }\n\n#shop_badges .products-fram > a .name-and-section {\n      padding: 10px 5px; }\n\n#shop_badges .products-fram .price-and-rating .product-price del {\n    font-size: 14px; }\n\n#shop_badges .products-fram .price-and-rating .product-price span {\n    font-size: 16px;\n    color: #F44336;\n    font-weight: 600; }\n\n#shop_badges .products-fram .price-and-rating .product-ratings span.appreciated {\n    color: #FBC02D; }\n\n#shop_badges .products-fram .price-and-rating .product-ratings span {\n    font-size: 12px;\n    cursor: pointer; }\n\n#shop_badges .products-fram .add-to-cart-wrap .count-product-input {\n    width: calc(50% - 5px);\n    position: relative; }\n\n#shop_badges .products-fram .add-to-cart-wrap .count-product-input .up-down-arrows {\n      position: absolute;\n      top: 0;\n      right: 0;\n      margin-bottom: 0;\n      background-color: #fff;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between; }\n\n#shop_badges .products-fram .add-to-cart-wrap .count-product-input .up-down-arrows span:hover {\n        background-color: rgba(104, 159, 56, 0.84); }\n\n#shop_badges .products-fram .add-to-cart-wrap .add-to-cart {\n    width: calc(50% - 5px);\n    overflow: hidden;\n    white-space: nowrap;\n    display: block;\n    text-overflow: ellipsis; }\n\n#shop_badges .products-fram .add-to-cart-wrap .add-to-cart:hover {\n      background-color: #508c1c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2Uvc2hvcC1iYWRnZXMvQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcZnJhbS1zaG9wL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lLXBhZ2VcXHNob3AtYmFkZ2VzXFxzaG9wLWJhZGdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2Uvc2hvcC1iYWRnZXMvQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcZnJhbS1zaG9wL3NyY1xcZ2xvYmFsU0NTU1xcZXh0ZW5kcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUtcGFnZS9zaG9wLWJhZGdlcy9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxnbG9iYWxTQ1NTXFxnbG9iYWxTQ1NTLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUNLSSxZQUFXO0VBQ1gsaUJBQWU7RUFDZixnQkFBZTtFQUNmLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ25COztBRFhEO0VDYUksWUFBVztFQUNYLFVBQVM7RUFDVCxpQ0FBZ0M7RUFDaEMsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FEbkJEO0VDcUJJLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsWUFBVztFQUNYLFlBQVc7RUFDWCxXQUFVO0VBQ1YsVUFBUztFQUNULG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDbkI7O0FEN0JEO0VDK0JJLFNBQVE7RUFDUixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLFdBQVU7RUFDVixZQUFXO0VBQ1gsYUFBWTtFQUNaLDJFQUF1RTtFQUN2RSxrQ0FBeUI7VUFBekIsMEJBQXlCLEVBQzVCOztBRHZDRDtFQ3lDSSwwQkNyQ1M7RURzQ1QsNEJBQTJCO0VBQzNCLGFBQVk7RUFDWixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFVBQVM7RUFDVCxZQUFXO0VBQ1gsV0FBVSxFQUNiOztBRHRERDtFQ3dESSwwQkMzRFU7RUQ0RFYsWUFBVztFQUNYLFVBQVM7RUFDVCxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixnQkFBZSxFQUNsQjs7QUQ5REQ7RUNnRUksMkNBQTBDO0VBQzFDLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLFlBQVc7RUFDWCxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxnQkFBZSxFQUNsQjs7QUR4RUQ7RUMwRUksWUFBVztFQUNYLGFBQVk7RUFDWixlQUFjO0VBQ2Qsb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ25COztBRGpGRDtFQUVRLGNBQWE7RUFDYiwrQkFBOEI7RUFDOUIsY0FBYSxFQWtCaEI7O0FBdEJMO0lBTVksbUJBQWtCLEVBVXJCOztBQWhCVDtNQVFnQixtQkFBa0I7TUFDbEIsUUFBTztNQUNQLGFBQVk7TUFDWixZQUFXO01BQ1gsMEJFZkY7TUZnQkUsWUFBVztNQUNYLFlBQVcsRUFDZDs7QUFmYjtJQW1CZ0IsZ0JBQWUsRUFDbEI7O0FBcEJiO0VBd0JRLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsZ0hBQW1HO0VBQ25HLGdCQUFlO0VBS2YsbUJBQWtCLEVBd0ZyQjs7QUF4SEw7SUE2QlksK0JBQXNCO1lBQXRCLHVCQUFzQjtJQUN0QiwrR0FBOEcsRUFDakg7O0FBL0JUO0lBa0RZLHNCQUFxQixFQVV4Qjs7QUE1RFQ7TUE0Q2dCLGVBQWM7TUFDZCxnQkFBZSxFQUNsQjs7QUE5Q2I7TUFnRGdCLGFBQVksRUFDZjs7QUFqRGI7TUFvRGdCLGtCQUFpQixFQU9wQjs7QUEzRGI7SUFnRW9CLGdCQUFlLEVBQ2xCOztBQWpFakI7SUFtRW9CLGdCQUFlO0lBQ2YsZUVoRVA7SUZpRU8saUJBQWdCLEVBQ25COztBQXRFakI7SUEwRW9CLGVFckVKLEVGc0VDOztBQTNFakI7SUE2RW9CLGdCQUFlO0lBQ2YsZ0JBQWUsRUFDbEI7O0FBL0VqQjtJQXFGZ0IsdUJBQXNCO0lBQ3RCLG1CQUFrQixFQXFCckI7O0FBM0diO01Bd0ZvQixtQkFBa0I7TUFDbEIsT0FBTTtNQUNOLFNBQVE7TUFDUixpQkFBZ0I7TUFDaEIsdUJBQXNCO01BQ3RCLGFBQVk7TUFDWixjQUFhO01BQ2IsdUJBQXNCO01BQ3RCLCtCQUE4QixFQU9qQzs7QUF2R2pCO1FBb0c0QiwyQ0FBMEMsRUFDN0M7O0FBckd6QjtJQTZHZ0IsdUJBQXNCO0lBQ3RCLGlCQUFnQjtJQUNoQixvQkFBbUI7SUFDbkIsZUFBYztJQUNkLHdCQUF1QixFQUsxQjs7QUF0SGI7TUFvSG9CLDBCRXRIRixFRnVIRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL3Nob3AtYmFkZ2VzL3Nob3AtYmFkZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vZ2xvYmFsU0NTUy9leHRlbmRzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vZ2xvYmFsU0NTUy9nbG9iYWxTQ1NTJztcclxuXHJcbiNzaG9wX2JhZGdlc3tcclxuICAgIC5zd2lwZXJBcnJvd3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgaDR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC01cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2NuLWljb25zLWNvbnR7XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdHMtZnJhbXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC5zYWxlLWJhZGdle1xyXG4gICAgICAgICAgICBAZXh0ZW5kICVleHRlbmQtcHJvZHVjdC1iYWRnZS1zYWxlO1xyXG4gICAgICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJWV4dGVuZC1wcm9kdWN0LWJhZGdlLXNhbGUtYmVmb3JlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAlZXh0ZW5kLXByb2R1Y3QtYmFkZ2Utc2FsZS1hZnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICA+YXtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlciBpbWd7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAubmFtZS1hbmQtc2VjdGlvbntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgICAgICAgICAgICAgcDpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVleHRlbmQtcHJvZHVjdC1iYWRnZS1maXJzdC10aXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHA6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICAlZXh0ZW5kLXByb2R1Y3QtYmFkZ2Utc2Vjb25kLXRpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcmljZS1hbmQtcmF0aW5ne1xyXG4gICAgICAgICAgICAucHJvZHVjdC1wcmljZXtcclxuICAgICAgICAgICAgICAgIGRlbHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LXJhdGluZ3N7XHJcbiAgICAgICAgICAgICAgICBzcGFuLmFwcHJlY2lhdGVke1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkeWVsbG93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hZGQtdG8tY2FydC13cmFwe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmNvdW50LXByb2R1Y3QtaW5wdXR7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA1cHgpO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgLnVwLWRvd24tYXJyb3dze1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWV4dGVuZC1wcm9kdWN0LWJhZGdlLWlucHV0LWFycm93cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxNTksIDU2LCAwLjg0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWV4dGVuZC1wcm9kdWN0LWJhZGdlLWlucHV0LWNvdW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hZGQtdG8tY2FydHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDVweCk7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICVleHRlbmQtcHJvZHVjdC1iYWRnZS1hZGQtYnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW5EYXJrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQGltcG9ydCAnLi9nbG9iYWxTQ1NTJztcclxuXHJcbiVleHRlbmQtZmxleC1kZWZhdWx0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiVleHRlbmQtcHJvZHVjdC1iYWRnZS1zZWNvbmQtdGl0bGV7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4lZXh0ZW5kLXByb2R1Y3QtYmFkZ2UtaW5wdXQtY291bnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiVleHRlbmQtcHJvZHVjdC1iYWRnZS1zYWxlLWFmdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGxlZnQ6IC02cHg7XHJcbiAgICB0b3A6IDExcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbiVleHRlbmQtcHJvZHVjdC1iYWRnZS1zYWxlLWJlZm9yZXtcclxuICAgIHRvcDogNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGxlZnQ6IC05cHg7XHJcbiAgICB3aWR0aDogMTlweDtcclxuICAgIGhlaWdodDogMTlweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRyZWQgNTAlLCB0cmFuc3BhcmVudCA1MSUpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG4lZXh0ZW5kLXByb2R1Y3QtYmFkZ2Utc2FsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuJWV4dGVuZC1wcm9kdWN0LWJhZGdlLWFkZC1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IC40cztcclxufVxyXG4lZXh0ZW5kLXByb2R1Y3QtYmFkZ2UtaW5wdXQtYXJyb3dze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDQsIDE1OSwgNTYsIDAuNTIpO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiVleHRlbmQtcHJvZHVjdC1iYWRnZS1maXJzdC10aXRsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgY29sb3I6ICM3ODc4Nzg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufSIsIiRncmVlbjojNjg5RjM4O1xyXG4kZ3JlZW5EYXJrOiM1MDhjMWM7XHJcbiRncmVlblJHQkE6IzY4OWYzODhjO1xyXG4kZGlzYWJsZWRCdXR0b246IzliYTI5NTtcclxuJGhpZ2hXYXlCRzojRjJGMkYyO1xyXG4kZGFyazojMjYyNjI2O1xyXG4kZ3JleTojNjE2MTYxO1xyXG4kcmVkOiAjRjQ0MzM2O1xyXG4keWVsbG93OiAjRkJDMDJEO1xyXG5cclxuJGNvbDogXCIobWF4LXdpZHRoOiA1NzZweClcIjtcclxuJHNtLWRldmljZU1heDogXCIobWF4LXdpZHRoOiA3NjdweClcIjtcclxuJHNtLWRldmljZTogXCIobWF4LXdpZHRoOiA3NjdweCkgYW5kIChtaW4td2lkdGg6NTc3cHgpXCI7XHJcbiRtZC1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogOTkxcHgpXCI7XHJcbiRtZC1kZXZpY2U6IFwiKG1heC13aWR0aDogOTkxcHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KVwiO1xyXG4kbGctZGV2aWNlOiBcIihtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6OTkycHgpXCI7XHJcbiR4bC1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogMTIwMHB4KVwiO1xyXG4keGwtZGV2aWNlOiBcIihtaW4td2lkdGg6IDEyMDFweClcIjsiXX0= */"

/***/ }),

/***/ "./src/app/components/home-page/shop-badges/shop-badges.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/home-page/shop-badges/shop-badges.component.ts ***!
  \***************************************************************************/
/*! exports provided: ShopBadgesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopBadgesComponent", function() { return ShopBadgesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");



var ShopBadgesComponent = /** @class */ (function () {
    function ShopBadgesComponent() {
        this.findElementExtend = new _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]();
    }
    ShopBadgesComponent.prototype.getParent = function (target, limitParent) {
        limitParent = (limitParent == "") ? document.querySelector("body") : limitParent;
        function contains(_elem, limitParent) {
            var result = null;
            result = _elem.className.split(" ").find(function (elem, ind) {
                return elem == limitParent;
            });
            return result;
        }
        for (var _e = target, _parent = []; _e && _e !== document; _e = _e.parentNode) {
            if (!contains(_e, limitParent)) {
                _parent.push(_e);
            }
            else {
                _parent.push(_e);
                break;
            }
        }
        return _parent[_parent.length - 1];
    };
    ShopBadgesComponent.prototype.ngOnInit = function () {
        var related_slider = new Swiper('.swiper_related_home', {
            paginationClickable: true,
            slidesPerView: 5,
            prevButton: '.customR-prev',
            nextButton: '.customR-next',
            spaceBetween: 15,
            autoHeight: true,
            breakpoints: {
                480: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 4
                }
            }
        });
    };
    ShopBadgesComponent.prototype.upCount = function (event) {
        this.getParent(event.target, "count-product-input");
        this.findElementExtend.findElement(this.getParent(event.target, "count-product-input"), 'input')[0].value++;
    };
    ShopBadgesComponent.prototype.downCount = function (event) {
        this.getParent(event.target, "count-product-input");
        if (this.findElementExtend.findElement(this.getParent(event.target, "count-product-input"), 'input')[0].value > 1) {
            this.findElementExtend.findElement(this.getParent(event.target, "count-product-input"), 'input')[0].value--;
        }
    };
    ShopBadgesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop-badges',
            template: __webpack_require__(/*! ./shop-badges.component.html */ "./src/app/components/home-page/shop-badges/shop-badges.component.html"),
            styles: [__webpack_require__(/*! ./shop-badges.component.scss */ "./src/app/components/home-page/shop-badges/shop-badges.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShopBadgesComponent);
    return ShopBadgesComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/shop-categories/shop-categories.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/home-page/shop-categories/shop-categories.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"shop_Categories\">\n    <div class=\"container\">\n        <div class=\"blocksM6\">\n            <div class=\"firstCol\">\n                <div class=\"first staticParent\">\n                    <div class=\"description-categories-shop\">\n                        <h3>{{ 'shopCategories.cat1Tit' | translate }}</h3>\n                        <i>{{ 'shopCategories.cat1SubTit' | translate }}</i>\n                        <a href=\"javascript:void(0)\">{{ 'shopCategories.catButton' | translate }}</a>\n                    </div>\n                </div>\n                <div class=\"firstPartBottom\">\n                    <div class=\"forth staticParent\">\n                        <div class=\"description-categories-shop\">\n                            <h3>{{ 'shopCategories.cat4Tit' | translate }}</h3>\n                            <i>{{ 'shopCategories.cat4SubTit' | translate }}</i>\n                            <a href=\"javascript:void(0)\">{{ 'shopCategories.catButton' | translate }}</a>\n                        </div>\n                    </div>\n                    <div class=\"five staticParent\">\n                        <div class=\"description-categories-shop\">\n                            <h3>{{ 'shopCategories.cat5Tit' | translate }}</h3>\n                            <i>{{ 'shopCategories.cat5SubTit' | translate }}</i>\n                            <a href=\"javascript:void(0)\">{{ 'shopCategories.catButton' | translate }}</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"secondCol\">\n                <div class=\"secondPartTop\">\n                    <div class=\"second staticParent\">\n                        <div class=\"description-categories-shop\">\n                            <h3>{{ 'shopCategories.cat2Tit' | translate }}</h3>\n                            <i>{{ 'shopCategories.cat2SubTit' | translate }}</i>\n                            <a href=\"javascript:void(0)\">{{ 'shopCategories.catButton' | translate }}</a>\n                        </div>\n                    </div>\n                    <div class=\"thrid staticParent\">\n                        <div class=\"description-categories-shop\">\n                            <h3>{{ 'shopCategories.cat3Tit' | translate }}</h3>\n                            <i>{{ 'shopCategories.cat3SubTit' | translate }}</i>\n                            <a href=\"javascript:void(0)\">{{ 'shopCategories.catButton' | translate }}</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"six staticParent\">\n                    <div class=\"description-categories-shop\">\n                        <h3>{{ 'shopCategories.cat6Tit' | translate }}</h3>\n                        <i>{{ 'shopCategories.cat6SubTit' | translate }}</i>\n                        <a href=\"javascript:void(0)\">{{ 'shopCategories.catButton' | translate }}</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/home-page/shop-categories/shop-categories.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/home-page/shop-categories/shop-categories.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#shop_Categories .blocksM6, #shop_Categories .blocksM6 .staticParent .description-categories-shop, #shop_Categories .blocksM6 .firstCol .firstPartBottom, #shop_Categories .blocksM6 .secondCol .secondPartTop {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n#shop_Categories .blocksM6 .staticParent {\n  position: relative; }\n\n#shop_Categories .blocksM6 .staticParent:hover:after {\n    background-color: rgba(0, 0, 0, 0.7); }\n\n#shop_Categories .blocksM6 .staticParent::after {\n    transition: .4s;\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.3); }\n\n#shop_Categories .blocksM6 .staticParent .description-categories-shop {\n    position: absolute;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    width: 100%;\n    bottom: 0;\n    top: 0;\n    margin: auto;\n    left: 0px;\n    color: #fff;\n    z-index: 22;\n    text-align: center;\n    flex-direction: column; }\n\n#shop_Categories .blocksM6 .staticParent .description-categories-shop h3 {\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      height: 35px;\n      width: 100%; }\n\n#shop_Categories .blocksM6 .staticParent .description-categories-shop a {\n      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n      background-color: #689F38;\n      color: #fff;\n      padding: 5px 10px;\n      text-decoration: none;\n      font-size: 13px;\n      margin-top: 8px; }\n\n#shop_Categories .blocksM6 .firstCol {\n  width: calc(40% - 7px); }\n\n#shop_Categories .blocksM6 .firstCol .first {\n    margin-bottom: 14px;\n    height: 350px;\n    background-image: url('shopCateg1.png');\n    background-size: cover;\n    background-position: center; }\n\n#shop_Categories .blocksM6 .firstCol .firstPartBottom > div {\n    width: calc(50% - 7px);\n    height: 175px; }\n\n#shop_Categories .blocksM6 .firstCol .firstPartBottom .forth {\n    background-image: url('shopCateg2.jpg');\n    background-size: cover;\n    background-position: center; }\n\n#shop_Categories .blocksM6 .firstCol .firstPartBottom .five {\n    background-image: url('shopCateg3.jpg');\n    background-size: cover;\n    background-position: center; }\n\n#shop_Categories .blocksM6 .secondCol {\n  width: calc(60% - 7px); }\n\n#shop_Categories .blocksM6 .secondCol .secondPartTop > div {\n    width: calc(50% - 7px);\n    height: 175px; }\n\n#shop_Categories .blocksM6 .secondCol .secondPartTop .second {\n    background-image: url('shopCateg4.jpg');\n    background-size: cover;\n    background-position: center; }\n\n#shop_Categories .blocksM6 .secondCol .secondPartTop .thrid {\n    background-image: url('shopCateg5.jpg');\n    background-size: cover;\n    background-position: center; }\n\n#shop_Categories .blocksM6 .secondCol .six {\n    margin-top: 14px;\n    height: 350px;\n    background-image: url('shopCateg6.jpg');\n    background-size: cover;\n    background-position: center; }\n\n@media (max-width: 767px) {\n  .blocksM6 {\n    flex-direction: column; }\n    .blocksM6 > div {\n      width: 100% !important;\n      margin-bottom: 14px; } }\n\n@media (max-width: 576px) {\n  .description-categories-shop h3 {\n    font-size: 20px;\n    height: 22px !important; } }\n\n@media screen and (max-width: 480px) {\n  .blocksM6 > div {\n    margin-bottom: 0px; }\n    .blocksM6 > div .firstPartBottom, .blocksM6 > div .secondPartTop {\n      flex-direction: column; }\n      .blocksM6 > div .firstPartBottom > div, .blocksM6 > div .secondPartTop > div {\n        width: 100% !important;\n        margin-bottom: 14px; }\n    .blocksM6 > div .six {\n      margin-top: 0 !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2Uvc2hvcC1jYXRlZ29yaWVzL0M6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXGZyYW0tc2hvcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZS1wYWdlXFxzaG9wLWNhdGVnb3JpZXNcXHNob3AtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2Uvc2hvcC1jYXRlZ29yaWVzL0M6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXGZyYW0tc2hvcC9zcmNcXGdsb2JhbFNDU1NcXGV4dGVuZHMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2Uvc2hvcC1jYXRlZ29yaWVzL0M6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXGZyYW0tc2hvcC9zcmNcXGdsb2JhbFNDU1NcXGdsb2JhbFNDU1Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ0FJLGNBQWE7RUFDYiwrQkFBOEI7RUFDOUIsb0JBQW1CLEVBQ3RCOztBREhEO0VBSVksbUJBQWtCLEVBNENyQjs7QUFoRFQ7SUFNZ0IscUNBQWlDLEVBQ3BDOztBQVBiO0lBU2dCLGdCQUFlO0lBQ2YsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixPQUFNO0lBQ04sUUFBTztJQUNQLFlBQVc7SUFDWCxhQUFZO0lBQ1oscUNBQWlDLEVBQ3BDOztBQWpCYjtJQW1CZ0IsbUJBQWtCO0lBQ2xCLDRCQUFtQjtJQUFuQix5QkFBbUI7SUFBbkIsb0JBQW1CO0lBQ25CLFlBQVc7SUFDWCxVQUFTO0lBQ1QsT0FBTTtJQUNOLGFBQVk7SUFDWixVQUFTO0lBQ1QsWUFBVztJQUNYLFlBQVc7SUFDWCxtQkFBa0I7SUFFbEIsdUJBQXNCLEVBaUJ6Qjs7QUEvQ2I7TUFnQ29CLHdCQUF1QjtNQUN2QixpQkFBZ0I7TUFDaEIsb0JBQW1CO01BQ25CLGFBQVk7TUFDWixZQUFVLEVBQ2I7O0FBckNqQjtNQXVDb0IsZ0hBQW1HO01BQ25HLDBCRTNDTjtNRjRDTSxZQUFXO01BQ1gsa0JBQWlCO01BQ2pCLHNCQUFxQjtNQUNyQixnQkFBZTtNQUNmLGdCQUFlLEVBQ2xCOztBQTlDakI7RUFrRFksdUJBQXNCLEVBeUJ6Qjs7QUEzRVQ7SUFvRGdCLG9CQUFtQjtJQUNuQixjQUFhO0lBQ2Isd0NBQTZEO0lBQzdELHVCQUFzQjtJQUN0Qiw0QkFBMkIsRUFDOUI7O0FBekRiO0lBNkRvQix1QkFBc0I7SUFDdEIsY0FBYSxFQUNoQjs7QUEvRGpCO0lBaUVvQix3Q0FBNkQ7SUFDN0QsdUJBQXNCO0lBQ3RCLDRCQUEyQixFQUM5Qjs7QUFwRWpCO0lBc0VvQix3Q0FBNkQ7SUFDN0QsdUJBQXNCO0lBQ3RCLDRCQUEyQixFQUM5Qjs7QUF6RWpCO0VBNkVZLHVCQUFzQixFQXlCekI7O0FBdEdUO0lBaUZvQix1QkFBc0I7SUFDdEIsY0FBYSxFQUNoQjs7QUFuRmpCO0lBcUZvQix3Q0FBNkQ7SUFDN0QsdUJBQXNCO0lBQ3RCLDRCQUEyQixFQUM5Qjs7QUF4RmpCO0lBMEZvQix3Q0FBNkQ7SUFDN0QsdUJBQXNCO0lBQ3RCLDRCQUEyQixFQUM5Qjs7QUE3RmpCO0lBZ0dnQixpQkFBZ0I7SUFDaEIsY0FBYTtJQUNiLHdDQUE2RDtJQUM3RCx1QkFBc0I7SUFDdEIsNEJBQTJCLEVBQzlCOztBQUliO0VBQ0k7SUFDSSx1QkFBc0IsRUFLekI7SUFORDtNQUdRLHVCQUFzQjtNQUN0QixvQkFBbUIsRUFDdEIsRUFBQTs7QUFHVDtFQUNJO0lBRVEsZ0JBQWU7SUFDZix3QkFBdUIsRUFDMUIsRUFBQTs7QUFHVDtFQWhCSTtJQW1CUSxtQkFBaUIsRUFXcEI7SUFiTDtNQUlZLHVCQUFzQixFQUt6QjtNQVRUO1FBTWdCLHVCQUFzQjtRQUN0QixvQkFBbUIsRUFDdEI7SUFSYjtNQVdZLHlCQUF3QixFQUMzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2Uvc2hvcC1jYXRlZ29yaWVzL3Nob3AtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2dsb2JhbFNDU1MvZXh0ZW5kcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL2dsb2JhbFNDU1MvZ2xvYmFsU0NTUyc7XHJcblxyXG4jc2hvcF9DYXRlZ29yaWVze1xyXG4gICAgLmJsb2Nrc002e1xyXG4gICAgICAgIEBleHRlbmQgJWV4dGVuZC1mbGV4LWRlZmF1bHQ7XHJcbiAgICAgICAgLnN0YXRpY1BhcmVudHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAmOmhvdmVyOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uLWNhdGVnb3JpZXMtc2hvcCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDIyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAlZXh0ZW5kLWZsZXgtZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpcnN0Q29se1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYyg0MCUgLSA3cHgpO1xyXG4gICAgICAgICAgICAuZmlyc3R7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3Nob3BDYXRlZzEucG5nJyk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5maXJzdFBhcnRCb3R0b217XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICVleHRlbmQtZmxleC1kZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgPmRpdntcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA3cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTc1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZm9ydGh7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvc2hvcENhdGVnMi5qcGcnKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5maXZle1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3Nob3BDYXRlZzMuanBnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlY29uZENvbHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNjAlIC0gN3B4KTtcclxuICAgICAgICAgICAgLnNlY29uZFBhcnRUb3B7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICVleHRlbmQtZmxleC1kZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgPmRpdntcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA3cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTc1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2Vjb25ke1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3Nob3BDYXRlZzQuanBnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGhyaWR7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvc2hvcENhdGVnNS5qcGcnKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2l4e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9zaG9wQ2F0ZWc2LmpwZycpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgI3skc20tZGV2aWNlTWF4fXtcclxuICAgIC5ibG9ja3NNNntcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgID4gZGl2e1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgI3skY29sfXtcclxuICAgIC5kZXNjcmlwdGlvbi1jYXRlZ29yaWVzLXNob3B7XHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpe1xyXG4gICAgLmJsb2Nrc002e1xyXG4gICAgICAgID4gZGl2e1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjBweDtcclxuICAgICAgICAgICAgLmZpcnN0UGFydEJvdHRvbSwgLnNlY29uZFBhcnRUb3B7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgPmRpdntcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNpeHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIkBpbXBvcnQgJy4vZ2xvYmFsU0NTUyc7XHJcblxyXG4lZXh0ZW5kLWZsZXgtZGVmYXVsdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4lZXh0ZW5kLXByb2R1Y3QtYmFkZ2Utc2Vjb25kLXRpdGxle1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuJWV4dGVuZC1wcm9kdWN0LWJhZGdlLWlucHV0LWNvdW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4lZXh0ZW5kLXByb2R1Y3QtYmFkZ2Utc2FsZS1hZnRlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBsZWZ0OiAtNnB4O1xyXG4gICAgdG9wOiAxMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4lZXh0ZW5kLXByb2R1Y3QtYmFkZ2Utc2FsZS1iZWZvcmV7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBsZWZ0OiAtOXB4O1xyXG4gICAgd2lkdGg6IDE5cHg7XHJcbiAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAkcmVkIDUwJSwgdHJhbnNwYXJlbnQgNTElKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuJWV4dGVuZC1wcm9kdWN0LWJhZGdlLXNhbGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcbiVleHRlbmQtcHJvZHVjdC1iYWRnZS1hZGQtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuJWV4dGVuZC1wcm9kdWN0LWJhZGdlLWlucHV0LWFycm93c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxNTksIDU2LCAwLjUyKTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4lZXh0ZW5kLXByb2R1Y3QtYmFkZ2UtZmlyc3QtdGl0bGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGNvbG9yOiAjNzg3ODc4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn0iLCIkZ3JlZW46IzY4OUYzODtcclxuJGdyZWVuRGFyazojNTA4YzFjO1xyXG4kZ3JlZW5SR0JBOiM2ODlmMzg4YztcclxuJGRpc2FibGVkQnV0dG9uOiM5YmEyOTU7XHJcbiRoaWdoV2F5Qkc6I0YyRjJGMjtcclxuJGRhcms6IzI2MjYyNjtcclxuJGdyZXk6IzYxNjE2MTtcclxuJHJlZDogI0Y0NDMzNjtcclxuJHllbGxvdzogI0ZCQzAyRDtcclxuXHJcbiRjb2w6IFwiKG1heC13aWR0aDogNTc2cHgpXCI7XHJcbiRzbS1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogNzY3cHgpXCI7XHJcbiRzbS1kZXZpY2U6IFwiKG1heC13aWR0aDogNzY3cHgpIGFuZCAobWluLXdpZHRoOjU3N3B4KVwiO1xyXG4kbWQtZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDk5MXB4KVwiO1xyXG4kbWQtZGV2aWNlOiBcIihtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDo3NjhweClcIjtcclxuJGxnLWRldmljZTogXCIobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOjk5MnB4KVwiO1xyXG4keGwtZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDEyMDBweClcIjtcclxuJHhsLWRldmljZTogXCIobWluLXdpZHRoOiAxMjAxcHgpXCI7Il19 */"

/***/ }),

/***/ "./src/app/components/home-page/shop-categories/shop-categories.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/home-page/shop-categories/shop-categories.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ShopCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCategoriesComponent", function() { return ShopCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShopCategoriesComponent = /** @class */ (function () {
    function ShopCategoriesComponent() {
    }
    ShopCategoriesComponent.prototype.ngOnInit = function () {
    };
    ShopCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop-categories',
            template: __webpack_require__(/*! ./shop-categories.component.html */ "./src/app/components/home-page/shop-categories/shop-categories.component.html"),
            styles: [__webpack_require__(/*! ./shop-categories.component.scss */ "./src/app/components/home-page/shop-categories/shop-categories.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShopCategoriesComponent);
    return ShopCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/slider/slider.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/home-page/slider/slider.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"fram-slider\">\n    <div class=\"container mt-4\">   \n        <div class=\"swiper-container home_slide\">\n            <div class=\"swiper-wrapper\">\n                <div class=\"swiper-slide\">\n                    <img alt=\"fram-slider\" src=\"./assets/img/slider1.jpg\">\n                    <div class=\"slideTxt\">\n                        <h1>{{ 'slider.slider1Tit' | translate}}</h1>\n                        <h3>{{ 'slider.slider1SubTit' | translate}}</h3>\n                    </div>\n                </div>\n                <div class=\"swiper-slide\">\n                    <img alt=\"fram-slider\" src=\"./assets/img/slider2.jpg\">\n                    <div class=\"slideTxt\">\n                        <h1>{{ 'slider.slider2Tit' | translate}}</h1>\n                        <h3>{{ 'slider.slider2SubTit' | translate}}</h3>\n                    </div>\n                    \n                </div>\n                <div class=\"swiper-slide\">\n                    <img alt=\"fram-slider\" src=\"./assets/img/slider3.jpg\">\n                    <div class=\"slideTxt\">\n                        <h1>{{ 'slider.slider3Tit' | translate}}</h1>\n                        <h3>{{ 'slider.slider3SubTit' | translate}}</h3>\n                    </div>\n                    \n                </div>\n                <div class=\"swiper-slide\">\n                    <img alt=\"fram-slider\" src=\"./assets/img/slider4.jpg\">\n                    <div class=\"slideTxt\">\n                        <h1>{{ 'slider.slider4Tit' | translate}}</h1>\n                        <h3>{{ 'slider.slider4SubTit' | translate}}</h3>\n                    </div>\n                    \n                </div>\n                <div class=\"swiper-slide\">\n                    <img alt=\"fram-slider\" src=\"./assets/img/slider5.jpg\">\n                    <div class=\"slideTxt\">\n                        <h1>{{ 'slider.slider5Tit' | translate}}</h1>\n                        <h3>{{ 'slider.slider5SubTit' | translate}}</h3>\n                    </div>\n                    \n                </div>\n            </div>\n            <div class=\"swiper-pagination\"></div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/home-page/slider/slider.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/home-page/slider/slider.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#fram-slider .home_slide > div img {\n  max-width: 100%; }\n\n#fram-slider .home_slide > div .slideTxt {\n  position: absolute;\n  z-index: 22222;\n  left: 0;\n  /* top: 0; */\n  background-color: #689f3885;\n  min-width: -webkit-min-content;\n  min-width: -moz-min-content;\n  min-width: min-content;\n  padding: 10px 55px;\n  bottom: 60px;\n  margin: auto;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: #fbfcf6; }\n\n@media (max-width: 991px) and (min-width: 768px) {\n  .home_slide > div .slideTxt h1 {\n    font-size: 20px; }\n  .home_slide > div .slideTxt h3 {\n    font-size: 16px; } }\n\n@media (max-width: 767px) and (min-width: 577px) {\n  .home_slide > div .slideTxt h1 {\n    font-size: 17px; }\n  .home_slide > div .slideTxt h3 {\n    font-size: 14px; } }\n\n@media (max-width: 576px) {\n  .home_slide > div .slideTxt {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2Uvc2xpZGVyL0M6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXGZyYW0tc2hvcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZS1wYWdlXFxzbGlkZXJcXHNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUlnQixnQkFBZSxFQUNsQjs7QUFMYjtFQU9nQixtQkFBa0I7RUFDbEIsZUFBYztFQUNkLFFBQU87RUFDUCxhQUFhO0VBQ2IsNEJBQTJCO0VBQzNCLCtCQUFzQjtFQUF0Qiw0QkFBc0I7RUFBdEIsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osYUFBWTtFQUNaLDRCQUFtQjtFQUFuQix5QkFBbUI7RUFBbkIsb0JBQW1CO0VBQ25CLGVBQWMsRUFDakI7O0FBSWI7RUFDSTtJQUlnQixnQkFBZSxFQUNsQjtFQUxiO0lBT2dCLGdCQUFlLEVBQ2xCLEVBQUE7O0FBS2pCO0VBQ0k7SUFJZ0IsZ0JBQWUsRUFDbEI7RUFMYjtJQU9nQixnQkFBZSxFQUNsQixFQUFBOztBQUtqQjtFQUNJO0lBR1ksY0FBYSxFQUNoQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2Uvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2dsb2JhbFNDU1MvZ2xvYmFsU0NTUyc7XHJcbiNmcmFtLXNsaWRlcntcclxuICAgIC5ob21lX3NsaWRle1xyXG4gICAgICAgID5kaXZ7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2xpZGVUeHQge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMjIyMjI7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgLyogdG9wOiAwOyAqL1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY4OWYzODg1O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNTVweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogNjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZiZmNmNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgI3skbWQtZGV2aWNlfXtcclxuICAgIC5ob21lX3NsaWRle1xyXG4gICAgICAgID5kaXZ7XHJcbiAgICAgICAgICAgIC5zbGlkZVR4dCB7XHJcbiAgICAgICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhICN7JHNtLWRldmljZX17XHJcbiAgICAuaG9tZV9zbGlkZXtcclxuICAgICAgICA+ZGl2e1xyXG4gICAgICAgICAgICAuc2xpZGVUeHQge1xyXG4gICAgICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAjeyRjb2x9e1xyXG4gICAgLmhvbWVfc2xpZGV7XHJcbiAgICAgICAgPmRpdntcclxuICAgICAgICAgICAgLnNsaWRlVHh0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/home-page/slider/slider.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/home-page/slider/slider.component.ts ***!
  \*****************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
        var swiper_badge_sub = new Swiper('.home_slide', {
            slidesPerView: 1,
            speed: 500,
            // effect:'fade',
            spaceBetween: 10,
            //        simulateTouch:false,
            pagination: '.swiper-pagination',
            autoplay: 5000,
            paginationClickable: true,
        });
    };
    ;
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/components/home-page/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/components/home-page/slider/slider.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/components/my-account/account-settings/account-settings.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/my-account/account-settings/account-settings.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tabChangeSettings\">\n    \n    <form id=\"account-setting\" #formModificarAccount=\"ngForm\">\n        <h3>{{'myAccount.my_profile' | translate}}</h3>\n        <div class=\"form-group\">\n            <label for=\"\">{{'myAccount.accountSettings.title' | translate}}</label>\n            <input class=\"form-control\" required name=\"newPassword\" [(ngModel)]=\"newPassword\" type=\"password\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\">{{'myAccount.accountSettings.repPass' | translate}}</label>\n            <input class=\"form-control\" required (input)=\"repeatPassInput()\" name=\"repeatPassword\" [(ngModel)]=\"repeatPassword\" type=\"password\">\n            <span [hidden]=\"isSamePassMSG\" style=\"color:red\">{{'myAccount.accountSettings.passMSG.diferentPass' | translate}}</span>\n            <span [hidden]=\"!isEmptyPassMSG\" style=\"color:red\">{{'myAccount.accountSettings.passMSG.emptyPass' | translate}}</span>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\">{{'myAccount.accountSettings.oldPass' | translate}}</label>\n            <input class=\"form-control\" required (input)=\"oldPassInput()\" name=\"oldPassword\" [(ngModel)]=\"oldPassword\" type=\"password\">\n            <span [hidden]=\"currecntPassMSG\" style=\"color:red\">{{'myAccount.accountSettings.passMSG.wrongPass' | translate}}</span>\n            <span [hidden]=\"!isEmptyOldPassMSG\" style=\"color:red\">{{'myAccount.accountSettings.passMSG.oldPass' | translate}}</span>\n        </div>\n        <button type=\"submit\"  [disabled]=\"!formModificarAccount.valid\" class=\"saveChanges\">Save</button>\n    </form>\n\n</div>\n<div class=\"tabChangeSettings\">\n    <h3>{{'myAccount.accountSettings.delAccount' | translate}}</h3>\n    <p>{{'myAccount.accountSettings.delDesc' | translate}}</p>\n    <input class=\"form-control\" (input)=\"deleteInputPass()\" [(ngModel)]=\"deletePassword\" placeholder=\"password\" type=\"password\">\n    <span [hidden]=\"passRequiredMSG !=''\" style=\"color:red\">{{'myAccount.accountSettings.passReq' | translate}}</span>\n    <span [hidden]=\"wrongPassDelMSG\" style=\"color:red\">{{'myAccount.accountSettings.passWrong' | translate}}</span>\n    <button (click)=\"deleteAccount()\" class=\"deleteAcountButton\">{{'myAccount.accountSettings.delete' | translate}}</button>\n</div>"

/***/ }),

/***/ "./src/app/components/my-account/account-settings/account-settings.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/my-account/account-settings/account-settings.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabChangeSettings {\n  margin-bottom: 20px;\n  background-color: #F2F2F2;\n  padding: 10px 15px; }\n  .tabChangeSettings #account-setting input.form-control {\n    border-radius: 0px !important; }\n  .tabChangeSettings #account-setting .saveChanges {\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n    background-color: #689F38;\n    border: 1px solid #689F38;\n    margin: 10px 0;\n    padding: 0px 10px;\n    border-radius: 2px;\n    cursor: pointer;\n    color: #fff;\n    margin-left: auto;\n    display: block; }\n  .tabChangeSettings .deleteAcountButton {\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n    background-color: #F44336;\n    border: 1px solid #F44336;\n    margin: 10px 0;\n    padding: 0px 10px;\n    border-radius: 2px;\n    cursor: pointer;\n    color: #fff;\n    margin-left: auto;\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1hY2NvdW50L2FjY291bnQtc2V0dGluZ3MvQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcZnJhbS1zaG9wL3NyY1xcYXBwXFxjb21wb25lbnRzXFxteS1hY2NvdW50XFxhY2NvdW50LXNldHRpbmdzXFxhY2NvdW50LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL215LWFjY291bnQvYWNjb3VudC1zZXR0aW5ncy9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxnbG9iYWxTQ1NTXFxnbG9iYWxTQ1NTLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxvQkFBbUI7RUFDbkIsMEJDQ2M7RURBZCxtQkFBa0IsRUErQnJCO0VBbENEO0lBTVksOEJBQTZCLEVBQ2hDO0VBUFQ7SUFVWSxnSEFBK0c7SUFDL0csMEJDWkU7SURhRiwwQkNiRTtJRGNGLGVBQWM7SUFDZCxrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLGdCQUFlO0lBQ2YsWUFBVztJQUNYLGtCQUFpQjtJQUNqQixlQUFjLEVBQ2pCO0VBcEJUO0lBdUJRLGdIQUErRztJQUMzRywwQkNsQkM7SURtQkQsMEJDbkJDO0lEb0JELGVBQWM7SUFDZCxrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLGdCQUFlO0lBQ2YsWUFBVztJQUNYLGtCQUFpQjtJQUNqQixlQUFjLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9teS1hY2NvdW50L2FjY291bnQtc2V0dGluZ3MvYWNjb3VudC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2dsb2JhbFNDU1MvZ2xvYmFsU0NTUyc7XHJcbi50YWJDaGFuZ2VTZXR0aW5ncyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hXYXlCRztcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICNhY2NvdW50LXNldHRpbmd7XHJcbiAgICAgICAgaW5wdXQuZm9ybS1jb250cm9se1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnNhdmVDaGFuZ2Vze1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGdyZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuICAgIC5kZWxldGVBY291bnRCdXR0b257XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcmVkO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59IiwiJGdyZWVuOiM2ODlGMzg7XHJcbiRncmVlbkRhcms6IzUwOGMxYztcclxuJGdyZWVuUkdCQTojNjg5ZjM4OGM7XHJcbiRkaXNhYmxlZEJ1dHRvbjojOWJhMjk1O1xyXG4kaGlnaFdheUJHOiNGMkYyRjI7XHJcbiRkYXJrOiMyNjI2MjY7XHJcbiRncmV5OiM2MTYxNjE7XHJcbiRyZWQ6ICNGNDQzMzY7XHJcbiR5ZWxsb3c6ICNGQkMwMkQ7XHJcblxyXG4kY29sOiBcIihtYXgtd2lkdGg6IDU3NnB4KVwiO1xyXG4kc20tZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDc2N3B4KVwiO1xyXG4kc20tZGV2aWNlOiBcIihtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG1pbi13aWR0aDo1NzdweClcIjtcclxuJG1kLWRldmljZU1heDogXCIobWF4LXdpZHRoOiA5OTFweClcIjtcclxuJG1kLWRldmljZTogXCIobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6NzY4cHgpXCI7XHJcbiRsZy1kZXZpY2U6IFwiKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDo5OTJweClcIjtcclxuJHhsLWRldmljZU1heDogXCIobWF4LXdpZHRoOiAxMjAwcHgpXCI7XHJcbiR4bC1kZXZpY2U6IFwiKG1pbi13aWR0aDogMTIwMXB4KVwiOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/my-account/account-settings/account-settings.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/my-account/account-settings/account-settings.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AccountSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsComponent", function() { return AccountSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccountSettingsComponent = /** @class */ (function () {
    function AccountSettingsComponent() {
        this.deletePassword = "";
        this.passRequiredMSG = " ";
        this.newPassword = "";
        this.repeatPassword = "";
        this.oldPassword = "";
        this.currectPassword = "old";
        this.currecntPassMSG = true;
        this.isSamePassMSG = true;
        this.isEmptyPassMSG = false;
        this.isEmptyOldPassMSG = false;
        this.wrongPassDelMSG = true;
    }
    AccountSettingsComponent.prototype.ngOnInit = function () {
    };
    AccountSettingsComponent.prototype.deleteAccount = function () {
        if (this.deletePassword == "") {
            this.passRequiredMSG = this.deletePassword;
        }
    };
    AccountSettingsComponent.prototype.repeatPassInput = function () {
        this.isSamePassMSG = (this.newPassword == this.repeatPassword || this.repeatPassword == '') ? true : false;
        this.isEmptyPassMSG = (this.repeatPassword == '') ? true : false;
    };
    AccountSettingsComponent.prototype.oldPassInput = function () {
        this.currecntPassMSG = (this.oldPassword == this.currectPassword || this.oldPassword == '') ? true : false;
        this.isEmptyOldPassMSG = (this.oldPassword == '') ? true : false;
    };
    AccountSettingsComponent.prototype.deleteInputPass = function () {
        this.wrongPassDelMSG = (this.deletePassword == this.currectPassword || this.deletePassword == '') ? true : false;
        this.passRequiredMSG = this.deletePassword;
    };
    AccountSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-settings',
            template: __webpack_require__(/*! ./account-settings.component.html */ "./src/app/components/my-account/account-settings/account-settings.component.html"),
            styles: [__webpack_require__(/*! ./account-settings.component.scss */ "./src/app/components/my-account/account-settings/account-settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccountSettingsComponent);
    return AccountSettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/my-account/my-account.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/my-account/my-account.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"my-account\" class=\"mt-4\">\n    <div class=\"container\">\n        <div class=\"row\"> \n            <div class=\"col-12\">\n                <div class=\"top-direction\">\n                    <div class=\"dicrection-path\">\n                        <a routerLink=\"/home\"><span class=\"lnr lnr-home\"></span> {{'header.navBar.button1' | translate}}</a>\n                        <span>{{'header.navBar.button1' | translate}}</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-md-4 col-lg-3\">\n                <div class=\"leftAsideAccount\">\n                    <div class=\"avatatSection\">\n                        <div class=\"image-wrap-my text-center\">\n                            <img src=\"./assets/img/user.jpg\" class=\"img-fluid\" alt=\"\">\n                            <h4 class=\"mt-3 mb-3\">Arthur Sahakyan</h4>\n                            <a href=\"emailto:arthur.sahakyan96@gmail.com\" class=\"d-block\">arthur.sahakyan96@gmail.com</a>\n                            <button>{{'header.signOUT' | translate}}</button>\n                        </div>\n                    </div>\n                    <span class=\"profileHR\">{{'myAccount.profileLegend' | translate}} <span></span></span>\n                    <ul class=\"account-settings\" type=\"none\" #settings>\n                        <li>\n                            <a href=\"javascript:void(0)\" data-tab=\"profileTab\" class=\"active-setting\"><span class=\"lnr lnr-user\"></span> {{'myAccount.my_profile' | translate}}</a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" data-tab=\"accountTab\"><span class=\"lnr lnr-cog\"></span> {{'myAccount.accSetting' | translate}}</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-12 col-md-8 col-lg-9\">\n                <div [ngSwitch]=\"tabChange\">\n                    <app-profile-settings  *ngSwitchCase=\"'profileTab'\"></app-profile-settings>\n                    <app-account-settings *ngSwitchCase=\"'accountTab'\"></app-account-settings>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/my-account/my-account.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/my-account/my-account.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n#my-account .top-direction {\n  margin-bottom: 20px; }\n#my-account .top-direction .dicrection-path {\n    padding: 10px;\n    background-color: #F2F2F2; }\n#my-account .top-direction .dicrection-path a {\n      text-decoration: none;\n      color: #262626;\n      position: relative; }\n#my-account .top-direction .dicrection-path a:after {\n        margin: 0 5px;\n        position: relative;\n        content: \"»\"; }\n#my-account .top-direction .dicrection-path a span {\n        margin-right: 3px; }\n#my-account .top-direction .dicrection-path span {\n      color: #616161; }\n#my-account .leftAsideAccount {\n  background-color: #F2F2F2;\n  padding: 10px; }\n#my-account .leftAsideAccount .image-wrap-my button {\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n    background-color: #689F38;\n    border: 1px solid #689F38;\n    margin: 10px 0;\n    border-radius: 2px;\n    cursor: pointer;\n    color: #fff; }\n#my-account .leftAsideAccount .account-settings {\n    padding: 10px 0;\n    margin-bottom: 0; }\n#my-account .leftAsideAccount .account-settings a {\n      color: #262626;\n      text-decoration: none;\n      font-size: 14px;\n      display: block;\n      padding: 5px 10px; }\n#my-account .leftAsideAccount .account-settings a span {\n        margin-right: 10px; }\n#my-account .leftAsideAccount .account-settings .active-setting {\n      color: #fff;\n      background-color: #689F38; }\n#my-account .leftAsideAccount .profileHR {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n#my-account .leftAsideAccount .profileHR span {\n      position: relative;\n      right: 0;\n      width: calc(100% - 50px);\n      height: 1px;\n      background-color: #ccc;\n      display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1hY2NvdW50L215LWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbXktYWNjb3VudC9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxhcHBcXGNvbXBvbmVudHNcXG15LWFjY291bnRcXG15LWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbXktYWNjb3VudC9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxnbG9iYWxTQ1NTXFxnbG9iYWxTQ1NTLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDSWpCO0VBRVEsb0JBQW1CLEVBc0J0QjtBQXhCTDtJQUlZLGNBQWE7SUFDYiwwQkNMTSxFRHVCVDtBQXZCVDtNQU9nQixzQkFBcUI7TUFDckIsZUNQSDtNRFFHLG1CQUFrQixFQVNyQjtBQWxCYjtRQVdvQixjQUFZO1FBQ1osbUJBQWtCO1FBQ2xCLGFBQVksRUFDZjtBQWRqQjtRQWdCb0Isa0JBQWlCLEVBQ3BCO0FBakJqQjtNQW9CZ0IsZUNsQkgsRURtQkE7QUFyQmI7RUEwQlEsMEJDMUJVO0VEMkJWLGNBQWEsRUEyQ2hCO0FBdEVMO0lBOEJnQixnSEFBbUc7SUFDbkcsMEJDbkNGO0lEb0NFLDBCQ3BDRjtJRHFDRSxlQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLGdCQUFlO0lBQ2YsWUFBVyxFQUNkO0FBckNiO0lBd0NZLGdCQUFjO0lBQ2QsaUJBQWdCLEVBZW5CO0FBeERUO01BMkNnQixlQzFDSDtNRDJDRyxzQkFBcUI7TUFDckIsZ0JBQWU7TUFDZixlQUFjO01BQ2Qsa0JBQWdCLEVBSW5CO0FBbkRiO1FBaURvQixtQkFBa0IsRUFDckI7QUFsRGpCO01BcURnQixZQUFXO01BQ1gsMEJDMURGLEVEMkREO0FBdkRiO0lBMERZLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsK0JBQThCLEVBU2pDO0FBckVUO01BOERnQixtQkFBa0I7TUFDbEIsU0FBUTtNQUNSLHlCQUF3QjtNQUN4QixZQUFXO01BQ1gsdUJBQXNCO01BQ3RCLGVBQWMsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbiNteS1hY2NvdW50IC50b3AtZGlyZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuICAjbXktYWNjb3VudCAudG9wLWRpcmVjdGlvbiAuZGljcmVjdGlvbi1wYXRoIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7IH1cbiAgICAjbXktYWNjb3VudCAudG9wLWRpcmVjdGlvbiAuZGljcmVjdGlvbi1wYXRoIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICMyNjI2MjY7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgICNteS1hY2NvdW50IC50b3AtZGlyZWN0aW9uIC5kaWNyZWN0aW9uLXBhdGggYTphZnRlciB7XG4gICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29udGVudDogXCLCu1wiOyB9XG4gICAgICAjbXktYWNjb3VudCAudG9wLWRpcmVjdGlvbiAuZGljcmVjdGlvbi1wYXRoIGEgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4OyB9XG4gICAgI215LWFjY291bnQgLnRvcC1kaXJlY3Rpb24gLmRpY3JlY3Rpb24tcGF0aCBzcGFuIHtcbiAgICAgIGNvbG9yOiAjNjE2MTYxOyB9XG5cbiNteS1hY2NvdW50IC5sZWZ0QXNpZGVBY2NvdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiAgcGFkZGluZzogMTBweDsgfVxuICAjbXktYWNjb3VudCAubGVmdEFzaWRlQWNjb3VudCAuaW1hZ2Utd3JhcC1teSBidXR0b24ge1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5RjM4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ODlGMzg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAjbXktYWNjb3VudCAubGVmdEFzaWRlQWNjb3VudCAuYWNjb3VudC1zZXR0aW5ncyB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7IH1cbiAgICAjbXktYWNjb3VudCAubGVmdEFzaWRlQWNjb3VudCAuYWNjb3VudC1zZXR0aW5ncyBhIHtcbiAgICAgIGNvbG9yOiAjMjYyNjI2O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweDsgfVxuICAgICAgI215LWFjY291bnQgLmxlZnRBc2lkZUFjY291bnQgLmFjY291bnQtc2V0dGluZ3MgYSBzcGFuIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG4gICAgI215LWFjY291bnQgLmxlZnRBc2lkZUFjY291bnQgLmFjY291bnQtc2V0dGluZ3MgLmFjdGl2ZS1zZXR0aW5nIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY4OUYzODsgfVxuICAjbXktYWNjb3VudCAubGVmdEFzaWRlQWNjb3VudCAucHJvZmlsZUhSIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XG4gICAgI215LWFjY291bnQgLmxlZnRBc2lkZUFjY291bnQgLnByb2ZpbGVIUiBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgICAgZGlzcGxheTogYmxvY2s7IH1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL2dsb2JhbFNDU1MvZXh0ZW5kcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2dsb2JhbFNDU1MvZ2xvYmFsU0NTUyc7XHJcblxyXG5cclxuI215LWFjY291bnR7XHJcbiAgICAudG9wLWRpcmVjdGlvbnsgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAuZGljcmVjdGlvbi1wYXRoe1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGlnaFdheUJHO1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiwrtcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGVmdEFzaWRlQWNjb3VudHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiRoaWdoV2F5Qkc7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAuaW1hZ2Utd3JhcC1teXtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWNjb3VudC1zZXR0aW5nc3tcclxuICAgICAgICAgICAgcGFkZGluZzoxMHB4IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRhcms7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWN0aXZlLXNldHRpbmd7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9maWxlSFJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufSIsIiRncmVlbjojNjg5RjM4O1xyXG4kZ3JlZW5EYXJrOiM1MDhjMWM7XHJcbiRncmVlblJHQkE6IzY4OWYzODhjO1xyXG4kZGlzYWJsZWRCdXR0b246IzliYTI5NTtcclxuJGhpZ2hXYXlCRzojRjJGMkYyO1xyXG4kZGFyazojMjYyNjI2O1xyXG4kZ3JleTojNjE2MTYxO1xyXG4kcmVkOiAjRjQ0MzM2O1xyXG4keWVsbG93OiAjRkJDMDJEO1xyXG5cclxuJGNvbDogXCIobWF4LXdpZHRoOiA1NzZweClcIjtcclxuJHNtLWRldmljZU1heDogXCIobWF4LXdpZHRoOiA3NjdweClcIjtcclxuJHNtLWRldmljZTogXCIobWF4LXdpZHRoOiA3NjdweCkgYW5kIChtaW4td2lkdGg6NTc3cHgpXCI7XHJcbiRtZC1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogOTkxcHgpXCI7XHJcbiRtZC1kZXZpY2U6IFwiKG1heC13aWR0aDogOTkxcHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KVwiO1xyXG4kbGctZGV2aWNlOiBcIihtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6OTkycHgpXCI7XHJcbiR4bC1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogMTIwMHB4KVwiO1xyXG4keGwtZGV2aWNlOiBcIihtaW4td2lkdGg6IDEyMDFweClcIjsiXX0= */"

/***/ }),

/***/ "./src/app/components/my-account/my-account.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/my-account/my-account.component.ts ***!
  \***************************************************************/
/*! exports provided: MyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountComponent", function() { return MyAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyAccountComponent = /** @class */ (function () {
    function MyAccountComponent() {
        this.tabChange = 'profileTab';
    }
    MyAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        Array.prototype.forEach.call(this.settings.nativeElement.children, function (element) {
            element.children[0].onclick = function (e) {
                document.querySelector('.active-setting').classList.remove('active-setting');
                e.target.classList.add('active-setting');
                _this.tabChange = e.target.getAttribute('data-tab');
            };
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('settings'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MyAccountComponent.prototype, "settings", void 0);
    MyAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-account',
            template: __webpack_require__(/*! ./my-account.component.html */ "./src/app/components/my-account/my-account.component.html"),
            styles: [__webpack_require__(/*! ./my-account.component.scss */ "./src/app/components/my-account/my-account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyAccountComponent);
    return MyAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/my-account/profile-settings/profile-settings.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/my-account/profile-settings/profile-settings.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tabChangeSettings\">\n    <form action=\"\" id=\"my-profile\"  #formModificarProfile=\"ngForm\">\n        <h3>{{'myAccount.my_profile' | translate}}</h3>\n        <div class=\"form-group\">\n            <label>{{'header.regForm.fName' | translate}}</label>\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"firstName\" required>\n            <span style=\"color:red;\" [hidden]=\"firstName!=''\">{{'myAccount.myProfile.requireFName' | translate}}</span>\n        </div>\n        <div class=\"form-group\">\n            <label>{{'header.regForm.lName' | translate}}</label>\n            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"lastName\" required>\n            <span style=\"color:red;\" [hidden]=\"lastName!=''\">{{'myAccount.myProfile.requireLName' | translate}}</span>\n        </div>\n        <div class=\"form-group\">\n            <label >{{'myAccount.myProfile.avatar' | translate}}</label>\n            <div class=\"uploadImage\">\n                <!-- <div class=\"progress\">\n                    <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width]=\"(uploadProgress | async) + '%'\"\n                        [attr.aria-valuenow]=\"(uploadProgress | async)\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                    </div>\n                </div>\n                <div class=\"uploadedImage alert alert-info\" role=\"alert\" *ngIf=\"downloadURL | async; let downloadSrc\"> -->\n                    <img [src]=\"avatarURL\" height=\"200\" class=\"img-fluid\" *ngIf=\"avatarURL\">\n                <!-- </div> -->\n            </div>\n            <div class=\"file d-flex flex-column flex-sm-row justify-content-between mt-4\">\n                <label class=\"file-label\">\n                    <input class=\"file-input\" accept='image/*' #avatarImage type=\"file\" name=\"avatar\" (change)=\"upload($event)\">\n                    <span class=\"file-cta\">\n                        <span class=\"file-icon\">\n                            <span class=\"lnr lnr-upload\"></span>\n                        </span>\n                        <span class=\"file-label\">\n                            {{'myAccount.myProfile.choseIMG' | translate}}\n                        </span>\n                    </span>\n                </label>\n                <span style=\"color:red;\" *ngIf=\"message\">{{message}}</span>\n            </div>\n        </div>\n        <button type=\"submit\" [disabled]=\"!formModificarProfile.valid\" class=\"saveChanges\"> {{'myAccount.myProfile.save' | translate}}</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/my-account/profile-settings/profile-settings.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/my-account/profile-settings/profile-settings.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabChangeSettings {\n  background-color: #F2F2F2;\n  padding: 10px 15px; }\n  .tabChangeSettings #my-profile .file-cta {\n    background-color: #f5f5f5;\n    color: #4a4a4a; }\n  .tabChangeSettings #my-profile .file-cta, .tabChangeSettings #my-profile .file-name {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    align-items: center;\n    border: 1px solid transparent;\n    border-radius: 3px;\n    box-shadow: none;\n    display: inline-flex;\n    font-size: 1rem;\n    height: 2.25em;\n    justify-content: flex-start;\n    line-height: 1.5;\n    padding-bottom: calc(.375em - 1px);\n    padding-left: calc(.625em - 1px);\n    padding-right: calc(.625em - 1px);\n    padding-top: calc(.375em - 1px);\n    position: relative;\n    vertical-align: top;\n    border-color: #dbdbdb;\n    border-radius: 3px;\n    font-size: 1em;\n    padding-left: 1em;\n    padding-right: 1em;\n    white-space: nowrap; }\n  .tabChangeSettings #my-profile .file-icon {\n    align-items: center;\n    display: flex;\n    height: 1em;\n    justify-content: center;\n    margin-right: .5em;\n    width: 1em; }\n  .tabChangeSettings #my-profile .file-input {\n    height: .01em;\n    left: 0;\n    outline: 0;\n    position: absolute;\n    top: 0;\n    width: .01em; }\n  .tabChangeSettings #my-profile .file-label {\n    align-items: stretch;\n    display: flex;\n    cursor: pointer;\n    justify-content: flex-start;\n    overflow: hidden;\n    position: relative; }\n  .tabChangeSettings #my-profile .file {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    align-items: stretch;\n    display: flex;\n    justify-content: flex-start;\n    position: relative; }\n  .tabChangeSettings #my-profile .saveChanges {\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n    background-color: #689F38;\n    border: 1px solid #689F38;\n    margin: 10px 0;\n    padding: 0px 10px;\n    border-radius: 2px;\n    cursor: pointer;\n    color: #fff;\n    margin-left: auto;\n    display: block; }\n  .tabChangeSettings #my-profile .uploadImage img {\n    max-width: 200px; }\n  .tabChangeSettings #my-profile input.form-control {\n    border-radius: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1hY2NvdW50L3Byb2ZpbGUtc2V0dGluZ3MvQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcZnJhbS1zaG9wL3NyY1xcYXBwXFxjb21wb25lbnRzXFxteS1hY2NvdW50XFxwcm9maWxlLXNldHRpbmdzXFxwcm9maWxlLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL215LWFjY291bnQvcHJvZmlsZS1zZXR0aW5ncy9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxnbG9iYWxTQ1NTXFxnbG9iYWxTQ1NTLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwwQkNFYztFRERkLG1CQUFrQixFQW1IckI7RUFySEQ7SUFNWSwwQkFBeUI7SUFDekIsZUFBYyxFQUNqQjtFQVJUO0lBV1ksc0JBQXFCO0lBQ3JCLHlCQUF3QjtJQUd4QixvQkFBbUI7SUFDbkIsOEJBQTZCO0lBQzdCLG1CQUFrQjtJQUVsQixpQkFBZ0I7SUFHaEIscUJBQW9CO0lBQ3BCLGdCQUFlO0lBQ2YsZUFBYztJQUdkLDRCQUEyQjtJQUMzQixpQkFBZ0I7SUFDaEIsbUNBQWtDO0lBQ2xDLGlDQUFnQztJQUNoQyxrQ0FBaUM7SUFDakMsZ0NBQStCO0lBQy9CLG1CQUFrQjtJQUNsQixvQkFBbUI7SUFDbkIsc0JBQXFCO0lBQ3JCLG1CQUFrQjtJQUNsQixlQUFjO0lBQ2Qsa0JBQWlCO0lBQ2pCLG1CQUFrQjtJQUNsQixvQkFBbUIsRUFDdEI7RUF6Q1Q7SUE2Q1ksb0JBQW1CO0lBR25CLGNBQWE7SUFDYixZQUFXO0lBR1gsd0JBQXVCO0lBQ3ZCLG1CQUFrQjtJQUNsQixXQUFVLEVBQ2I7RUF2RFQ7SUF5RFksY0FBYTtJQUNiLFFBQU87SUFDUCxXQUFVO0lBQ1YsbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixhQUFZLEVBQ2Y7RUEvRFQ7SUFtRVkscUJBQW9CO0lBR3BCLGNBQWE7SUFDYixnQkFBZTtJQUdmLDRCQUEyQjtJQUMzQixpQkFBZ0I7SUFDaEIsbUJBQWtCLEVBQ3JCO0VBN0VUO0lBK0VZLDRCQUEyQjtJQUMzQiwwQkFBeUI7SUFDekIsdUJBQXNCO0lBQ3RCLHNCQUFxQjtJQUNyQixrQkFBaUI7SUFHakIscUJBQW9CO0lBR3BCLGNBQWE7SUFHYiw0QkFBMkI7SUFDM0IsbUJBQWtCLEVBQ3JCO0VBOUZUO0lBaUdZLGdIQUErRztJQUMvRywwQkNuR0U7SURvR0YsMEJDcEdFO0lEcUdGLGVBQWM7SUFDZCxrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLGdCQUFlO0lBQ2YsWUFBVztJQUNYLGtCQUFpQjtJQUNqQixlQUFjLEVBQ2pCO0VBM0dUO0lBOEdnQixpQkFBZ0IsRUFDbkI7RUEvR2I7SUFrSFksOEJBQTZCLEVBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9teS1hY2NvdW50L3Byb2ZpbGUtc2V0dGluZ3MvcHJvZmlsZS1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2dsb2JhbFNDU1MvZ2xvYmFsU0NTUyc7XHJcbi50YWJDaGFuZ2VTZXR0aW5ncyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGlnaFdheUJHO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG5cclxuICAgICNteS1wcm9maWxle1xyXG4gICAgICAgIC5maWxlLWN0YSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNGE0YTRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZmlsZS1jdGEsIC5maWxlLW5hbWUge1xyXG4gICAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyLjI1ZW07XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xyXG4gICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyguMzc1ZW0gLSAxcHgpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoLjYyNWVtIC0gMXB4KTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyguNjI1ZW0gLSAxcHgpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyguMzc1ZW0gLSAxcHgpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2RiZGJkYjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpbGUtaWNvbiB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmlsZS1pbnB1dCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogLjAxZW07XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogLjAxZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWxlLWxhYmVsIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0cmV0Y2g7XHJcbiAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xyXG4gICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWxlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogc3RyZXRjaDtcclxuICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xyXG4gICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zYXZlQ2hhbmdlc3tcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmVlbjtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9ICAgXHJcbiAgICAgICAgLnVwbG9hZEltYWdle1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0LmZvcm0tY29udHJvbHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJGdyZWVuOiM2ODlGMzg7XHJcbiRncmVlbkRhcms6IzUwOGMxYztcclxuJGdyZWVuUkdCQTojNjg5ZjM4OGM7XHJcbiRkaXNhYmxlZEJ1dHRvbjojOWJhMjk1O1xyXG4kaGlnaFdheUJHOiNGMkYyRjI7XHJcbiRkYXJrOiMyNjI2MjY7XHJcbiRncmV5OiM2MTYxNjE7XHJcbiRyZWQ6ICNGNDQzMzY7XHJcbiR5ZWxsb3c6ICNGQkMwMkQ7XHJcblxyXG4kY29sOiBcIihtYXgtd2lkdGg6IDU3NnB4KVwiO1xyXG4kc20tZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDc2N3B4KVwiO1xyXG4kc20tZGV2aWNlOiBcIihtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG1pbi13aWR0aDo1NzdweClcIjtcclxuJG1kLWRldmljZU1heDogXCIobWF4LXdpZHRoOiA5OTFweClcIjtcclxuJG1kLWRldmljZTogXCIobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6NzY4cHgpXCI7XHJcbiRsZy1kZXZpY2U6IFwiKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDo5OTJweClcIjtcclxuJHhsLWRldmljZU1heDogXCIobWF4LXdpZHRoOiAxMjAwcHgpXCI7XHJcbiR4bC1kZXZpY2U6IFwiKG1pbi13aWR0aDogMTIwMXB4KVwiOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/my-account/profile-settings/profile-settings.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/my-account/profile-settings/profile-settings.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProfileSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsComponent", function() { return ProfileSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileSettingsComponent = /** @class */ (function () {
    function ProfileSettingsComponent() {
        this.firstName = "Arthur";
        this.lastName = "Sahakyan";
        this.avatarURL = './assets/img/user.jpg';
    }
    ProfileSettingsComponent.prototype.ngOnInit = function () {
    };
    ProfileSettingsComponent.prototype.upload = function (event) {
        var _this = this;
        var file = event.target.files[0];
        console.log(file);
        if (file.length === 0)
            return;
        var mimeType = file.type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        this.imagePath = event.files;
        reader.readAsDataURL(file);
        reader.onload = function (_event) {
            _this.avatarURL = reader.result;
        };
    };
    ProfileSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-settings',
            template: __webpack_require__(/*! ./profile-settings.component.html */ "./src/app/components/my-account/profile-settings/profile-settings.component.html"),
            styles: [__webpack_require__(/*! ./profile-settings.component.scss */ "./src/app/components/my-account/profile-settings/profile-settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileSettingsComponent);
    return ProfileSettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found-page/not-found-page.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/not-found-page/not-found-page.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class='d-block img-fluid mx-auto pt-4 pb-4' src=\"./assets/img/404.gif\" alt=\"\">"

/***/ }),

/***/ "./src/app/components/not-found-page/not-found-page.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/not-found-page/not-found-page.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kLXBhZ2Uvbm90LWZvdW5kLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/not-found-page/not-found-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/not-found-page/not-found-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    NotFoundPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found-page',
            template: __webpack_require__(/*! ./not-found-page.component.html */ "./src/app/components/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__(/*! ./not-found-page.component.scss */ "./src/app/components/not-found-page/not-found-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/components/partners/partners.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/partners/partners.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"partners\" class=\"mt-4\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"top-direction\">\n                    <div class=\"dicrection-path\">\n                        <a routerLink=\"/home\"><span class=\"lnr lnr-home\"></span> {{'header.navBar.button1' | translate}}</a>\n                        <span>{{'header.navBar.button5' | translate}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12\">\n            <div class=\"row border_together\">\n                <div class=\"col-12 col-sm-4 col-md-3 partnersBlock\"  *ngFor=\"let item of partnersData\">\n                    <div class=\"partner\">\n                        <img src=\"./assets/img/partners/{{item.img}}.png\" class=\"img-fluid\" alt=\"\">\n                        <div>\n                            <p>{{item.companyName}}</p>\n                            <p>{{item.description}}</p>   \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/partners/partners.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/partners/partners.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n#partners .top-direction {\n  margin-bottom: 20px; }\n#partners .top-direction .dicrection-path {\n    padding: 10px;\n    background-color: #F2F2F2; }\n#partners .top-direction .dicrection-path a {\n      text-decoration: none;\n      color: #262626;\n      position: relative; }\n#partners .top-direction .dicrection-path a:after {\n        margin: 0 5px;\n        position: relative;\n        content: \"»\"; }\n#partners .top-direction .dicrection-path a span {\n        margin-right: 3px; }\n#partners .top-direction .dicrection-path span {\n      color: #616161; }\n#partners .partnersBlock {\n  border-right: 1px solid #689F38;\n  border-bottom: 1px solid #689F38;\n  position: relative; }\n#partners .partnersBlock:hover:after {\n    opacity: 1; }\n#partners .partnersBlock:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    opacity: 0;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(104, 159, 56, 0.36);\n    transition: 0.4s; }\n#partners .partnersBlock .partner {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px 0; }\n#partners .partnersBlock .partner img {\n      padding: 10px; }\n#partners .partnersBlock .partner p {\n      margin-bottom: 0;\n      text-align: center; }\n#partners .border_together {\n  border-top: 1px solid #689F38;\n  border-left: 1px solid #689F38; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0bmVycy9wYXJ0bmVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0bmVycy9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhcnRuZXJzXFxwYXJ0bmVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0bmVycy9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxnbG9iYWxTQ1NTXFxnbG9iYWxTQ1NTLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDR2pCO0VBR1Esb0JBQW1CLEVBc0J0QjtBQXpCTDtJQUtZLGNBQWE7SUFDYiwwQkNMTSxFRHVCVDtBQXhCVDtNQVFnQixzQkFBcUI7TUFDckIsZUNQSDtNRFFHLG1CQUFrQixFQVNyQjtBQW5CYjtRQVlvQixjQUFZO1FBQ1osbUJBQWtCO1FBQ2xCLGFBQVksRUFDZjtBQWZqQjtRQWlCb0Isa0JBQWlCLEVBQ3BCO0FBbEJqQjtNQXFCZ0IsZUNsQkgsRURtQkE7QUF0QmI7RUEyQlEsZ0NDOUJNO0VEK0JOLGlDQy9CTTtFRGdDTixtQkFBa0IsRUE4QnJCO0FBM0RMO0lBK0JZLFdBQVUsRUFDYjtBQWhDVDtJQWtDWSxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFFBQU87SUFDUCxPQUFNO0lBQ04sV0FBVTtJQUNWLGFBQVk7SUFDWixZQUFXO0lBQ1gsMkNBQTBDO0lBQzFDLGlCQUFnQixFQUNuQjtBQTNDVDtJQTZDWSxhQUFZO0lBQ1osY0FBYTtJQUNiLHVCQUFzQjtJQUN0QiwrQkFBOEI7SUFDOUIsb0JBQW1CO0lBQ25CLGdCQUFnQixFQVFuQjtBQTFEVDtNQW9EZ0IsY0FBYSxFQUNoQjtBQXJEYjtNQXVEZ0IsaUJBQWdCO01BQ2hCLG1CQUFrQixFQUNyQjtBQXpEYjtFQTZEUSw4QkNoRU07RURpRU4sK0JDakVNLEVEa0VUIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXJ0bmVycy9wYXJ0bmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbiNwYXJ0bmVycyAudG9wLWRpcmVjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbiAgI3BhcnRuZXJzIC50b3AtZGlyZWN0aW9uIC5kaWNyZWN0aW9uLXBhdGgge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjsgfVxuICAgICNwYXJ0bmVycyAudG9wLWRpcmVjdGlvbiAuZGljcmVjdGlvbi1wYXRoIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICMyNjI2MjY7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgICNwYXJ0bmVycyAudG9wLWRpcmVjdGlvbiAuZGljcmVjdGlvbi1wYXRoIGE6YWZ0ZXIge1xuICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGNvbnRlbnQ6IFwiwrtcIjsgfVxuICAgICAgI3BhcnRuZXJzIC50b3AtZGlyZWN0aW9uIC5kaWNyZWN0aW9uLXBhdGggYSBzcGFuIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7IH1cbiAgICAjcGFydG5lcnMgLnRvcC1kaXJlY3Rpb24gLmRpY3JlY3Rpb24tcGF0aCBzcGFuIHtcbiAgICAgIGNvbG9yOiAjNjE2MTYxOyB9XG5cbiNwYXJ0bmVycyAucGFydG5lcnNCbG9jayB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM2ODlGMzg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjg5RjM4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgI3BhcnRuZXJzIC5wYXJ0bmVyc0Jsb2NrOmhvdmVyOmFmdGVyIHtcbiAgICBvcGFjaXR5OiAxOyB9XG4gICNwYXJ0bmVycyAucGFydG5lcnNCbG9jazphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDQsIDE1OSwgNTYsIDAuMzYpO1xuICAgIHRyYW5zaXRpb246IDAuNHM7IH1cbiAgI3BhcnRuZXJzIC5wYXJ0bmVyc0Jsb2NrIC5wYXJ0bmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMDsgfVxuICAgICNwYXJ0bmVycyAucGFydG5lcnNCbG9jayAucGFydG5lciBpbWcge1xuICAgICAgcGFkZGluZzogMTBweDsgfVxuICAgICNwYXJ0bmVycyAucGFydG5lcnNCbG9jayAucGFydG5lciBwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuI3BhcnRuZXJzIC5ib3JkZXJfdG9nZXRoZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzY4OUYzODtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNjg5RjM4OyB9XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9nbG9iYWxTQ1NTL2V4dGVuZHMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9nbG9iYWxTQ1NTL2dsb2JhbFNDU1MnO1xyXG5cclxuI3BhcnRuZXJze1xyXG5cclxuICAgIC50b3AtZGlyZWN0aW9ueyBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIC5kaWNyZWN0aW9uLXBhdGh7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoaWdoV2F5Qkc7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRhcms7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIDVweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLCu1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYXJ0bmVyc0Jsb2Nre1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRncmVlbjsgXHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmVlbjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgJjpob3ZlcjphZnRlcntcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxNTksIDU2LCAwLjM2KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhcnRuZXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgO1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIC5ib3JkZXJfdG9nZXRoZXJ7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRncmVlbjsgXHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkZ3JlZW47IFxyXG4gICAgfVxyXG59IiwiJGdyZWVuOiM2ODlGMzg7XHJcbiRncmVlbkRhcms6IzUwOGMxYztcclxuJGdyZWVuUkdCQTojNjg5ZjM4OGM7XHJcbiRkaXNhYmxlZEJ1dHRvbjojOWJhMjk1O1xyXG4kaGlnaFdheUJHOiNGMkYyRjI7XHJcbiRkYXJrOiMyNjI2MjY7XHJcbiRncmV5OiM2MTYxNjE7XHJcbiRyZWQ6ICNGNDQzMzY7XHJcbiR5ZWxsb3c6ICNGQkMwMkQ7XHJcblxyXG4kY29sOiBcIihtYXgtd2lkdGg6IDU3NnB4KVwiO1xyXG4kc20tZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDc2N3B4KVwiO1xyXG4kc20tZGV2aWNlOiBcIihtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG1pbi13aWR0aDo1NzdweClcIjtcclxuJG1kLWRldmljZU1heDogXCIobWF4LXdpZHRoOiA5OTFweClcIjtcclxuJG1kLWRldmljZTogXCIobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6NzY4cHgpXCI7XHJcbiRsZy1kZXZpY2U6IFwiKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDo5OTJweClcIjtcclxuJHhsLWRldmljZU1heDogXCIobWF4LXdpZHRoOiAxMjAwcHgpXCI7XHJcbiR4bC1kZXZpY2U6IFwiKG1pbi13aWR0aDogMTIwMXB4KVwiOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/partners/partners.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/partners/partners.component.ts ***!
  \***********************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PartnersComponent = /** @class */ (function () {
    function PartnersComponent() {
        this.partnersData = [{}];
        this.partnersData = [
            { img: "partner1", companyName: "Partner 1", description: "Partner 1 description" },
            { img: "partner2", companyName: "Partner 2", description: "Partner 2 description" },
            { img: "partner3", companyName: "Partner 3", description: "Partner 3 description" },
            { img: "partner4", companyName: "Partner 4", description: "Partner 4 description" },
            { img: "partner5", companyName: "Partner 5", description: "Partner 5 description" },
            { img: "partner6", companyName: "Partner 6", description: "Partner 6 description" },
            { img: "partner7", companyName: "Partner 7", description: "Partner 7 description" },
            { img: "partner8", companyName: "Partner 8", description: "Partner 8 description" },
            { img: "partner9", companyName: "Partner 9", description: "Partner 9 description" },
            { img: "partner10", companyName: "Partner 10", description: "Partner 10 description" },
            { img: "partner11", companyName: "Partner 11", description: "Partner 11 description" },
            { img: "partner12", companyName: "Partner 12", description: "Partner 12 description" },
            { img: "partner13", companyName: "Partner 13", description: "Partner 13 description" }
        ];
    }
    PartnersComponent.prototype.ngOnInit = function () {
    };
    PartnersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partners',
            template: __webpack_require__(/*! ./partners.component.html */ "./src/app/components/partners/partners.component.html"),
            styles: [__webpack_require__(/*! ./partners.component.scss */ "./src/app/components/partners/partners.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PartnersComponent);
    return PartnersComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"products_page\" class=\"mt-4 product_slide_cont\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"top-direction\">\n                    <div class=\"dicrection-path\">\n                        <a routerLink=\"/home\"><span class=\"lnr lnr-home\"></span> {{'header.navBar.button1' | translate}}</a>\n                        <a routerLink=\"/shop\"> {{'header.navBar.button2.main' | translate}}</a>\n                        <span>Products 1</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-md-6\">\n                <div class=\"prodLeft\">\n                    <div class=\"swiper-container prod-slider-large\">\n                        <div class=\"swiper-wrapper\">\n                            <div class=\"swiper-slide imgBox \" #imgBoxZoom>\n                                <img  alt=\"framShop\" class=\"img-fluid\" data-origin=\"./assets/img/products/prod1.png\" src=\"./assets/img/products/prod1.png\">\n                            </div>\n                            <div class=\"swiper-slide imgBox\" #imgBoxZoom>\n                                <img  alt=\"framShop\" class=\"img-fluid\" data-origin=\"./assets/img/products/prod2.png\" src=\"./assets/img/products/prod2.png\">\n                            </div>\n                            <div class=\"swiper-slide imgBox\" #imgBoxZoom>\n                                <img  alt=\"framShop\" class=\"img-fluid\" data-origin=\"./assets/img/products/prod3.png\" src=\"./assets/img/products/prod3.png\">\n                            </div>\n                            <div class=\"swiper-slide imgBox\" #imgBoxZoom>\n                                <img  alt=\"framShop\" class=\"img-fluid\" data-origin=\"./assets/img/products/prod4.png\" src=\"./assets/img/products/prod4.png\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"swiper-container prod-slider-thumb\">\n                        <div class=\"swiper-wrapper\">\n                            <div class=\"swiper-slide med_prod_slider_borard\">\n                                <img alt=\"framShop\" data-slide-to=\"0\" class=\"swipe-slide-to img-fluid\" src=\"./assets/img/products/prod1.png\">\n                            </div>\n                            <div class=\"swiper-slide med_prod_slider_borard\">\n                                <img alt=\"framShop\" data-slide-to=\"1\" class=\"swipe-slide-to img-fluid\" src=\"./assets/img/products/prod2.png\">\n                            </div>\n                            <div class=\"swiper-slide med_prod_slider_borard\">\n                                <img alt=\"framShop\" data-slide-to=\"2\" class=\"swipe-slide-to img-fluid\" src=\"./assets/img/products/prod3.png\">\n                            </div>\n                            <div class=\"swiper-slide med_prod_slider_borard\">\n                                <img alt=\"framShop\" data-slide-to=\"3\" class=\"swipe-slide-to img-fluid\" src=\"./assets/img/products/prod4.png\">\n                            </div>\n                        </div>\n                        <!-- Add Arrows -->\n                        <div class=\"swiper-button-next thumb-arrow-right\"><i class=\"lnr lnr-chevron-right \"></i></div>\n                        <div class=\"swiper-button-prev thumb-arrow-left\"><i class=\"lnr lnr-chevron-left\"></i></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-lg-3 col-md-6\">\n                <div class=\"right_prod\">\n                    <h3 class=\"mb-3 product_name\">Product 1</h3>\n                    <p class=\"text-muted\">{{'productSingle.categ' | translate}} <span class=\"text-dark\">Electronics</span></p>   \n                    <h5  class=\"mt-2 mb-1\">{{'productSingle.rating' | translate}}</h5>\n                    <div class=\"ratingStars\">\n                        <span class=\"lnr lnr-star appreciated\"></span>\n                        <span class=\"lnr lnr-star appreciated\"></span>\n                        <span class=\"lnr lnr-star appreciated\"></span>\n                        <span class=\"lnr lnr-star\"></span>\n                        <span class=\"lnr lnr-star\"></span>\n                    </div>\n                    <div class=\"discountWrap\">\n                        <h5 class=\"mt-2 mb-1\">{{'productSingle.price' | translate}}</h5>\n                        <p class=\"mb-0\"><font class=\"text-muted\">{{'productSingle.discount' | translate}}</font> -15%</p>\n                        <p class=\"common_ammount_prod\">\n                            <del>1300$</del> \n                            <font>1000$</font>\n                        </p>   \n                    </div>\n                    <hr>\n                    <div class=\"colors_wrap\">\n                        <p class=\"mb-0\"><font class=\"text-muted\">{{'productSingle.color' | translate}}</font></p>\n                        <div class=\"each_colors\" #each_colors>\n                            <span (click)=\"selectColorProds(0)\" style=\"background-color:blueviolet\"></span>\n                            <span (click)=\"selectColorProds(1)\" style=\"background-color:brown\"></span>\n                            <span (click)=\"selectColorProds(2)\" style=\"background-color:green\"></span>\n                        </div>\n                    </div>\n                    <div class=\"add_cart_wrap mt-2\">\n                        <p class=\"mb-0\"><font class=\"text-muted\">{{'productSingle.quantity' | translate}}</font></p>\n                        <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                            <div class=\"count-product-input\">\n                                <input class=\"productCount\" type=\"number\" value=\"1\">\n                                <p class=\"up-down-arrows d-flex flex-column\">\n                                    <span class=\"lnr lnr-chevron-up\" (click)=\"upCount($event)\"></span>\n                                    <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                                </p>\n                            </div>\n                            <button class=\"add-to-cart\">\n                                <span class=\"lnr lnr-cart\"></span>\n                                {{'relatedSec.addButton' | translate}}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-lg-3 col-sm-6 col-md-12\">\n                <div class=\"services_prod\">\n                    <div class=\"d-flex align-items-center\">\n                        <img src=\"./assets/img/services1.png\" alt=\"\">\n                        <div class=\"descServices\">\n                            <b class=\"d-block\">{{ 'servicePart.part1Tit' | translate }}</b>\n                            <p class=\"text-muted mb-0\">{{ 'servicePart.part1SubTit' | translate }}</p>\n                        </div>\n                    </div>\n                    <div class=\"d-flex align-items-center\">\n                        <img src=\"./assets/img/services2.png\" alt=\"\">\n                        <div class=\"descServices\">\n                            <b class=\"d-block\">{{ 'servicePart.part2Tit' | translate }}</b>\n                            <p class=\"text-muted mb-0\">{{ 'servicePart.part2SubTit' | translate }}</p>\n                        </div>\n                    </div>\n                    <div class=\"d-flex align-items-center\">\n                        <img src=\"./assets/img/services3.png\" alt=\"\">\n                        <div class=\"descServices\">\n                            <b class=\"d-block\">{{ 'servicePart.part3Tit' | translate }}</b>\n                            <p class=\"text-muted mb-0\">{{ 'servicePart.part3SubTit' | translate }}</p>\n                        </div>\n                    </div>\n                    <div class=\"d-flex align-items-center\">\n                        <img src=\"./assets/img/services4.png\" alt=\"\">\n                        <div class=\"descServices\">\n                            <b class=\"d-block\">{{ 'servicePart.part4Tit' | translate }}</b>\n                            <p class=\"text-muted mb-0\">{{ 'servicePart.part4SubTit' | translate }}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12\">\n                <div class=\"description_product\">\n                    <div class=\"header_desc\">\n                        <h3>{{ 'productSingle.description' | translate }}</h3>\n                    </div>\n                    <div class=\"desc_txt\">\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nulla metus. Maecenas commodo turpis dui, porttitor tincidunt enim mollis a. Curabitur eu velit mi. Nullam congue turpis id metus sollicitudin, id cursus nulla laoreet. Proin commodo eu felis at malesuada. Nulla ac facilisis justo, eget vulputate ex. Nulla nec laoreet nulla. Cras auctor leo at diam congue, quis convallis urna pulvinar. Nunc ut mi nulla. Nunc ligula massa, vulputate sed scelerisque sit amet, dapibus semper est. Sed sed blandit turpis. Vestibulum id porttitor ligula, at iaculis ligula. Pellentesque vel tellus sit amet mauris aliquet bibendum id et lorem.</p>\n                        \n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12\">\n                <div class=\"swiper-container swiper_related_prod\">\n                    <div class=\"swiperArrows\">\n                        <h4>{{'relatedSec.title' | translate}}</h4>\n                        <div class=\"scn-icons-cont\">\n                            <span class=\"custom-slide-button customR-prev\"><i class=\"lnr lnr-chevron-left\"></i></span>\n                            <span class=\"custom-slide-button customR-next\"><i class=\"lnr lnr-chevron-right\"></i></span>\n                        </div>\n                    </div>\n                    <div class=\"swiper-wrapper \">\n                        <div class=\"swiper-slide p-1\">\n                            <div class=\"products-fram\">\n                                <span class=\"sale-badge\">-20%</span>\n                                <a (click)=\"refresh();\" routerLink=\"/products/1\" class=\"d-block text-center\" href=\"javascript:void(0)\">\n                                    <img src=\"./assets/img/products/prod1.png\" class=\"img-fluid\" alt=\"\">\n                                    <div class=\"name-and-section\">\n                                        <p>Jewellery</p>\n                                        <p>Products 1</p>\n                                    </div>\n                                </a>\n                                <hr>\n                                <div class=\"price-and-rating d-flex justify-content-between\">\n                                    <div class=\"product-price d-flex flex-column align-items-start\">\n                                        <del class=\"text-muted\">1300$</del>\n                                        <span>1000$</span>\n                                    </div>\n                                    <div class=\"product-ratings\">\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star\"></span>\n                                        <span class=\"lnr lnr-star\"></span>\n                                    </div>\n                                </div>\n                                <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                                    <div class=\"count-product-input\">\n                                        <input class=\"productCount\" type=\"number\" value=\"1\">\n                                        <p class=\"up-down-arrows d-flex flex-column\">\n                                            <span class=\"lnr lnr-chevron-up\" (click)=\"upCount($event)\"></span>\n                                            <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                                        </p>\n                                    </div>\n                                    <button class=\"add-to-cart\">\n                                        <span class=\"lnr lnr-cart\"></span>\n                                        {{'relatedSec.addButton' | translate}}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"swiper-slide p-1\">\n                            <div class=\"products-fram\">\n                                <a (click)=\"refresh();\" routerLink=\"/products/2\" class=\"d-block text-center\" href=\"javascript:void(0)\">\n                                    <img src=\"./assets/img/products/prod2.png\" class=\"img-fluid\" alt=\"\">\n                                    <div class=\"name-and-section\">\n                                        <p> Clothes</p>\n                                        <p>Products 2</p>\n                                    </div>\n                                </a>\n                                <hr>\n                                <div class=\"price-and-rating d-flex justify-content-between\">\n                                    <div class=\"product-price d-flex flex-column align-items-start\">\n                                        <del class=\"text-muted\">1300$</del>\n                                        <span>1000$</span>\n                                    </div>\n                                    <div class=\"product-ratings\">\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star\"></span>\n                                        <span class=\"lnr lnr-star\"></span>\n                                        <span class=\"lnr lnr-star\"></span>\n                                    </div>\n                                </div>\n                                <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                                    <div class=\"count-product-input\">\n                                        <input class=\"productCount\" type=\"number\" value=\"1\">\n                                        <p class=\"up-down-arrows d-flex flex-column\">\n                                            <span class=\"lnr lnr-chevron-up\" (click)=\"upCount($event)\"></span>\n                                            <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                                        </p>\n                                    </div>\n                                    <button class=\"add-to-cart\">\n                                        <span class=\"lnr lnr-cart\"></span>\n                                        {{'relatedSec.addButton' | translate}}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"swiper-slide p-1\">\n                            <div class=\"products-fram\">\n                                <a (click)=\"refresh();\" routerLink=\"/products/3\" class=\"d-block text-center\" href=\"javascript:void(0)\">\n                                    <img src=\"./assets/img/products/prod3.png\" class=\"img-fluid\" alt=\"\">\n                                    <div class=\"name-and-section\">\n                                        <p>For Home</p>\n                                        <p>Products 3</p>\n                                    </div>\n                                </a>\n                                <hr>\n                                <div class=\"price-and-rating d-flex justify-content-between\">\n                                    <div class=\"product-price d-flex flex-column align-items-start\">\n                                        <del class=\"text-muted\">1300$</del>\n                                        <span>1000$</span>\n                                    </div>\n                                    <div class=\"product-ratings\">\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star\"></span>\n                                    </div>\n                                </div>\n                                <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                                    <div class=\"count-product-input\">\n                                        <input class=\"productCount\" type=\"number\" value=\"1\">\n                                        <p class=\"up-down-arrows d-flex flex-column\">\n                                            <span class=\"lnr lnr-chevron-up\" (click)=\"upCount($event)\"></span>\n                                            <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                                        </p>\n                                    </div>\n                                    <button class=\"add-to-cart\">\n                                        <span class=\"lnr lnr-cart\"></span>\n                                        {{'relatedSec.addButton' | translate}}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"swiper-slide p-1\">\n                            <div class=\"products-fram\">\n                                <a (click)=\"refresh();\" routerLink=\"/products/4\" class=\"d-block text-center\" href=\"javascript:void(0)\">\n                                    <img src=\"./assets/img/products/prod4.png\" class=\"img-fluid\" alt=\"\">\n                                    <div class=\"name-and-section\">\n                                        <p>Dresses</p>\n                                        <p>Products 4</p>\n                                    </div>\n                                </a>\n                                <hr>\n                                <div class=\"price-and-rating d-flex justify-content-between\">\n                                    <div class=\"product-price d-flex flex-column align-items-start\">\n                                        <del class=\"text-muted\">1300$</del>\n                                        <span>1000$</span>\n                                    </div>\n                                    <div class=\"product-ratings\">\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star\"></span>\n                                        <span class=\"lnr lnr-star\"></span>\n                                    </div>\n                                </div>\n                                <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                                    <div class=\"count-product-input\">\n                                        <input class=\"productCount\" type=\"number\" value=\"1\">\n                                        <p class=\"up-down-arrows d-flex flex-column\">\n                                            <span class=\"lnr lnr-chevron-up\" (click)=\"upCount($event)\"></span>\n                                            <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                                        </p>\n                                    </div>\n                                    <button class=\"add-to-cart\">\n                                        <span class=\"lnr lnr-cart\"></span>\n                                        {{'relatedSec.addButton' | translate}}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"swiper-slide p-1\">\n                            <div class=\"products-fram\">\n                                <a (click)=\"refresh();\" routerLink=\"/products/5\" class=\"d-block text-center\" href=\"javascript:void(0)\">\n                                    <img src=\"./assets/img/products/prod5.png\" class=\"img-fluid\" alt=\"\">\n                                    <div class=\"name-and-section\">\n                                        <p>Motors</p>\n                                        <p>Products 5</p>\n                                    </div>\n                                </a>\n                                <hr>\n                                <div class=\"price-and-rating d-flex justify-content-between\">\n                                    <div class=\"product-price d-flex flex-column align-items-start\">\n                                        <del class=\"text-muted\">1300$</del>\n                                        <span>1000$</span>\n                                    </div>\n                                    <div class=\"product-ratings\">\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                    </div>\n                                </div>\n                                <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                                    <div class=\"count-product-input\">\n                                        <input class=\"productCount\" type=\"number\" value=\"1\">\n                                        <p class=\"up-down-arrows d-flex flex-column\">\n                                            <span class=\"lnr lnr-chevron-up\" (click)=\"upCount($event)\"></span>\n                                            <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                                        </p>\n                                    </div>\n                                    <button class=\"add-to-cart\">\n                                        <span class=\"lnr lnr-cart\"></span>\n                                        {{'relatedSec.addButton' | translate}}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"swiper-slide p-1\">\n                            <div class=\"products-fram\">\n                                <a (click)=\"refresh();\" routerLink=\"/products/6\" class=\"d-block text-center\" href=\"javascript:void(0)\">\n                                    <img src=\"./assets/img/products/prod6.png\" class=\"img-fluid\" alt=\"\">\n                                    <div class=\"name-and-section\">\n                                        <p>Electronics</p>\n                                        <p>Products 6</p>\n                                    </div>\n                                </a>\n                                <hr>\n                                <div class=\"price-and-rating d-flex justify-content-between\">\n                                    <div class=\"product-price d-flex flex-column align-items-start\">\n                                        <del class=\"text-muted\">1300$</del>\n                                        <span>1000$</span>\n                                    </div>\n                                    <div class=\"product-ratings\">\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star appreciated\"></span>\n                                        <span class=\"lnr lnr-star\"></span>\n                                        <span class=\"lnr lnr-star\"></span>\n                                    </div>\n                                </div>\n                                <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                                    <div class=\"count-product-input\">\n                                        <input class=\"productCount\" type=\"number\" value=\"1\">\n                                        <p class=\"up-down-arrows d-flex flex-column\">\n                                            <span class=\"lnr lnr-chevron-up\"></span>\n                                            <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                                        </p>\n                                    </div>\n                                    <button class=\"add-to-cart\">\n                                        <span class=\"lnr lnr-cart\"></span>\n                                        {{'relatedSec.addButton' | translate}}\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/products/products.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.products-fram > a .name-and-section p:last-child {\n  color: #000;\n  font-weight: 600;\n  font-size: 24px;\n  height: 50px;\n  overflow: hidden;\n  margin-bottom: 0; }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .count-product-input input, .products-fram .add-to-cart-wrap .count-product-input input {\n  width: 100%;\n  border: 0;\n  box-shadow: 0px 0px 0px 1px #ccc;\n  border-radius: 2px;\n  padding: 3px;\n  text-align: center; }\n.products-fram .sale-badge:after {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  content: \"\";\n  left: -6px;\n  top: 11px;\n  border-radius: 50%;\n  background: #fff; }\n.products-fram .sale-badge:before {\n  top: 4px;\n  position: absolute;\n  content: \"\";\n  left: -9px;\n  width: 19px;\n  height: 19px;\n  background: linear-gradient(to bottom right, #F44336 50%, transparent 51%);\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n.products-fram .sale-badge {\n  background-color: #F44336;\n  transition: all 0.2s linear;\n  padding: 4px;\n  width: 40px;\n  position: absolute;\n  font-size: 13px;\n  color: black;\n  border-right: none;\n  text-align: center;\n  right: 0px;\n  top: 20px;\n  color: #fff;\n  z-index: 2; }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .add-to-cart, .products-fram .add-to-cart-wrap .add-to-cart {\n  background-color: #689F38;\n  color: #fff;\n  border: 0;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: .4s; }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .count-product-input .up-down-arrows span, .products-fram .add-to-cart-wrap .count-product-input .up-down-arrows span {\n  background-color: rgba(104, 159, 56, 0.52);\n  font-size: 13px;\n  padding: 2px;\n  height: 50%;\n  width: 20px;\n  text-align: center;\n  color: #fff;\n  cursor: pointer; }\n.products-fram > a .name-and-section p:first-child {\n  width: 100%;\n  height: 25px;\n  color: #787878;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-bottom: 0; }\n#products_page .top-direction {\n  margin-bottom: 20px; }\n#products_page .top-direction .dicrection-path {\n    padding: 10px;\n    background-color: #F2F2F2; }\n#products_page .top-direction .dicrection-path a {\n      text-decoration: none;\n      color: #262626;\n      position: relative; }\n#products_page .top-direction .dicrection-path a:after {\n        margin: 0 5px;\n        position: relative;\n        content: \"»\"; }\n#products_page .top-direction .dicrection-path a span {\n        margin-right: 3px; }\n#products_page .top-direction .dicrection-path span {\n      color: #616161; }\n#products_page .prodLeft .prod-slider-large {\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  padding: 10px;\n  background-color: #fff; }\n#products_page .prodLeft .prod-slider-thumb {\n  padding: 10px 4px; }\n#products_page .prodLeft .prod-slider-thumb .swiper-button-next, #products_page .prodLeft .prod-slider-thumb .swiper-button-prev {\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    width: auto;\n    height: 30px;\n    margin-top: auto;\n    z-index: 10;\n    background-image: none; }\n#products_page .prodLeft .prod-slider-thumb .swiper-button-next i, #products_page .prodLeft .prod-slider-thumb .swiper-button-prev i {\n      font-size: 23px;\n      width: 30px;\n      height: 30px;\n      background-color: #689F38;\n      color: #fff;\n      text-align: center;\n      padding: 5px; }\n#products_page .prodLeft .prod-slider-thumb .med_prod_slider_borard {\n    padding: 10px;\n    cursor: pointer;\n    background-color: #fff;\n    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n#products_page .right_prod .product_name {\n  display: inline-block;\n  position: relative; }\n#products_page .right_prod .product_name:after {\n    position: absolute;\n    left: 0;\n    bottom: -5px;\n    width: 100%;\n    height: 1px;\n    background-color: #689F38;\n    content: \"\"; }\n#products_page .right_prod .ratingStars span.appreciated {\n  color: #FBC02D; }\n#products_page .right_prod .ratingStars span {\n  font-size: 17px; }\n#products_page .right_prod .discountWrap .common_ammount_prod del {\n  color: #F44336;\n  margin-right: 15px; }\n#products_page .right_prod .discountWrap .common_ammount_prod font {\n  color: #262626;\n  font-size: 20px;\n  font-weight: bold; }\n#products_page .right_prod .colors_wrap .each_colors {\n  margin-top: 10px;\n  display: flex;\n  justify-content: flex-start; }\n#products_page .right_prod .colors_wrap .each_colors span {\n    width: 40px;\n    height: 30px;\n    border: 1px solid #ccc;\n    display: block;\n    border-radius: 3px;\n    margin: 0 4px 0 0;\n    cursor: pointer; }\n#products_page .right_prod .colors_wrap .each_colors .activeColor {\n    border: 2px solid #689F38; }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .count-product-input {\n  width: calc(50% - 5px);\n  position: relative; }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .count-product-input .up-down-arrows {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin-bottom: 0;\n    background-color: #fff;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .count-product-input .up-down-arrows span:hover {\n      background-color: rgba(104, 159, 56, 0.84); }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .add-to-cart {\n  width: calc(50% - 5px); }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .add-to-cart:hover {\n    background-color: #508c1c; }\n#products_page .services_prod > div {\n  background-color: #F2F2F2;\n  padding: 5px 10px;\n  margin: 0 0 20px; }\n#products_page .services_prod img {\n  max-width: 50px; }\n#products_page .services_prod .descServices {\n  padding-left: 15px; }\n#products_page .services_prod .descServices b {\n    color: #6F6F6F;\n    font-size: 16px;\n    margin-bottom: 7px; }\n#products_page .services_prod .descServices p {\n    font-size: 13px;\n    line-height: 15px;\n    height: 30px;\n    overflow: hidden; }\n#products_page .description_product {\n  border-radius: 3px;\n  background-color: #fff;\n  margin-top: 15px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n#products_page .description_product > div {\n    padding: 15px; }\n#products_page .description_product .header_desc {\n    box-shadow: 0px 2px 4px -3px #ccc;\n    padding: 5px 15px; }\n#products_page .swiper_related_prod .swiperArrows {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px; }\n#products_page .swiper_related_prod .swiperArrows h4 {\n    position: relative; }\n#products_page .swiper_related_prod .swiperArrows h4:after {\n      position: absolute;\n      left: 0;\n      bottom: -5px;\n      width: 100%;\n      background-color: #689F38;\n      height: 2px;\n      content: \"\"; }\n#products_page .swiper_related_prod .swiperArrows .scn-icons-cont span {\n    cursor: pointer; }\n.products-fram {\n  background-color: #fff;\n  padding: 10px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  transition: .4s;\n  position: relative; }\n.products-fram:hover {\n    -webkit-transform: scale(1.01);\n            transform: scale(1.01);\n    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n.products-fram > a {\n    text-decoration: none; }\n.products-fram > a img {\n      max-width: 95%;\n      transition: .4s; }\n.products-fram > a:hover img {\n      opacity: 0.6; }\n.products-fram > a .name-and-section {\n      padding: 10px 5px; }\n.products-fram .price-and-rating .product-price del {\n    font-size: 14px; }\n.products-fram .price-and-rating .product-price span {\n    font-size: 16px;\n    color: #F44336;\n    font-weight: 600; }\n.products-fram .price-and-rating .product-ratings span.appreciated {\n    color: #FBC02D; }\n.products-fram .price-and-rating .product-ratings span {\n    font-size: 12px;\n    cursor: pointer; }\n.products-fram .add-to-cart-wrap .count-product-input {\n    width: calc(50% - 5px);\n    position: relative; }\n.products-fram .add-to-cart-wrap .count-product-input .up-down-arrows {\n      position: absolute;\n      top: 0;\n      right: 0;\n      margin-bottom: 0;\n      background-color: #fff;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between; }\n.products-fram .add-to-cart-wrap .count-product-input .up-down-arrows span:hover {\n        background-color: rgba(104, 159, 56, 0.84); }\n.products-fram .add-to-cart-wrap .add-to-cart {\n    width: calc(50% - 5px);\n    overflow: hidden;\n    white-space: nowrap;\n    display: block;\n    text-overflow: ellipsis; }\n.products-fram .add-to-cart-wrap .add-to-cart:hover {\n      background-color: #508c1c; }\n@media (max-width: 991px) and (min-width: 768px) {\n  .services_prod {\n    margin-top: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between; }\n    .services_prod > div {\n      width: calc(50% - 10px); } }\n@media (max-width: 576px) {\n  .services_prod {\n    margin-top: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2R1Y3RzXFxwcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxnbG9iYWxTQ1NTXFxleHRlbmRzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcZnJhbS1zaG9wL3NyY1xcZ2xvYmFsU0NTU1xcZ2xvYmFsU0NTUy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQzJOakI7RUNuTkksWUFBVztFQUNYLGlCQUFlO0VBQ2YsZ0JBQWU7RUFDZixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNuQjtBRFhEO0VDYUksWUFBVztFQUNYLFVBQVM7RUFDVCxpQ0FBZ0M7RUFDaEMsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7QURxTUQ7RUNuTUksbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFXO0VBQ1gsWUFBVztFQUNYLFdBQVU7RUFDVixVQUFTO0VBQ1QsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNuQjtBRDJMRDtFQ3pMSSxTQUFRO0VBQ1IsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxXQUFVO0VBQ1YsWUFBVztFQUNYLGFBQVk7RUFDWiwyRUFBdUU7RUFDdkUsa0NBQXlCO1VBQXpCLDBCQUF5QixFQUM1QjtBRGlMRDtFQy9LSSwwQkNyQ1M7RURzQ1QsNEJBQTJCO0VBQzNCLGFBQVk7RUFDWixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFVBQVM7RUFDVCxZQUFXO0VBQ1gsV0FBVSxFQUNiO0FEdEREO0VDd0RJLDBCQzNEVTtFRDREVixZQUFXO0VBQ1gsVUFBUztFQUNULG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLGdCQUFlLEVBQ2xCO0FEOUREO0VDZ0VJLDJDQUEwQztFQUMxQyxnQkFBZTtFQUNmLGFBQVk7RUFDWixZQUFXO0VBQ1gsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsZ0JBQWUsRUFDbEI7QURnSkQ7RUM5SUksWUFBVztFQUNYLGFBQVk7RUFDWixlQUFjO0VBQ2Qsb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ25CO0FEakZEO0VBRVEsb0JBQW1CLEVBc0J0QjtBQXhCTDtJQUlZLGNBQWE7SUFDYiwwQkVKTSxFRnNCVDtBQXZCVDtNQU9nQixzQkFBcUI7TUFDckIsZUVOSDtNRk9HLG1CQUFrQixFQVNyQjtBQWxCYjtRQVdvQixjQUFZO1FBQ1osbUJBQWtCO1FBQ2xCLGFBQVksRUFDZjtBQWRqQjtRQWdCb0Isa0JBQWlCLEVBQ3BCO0FBakJqQjtNQW9CZ0IsZUVqQkgsRUZrQkE7QUFyQmI7RUE0QlksZ0hBQWtHO0VBQ2xHLGNBQWE7RUFDYix1QkFBc0IsRUFDekI7QUEvQlQ7RUFpQ1ksa0JBQWlCLEVBMEJwQjtBQTNEVDtJQW1DZ0IsT0FBTTtJQUNOLFVBQVM7SUFDVCxhQUFZO0lBQ1osWUFBVztJQUNYLGFBQVk7SUFDWixpQkFBZ0I7SUFDaEIsWUFBVztJQUNYLHVCQUFzQixFQVV6QjtBQXBEYjtNQTRDb0IsZ0JBQWU7TUFDZixZQUFXO01BQ1gsYUFBWTtNQUNaLDBCRWxETjtNRm1ETSxZQUFXO01BQ1gsbUJBQWtCO01BQ2xCLGFBQVksRUFDZjtBQW5EakI7SUFzRGdCLGNBQWE7SUFDYixnQkFBZTtJQUNmLHVCQUFzQjtJQUN0QixnSEFBa0csRUFDckc7QUExRGI7RUErRFksc0JBQXFCO0VBQ3JCLG1CQUFrQixFQVVyQjtBQTFFVDtJQWtFZ0IsbUJBQWtCO0lBQ2xCLFFBQU87SUFDUCxhQUFZO0lBQ1osWUFBVztJQUNYLFlBQVc7SUFDWCwwQkUxRUY7SUYyRUUsWUFBVyxFQUNkO0FBekViO0VBOEVnQixlRXpFQSxFRjBFSDtBQS9FYjtFQWlGZ0IsZ0JBQWUsRUFDbEI7QUFsRmI7RUF1Rm9CLGVFbkZQO0VGb0ZPLG1CQUNKLEVBQUM7QUF6RmpCO0VBMkZvQixlRXpGUDtFRjBGTyxnQkFBZTtFQUNmLGtCQUFpQixFQUNwQjtBQTlGakI7RUFtR2dCLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2IsNEJBQTBCLEVBYTdCO0FBbEhiO0lBdUdvQixZQUFXO0lBQ1gsYUFBWTtJQUNaLHVCQUFzQjtJQUN0QixlQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZSxFQUNsQjtBQTlHakI7SUFnSG9CLDBCRW5ITixFRm9IRztBQWpIakI7RUF3SG9CLHVCQUFzQjtFQUN0QixtQkFBa0IsRUFxQnJCO0FBOUlqQjtJQTJId0IsbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixTQUFRO0lBQ1IsaUJBQWdCO0lBQ2hCLHVCQUFzQjtJQUN0QixhQUFZO0lBQ1osY0FBYTtJQUNiLHVCQUFzQjtJQUN0QiwrQkFBOEIsRUFPakM7QUExSXJCO01BdUlnQywyQ0FBMEMsRUFDN0M7QUF4STdCO0VBZ0pvQix1QkFBc0IsRUFLekI7QUFySmpCO0lBbUp3QiwwQkVySk4sRUZzSkc7QUFwSnJCO0VBMkpZLDBCRTFKTTtFRjJKTixrQkFBaUI7RUFDakIsaUJBQWdCLEVBQ25CO0FBOUpUO0VBZ0tZLGdCQUFlLEVBQ2xCO0FBaktUO0VBbUtZLG1CQUFrQixFQVlyQjtBQS9LVDtJQXFLZ0IsZUFBYztJQUNkLGdCQUFlO0lBQ2YsbUJBQWtCLEVBQ3JCO0FBeEtiO0lBMEtnQixnQkFBZTtJQUNmLGtCQUFpQjtJQUNqQixhQUFZO0lBQ1osaUJBQWdCLEVBQ25CO0FBOUtiO0VBa0xRLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsaUJBQWdCO0VBQ2hCLGdIQUFrRyxFQVFyRztBQTdMTDtJQXVMWSxjQUFhLEVBQ2hCO0FBeExUO0lBMExZLGtDQUFpQztJQUNqQyxrQkFBaUIsRUFDcEI7QUE1TFQ7RUFnTVksY0FBYTtFQUNiLCtCQUE4QjtFQUM5QixjQUFhLEVBa0JoQjtBQXBOVDtJQW9NZ0IsbUJBQWtCLEVBVXJCO0FBOU1iO01Bc01vQixtQkFBa0I7TUFDbEIsUUFBTztNQUNQLGFBQVk7TUFDWixZQUFXO01BQ1gsMEJFN01OO01GOE1NLFlBQVc7TUFDWCxZQUFXLEVBQ2Q7QUE3TWpCO0lBaU5vQixnQkFBZSxFQUNsQjtBQU1qQjtFQUNJLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsZ0hBQW1HO0VBQ25HLGdCQUFlO0VBS2YsbUJBQWtCLEVBd0ZyQjtBQWpHRDtJQU1RLCtCQUFzQjtZQUF0Qix1QkFBc0I7SUFDdEIsK0dBQThHLEVBQ2pIO0FBUkw7SUEyQlEsc0JBQXFCLEVBVXhCO0FBckNMO01BcUJZLGVBQWM7TUFDZCxnQkFBZSxFQUNsQjtBQXZCVDtNQXlCWSxhQUFZLEVBQ2Y7QUExQlQ7TUE2Qlksa0JBQWlCLEVBT3BCO0FBcENUO0lBeUNnQixnQkFBZSxFQUNsQjtBQTFDYjtJQTRDZ0IsZ0JBQWU7SUFDZixlRWpRSDtJRmtRRyxpQkFBZ0IsRUFDbkI7QUEvQ2I7SUFtRGdCLGVFdFFBLEVGdVFIO0FBcERiO0lBc0RnQixnQkFBZTtJQUNmLGdCQUFlLEVBQ2xCO0FBeERiO0lBOERZLHVCQUFzQjtJQUN0QixtQkFBa0IsRUFxQnJCO0FBcEZUO01BaUVnQixtQkFBa0I7TUFDbEIsT0FBTTtNQUNOLFNBQVE7TUFDUixpQkFBZ0I7TUFDaEIsdUJBQXNCO01BQ3RCLGFBQVk7TUFDWixjQUFhO01BQ2IsdUJBQXNCO01BQ3RCLCtCQUE4QixFQU9qQztBQWhGYjtRQTZFd0IsMkNBQTBDLEVBQzdDO0FBOUVyQjtJQXNGWSx1QkFBc0I7SUFDdEIsaUJBQWdCO0lBQ2hCLG9CQUFtQjtJQUNuQixlQUFjO0lBQ2Qsd0JBQXVCLEVBSzFCO0FBL0ZUO01BNkZnQiwwQkV2VEUsRUZ3VEw7QUFJYjtFQUNJO0lBQ0ksaUJBQWdCO0lBQ2hCLGNBQWE7SUFDYixnQkFBZTtJQUNmLCtCQUE4QixFQUtqQztJQVREO01BTVEsd0JBQXVCLEVBRTFCLEVBQUE7QUFHVDtFQVhJO0lBYUksaUJBQWdCLEVBQ25CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnByb2R1Y3RzLWZyYW0gPiBhIC5uYW1lLWFuZC1zZWN0aW9uIHA6bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4jcHJvZHVjdHNfcGFnZSAucmlnaHRfcHJvZCAuYWRkX2NhcnRfd3JhcCAuYWRkLXRvLWNhcnQtd3JhcCAuY291bnQtcHJvZHVjdC1pbnB1dCBpbnB1dCwgLnByb2R1Y3RzLWZyYW0gLmFkZC10by1jYXJ0LXdyYXAgLmNvdW50LXByb2R1Y3QtaW5wdXQgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4ucHJvZHVjdHMtZnJhbSAuc2FsZS1iYWRnZTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IC02cHg7XG4gIHRvcDogMTFweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XG5cbi5wcm9kdWN0cy1mcmFtIC5zYWxlLWJhZGdlOmJlZm9yZSB7XG4gIHRvcDogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IC05cHg7XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNGNDQzMzYgNTAlLCB0cmFuc3BhcmVudCA1MSUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XG5cbi5wcm9kdWN0cy1mcmFtIC5zYWxlLWJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0NDMzNjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICBwYWRkaW5nOiA0cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMjsgfVxuXG4jcHJvZHVjdHNfcGFnZSAucmlnaHRfcHJvZCAuYWRkX2NhcnRfd3JhcCAuYWRkLXRvLWNhcnQtd3JhcCAuYWRkLXRvLWNhcnQsIC5wcm9kdWN0cy1mcmFtIC5hZGQtdG8tY2FydC13cmFwIC5hZGQtdG8tY2FydCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODlGMzg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAuNHM7IH1cblxuI3Byb2R1Y3RzX3BhZ2UgLnJpZ2h0X3Byb2QgLmFkZF9jYXJ0X3dyYXAgLmFkZC10by1jYXJ0LXdyYXAgLmNvdW50LXByb2R1Y3QtaW5wdXQgLnVwLWRvd24tYXJyb3dzIHNwYW4sIC5wcm9kdWN0cy1mcmFtIC5hZGQtdG8tY2FydC13cmFwIC5jb3VudC1wcm9kdWN0LWlucHV0IC51cC1kb3duLWFycm93cyBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDQsIDE1OSwgNTYsIDAuNTIpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLnByb2R1Y3RzLWZyYW0gPiBhIC5uYW1lLWFuZC1zZWN0aW9uIHA6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBjb2xvcjogIzc4Nzg3ODtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDA7IH1cblxuI3Byb2R1Y3RzX3BhZ2UgLnRvcC1kaXJlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG4gICNwcm9kdWN0c19wYWdlIC50b3AtZGlyZWN0aW9uIC5kaWNyZWN0aW9uLXBhdGgge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjsgfVxuICAgICNwcm9kdWN0c19wYWdlIC50b3AtZGlyZWN0aW9uIC5kaWNyZWN0aW9uLXBhdGggYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogIzI2MjYyNjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgI3Byb2R1Y3RzX3BhZ2UgLnRvcC1kaXJlY3Rpb24gLmRpY3JlY3Rpb24tcGF0aCBhOmFmdGVyIHtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb250ZW50OiBcIsK7XCI7IH1cbiAgICAgICNwcm9kdWN0c19wYWdlIC50b3AtZGlyZWN0aW9uIC5kaWNyZWN0aW9uLXBhdGggYSBzcGFuIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7IH1cbiAgICAjcHJvZHVjdHNfcGFnZSAudG9wLWRpcmVjdGlvbiAuZGljcmVjdGlvbi1wYXRoIHNwYW4ge1xuICAgICAgY29sb3I6ICM2MTYxNjE7IH1cblxuI3Byb2R1Y3RzX3BhZ2UgLnByb2RMZWZ0IC5wcm9kLXNsaWRlci1sYXJnZSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuXG4jcHJvZHVjdHNfcGFnZSAucHJvZExlZnQgLnByb2Qtc2xpZGVyLXRodW1iIHtcbiAgcGFkZGluZzogMTBweCA0cHg7IH1cbiAgI3Byb2R1Y3RzX3BhZ2UgLnByb2RMZWZ0IC5wcm9kLXNsaWRlci10aHVtYiAuc3dpcGVyLWJ1dHRvbi1uZXh0LCAjcHJvZHVjdHNfcGFnZSAucHJvZExlZnQgLnByb2Qtc2xpZGVyLXRodW1iIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IH1cbiAgICAjcHJvZHVjdHNfcGFnZSAucHJvZExlZnQgLnByb2Qtc2xpZGVyLXRodW1iIC5zd2lwZXItYnV0dG9uLW5leHQgaSwgI3Byb2R1Y3RzX3BhZ2UgLnByb2RMZWZ0IC5wcm9kLXNsaWRlci10aHVtYiAuc3dpcGVyLWJ1dHRvbi1wcmV2IGkge1xuICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5RjM4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA1cHg7IH1cbiAgI3Byb2R1Y3RzX3BhZ2UgLnByb2RMZWZ0IC5wcm9kLXNsaWRlci10aHVtYiAubWVkX3Byb2Rfc2xpZGVyX2JvcmFyZCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuI3Byb2R1Y3RzX3BhZ2UgLnJpZ2h0X3Byb2QgLnByb2R1Y3RfbmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICNwcm9kdWN0c19wYWdlIC5yaWdodF9wcm9kIC5wcm9kdWN0X25hbWU6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogLTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5RjM4O1xuICAgIGNvbnRlbnQ6IFwiXCI7IH1cblxuI3Byb2R1Y3RzX3BhZ2UgLnJpZ2h0X3Byb2QgLnJhdGluZ1N0YXJzIHNwYW4uYXBwcmVjaWF0ZWQge1xuICBjb2xvcjogI0ZCQzAyRDsgfVxuXG4jcHJvZHVjdHNfcGFnZSAucmlnaHRfcHJvZCAucmF0aW5nU3RhcnMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTdweDsgfVxuXG4jcHJvZHVjdHNfcGFnZSAucmlnaHRfcHJvZCAuZGlzY291bnRXcmFwIC5jb21tb25fYW1tb3VudF9wcm9kIGRlbCB7XG4gIGNvbG9yOiAjRjQ0MzM2O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7IH1cblxuI3Byb2R1Y3RzX3BhZ2UgLnJpZ2h0X3Byb2QgLmRpc2NvdW50V3JhcCAuY29tbW9uX2FtbW91bnRfcHJvZCBmb250IHtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuI3Byb2R1Y3RzX3BhZ2UgLnJpZ2h0X3Byb2QgLmNvbG9yc193cmFwIC5lYWNoX2NvbG9ycyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAjcHJvZHVjdHNfcGFnZSAucmlnaHRfcHJvZCAuY29sb3JzX3dyYXAgLmVhY2hfY29sb3JzIHNwYW4ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtYXJnaW46IDAgNHB4IDAgMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgI3Byb2R1Y3RzX3BhZ2UgLnJpZ2h0X3Byb2QgLmNvbG9yc193cmFwIC5lYWNoX2NvbG9ycyAuYWN0aXZlQ29sb3Ige1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2ODlGMzg7IH1cblxuI3Byb2R1Y3RzX3BhZ2UgLnJpZ2h0X3Byb2QgLmFkZF9jYXJ0X3dyYXAgLmFkZC10by1jYXJ0LXdyYXAgLmNvdW50LXByb2R1Y3QtaW5wdXQge1xuICB3aWR0aDogY2FsYyg1MCUgLSA1cHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgI3Byb2R1Y3RzX3BhZ2UgLnJpZ2h0X3Byb2QgLmFkZF9jYXJ0X3dyYXAgLmFkZC10by1jYXJ0LXdyYXAgLmNvdW50LXByb2R1Y3QtaW5wdXQgLnVwLWRvd24tYXJyb3dzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAgICNwcm9kdWN0c19wYWdlIC5yaWdodF9wcm9kIC5hZGRfY2FydF93cmFwIC5hZGQtdG8tY2FydC13cmFwIC5jb3VudC1wcm9kdWN0LWlucHV0IC51cC1kb3duLWFycm93cyBzcGFuOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxNTksIDU2LCAwLjg0KTsgfVxuXG4jcHJvZHVjdHNfcGFnZSAucmlnaHRfcHJvZCAuYWRkX2NhcnRfd3JhcCAuYWRkLXRvLWNhcnQtd3JhcCAuYWRkLXRvLWNhcnQge1xuICB3aWR0aDogY2FsYyg1MCUgLSA1cHgpOyB9XG4gICNwcm9kdWN0c19wYWdlIC5yaWdodF9wcm9kIC5hZGRfY2FydF93cmFwIC5hZGQtdG8tY2FydC13cmFwIC5hZGQtdG8tY2FydDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwOGMxYzsgfVxuXG4jcHJvZHVjdHNfcGFnZSAuc2VydmljZXNfcHJvZCA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW46IDAgMCAyMHB4OyB9XG5cbiNwcm9kdWN0c19wYWdlIC5zZXJ2aWNlc19wcm9kIGltZyB7XG4gIG1heC13aWR0aDogNTBweDsgfVxuXG4jcHJvZHVjdHNfcGFnZSAuc2VydmljZXNfcHJvZCAuZGVzY1NlcnZpY2VzIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4OyB9XG4gICNwcm9kdWN0c19wYWdlIC5zZXJ2aWNlc19wcm9kIC5kZXNjU2VydmljZXMgYiB7XG4gICAgY29sb3I6ICM2RjZGNkY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDdweDsgfVxuICAjcHJvZHVjdHNfcGFnZSAuc2VydmljZXNfcHJvZCAuZGVzY1NlcnZpY2VzIHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4jcHJvZHVjdHNfcGFnZSAuZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG4gICNwcm9kdWN0c19wYWdlIC5kZXNjcmlwdGlvbl9wcm9kdWN0ID4gZGl2IHtcbiAgICBwYWRkaW5nOiAxNXB4OyB9XG4gICNwcm9kdWN0c19wYWdlIC5kZXNjcmlwdGlvbl9wcm9kdWN0IC5oZWFkZXJfZGVzYyB7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTNweCAjY2NjO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4OyB9XG5cbiNwcm9kdWN0c19wYWdlIC5zd2lwZXJfcmVsYXRlZF9wcm9kIC5zd2lwZXJBcnJvd3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHg7IH1cbiAgI3Byb2R1Y3RzX3BhZ2UgLnN3aXBlcl9yZWxhdGVkX3Byb2QgLnN3aXBlckFycm93cyBoNCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgI3Byb2R1Y3RzX3BhZ2UgLnN3aXBlcl9yZWxhdGVkX3Byb2QgLnN3aXBlckFycm93cyBoNDphZnRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYm90dG9tOiAtNXB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5RjM4O1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBjb250ZW50OiBcIlwiOyB9XG4gICNwcm9kdWN0c19wYWdlIC5zd2lwZXJfcmVsYXRlZF9wcm9kIC5zd2lwZXJBcnJvd3MgLnNjbi1pY29ucy1jb250IHNwYW4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4ucHJvZHVjdHMtZnJhbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgdHJhbnNpdGlvbjogLjRzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLnByb2R1Y3RzLWZyYW06aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cbiAgLnByb2R1Y3RzLWZyYW0gPiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgICAucHJvZHVjdHMtZnJhbSA+IGEgaW1nIHtcbiAgICAgIG1heC13aWR0aDogOTUlO1xuICAgICAgdHJhbnNpdGlvbjogLjRzOyB9XG4gICAgLnByb2R1Y3RzLWZyYW0gPiBhOmhvdmVyIGltZyB7XG4gICAgICBvcGFjaXR5OiAwLjY7IH1cbiAgICAucHJvZHVjdHMtZnJhbSA+IGEgLm5hbWUtYW5kLXNlY3Rpb24ge1xuICAgICAgcGFkZGluZzogMTBweCA1cHg7IH1cbiAgLnByb2R1Y3RzLWZyYW0gLnByaWNlLWFuZC1yYXRpbmcgLnByb2R1Y3QtcHJpY2UgZGVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7IH1cbiAgLnByb2R1Y3RzLWZyYW0gLnByaWNlLWFuZC1yYXRpbmcgLnByb2R1Y3QtcHJpY2Ugc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjRjQ0MzM2O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgLnByb2R1Y3RzLWZyYW0gLnByaWNlLWFuZC1yYXRpbmcgLnByb2R1Y3QtcmF0aW5ncyBzcGFuLmFwcHJlY2lhdGVkIHtcbiAgICBjb2xvcjogI0ZCQzAyRDsgfVxuICAucHJvZHVjdHMtZnJhbSAucHJpY2UtYW5kLXJhdGluZyAucHJvZHVjdC1yYXRpbmdzIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLnByb2R1Y3RzLWZyYW0gLmFkZC10by1jYXJ0LXdyYXAgLmNvdW50LXByb2R1Y3QtaW5wdXQge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDVweCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLnByb2R1Y3RzLWZyYW0gLmFkZC10by1jYXJ0LXdyYXAgLmNvdW50LXByb2R1Y3QtaW5wdXQgLnVwLWRvd24tYXJyb3dzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAgICAgLnByb2R1Y3RzLWZyYW0gLmFkZC10by1jYXJ0LXdyYXAgLmNvdW50LXByb2R1Y3QtaW5wdXQgLnVwLWRvd24tYXJyb3dzIHNwYW46aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNCwgMTU5LCA1NiwgMC44NCk7IH1cbiAgLnByb2R1Y3RzLWZyYW0gLmFkZC10by1jYXJ0LXdyYXAgLmFkZC10by1jYXJ0IHtcbiAgICB3aWR0aDogY2FsYyg1MCUgLSA1cHgpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgIC5wcm9kdWN0cy1mcmFtIC5hZGQtdG8tY2FydC13cmFwIC5hZGQtdG8tY2FydDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA4YzFjOyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zZXJ2aWNlc19wcm9kIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAgIC5zZXJ2aWNlc19wcm9kID4gZGl2IHtcbiAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpOyB9IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zZXJ2aWNlc19wcm9kIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyB9IH1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL2dsb2JhbFNDU1MvZXh0ZW5kcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2dsb2JhbFNDU1MvZ2xvYmFsU0NTUyc7XHJcblxyXG4jcHJvZHVjdHNfcGFnZXtcclxuICAgIC50b3AtZGlyZWN0aW9ueyBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIC5kaWNyZWN0aW9uLXBhdGh7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoaWdoV2F5Qkc7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRhcms7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIDVweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLCu1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9kTGVmdHtcclxuICAgICAgICBcclxuICAgICAgICAucHJvZC1zbGlkZXItbGFyZ2V7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6MCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZC1zbGlkZXItdGh1bWJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNHB4O1xyXG4gICAgICAgICAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0LCAuc3dpcGVyLWJ1dHRvbi1wcmV2e1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tZWRfcHJvZF9zbGlkZXJfYm9yYXJke1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OjAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJpZ2h0X3Byb2R7XHJcbiAgICAgICAgLnByb2R1Y3RfbmFtZXtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJhdGluZ1N0YXJze1xyXG5cclxuICAgICAgICAgICAgc3Bhbi5hcHByZWNpYXRlZHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkeWVsbG93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpc2NvdW50V3JhcHtcclxuICAgICAgICAgICAgLmNvbW1vbl9hbW1vdW50X3Byb2R7XHJcbiAgICAgICAgICAgICAgICBkZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb250e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFyaztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbG9yc193cmFwe1xyXG4gICAgICAgICAgICAuZWFjaF9jb2xvcnN7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDRweCAwIDAgO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAuYWN0aXZlQ29sb3J7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hZGRfY2FydF93cmFwe1xyXG4gICAgICAgICAgICAuYWRkLXRvLWNhcnQtd3JhcHtcclxuXHJcbiAgICAgICAgICAgICAgICAuY291bnQtcHJvZHVjdC1pbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA1cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAudXAtZG93bi1hcnJvd3N7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVleHRlbmQtcHJvZHVjdC1iYWRnZS1pbnB1dC1hcnJvd3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxNTksIDU2LCAwLjg0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZXh0ZW5kLXByb2R1Y3QtYmFkZ2UtaW5wdXQtY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFkZC10by1jYXJ0e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDVweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZXh0ZW5kLXByb2R1Y3QtYmFkZ2UtYWRkLWJ1dHRvbjtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW5EYXJrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZXJ2aWNlc19wcm9ke1xyXG4gICAgICAgID4gZGl2e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGlnaFdheUJHO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXNjU2VydmljZXN7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgYntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNkY2RjZGO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGVzY3JpcHRpb25fcHJvZHVjdHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6MCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgICAgID4gZGl2e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGVyX2Rlc2N7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0zcHggI2NjYztcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN3aXBlcl9yZWxhdGVkX3Byb2R7XHJcbiAgICAgICAgLnN3aXBlckFycm93cyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2NuLWljb25zLWNvbnR7XHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4ucHJvZHVjdHMtZnJhbXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgfVxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLnNhbGUtYmFkZ2V7XHJcbiAgICAgICAgQGV4dGVuZCAlZXh0ZW5kLXByb2R1Y3QtYmFkZ2Utc2FsZTtcclxuICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgQGV4dGVuZCAlZXh0ZW5kLXByb2R1Y3QtYmFkZ2Utc2FsZS1iZWZvcmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBAZXh0ZW5kICVleHRlbmQtcHJvZHVjdC1iYWRnZS1zYWxlLWFmdGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgID5he1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciBpbWd7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIC5uYW1lLWFuZC1zZWN0aW9ue1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgICAgICAgICAgcDpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJWV4dGVuZC1wcm9kdWN0LWJhZGdlLWZpcnN0LXRpdGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHA6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgICVleHRlbmQtcHJvZHVjdC1iYWRnZS1zZWNvbmQtdGl0bGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJpY2UtYW5kLXJhdGluZ3tcclxuICAgICAgICAucHJvZHVjdC1wcmljZXtcclxuICAgICAgICAgICAgZGVse1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHJlZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3QtcmF0aW5nc3tcclxuICAgICAgICAgICAgc3Bhbi5hcHByZWNpYXRlZHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkeWVsbG93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWRkLXRvLWNhcnQtd3JhcHtcclxuICAgICAgICBcclxuICAgICAgICAuY291bnQtcHJvZHVjdC1pbnB1dHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNXB4KTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAudXAtZG93bi1hcnJvd3N7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWV4dGVuZC1wcm9kdWN0LWJhZGdlLWlucHV0LWFycm93cztcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNCwgMTU5LCA1NiwgMC44NCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAlZXh0ZW5kLXByb2R1Y3QtYmFkZ2UtaW5wdXQtY291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmFkZC10by1jYXJ0e1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA1cHgpO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIEBleHRlbmQgJWV4dGVuZC1wcm9kdWN0LWJhZGdlLWFkZC1idXR0b247XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW5EYXJrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAjeyRtZC1kZXZpY2V9e1xyXG4gICAgLnNlcnZpY2VzX3Byb2R7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgPiBkaXZ7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhICN7JGNvbH17XHJcbiAgICAuc2VydmljZXNfcHJvZHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG59IiwiQGltcG9ydCAnLi9nbG9iYWxTQ1NTJztcclxuXHJcbiVleHRlbmQtZmxleC1kZWZhdWx0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiVleHRlbmQtcHJvZHVjdC1iYWRnZS1zZWNvbmQtdGl0bGV7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4lZXh0ZW5kLXByb2R1Y3QtYmFkZ2UtaW5wdXQtY291bnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiVleHRlbmQtcHJvZHVjdC1iYWRnZS1zYWxlLWFmdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGxlZnQ6IC02cHg7XHJcbiAgICB0b3A6IDExcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbiVleHRlbmQtcHJvZHVjdC1iYWRnZS1zYWxlLWJlZm9yZXtcclxuICAgIHRvcDogNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGxlZnQ6IC05cHg7XHJcbiAgICB3aWR0aDogMTlweDtcclxuICAgIGhlaWdodDogMTlweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRyZWQgNTAlLCB0cmFuc3BhcmVudCA1MSUpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG4lZXh0ZW5kLXByb2R1Y3QtYmFkZ2Utc2FsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuJWV4dGVuZC1wcm9kdWN0LWJhZGdlLWFkZC1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IC40cztcclxufVxyXG4lZXh0ZW5kLXByb2R1Y3QtYmFkZ2UtaW5wdXQtYXJyb3dze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDQsIDE1OSwgNTYsIDAuNTIpO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiVleHRlbmQtcHJvZHVjdC1iYWRnZS1maXJzdC10aXRsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgY29sb3I6ICM3ODc4Nzg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufSIsIiRncmVlbjojNjg5RjM4O1xyXG4kZ3JlZW5EYXJrOiM1MDhjMWM7XHJcbiRncmVlblJHQkE6IzY4OWYzODhjO1xyXG4kZGlzYWJsZWRCdXR0b246IzliYTI5NTtcclxuJGhpZ2hXYXlCRzojRjJGMkYyO1xyXG4kZGFyazojMjYyNjI2O1xyXG4kZ3JleTojNjE2MTYxO1xyXG4kcmVkOiAjRjQ0MzM2O1xyXG4keWVsbG93OiAjRkJDMDJEO1xyXG5cclxuJGNvbDogXCIobWF4LXdpZHRoOiA1NzZweClcIjtcclxuJHNtLWRldmljZU1heDogXCIobWF4LXdpZHRoOiA3NjdweClcIjtcclxuJHNtLWRldmljZTogXCIobWF4LXdpZHRoOiA3NjdweCkgYW5kIChtaW4td2lkdGg6NTc3cHgpXCI7XHJcbiRtZC1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogOTkxcHgpXCI7XHJcbiRtZC1kZXZpY2U6IFwiKG1heC13aWR0aDogOTkxcHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KVwiO1xyXG4kbGctZGV2aWNlOiBcIihtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6OTkycHgpXCI7XHJcbiR4bC1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogMTIwMHB4KVwiO1xyXG4keGwtZGV2aWNlOiBcIihtaW4td2lkdGg6IDEyMDFweClcIjsiXX0= */"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _home_page_shop_badges_shop_badges_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home-page/shop-badges/shop-badges.component */ "./src/app/components/home-page/shop-badges/shop-badges.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(location, router) {
        this.location = location;
        this.router = router;
        this.shopBadgesComponent = new _home_page_shop_badges_shop_badges_component__WEBPACK_IMPORTED_MODULE_3__["ShopBadgesComponent"]();
        this.galleryComponent = new _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]();
    }
    ProductsComponent.prototype.goSmooth = function () {
        // document scroll to 0
        try {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
        catch (e) {
            console.log(e);
        }
        // ______________________
    };
    ProductsComponent.prototype.image_zoom = function () {
        this.imgBoxZoom.forEach(function (elem) {
            $(elem.nativeElement).imgZoom({
                boxWidth: 300,
                boxHeight: 300,
                marginLeft: 5,
                origin: 'data-origin'
            });
        });
    };
    ProductsComponent.prototype.refresh = function () {
        var _this = this;
        setTimeout(function () { return _this.goSmooth(); }, 100);
        // location.reload();
    };
    ProductsComponent.prototype.ngAfterViewInit = function () {
        this.image_zoom();
    };
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.goSmooth(); }, 100);
        var related_slider = new Swiper('.swiper_related_prod', {
            paginationClickable: true,
            slidesPerView: 5,
            prevButton: '.customR-prev',
            nextButton: '.customR-next',
            spaceBetween: 15,
            autoHeight: true,
            breakpoints: {
                480: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 4
                }
            }
        });
        var largeSlider = new Swiper('.prod-slider-large', {
            paginationClickable: true,
            spaceBetween: 15,
            autoHeight: true
        });
        var thumbSlider = new Swiper('.prod-slider-thumb', {
            paginationClickable: true,
            nextButton: '.thumb-arrow-right',
            prevButton: '.thumb-arrow-left',
            spaceBetween: 10,
            slidesPerView: 4,
            autoHeight: true,
            breakpoints: {
                480: {
                    slidesPerView: 3
                },
                767: {
                    slidesPerView: 3
                },
                991: {
                    slidesPerView: 4
                }
            }
        });
        // related
        // customR = new Swiper('.swiper-customR', {
        //     paginationClickable: true,
        //     slidesPerView: 5,
        //     prevButton: '.customR-prev',
        //     nextButton: '.customR-next',
        //     spaceBetween: 15,
        //     autoHeight: true,
        // });
        Array.from(document.querySelectorAll('.swipe-slide-to')).forEach(function (element) {
            element.onclick = function () {
                var index = element.getAttribute('data-slide-to');
                largeSlider.slideTo(index, 500);
            };
        });
    };
    ProductsComponent.prototype.selectColorProds = function (index) {
        if (document.querySelector('.activeColor')) {
            document.querySelector('.activeColor').classList.remove('activeColor');
        }
        this.each_colors.nativeElement.children[index].classList.add('activeColor');
    };
    ProductsComponent.prototype.upCount = function (event) {
        this.galleryComponent.findElement(this.shopBadgesComponent.getParent(event.target, "count-product-input"), 'input')[0].value++;
    };
    ProductsComponent.prototype.downCount = function (event) {
        if (this.galleryComponent.findElement(this.shopBadgesComponent.getParent(event.target, "count-product-input"), 'input')[0].value > 1) {
            this.galleryComponent.findElement(this.shopBadgesComponent.getParent(event.target, "count-product-input"), 'input')[0].value--;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('imgBoxZoom'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], ProductsComponent.prototype, "imgBoxZoom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('each_colors'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProductsComponent.prototype, "each_colors", void 0);
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/components/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/reset-password/reset-password.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/reset-password/reset-password.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container resetPassWrap mt-4\">\n    <h3>{{'resetPass.title' | translate}}</h3>\n    <form action=\"\" id=\"resetPass\" (submit)=\"resetPassSubmit(resetPass); resetPass.reset()\" #resetPass=\"ngForm\">\n        <label for=\"\">{{'resetPass.emailTit' | translate}}</label>\n        <input class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" id=\"emailReset\" [(ngModel)]=\"resetForm.emailReset\" ngModel\n            #emailref=\"ngModel\" required name=\"email\">\n        <div [hidden]=\"!emailref.errors?.pattern\" *ngIf=\"emailref.errors &&(emailref.touched || emailref.dirty)\" class=\" mt-2 alert alert-danger w-100\">\n            <div style=\"font-size:12px\">\n                {{'header.regForm.wrongEmailMsg' | translate}}\n            </div>\n        </div>\n        <label for=\"\" class=\"mt-3\">{{'resetPass.newPassTit' | translate}}</label>\n        <input class=\"form-control\" type=\"password\" name=\"passwordReset\" [(ngModel)]=\"resetForm.passwordReset\" required>\n        <button type=\"submit\" [disabled]='!resetPass.valid' class=\"resetButton\">Save</button>   \n    </form>\n</div>\n<div class=\"toastReset\" [(ngStyle)]=\"toastShow\">\n    {{'resetPass.checkEmail' | translate}}\n</div>"

/***/ }),

/***/ "./src/app/components/reset-password/reset-password.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/reset-password/reset-password.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resetPassWrap {\n  background-color: #F2F2F2;\n  border-radius: 2px;\n  padding: 15px; }\n  .resetPassWrap #resetPass .resetButton {\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n    background-color: #689F38;\n    border: 1px solid #689F38;\n    margin: 10px 0;\n    padding: 0px 10px;\n    border-radius: 2px;\n    cursor: pointer;\n    color: #fff;\n    margin-left: auto;\n    display: block; }\n  .toastReset {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  position: fixed;\n  top: -30px;\n  background-color: #fff;\n  z-index: 2222;\n  padding: 10px 20px;\n  border-radius: 2px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  transition: .5s;\n  opacity: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNldC1wYXNzd29yZC9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlc2V0LXBhc3N3b3JkXFxyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXNldC1wYXNzd29yZC9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxnbG9iYWxTQ1NTXFxnbG9iYWxTQ1NTLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwwQkNFYztFRERkLG1CQUFrQjtFQUNsQixjQUFhLEVBZWhCO0VBbEJEO0lBTVksZ0hBQStHO0lBQy9HLDBCQ1JFO0lEU0YsMEJDVEU7SURVRixlQUFjO0lBQ2Qsa0JBQWlCO0lBQ2pCLG1CQUFrQjtJQUNsQixnQkFBZTtJQUNmLFlBQVc7SUFDWCxrQkFBaUI7SUFDakIsZUFBYyxFQUNqQjtFQUdUO0VBQ0ksZ0hBQStHO0VBQy9HLGdCQUFlO0VBQ2YsV0FBVTtFQUNWLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsU0FBUTtFQUNSLGFBQVk7RUFDWiwyQkFBa0I7RUFBbEIsd0JBQWtCO0VBQWxCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixXQUFVLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vZ2xvYmFsU0NTUy9nbG9iYWxTQ1NTLnNjc3MnO1xyXG4ucmVzZXRQYXNzV3JhcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRoaWdoV2F5Qkc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgI3Jlc2V0UGFzc3tcclxuICAgICAgICAucmVzZXRCdXR0b257XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcbn1cclxuLnRvYXN0UmVzZXQge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAtMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB6LWluZGV4OiAyMjIyO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgb3BhY2l0eTogMDtcclxufSIsIiRncmVlbjojNjg5RjM4O1xyXG4kZ3JlZW5EYXJrOiM1MDhjMWM7XHJcbiRncmVlblJHQkE6IzY4OWYzODhjO1xyXG4kZGlzYWJsZWRCdXR0b246IzliYTI5NTtcclxuJGhpZ2hXYXlCRzojRjJGMkYyO1xyXG4kZGFyazojMjYyNjI2O1xyXG4kZ3JleTojNjE2MTYxO1xyXG4kcmVkOiAjRjQ0MzM2O1xyXG4keWVsbG93OiAjRkJDMDJEO1xyXG5cclxuJGNvbDogXCIobWF4LXdpZHRoOiA1NzZweClcIjtcclxuJHNtLWRldmljZU1heDogXCIobWF4LXdpZHRoOiA3NjdweClcIjtcclxuJHNtLWRldmljZTogXCIobWF4LXdpZHRoOiA3NjdweCkgYW5kIChtaW4td2lkdGg6NTc3cHgpXCI7XHJcbiRtZC1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogOTkxcHgpXCI7XHJcbiRtZC1kZXZpY2U6IFwiKG1heC13aWR0aDogOTkxcHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KVwiO1xyXG4kbGctZGV2aWNlOiBcIihtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6OTkycHgpXCI7XHJcbiR4bC1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogMTIwMHB4KVwiO1xyXG4keGwtZGV2aWNlOiBcIihtaW4td2lkdGg6IDEyMDFweClcIjsiXX0= */"

/***/ }),

/***/ "./src/app/components/reset-password/reset-password.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/reset-password/reset-password.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent() {
        this.toastShow = {};
        this.resetForm = {
            emailReset: '',
            passwordReset: ''
        };
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent.prototype.resetPassSubmit = function (value) {
        var _this = this;
        Object.assign(this.toastShow, {
            top: '20px',
            opacity: '1'
        });
        setTimeout(function () {
            Object.assign(_this.toastShow, {
                opacity: '0'
            });
        }, 4000);
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/components/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/components/reset-password/reset-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/categories/categories.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/shop/categories/categories.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n    <h4 class=\"cat_header\">{{'shop.categories' | translate}}</h4>\n    <ul type=\"none\" class=\"categories_wrap\">\n        <li>\n            <a href=\"javascript:void(0)\" [class.active_categories]=\"isActiveCategory('header.navBar.button2.childrens.button2_1' | translate)\" routerLink=\"/shop\" fragment=\"{{'header.navBar.button2.childrens.button2_1' | translate}}\">\n                {{'header.navBar.button2.childrens.button2_1' | translate}}\n            </a>\n        </li>\n        <li>\n            <a href=\"javascript:void(0)\" [class.active_categories]=\"isActiveCategory('header.navBar.button2.childrens.button2_2' | translate)\" routerLink=\"/shop\" fragment=\"{{'header.navBar.button2.childrens.button2_2' | translate}}\">\n                {{'header.navBar.button2.childrens.button2_2' | translate}}\n            </a>\n        </li>\n        <li>\n            <a href=\"javascript:void(0)\" [class.active_categories]=\"isActiveCategory('header.navBar.button2.childrens.button2_3' | translate)\" routerLink=\"/shop\" fragment=\"{{'header.navBar.button2.childrens.button2_3' | translate}}\">\n                {{'header.navBar.button2.childrens.button2_3' | translate}}\n            </a>\n        </li>\n        <li>\n            <a href=\"javascript:void(0)\" [class.active_categories]=\"isActiveCategory('header.navBar.button2.childrens.button2_4' | translate)\" routerLink=\"/shop\" fragment=\"{{'header.navBar.button2.childrens.button2_4' | translate}}\">\n                {{'header.navBar.button2.childrens.button2_4' | translate}}\n            </a>\n        </li>\n        <li>\n            <a href=\"javascript:void(0)\" [class.active_categories]=\"isActiveCategory('header.navBar.button2.childrens.button2_5' | translate)\" routerLink=\"/shop\" fragment=\"{{'header.navBar.button2.childrens.button2_5' | translate}}\">\n                {{'header.navBar.button2.childrens.button2_5' | translate}}\n            </a>\n        </li>\n        <li>\n            <a href=\"javascript:void(0)\" [class.active_categories]=\"isActiveCategory('header.navBar.button2.childrens.button2_6' | translate)\" routerLink=\"/shop\" fragment=\"{{'header.navBar.button2.childrens.button2_6' | translate}}\">\n                {{'header.navBar.button2.childrens.button2_6' | translate}}\n            </a>\n        </li>\n    </ul>  \n</ng-container>"

/***/ }),

/***/ "./src/app/components/shop/categories/categories.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/shop/categories/categories.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cat_header {\n  background-color: #689F38;\n  color: #fff;\n  padding: 10px; }\n\n.categories_wrap {\n  padding-left: 20px;\n  padding-bottom: 10px; }\n\n.categories_wrap li a {\n    padding: 5px;\n    display: block;\n    text-decoration: none;\n    color: #262626;\n    transition: .4s; }\n\n.categories_wrap li a:hover {\n      color: #fff;\n      background-color: #689f388c; }\n\n.categories_wrap li .active_categories {\n    color: #fff;\n    background-color: #689f388c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL2NhdGVnb3JpZXMvQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcZnJhbS1zaG9wL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaG9wXFxjYXRlZ29yaWVzXFxjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Nob3AvY2F0ZWdvcmllcy9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxnbG9iYWxTQ1NTXFxnbG9iYWxTQ1NTLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSwwQkNKVTtFREtWLFlBQVc7RUFDWCxjQUFhLEVBQ2hCOztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLHFCQUFvQixFQWtCdkI7O0FBcEJEO0lBS1ksYUFBWTtJQUNaLGVBQWM7SUFDZCxzQkFBcUI7SUFDckIsZUNYQztJRFlELGdCQUFlLEVBS2xCOztBQWRUO01BV2dCLFlBQVc7TUFDWCw0QkNsQkksRURtQlA7O0FBYmI7SUFnQlksWUFBVztJQUNYLDRCQ3ZCUSxFRHdCWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9nbG9iYWxTQ1NTL2V4dGVuZHMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9nbG9iYWxTQ1NTL2dsb2JhbFNDU1MnO1xyXG5cclxuLmNhdF9oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmNhdGVnb3JpZXNfd3JhcHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgbGl7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogJGRhcms7IFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlblJHQkFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlX2NhdGVnb3JpZXN7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW5SR0JBXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJGdyZWVuOiM2ODlGMzg7XHJcbiRncmVlbkRhcms6IzUwOGMxYztcclxuJGdyZWVuUkdCQTojNjg5ZjM4OGM7XHJcbiRkaXNhYmxlZEJ1dHRvbjojOWJhMjk1O1xyXG4kaGlnaFdheUJHOiNGMkYyRjI7XHJcbiRkYXJrOiMyNjI2MjY7XHJcbiRncmV5OiM2MTYxNjE7XHJcbiRyZWQ6ICNGNDQzMzY7XHJcbiR5ZWxsb3c6ICNGQkMwMkQ7XHJcblxyXG4kY29sOiBcIihtYXgtd2lkdGg6IDU3NnB4KVwiO1xyXG4kc20tZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDc2N3B4KVwiO1xyXG4kc20tZGV2aWNlOiBcIihtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG1pbi13aWR0aDo1NzdweClcIjtcclxuJG1kLWRldmljZU1heDogXCIobWF4LXdpZHRoOiA5OTFweClcIjtcclxuJG1kLWRldmljZTogXCIobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6NzY4cHgpXCI7XHJcbiRsZy1kZXZpY2U6IFwiKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDo5OTJweClcIjtcclxuJHhsLWRldmljZU1heDogXCIobWF4LXdpZHRoOiAxMjAwcHgpXCI7XHJcbiR4bC1kZXZpY2U6IFwiKG1pbi13aWR0aDogMTIwMXB4KVwiOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/shop/categories/categories.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/shop/categories/categories.component.ts ***!
  \********************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(location, router, currentRouter) {
        var _this = this;
        this.location = location;
        this.router = router;
        this.currentRouter = currentRouter;
        this.pathOfCategories = "";
        this.changePath = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        currentRouter.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // Hide loading indicator
                _this.changePath.emit(event.url.split("#")[event.url.split("#").length - 1].replace(/%20/g, ' '));
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                // Hide loading indicator
                console.log("error");
            }
        });
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent.prototype.isActiveCategory = function (routerParam) {
        return routerParam == this.router.snapshot.fragment;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoriesComponent.prototype, "changePath", void 0);
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/components/shop/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/components/shop/categories/categories.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/filter/price/price.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/shop/filter/price/price.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n    <div class=\"price_component\">\n        <h5>{{'shop.price' | translate}}</h5>\n        <div class=\"custom-slider\">\n            <ng5-slider (valueChange)=\"getAllValue(minValue, maxValue)\" [(value)]=\"minValue\" [(highValue)]=\"maxValue\" [options]=\"options\"></ng5-slider>\n        </div>\n    </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/shop/filter/price/price.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/shop/filter/price/price.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".price_component {\n  padding: 7px 20px;\n  background-color: #fff;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n  .price_component h5 {\n    color: #616161; }\n  .price_component ::ng-deep .custom-slider .ng5-slider .ng5-slider-selection {\n    background: #689F38 !important; }\n  .price_component ::ng-deep .custom-slider .ng5-slider .ng5-slider-pointer {\n    background-color: #689F38 !important;\n    width: 25px !important;\n    height: 25px !important;\n    top: -11px !important;\n    outline: none !important; }\n  .price_component ::ng-deep .custom-slider .ng5-slider .ng5-slider-pointer:after {\n      top: 9px !important;\n      left: 9px !important; }\n  .price_component ::ng-deep .custom-slider .ng5-slider .ng5-slider-bubble {\n    font-size: 13px !important; }\n  .price_component ::ng-deep .custom-slider .ng5-slider .ng5-slider-limit {\n    font-size: 15px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL2ZpbHRlci9wcmljZS9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNob3BcXGZpbHRlclxccHJpY2VcXHByaWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Nob3AvZmlsdGVyL3ByaWNlL0M6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXGZyYW0tc2hvcC9zcmNcXGdsb2JhbFNDU1NcXGdsb2JhbFNDU1Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFpQjtFQUNqQix1QkFBc0I7RUFDdEIsZ0hBQStHLEVBOEJsSDtFQWpDRDtJQUtRLGVDREssRURFUjtFQU5MO0lBV29CLCtCQUE2QixFQUNoQztFQVpqQjtJQWNvQixxQ0FBbUM7SUFDbkMsdUJBQXNCO0lBQ3RCLHdCQUF1QjtJQUN2QixzQkFBcUI7SUFDckIseUJBQXdCLEVBSzNCO0VBdkJqQjtNQW9Cd0Isb0JBQW1CO01BQ25CLHFCQUFvQixFQUN2QjtFQXRCckI7SUF5Qm9CLDJCQUF5QixFQUM1QjtFQTFCakI7SUE0Qm9CLDJCQUF5QixFQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9maWx0ZXIvcHJpY2UvcHJpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9nbG9iYWxTQ1NTL2V4dGVuZHMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9nbG9iYWxTQ1NTL2dsb2JhbFNDU1MnO1xyXG4ucHJpY2VfY29tcG9uZW50e1xyXG4gICAgcGFkZGluZzogN3B4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgaDV7XHJcbiAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgICAgICAuY3VzdG9tLXNsaWRlciB7XHJcbiAgICAgICAgICAgIC5uZzUtc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgIC5uZzUtc2xpZGVyLXNlbGVjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyZWVuICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmc1LXNsaWRlci1wb2ludGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDlweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmc1LXNsaWRlci1idWJibGV7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uZzUtc2xpZGVyLWxpbWl0e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJGdyZWVuOiM2ODlGMzg7XHJcbiRncmVlbkRhcms6IzUwOGMxYztcclxuJGdyZWVuUkdCQTojNjg5ZjM4OGM7XHJcbiRkaXNhYmxlZEJ1dHRvbjojOWJhMjk1O1xyXG4kaGlnaFdheUJHOiNGMkYyRjI7XHJcbiRkYXJrOiMyNjI2MjY7XHJcbiRncmV5OiM2MTYxNjE7XHJcbiRyZWQ6ICNGNDQzMzY7XHJcbiR5ZWxsb3c6ICNGQkMwMkQ7XHJcblxyXG4kY29sOiBcIihtYXgtd2lkdGg6IDU3NnB4KVwiO1xyXG4kc20tZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDc2N3B4KVwiO1xyXG4kc20tZGV2aWNlOiBcIihtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG1pbi13aWR0aDo1NzdweClcIjtcclxuJG1kLWRldmljZU1heDogXCIobWF4LXdpZHRoOiA5OTFweClcIjtcclxuJG1kLWRldmljZTogXCIobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6NzY4cHgpXCI7XHJcbiRsZy1kZXZpY2U6IFwiKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDo5OTJweClcIjtcclxuJHhsLWRldmljZU1heDogXCIobWF4LXdpZHRoOiAxMjAwcHgpXCI7XHJcbiR4bC1kZXZpY2U6IFwiKG1pbi13aWR0aDogMTIwMXB4KVwiOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/shop/filter/price/price.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/shop/filter/price/price.component.ts ***!
  \*****************************************************************/
/*! exports provided: PriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceComponent", function() { return PriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PriceComponent = /** @class */ (function () {
    function PriceComponent() {
        this.minValue = 100;
        this.maxValue = 400;
        this.options = {
            floor: 0,
            ceil: 500,
            translate: function (value) {
                return '$' + value;
            },
            combineLabels: function (minValue, maxValue) {
                return 'from ' + minValue + ' up to ' + maxValue;
            }
        };
    }
    PriceComponent.prototype.ngOnInit = function () {
    };
    PriceComponent.prototype.getAllValue = function (min, max) {
        console.log(min, max);
    };
    PriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-price',
            template: __webpack_require__(/*! ./price.component.html */ "./src/app/components/shop/filter/price/price.component.html"),
            styles: [__webpack_require__(/*! ./price.component.scss */ "./src/app/components/shop/filter/price/price.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PriceComponent);
    return PriceComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/shop-content/shop-content.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/shop/shop-content/shop-content.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row padding_mobile_none\">\n    <div class=\"col-12 col-sm-6 col-md-4 col-lg-3 mt-3 pl-0\">\n        <div class=\"products-fram\">\n            <span class=\"sale-badge\">-20%</span>\n            <a  routerLink=\"/products/1\" class=\"d-block text-center\" href=\"javascript:void(0)\">\n                <img src=\"./assets/img/products/prod1.png\" class=\"img-fluid\" alt=\"\">\n                <div class=\"name-and-section\">\n                    <p>Jewellery</p>\n                    <p>Products 1</p>\n                </div>\n            </a>\n            <hr>\n            <div class=\"price-and-rating d-flex justify-content-between\">\n                <div class=\"product-price d-flex flex-column align-items-start\">\n                    <del class=\"text-muted\">1300$</del>\n                    <span>1000$</span>\n                </div>\n                <div class=\"product-ratings\">\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star\"></span>\n                    <span class=\"lnr lnr-star\"></span>\n                </div>\n            </div>\n            <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                <div class=\"count-product-input\">\n                    <input class=\"productCount\" type=\"number\" value=\"1\">\n                    <p class=\"up-down-arrows d-flex flex-column\">\n                        <span class=\"lnr lnr-chevron-up\" (click)=\"upCount($event)\"></span>\n                        <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                    </p>\n                </div>\n                <button class=\"add-to-cart\">\n                    <span class=\"lnr lnr-cart\"></span>\n                    {{'relatedSec.addButton' | translate}}\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm-6 col-md-4 col-lg-3 mt-3 pl-0\">\n        <div class=\"products-fram\">\n            <a  routerLink=\"/products/2\" class=\"d-block text-center\" href=\"javascript:void(0)\">\n                <img src=\"./assets/img/products/prod2.png\" class=\"img-fluid\" alt=\"\">\n                <div class=\"name-and-section\">\n                    <p> Clothes</p>\n                    <p>Products 2</p>\n                </div>\n            </a>\n            <hr>\n            <div class=\"price-and-rating d-flex justify-content-between\">\n                <div class=\"product-price d-flex flex-column align-items-start\">\n                    <del class=\"text-muted\">1300$</del>\n                    <span>1000$</span>\n                </div>\n                <div class=\"product-ratings\">\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star\"></span>\n                    <span class=\"lnr lnr-star\"></span>\n                    <span class=\"lnr lnr-star\"></span>\n                </div>\n            </div>\n            <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                <div class=\"count-product-input\">\n                    <input class=\"productCount\" type=\"number\" value=\"1\">\n                    <p class=\"up-down-arrows d-flex flex-column\">\n                        <span class=\"lnr lnr-chevron-up\" (click)=\"upCount($event)\"></span>\n                        <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                    </p>\n                </div>\n                <button class=\"add-to-cart\">\n                    <span class=\"lnr lnr-cart\"></span>\n                    {{'relatedSec.addButton' | translate}}\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm-6 col-md-4 col-lg-3 mt-3 pl-0\">\n        <div class=\"products-fram\">\n            <a  routerLink=\"/products/3\" class=\"d-block text-center\" href=\"javascript:void(0)\">\n                <img src=\"./assets/img/products/prod3.png\" class=\"img-fluid\" alt=\"\">\n                <div class=\"name-and-section\">\n                    <p>For Home</p>\n                    <p>Products 3</p>\n                </div>\n            </a>\n            <hr>\n            <div class=\"price-and-rating d-flex justify-content-between\">\n                <div class=\"product-price d-flex flex-column align-items-start\">\n                    <del class=\"text-muted\">1300$</del>\n                    <span>1000$</span>\n                </div>\n                <div class=\"product-ratings\">\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star\"></span>\n                </div>\n            </div>\n            <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                <div class=\"count-product-input\">\n                    <input class=\"productCount\" type=\"number\" value=\"1\">\n                    <p class=\"up-down-arrows d-flex flex-column\">\n                        <span class=\"lnr lnr-chevron-up\" (click)=\"upCount($event)\"></span>\n                        <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                    </p>\n                </div>\n                <button class=\"add-to-cart\">\n                    <span class=\"lnr lnr-cart\"></span>\n                    {{'relatedSec.addButton' | translate}}\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm-6 col-md-4 col-lg-3 mt-3 pl-0\">\n        <div class=\"products-fram\">\n            <a  routerLink=\"/products/4\" class=\"d-block text-center\" href=\"javascript:void(0)\">\n                <img src=\"./assets/img/products/prod4.png\" class=\"img-fluid\" alt=\"\">\n                <div class=\"name-and-section\">\n                    <p>Dresses</p>\n                    <p>Products 4</p>\n                </div>\n            </a>\n            <hr>\n            <div class=\"price-and-rating d-flex justify-content-between\">\n                <div class=\"product-price d-flex flex-column align-items-start\">\n                    <del class=\"text-muted\">1300$</del>\n                    <span>1000$</span>\n                </div>\n                <div class=\"product-ratings\">\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star\"></span>\n                    <span class=\"lnr lnr-star\"></span>\n                </div>\n            </div>\n            <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                <div class=\"count-product-input\">\n                    <input class=\"productCount\" type=\"number\" value=\"1\">\n                    <p class=\"up-down-arrows d-flex flex-column\">\n                        <span class=\"lnr lnr-chevron-up\" (click)=\"upCount($event)\"></span>\n                        <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                    </p>\n                </div>\n                <button class=\"add-to-cart\">\n                    <span class=\"lnr lnr-cart\"></span>\n                    {{'relatedSec.addButton' | translate}}\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm-6 col-md-4 col-lg-3 mt-3 pl-0\">\n        <div class=\"products-fram\">\n            <a  routerLink=\"/products/5\" class=\"d-block text-center\" href=\"javascript:void(0)\">\n                <img src=\"./assets/img/products/prod5.png\" class=\"img-fluid\" alt=\"\">\n                <div class=\"name-and-section\">\n                    <p>Motors</p>\n                    <p>Products 5</p>\n                </div>\n            </a>\n            <hr>\n            <div class=\"price-and-rating d-flex justify-content-between\">\n                <div class=\"product-price d-flex flex-column align-items-start\">\n                    <del class=\"text-muted\">1300$</del>\n                    <span>1000$</span>\n                </div>\n                <div class=\"product-ratings\">\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                </div>\n            </div>\n            <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                <div class=\"count-product-input\">\n                    <input class=\"productCount\" type=\"number\" value=\"1\">\n                    <p class=\"up-down-arrows d-flex flex-column\">\n                        <span class=\"lnr lnr-chevron-up\" (click)=\"upCount($event)\"></span>\n                        <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                    </p>\n                </div>\n                <button class=\"add-to-cart\">\n                    <span class=\"lnr lnr-cart\"></span>\n                    {{'relatedSec.addButton' | translate}}\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm-6 col-md-4 col-lg-3 mt-3 pl-0\">\n        <div class=\"products-fram\">\n            <a  routerLink=\"/products/6\" class=\"d-block text-center\" href=\"javascript:void(0)\">\n                <img src=\"./assets/img/products/prod6.png\" class=\"img-fluid\" alt=\"\">\n                <div class=\"name-and-section\">\n                    <p>Electronics</p>\n                    <p>Products 6</p>\n                </div>\n            </a>\n            <hr>\n            <div class=\"price-and-rating d-flex justify-content-between\">\n                <div class=\"product-price d-flex flex-column align-items-start\">\n                    <del class=\"text-muted\">1300$</del>\n                    <span>1000$</span>\n                </div>\n                <div class=\"product-ratings\">\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star appreciated\"></span>\n                    <span class=\"lnr lnr-star\"></span>\n                    <span class=\"lnr lnr-star\"></span>\n                </div>\n            </div>\n            <div class=\"add-to-cart-wrap mt-3 d-flex justify-content-between\">\n                <div class=\"count-product-input\">\n                    <input class=\"productCount\" type=\"number\" value=\"1\">\n                    <p class=\"up-down-arrows d-flex flex-column\">\n                        <span class=\"lnr lnr-chevron-up\"></span>\n                        <span class=\"lnr lnr-chevron-down\" (click)=\"downCount($event)\"></span>\n                    </p>\n                </div>\n                <button class=\"add-to-cart\">\n                    <span class=\"lnr lnr-cart\"></span>\n                    {{'relatedSec.addButton' | translate}}\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row padding_mobile_none\" #pageinationWrap>\n    <div class=\"col-12 pl-0\">\n        <div class=\"pageination_shop\">\n            <a href=\"javascript:void(0)\" class=\"disabled_page\"><i class=\"lnr lnr-arrow-left\"></i></a>\n            <a href=\"javascript:void(0)\" class=\"active_page\">1</a>\n            <a href=\"javascript:void(0)\">2</a>\n            <a href=\"javascript:void(0)\">3</a>\n            <a href=\"javascript:void(0)\">4</a>\n            <a href=\"javascript:void(0)\"><i class=\"lnr lnr-arrow-right\"></i></a>\n        </div>\n    </div>   \n</div>"

/***/ }),

/***/ "./src/app/components/shop/shop-content/shop-content.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/shop/shop-content/shop-content.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.products-fram > a .name-and-section p:last-child {\n  color: #000;\n  font-weight: 600;\n  font-size: 24px;\n  height: 50px;\n  overflow: hidden;\n  margin-bottom: 0; }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .count-product-input input, .products-fram .add-to-cart-wrap .count-product-input input {\n  width: 100%;\n  border: 0;\n  box-shadow: 0px 0px 0px 1px #ccc;\n  border-radius: 2px;\n  padding: 3px;\n  text-align: center; }\n.products-fram .sale-badge:after {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  content: \"\";\n  left: -6px;\n  top: 11px;\n  border-radius: 50%;\n  background: #fff; }\n.products-fram .sale-badge:before {\n  top: 4px;\n  position: absolute;\n  content: \"\";\n  left: -9px;\n  width: 19px;\n  height: 19px;\n  background: linear-gradient(to bottom right, #F44336 50%, transparent 51%);\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n.products-fram .sale-badge {\n  background-color: #F44336;\n  transition: all 0.2s linear;\n  padding: 4px;\n  width: 40px;\n  position: absolute;\n  font-size: 13px;\n  color: black;\n  border-right: none;\n  text-align: center;\n  right: 0px;\n  top: 20px;\n  color: #fff;\n  z-index: 2; }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .add-to-cart, .products-fram .add-to-cart-wrap .add-to-cart {\n  background-color: #689F38;\n  color: #fff;\n  border: 0;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: .4s; }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .count-product-input .up-down-arrows span, .products-fram .add-to-cart-wrap .count-product-input .up-down-arrows span {\n  background-color: rgba(104, 159, 56, 0.52);\n  font-size: 13px;\n  padding: 2px;\n  height: 50%;\n  width: 20px;\n  text-align: center;\n  color: #fff;\n  cursor: pointer; }\n.products-fram > a .name-and-section p:first-child {\n  width: 100%;\n  height: 25px;\n  color: #787878;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-bottom: 0; }\n#products_page .top-direction {\n  margin-bottom: 20px; }\n#products_page .top-direction .dicrection-path {\n    padding: 10px;\n    background-color: #F2F2F2; }\n#products_page .top-direction .dicrection-path a {\n      text-decoration: none;\n      color: #262626;\n      position: relative; }\n#products_page .top-direction .dicrection-path a:after {\n        margin: 0 5px;\n        position: relative;\n        content: \"»\"; }\n#products_page .top-direction .dicrection-path a span {\n        margin-right: 3px; }\n#products_page .top-direction .dicrection-path span {\n      color: #616161; }\n#products_page .prodLeft .prod-slider-large {\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  padding: 10px;\n  background-color: #fff; }\n#products_page .prodLeft .prod-slider-thumb {\n  padding: 10px 4px; }\n#products_page .prodLeft .prod-slider-thumb .swiper-button-next, #products_page .prodLeft .prod-slider-thumb .swiper-button-prev {\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    width: auto;\n    height: 30px;\n    margin-top: auto;\n    z-index: 10;\n    background-image: none; }\n#products_page .prodLeft .prod-slider-thumb .swiper-button-next i, #products_page .prodLeft .prod-slider-thumb .swiper-button-prev i {\n      font-size: 23px;\n      width: 30px;\n      height: 30px;\n      background-color: #689F38;\n      color: #fff;\n      text-align: center;\n      padding: 5px; }\n#products_page .prodLeft .prod-slider-thumb .med_prod_slider_borard {\n    padding: 10px;\n    cursor: pointer;\n    background-color: #fff;\n    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n#products_page .right_prod .product_name {\n  display: inline-block;\n  position: relative; }\n#products_page .right_prod .product_name:after {\n    position: absolute;\n    left: 0;\n    bottom: -5px;\n    width: 100%;\n    height: 1px;\n    background-color: #689F38;\n    content: \"\"; }\n#products_page .right_prod .ratingStars span.appreciated {\n  color: #FBC02D; }\n#products_page .right_prod .ratingStars span {\n  font-size: 17px; }\n#products_page .right_prod .discountWrap .common_ammount_prod del {\n  color: #F44336;\n  margin-right: 15px; }\n#products_page .right_prod .discountWrap .common_ammount_prod font {\n  color: #262626;\n  font-size: 20px;\n  font-weight: bold; }\n#products_page .right_prod .colors_wrap .each_colors {\n  margin-top: 10px;\n  display: flex;\n  justify-content: flex-start; }\n#products_page .right_prod .colors_wrap .each_colors span {\n    width: 40px;\n    height: 30px;\n    border: 1px solid #ccc;\n    display: block;\n    border-radius: 3px;\n    margin: 0 4px 0 0;\n    cursor: pointer; }\n#products_page .right_prod .colors_wrap .each_colors .activeColor {\n    border: 2px solid #689F38; }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .count-product-input {\n  width: calc(50% - 5px);\n  position: relative; }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .count-product-input .up-down-arrows {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin-bottom: 0;\n    background-color: #fff;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .count-product-input .up-down-arrows span:hover {\n      background-color: rgba(104, 159, 56, 0.84); }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .add-to-cart {\n  width: calc(50% - 5px); }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .add-to-cart:hover {\n    background-color: #508c1c; }\n#products_page .services_prod > div {\n  background-color: #F2F2F2;\n  padding: 5px 10px;\n  margin: 0 0 20px; }\n#products_page .services_prod img {\n  max-width: 50px; }\n#products_page .services_prod .descServices {\n  padding-left: 15px; }\n#products_page .services_prod .descServices b {\n    color: #6F6F6F;\n    font-size: 16px;\n    margin-bottom: 7px; }\n#products_page .services_prod .descServices p {\n    font-size: 13px;\n    line-height: 15px;\n    height: 30px;\n    overflow: hidden; }\n#products_page .description_product {\n  border-radius: 3px;\n  background-color: #fff;\n  margin-top: 15px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n#products_page .description_product > div {\n    padding: 15px; }\n#products_page .description_product .header_desc {\n    box-shadow: 0px 2px 4px -3px #ccc;\n    padding: 5px 15px; }\n#products_page .swiper_related_prod .swiperArrows {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px; }\n#products_page .swiper_related_prod .swiperArrows h4 {\n    position: relative; }\n#products_page .swiper_related_prod .swiperArrows h4:after {\n      position: absolute;\n      left: 0;\n      bottom: -5px;\n      width: 100%;\n      background-color: #689F38;\n      height: 2px;\n      content: \"\"; }\n#products_page .swiper_related_prod .swiperArrows .scn-icons-cont span {\n    cursor: pointer; }\n.products-fram {\n  background-color: #fff;\n  padding: 10px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  transition: .4s;\n  position: relative; }\n.products-fram:hover {\n    -webkit-transform: scale(1.01);\n            transform: scale(1.01);\n    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n.products-fram > a {\n    text-decoration: none; }\n.products-fram > a img {\n      max-width: 95%;\n      transition: .4s; }\n.products-fram > a:hover img {\n      opacity: 0.6; }\n.products-fram > a .name-and-section {\n      padding: 10px 5px; }\n.products-fram .price-and-rating .product-price del {\n    font-size: 14px; }\n.products-fram .price-and-rating .product-price span {\n    font-size: 16px;\n    color: #F44336;\n    font-weight: 600; }\n.products-fram .price-and-rating .product-ratings span.appreciated {\n    color: #FBC02D; }\n.products-fram .price-and-rating .product-ratings span {\n    font-size: 12px;\n    cursor: pointer; }\n.products-fram .add-to-cart-wrap .count-product-input {\n    width: calc(50% - 5px);\n    position: relative; }\n.products-fram .add-to-cart-wrap .count-product-input .up-down-arrows {\n      position: absolute;\n      top: 0;\n      right: 0;\n      margin-bottom: 0;\n      background-color: #fff;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between; }\n.products-fram .add-to-cart-wrap .count-product-input .up-down-arrows span:hover {\n        background-color: rgba(104, 159, 56, 0.84); }\n.products-fram .add-to-cart-wrap .add-to-cart {\n    width: calc(50% - 5px);\n    overflow: hidden;\n    white-space: nowrap;\n    display: block;\n    text-overflow: ellipsis; }\n.products-fram .add-to-cart-wrap .add-to-cart:hover {\n      background-color: #508c1c; }\n@media (max-width: 991px) and (min-width: 768px) {\n  .services_prod {\n    margin-top: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between; }\n    .services_prod > div {\n      width: calc(50% - 10px); } }\n@media (max-width: 576px) {\n  .services_prod {\n    margin-top: 20px; } }\n.products-fram > a .name-and-section p:last-child {\n  color: #000;\n  font-weight: 600;\n  font-size: 24px;\n  height: 50px;\n  overflow: hidden;\n  margin-bottom: 0; }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .count-product-input input, .products-fram .add-to-cart-wrap .count-product-input input {\n  width: 100%;\n  border: 0;\n  box-shadow: 0px 0px 0px 1px #ccc;\n  border-radius: 2px;\n  padding: 3px;\n  text-align: center; }\n.products-fram .sale-badge:after {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  content: \"\";\n  left: -6px;\n  top: 11px;\n  border-radius: 50%;\n  background: #fff; }\n.products-fram .sale-badge:before {\n  top: 4px;\n  position: absolute;\n  content: \"\";\n  left: -9px;\n  width: 19px;\n  height: 19px;\n  background: linear-gradient(to bottom right, #F44336 50%, transparent 51%);\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n.products-fram .sale-badge {\n  background-color: #F44336;\n  transition: all 0.2s linear;\n  padding: 4px;\n  width: 40px;\n  position: absolute;\n  font-size: 13px;\n  color: black;\n  border-right: none;\n  text-align: center;\n  right: 0px;\n  top: 20px;\n  color: #fff;\n  z-index: 2; }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .add-to-cart, .products-fram .add-to-cart-wrap .add-to-cart {\n  background-color: #689F38;\n  color: #fff;\n  border: 0;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: .4s; }\n#products_page .right_prod .add_cart_wrap .add-to-cart-wrap .count-product-input .up-down-arrows span, .products-fram .add-to-cart-wrap .count-product-input .up-down-arrows span {\n  background-color: rgba(104, 159, 56, 0.52);\n  font-size: 13px;\n  padding: 2px;\n  height: 50%;\n  width: 20px;\n  text-align: center;\n  color: #fff;\n  cursor: pointer; }\n.products-fram > a .name-and-section p:first-child {\n  width: 100%;\n  height: 25px;\n  color: #787878;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-bottom: 0; }\n.pageination_shop {\n  text-align: center;\n  padding: 7px 10px;\n  background-color: #fff;\n  margin-top: 20px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n.pageination_shop a {\n    font-size: 17px;\n    margin: 0 4px;\n    text-decoration: none;\n    color: #262626;\n    display: inline-block;\n    width: 20px;\n    text-align: center; }\n.pageination_shop .active_page {\n    color: #689F38;\n    font-size: 19px;\n    border-bottom: 1px solid #689F38;\n    font-weight: 600; }\n.pageination_shop .disabled_page {\n    color: #9ba295; }\n@media (max-width: 576px) {\n  .padding_mobile_none {\n    padding-left: 15px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL3Nob3AtY29udGVudC9zaG9wLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9zaG9wLWNvbnRlbnQvQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcZnJhbS1zaG9wL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0c1xccHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9zaG9wLWNvbnRlbnQvQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcZnJhbS1zaG9wL3NyY1xcZ2xvYmFsU0NTU1xcZXh0ZW5kcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Nob3Avc2hvcC1jb250ZW50L0M6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXGZyYW0tc2hvcC9zcmNcXGdsb2JhbFNDU1NcXGdsb2JhbFNDU1Muc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL3Nob3AtY29udGVudC9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNob3BcXHNob3AtY29udGVudFxcc2hvcC1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQzJOakI7RUNuTkksWUFBVztFQUNYLGlCQUFlO0VBQ2YsZ0JBQWU7RUFDZixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNuQjtBRFhEO0VDYUksWUFBVztFQUNYLFVBQVM7RUFDVCxpQ0FBZ0M7RUFDaEMsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7QURxTUQ7RUNuTUksbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFXO0VBQ1gsWUFBVztFQUNYLFdBQVU7RUFDVixVQUFTO0VBQ1QsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNuQjtBRDJMRDtFQ3pMSSxTQUFRO0VBQ1IsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxXQUFVO0VBQ1YsWUFBVztFQUNYLGFBQVk7RUFDWiwyRUFBdUU7RUFDdkUsa0NBQXlCO1VBQXpCLDBCQUF5QixFQUM1QjtBRGlMRDtFQy9LSSwwQkNyQ1M7RURzQ1QsNEJBQTJCO0VBQzNCLGFBQVk7RUFDWixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFVBQVM7RUFDVCxZQUFXO0VBQ1gsV0FBVSxFQUNiO0FEdEREO0VDd0RJLDBCQzNEVTtFRDREVixZQUFXO0VBQ1gsVUFBUztFQUNULG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLGdCQUFlLEVBQ2xCO0FEOUREO0VDZ0VJLDJDQUEwQztFQUMxQyxnQkFBZTtFQUNmLGFBQVk7RUFDWixZQUFXO0VBQ1gsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsZ0JBQWUsRUFDbEI7QURnSkQ7RUM5SUksWUFBVztFQUNYLGFBQVk7RUFDWixlQUFjO0VBQ2Qsb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ25CO0FEakZEO0VBRVEsb0JBQW1CLEVBc0J0QjtBQXhCTDtJQUlZLGNBQWE7SUFDYiwwQkVKTSxFRnNCVDtBQXZCVDtNQU9nQixzQkFBcUI7TUFDckIsZUVOSDtNRk9HLG1CQUFrQixFQVNyQjtBQWxCYjtRQVdvQixjQUFZO1FBQ1osbUJBQWtCO1FBQ2xCLGFBQVksRUFDZjtBQWRqQjtRQWdCb0Isa0JBQWlCLEVBQ3BCO0FBakJqQjtNQW9CZ0IsZUVqQkgsRUZrQkE7QUFyQmI7RUE0QlksZ0hBQWtHO0VBQ2xHLGNBQWE7RUFDYix1QkFBc0IsRUFDekI7QUEvQlQ7RUFpQ1ksa0JBQWlCLEVBMEJwQjtBQTNEVDtJQW1DZ0IsT0FBTTtJQUNOLFVBQVM7SUFDVCxhQUFZO0lBQ1osWUFBVztJQUNYLGFBQVk7SUFDWixpQkFBZ0I7SUFDaEIsWUFBVztJQUNYLHVCQUFzQixFQVV6QjtBQXBEYjtNQTRDb0IsZ0JBQWU7TUFDZixZQUFXO01BQ1gsYUFBWTtNQUNaLDBCRWxETjtNRm1ETSxZQUFXO01BQ1gsbUJBQWtCO01BQ2xCLGFBQVksRUFDZjtBQW5EakI7SUFzRGdCLGNBQWE7SUFDYixnQkFBZTtJQUNmLHVCQUFzQjtJQUN0QixnSEFBa0csRUFDckc7QUExRGI7RUErRFksc0JBQXFCO0VBQ3JCLG1CQUFrQixFQVVyQjtBQTFFVDtJQWtFZ0IsbUJBQWtCO0lBQ2xCLFFBQU87SUFDUCxhQUFZO0lBQ1osWUFBVztJQUNYLFlBQVc7SUFDWCwwQkUxRUY7SUYyRUUsWUFBVyxFQUNkO0FBekViO0VBOEVnQixlRXpFQSxFRjBFSDtBQS9FYjtFQWlGZ0IsZ0JBQWUsRUFDbEI7QUFsRmI7RUF1Rm9CLGVFbkZQO0VGb0ZPLG1CQUNKLEVBQUM7QUF6RmpCO0VBMkZvQixlRXpGUDtFRjBGTyxnQkFBZTtFQUNmLGtCQUFpQixFQUNwQjtBQTlGakI7RUFtR2dCLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2IsNEJBQTBCLEVBYTdCO0FBbEhiO0lBdUdvQixZQUFXO0lBQ1gsYUFBWTtJQUNaLHVCQUFzQjtJQUN0QixlQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZSxFQUNsQjtBQTlHakI7SUFnSG9CLDBCRW5ITixFRm9IRztBQWpIakI7RUF3SG9CLHVCQUFzQjtFQUN0QixtQkFBa0IsRUFxQnJCO0FBOUlqQjtJQTJId0IsbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixTQUFRO0lBQ1IsaUJBQWdCO0lBQ2hCLHVCQUFzQjtJQUN0QixhQUFZO0lBQ1osY0FBYTtJQUNiLHVCQUFzQjtJQUN0QiwrQkFBOEIsRUFPakM7QUExSXJCO01BdUlnQywyQ0FBMEMsRUFDN0M7QUF4STdCO0VBZ0pvQix1QkFBc0IsRUFLekI7QUFySmpCO0lBbUp3QiwwQkVySk4sRUZzSkc7QUFwSnJCO0VBMkpZLDBCRTFKTTtFRjJKTixrQkFBaUI7RUFDakIsaUJBQWdCLEVBQ25CO0FBOUpUO0VBZ0tZLGdCQUFlLEVBQ2xCO0FBaktUO0VBbUtZLG1CQUFrQixFQVlyQjtBQS9LVDtJQXFLZ0IsZUFBYztJQUNkLGdCQUFlO0lBQ2YsbUJBQWtCLEVBQ3JCO0FBeEtiO0lBMEtnQixnQkFBZTtJQUNmLGtCQUFpQjtJQUNqQixhQUFZO0lBQ1osaUJBQWdCLEVBQ25CO0FBOUtiO0VBa0xRLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsaUJBQWdCO0VBQ2hCLGdIQUFrRyxFQVFyRztBQTdMTDtJQXVMWSxjQUFhLEVBQ2hCO0FBeExUO0lBMExZLGtDQUFpQztJQUNqQyxrQkFBaUIsRUFDcEI7QUE1TFQ7RUFnTVksY0FBYTtFQUNiLCtCQUE4QjtFQUM5QixjQUFhLEVBa0JoQjtBQXBOVDtJQW9NZ0IsbUJBQWtCLEVBVXJCO0FBOU1iO01Bc01vQixtQkFBa0I7TUFDbEIsUUFBTztNQUNQLGFBQVk7TUFDWixZQUFXO01BQ1gsMEJFN01OO01GOE1NLFlBQVc7TUFDWCxZQUFXLEVBQ2Q7QUE3TWpCO0lBaU5vQixnQkFBZSxFQUNsQjtBQU1qQjtFQUNJLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsZ0hBQW1HO0VBQ25HLGdCQUFlO0VBS2YsbUJBQWtCLEVBd0ZyQjtBQWpHRDtJQU1RLCtCQUFzQjtZQUF0Qix1QkFBc0I7SUFDdEIsK0dBQThHLEVBQ2pIO0FBUkw7SUEyQlEsc0JBQXFCLEVBVXhCO0FBckNMO01BcUJZLGVBQWM7TUFDZCxnQkFBZSxFQUNsQjtBQXZCVDtNQXlCWSxhQUFZLEVBQ2Y7QUExQlQ7TUE2Qlksa0JBQWlCLEVBT3BCO0FBcENUO0lBeUNnQixnQkFBZSxFQUNsQjtBQTFDYjtJQTRDZ0IsZ0JBQWU7SUFDZixlRWpRSDtJRmtRRyxpQkFBZ0IsRUFDbkI7QUEvQ2I7SUFtRGdCLGVFdFFBLEVGdVFIO0FBcERiO0lBc0RnQixnQkFBZTtJQUNmLGdCQUFlLEVBQ2xCO0FBeERiO0lBOERZLHVCQUFzQjtJQUN0QixtQkFBa0IsRUFxQnJCO0FBcEZUO01BaUVnQixtQkFBa0I7TUFDbEIsT0FBTTtNQUNOLFNBQVE7TUFDUixpQkFBZ0I7TUFDaEIsdUJBQXNCO01BQ3RCLGFBQVk7TUFDWixjQUFhO01BQ2IsdUJBQXNCO01BQ3RCLCtCQUE4QixFQU9qQztBQWhGYjtRQTZFd0IsMkNBQTBDLEVBQzdDO0FBOUVyQjtJQXNGWSx1QkFBc0I7SUFDdEIsaUJBQWdCO0lBQ2hCLG9CQUFtQjtJQUNuQixlQUFjO0lBQ2Qsd0JBQXVCLEVBSzFCO0FBL0ZUO01BNkZnQiwwQkV2VEUsRUZ3VEw7QUFJYjtFQUNJO0lBQ0ksaUJBQWdCO0lBQ2hCLGNBQWE7SUFDYixnQkFBZTtJQUNmLCtCQUE4QixFQUtqQztJQVREO01BTVEsd0JBQXVCLEVBRTFCLEVBQUE7QUFHVDtFQVhJO0lBYUksaUJBQWdCLEVBQ25CLEVBQUE7QUFqSEw7RUNuTkksWUFBVztFQUNYLGlCQUFlO0VBQ2YsZ0JBQWU7RUFDZixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNuQjtBRFhEO0VDYUksWUFBVztFQUNYLFVBQVM7RUFDVCxpQ0FBZ0M7RUFDaEMsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7QURxTUQ7RUNuTUksbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFXO0VBQ1gsWUFBVztFQUNYLFdBQVU7RUFDVixVQUFTO0VBQ1QsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNuQjtBRDJMRDtFQ3pMSSxTQUFRO0VBQ1IsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxXQUFVO0VBQ1YsWUFBVztFQUNYLGFBQVk7RUFDWiwyRUFBdUU7RUFDdkUsa0NBQXlCO1VBQXpCLDBCQUF5QixFQUM1QjtBRGlMRDtFQy9LSSwwQkNyQ1M7RURzQ1QsNEJBQTJCO0VBQzNCLGFBQVk7RUFDWixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFVBQVM7RUFDVCxZQUFXO0VBQ1gsV0FBVSxFQUNiO0FEdEREO0VDd0RJLDBCQzNEVTtFRDREVixZQUFXO0VBQ1gsVUFBUztFQUNULG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLGdCQUFlLEVBQ2xCO0FEOUREO0VDZ0VJLDJDQUEwQztFQUMxQyxnQkFBZTtFQUNmLGFBQVk7RUFDWixZQUFXO0VBQ1gsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsZ0JBQWUsRUFDbEI7QURnSkQ7RUM5SUksWUFBVztFQUNYLGFBQVk7RUFDWixlQUFjO0VBQ2Qsb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ25CO0FFaEZEO0VBQ0ksbUJBQWtCO0VBQ2xCLGtCQUFnQjtFQUNoQix1QkFBc0I7RUFDdEIsaUJBQWdCO0VBQ2hCLGdIQUFrRyxFQW1Cckc7QUF4QkQ7SUFPUSxnQkFBYztJQUNkLGNBQWE7SUFDYixzQkFBcUI7SUFDckIsZURUSztJQ1VMLHNCQUFxQjtJQUNyQixZQUFXO0lBQ1gsbUJBQWlCLEVBQ3BCO0FBZEw7SUFnQlEsZURwQk07SUNxQk4sZ0JBQWU7SUFDZixpQ0R0Qk07SUN1Qk4saUJBQWdCLEVBQ25CO0FBcEJMO0lBc0JRLGVEdkJlLEVDd0JsQjtBQUVMO0VBQ0k7SUFDSSw4QkFBOEIsRUFDakMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9zaG9wLWNvbnRlbnQvc2hvcC1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnByb2R1Y3RzLWZyYW0gPiBhIC5uYW1lLWFuZC1zZWN0aW9uIHA6bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4jcHJvZHVjdHNfcGFnZSAucmlnaHRfcHJvZCAuYWRkX2NhcnRfd3JhcCAuYWRkLXRvLWNhcnQtd3JhcCAuY291bnQtcHJvZHVjdC1pbnB1dCBpbnB1dCwgLnByb2R1Y3RzLWZyYW0gLmFkZC10by1jYXJ0LXdyYXAgLmNvdW50LXByb2R1Y3QtaW5wdXQgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4ucHJvZHVjdHMtZnJhbSAuc2FsZS1iYWRnZTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IC02cHg7XG4gIHRvcDogMTFweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XG5cbi5wcm9kdWN0cy1mcmFtIC5zYWxlLWJhZGdlOmJlZm9yZSB7XG4gIHRvcDogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IC05cHg7XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNGNDQzMzYgNTAlLCB0cmFuc3BhcmVudCA1MSUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XG5cbi5wcm9kdWN0cy1mcmFtIC5zYWxlLWJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0NDMzNjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICBwYWRkaW5nOiA0cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMjsgfVxuXG4jcHJvZHVjdHNfcGFnZSAucmlnaHRfcHJvZCAuYWRkX2NhcnRfd3JhcCAuYWRkLXRvLWNhcnQtd3JhcCAuYWRkLXRvLWNhcnQsIC5wcm9kdWN0cy1mcmFtIC5hZGQtdG8tY2FydC13cmFwIC5hZGQtdG8tY2FydCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODlGMzg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAuNHM7IH1cblxuI3Byb2R1Y3RzX3BhZ2UgLnJpZ2h0X3Byb2QgLmFkZF9jYXJ0X3dyYXAgLmFkZC10by1jYXJ0LXdyYXAgLmNvdW50LXByb2R1Y3QtaW5wdXQgLnVwLWRvd24tYXJyb3dzIHNwYW4sIC5wcm9kdWN0cy1mcmFtIC5hZGQtdG8tY2FydC13cmFwIC5jb3VudC1wcm9kdWN0LWlucHV0IC51cC1kb3duLWFycm93cyBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDQsIDE1OSwgNTYsIDAuNTIpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLnByb2R1Y3RzLWZyYW0gPiBhIC5uYW1lLWFuZC1zZWN0aW9uIHA6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBjb2xvcjogIzc4Nzg3ODtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDA7IH1cblxuI3Byb2R1Y3RzX3BhZ2UgLnRvcC1kaXJlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG4gICNwcm9kdWN0c19wYWdlIC50b3AtZGlyZWN0aW9uIC5kaWNyZWN0aW9uLXBhdGgge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjsgfVxuICAgICNwcm9kdWN0c19wYWdlIC50b3AtZGlyZWN0aW9uIC5kaWNyZWN0aW9uLXBhdGggYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogIzI2MjYyNjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgI3Byb2R1Y3RzX3BhZ2UgLnRvcC1kaXJlY3Rpb24gLmRpY3JlY3Rpb24tcGF0aCBhOmFmdGVyIHtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb250ZW50OiBcIsK7XCI7IH1cbiAgICAgICNwcm9kdWN0c19wYWdlIC50b3AtZGlyZWN0aW9uIC5kaWNyZWN0aW9uLXBhdGggYSBzcGFuIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7IH1cbiAgICAjcHJvZHVjdHNfcGFnZSAudG9wLWRpcmVjdGlvbiAuZGljcmVjdGlvbi1wYXRoIHNwYW4ge1xuICAgICAgY29sb3I6ICM2MTYxNjE7IH1cblxuI3Byb2R1Y3RzX3BhZ2UgLnByb2RMZWZ0IC5wcm9kLXNsaWRlci1sYXJnZSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuXG4jcHJvZHVjdHNfcGFnZSAucHJvZExlZnQgLnByb2Qtc2xpZGVyLXRodW1iIHtcbiAgcGFkZGluZzogMTBweCA0cHg7IH1cbiAgI3Byb2R1Y3RzX3BhZ2UgLnByb2RMZWZ0IC5wcm9kLXNsaWRlci10aHVtYiAuc3dpcGVyLWJ1dHRvbi1uZXh0LCAjcHJvZHVjdHNfcGFnZSAucHJvZExlZnQgLnByb2Qtc2xpZGVyLXRodW1iIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IH1cbiAgICAjcHJvZHVjdHNfcGFnZSAucHJvZExlZnQgLnByb2Qtc2xpZGVyLXRodW1iIC5zd2lwZXItYnV0dG9uLW5leHQgaSwgI3Byb2R1Y3RzX3BhZ2UgLnByb2RMZWZ0IC5wcm9kLXNsaWRlci10aHVtYiAuc3dpcGVyLWJ1dHRvbi1wcmV2IGkge1xuICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5RjM4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA1cHg7IH1cbiAgI3Byb2R1Y3RzX3BhZ2UgLnByb2RMZWZ0IC5wcm9kLXNsaWRlci10aHVtYiAubWVkX3Byb2Rfc2xpZGVyX2JvcmFyZCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuI3Byb2R1Y3RzX3BhZ2UgLnJpZ2h0X3Byb2QgLnByb2R1Y3RfbmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICNwcm9kdWN0c19wYWdlIC5yaWdodF9wcm9kIC5wcm9kdWN0X25hbWU6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogLTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5RjM4O1xuICAgIGNvbnRlbnQ6IFwiXCI7IH1cblxuI3Byb2R1Y3RzX3BhZ2UgLnJpZ2h0X3Byb2QgLnJhdGluZ1N0YXJzIHNwYW4uYXBwcmVjaWF0ZWQge1xuICBjb2xvcjogI0ZCQzAyRDsgfVxuXG4jcHJvZHVjdHNfcGFnZSAucmlnaHRfcHJvZCAucmF0aW5nU3RhcnMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTdweDsgfVxuXG4jcHJvZHVjdHNfcGFnZSAucmlnaHRfcHJvZCAuZGlzY291bnRXcmFwIC5jb21tb25fYW1tb3VudF9wcm9kIGRlbCB7XG4gIGNvbG9yOiAjRjQ0MzM2O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7IH1cblxuI3Byb2R1Y3RzX3BhZ2UgLnJpZ2h0X3Byb2QgLmRpc2NvdW50V3JhcCAuY29tbW9uX2FtbW91bnRfcHJvZCBmb250IHtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuI3Byb2R1Y3RzX3BhZ2UgLnJpZ2h0X3Byb2QgLmNvbG9yc193cmFwIC5lYWNoX2NvbG9ycyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAjcHJvZHVjdHNfcGFnZSAucmlnaHRfcHJvZCAuY29sb3JzX3dyYXAgLmVhY2hfY29sb3JzIHNwYW4ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtYXJnaW46IDAgNHB4IDAgMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgI3Byb2R1Y3RzX3BhZ2UgLnJpZ2h0X3Byb2QgLmNvbG9yc193cmFwIC5lYWNoX2NvbG9ycyAuYWN0aXZlQ29sb3Ige1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2ODlGMzg7IH1cblxuI3Byb2R1Y3RzX3BhZ2UgLnJpZ2h0X3Byb2QgLmFkZF9jYXJ0X3dyYXAgLmFkZC10by1jYXJ0LXdyYXAgLmNvdW50LXByb2R1Y3QtaW5wdXQge1xuICB3aWR0aDogY2FsYyg1MCUgLSA1cHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgI3Byb2R1Y3RzX3BhZ2UgLnJpZ2h0X3Byb2QgLmFkZF9jYXJ0X3dyYXAgLmFkZC10by1jYXJ0LXdyYXAgLmNvdW50LXByb2R1Y3QtaW5wdXQgLnVwLWRvd24tYXJyb3dzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAgICNwcm9kdWN0c19wYWdlIC5yaWdodF9wcm9kIC5hZGRfY2FydF93cmFwIC5hZGQtdG8tY2FydC13cmFwIC5jb3VudC1wcm9kdWN0LWlucHV0IC51cC1kb3duLWFycm93cyBzcGFuOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxNTksIDU2LCAwLjg0KTsgfVxuXG4jcHJvZHVjdHNfcGFnZSAucmlnaHRfcHJvZCAuYWRkX2NhcnRfd3JhcCAuYWRkLXRvLWNhcnQtd3JhcCAuYWRkLXRvLWNhcnQge1xuICB3aWR0aDogY2FsYyg1MCUgLSA1cHgpOyB9XG4gICNwcm9kdWN0c19wYWdlIC5yaWdodF9wcm9kIC5hZGRfY2FydF93cmFwIC5hZGQtdG8tY2FydC13cmFwIC5hZGQtdG8tY2FydDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwOGMxYzsgfVxuXG4jcHJvZHVjdHNfcGFnZSAuc2VydmljZXNfcHJvZCA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW46IDAgMCAyMHB4OyB9XG5cbiNwcm9kdWN0c19wYWdlIC5zZXJ2aWNlc19wcm9kIGltZyB7XG4gIG1heC13aWR0aDogNTBweDsgfVxuXG4jcHJvZHVjdHNfcGFnZSAuc2VydmljZXNfcHJvZCAuZGVzY1NlcnZpY2VzIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4OyB9XG4gICNwcm9kdWN0c19wYWdlIC5zZXJ2aWNlc19wcm9kIC5kZXNjU2VydmljZXMgYiB7XG4gICAgY29sb3I6ICM2RjZGNkY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDdweDsgfVxuICAjcHJvZHVjdHNfcGFnZSAuc2VydmljZXNfcHJvZCAuZGVzY1NlcnZpY2VzIHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4jcHJvZHVjdHNfcGFnZSAuZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG4gICNwcm9kdWN0c19wYWdlIC5kZXNjcmlwdGlvbl9wcm9kdWN0ID4gZGl2IHtcbiAgICBwYWRkaW5nOiAxNXB4OyB9XG4gICNwcm9kdWN0c19wYWdlIC5kZXNjcmlwdGlvbl9wcm9kdWN0IC5oZWFkZXJfZGVzYyB7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTNweCAjY2NjO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4OyB9XG5cbiNwcm9kdWN0c19wYWdlIC5zd2lwZXJfcmVsYXRlZF9wcm9kIC5zd2lwZXJBcnJvd3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHg7IH1cbiAgI3Byb2R1Y3RzX3BhZ2UgLnN3aXBlcl9yZWxhdGVkX3Byb2QgLnN3aXBlckFycm93cyBoNCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgI3Byb2R1Y3RzX3BhZ2UgLnN3aXBlcl9yZWxhdGVkX3Byb2QgLnN3aXBlckFycm93cyBoNDphZnRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYm90dG9tOiAtNXB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5RjM4O1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBjb250ZW50OiBcIlwiOyB9XG4gICNwcm9kdWN0c19wYWdlIC5zd2lwZXJfcmVsYXRlZF9wcm9kIC5zd2lwZXJBcnJvd3MgLnNjbi1pY29ucy1jb250IHNwYW4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4ucHJvZHVjdHMtZnJhbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgdHJhbnNpdGlvbjogLjRzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLnByb2R1Y3RzLWZyYW06aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cbiAgLnByb2R1Y3RzLWZyYW0gPiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgICAucHJvZHVjdHMtZnJhbSA+IGEgaW1nIHtcbiAgICAgIG1heC13aWR0aDogOTUlO1xuICAgICAgdHJhbnNpdGlvbjogLjRzOyB9XG4gICAgLnByb2R1Y3RzLWZyYW0gPiBhOmhvdmVyIGltZyB7XG4gICAgICBvcGFjaXR5OiAwLjY7IH1cbiAgICAucHJvZHVjdHMtZnJhbSA+IGEgLm5hbWUtYW5kLXNlY3Rpb24ge1xuICAgICAgcGFkZGluZzogMTBweCA1cHg7IH1cbiAgLnByb2R1Y3RzLWZyYW0gLnByaWNlLWFuZC1yYXRpbmcgLnByb2R1Y3QtcHJpY2UgZGVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7IH1cbiAgLnByb2R1Y3RzLWZyYW0gLnByaWNlLWFuZC1yYXRpbmcgLnByb2R1Y3QtcHJpY2Ugc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjRjQ0MzM2O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgLnByb2R1Y3RzLWZyYW0gLnByaWNlLWFuZC1yYXRpbmcgLnByb2R1Y3QtcmF0aW5ncyBzcGFuLmFwcHJlY2lhdGVkIHtcbiAgICBjb2xvcjogI0ZCQzAyRDsgfVxuICAucHJvZHVjdHMtZnJhbSAucHJpY2UtYW5kLXJhdGluZyAucHJvZHVjdC1yYXRpbmdzIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLnByb2R1Y3RzLWZyYW0gLmFkZC10by1jYXJ0LXdyYXAgLmNvdW50LXByb2R1Y3QtaW5wdXQge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDVweCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLnByb2R1Y3RzLWZyYW0gLmFkZC10by1jYXJ0LXdyYXAgLmNvdW50LXByb2R1Y3QtaW5wdXQgLnVwLWRvd24tYXJyb3dzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAgICAgLnByb2R1Y3RzLWZyYW0gLmFkZC10by1jYXJ0LXdyYXAgLmNvdW50LXByb2R1Y3QtaW5wdXQgLnVwLWRvd24tYXJyb3dzIHNwYW46aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNCwgMTU5LCA1NiwgMC44NCk7IH1cbiAgLnByb2R1Y3RzLWZyYW0gLmFkZC10by1jYXJ0LXdyYXAgLmFkZC10by1jYXJ0IHtcbiAgICB3aWR0aDogY2FsYyg1MCUgLSA1cHgpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgIC5wcm9kdWN0cy1mcmFtIC5hZGQtdG8tY2FydC13cmFwIC5hZGQtdG8tY2FydDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA4YzFjOyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zZXJ2aWNlc19wcm9kIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAgIC5zZXJ2aWNlc19wcm9kID4gZGl2IHtcbiAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpOyB9IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zZXJ2aWNlc19wcm9kIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyB9IH1cblxuLnByb2R1Y3RzLWZyYW0gPiBhIC5uYW1lLWFuZC1zZWN0aW9uIHA6bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4jcHJvZHVjdHNfcGFnZSAucmlnaHRfcHJvZCAuYWRkX2NhcnRfd3JhcCAuYWRkLXRvLWNhcnQtd3JhcCAuY291bnQtcHJvZHVjdC1pbnB1dCBpbnB1dCwgLnByb2R1Y3RzLWZyYW0gLmFkZC10by1jYXJ0LXdyYXAgLmNvdW50LXByb2R1Y3QtaW5wdXQgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4ucHJvZHVjdHMtZnJhbSAuc2FsZS1iYWRnZTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IC02cHg7XG4gIHRvcDogMTFweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XG5cbi5wcm9kdWN0cy1mcmFtIC5zYWxlLWJhZGdlOmJlZm9yZSB7XG4gIHRvcDogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IC05cHg7XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNGNDQzMzYgNTAlLCB0cmFuc3BhcmVudCA1MSUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XG5cbi5wcm9kdWN0cy1mcmFtIC5zYWxlLWJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0NDMzNjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICBwYWRkaW5nOiA0cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMjsgfVxuXG4jcHJvZHVjdHNfcGFnZSAucmlnaHRfcHJvZCAuYWRkX2NhcnRfd3JhcCAuYWRkLXRvLWNhcnQtd3JhcCAuYWRkLXRvLWNhcnQsIC5wcm9kdWN0cy1mcmFtIC5hZGQtdG8tY2FydC13cmFwIC5hZGQtdG8tY2FydCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODlGMzg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAuNHM7IH1cblxuI3Byb2R1Y3RzX3BhZ2UgLnJpZ2h0X3Byb2QgLmFkZF9jYXJ0X3dyYXAgLmFkZC10by1jYXJ0LXdyYXAgLmNvdW50LXByb2R1Y3QtaW5wdXQgLnVwLWRvd24tYXJyb3dzIHNwYW4sIC5wcm9kdWN0cy1mcmFtIC5hZGQtdG8tY2FydC13cmFwIC5jb3VudC1wcm9kdWN0LWlucHV0IC51cC1kb3duLWFycm93cyBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDQsIDE1OSwgNTYsIDAuNTIpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLnByb2R1Y3RzLWZyYW0gPiBhIC5uYW1lLWFuZC1zZWN0aW9uIHA6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBjb2xvcjogIzc4Nzg3ODtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDA7IH1cblxuLnBhZ2VpbmF0aW9uX3Nob3Age1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cbiAgLnBhZ2VpbmF0aW9uX3Nob3AgYSB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIG1hcmdpbjogMCA0cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMjYyNjI2O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLnBhZ2VpbmF0aW9uX3Nob3AgLmFjdGl2ZV9wYWdlIHtcbiAgICBjb2xvcjogIzY4OUYzODtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2ODlGMzg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICAucGFnZWluYXRpb25fc2hvcCAuZGlzYWJsZWRfcGFnZSB7XG4gICAgY29sb3I6ICM5YmEyOTU7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5wYWRkaW5nX21vYmlsZV9ub25lIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDsgfSB9XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9nbG9iYWxTQ1NTL2V4dGVuZHMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9nbG9iYWxTQ1NTL2dsb2JhbFNDU1MnO1xyXG5cclxuI3Byb2R1Y3RzX3BhZ2V7XHJcbiAgICAudG9wLWRpcmVjdGlvbnsgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAuZGljcmVjdGlvbi1wYXRoe1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGlnaFdheUJHO1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiwrtcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJvZExlZnR7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnByb2Qtc2xpZGVyLWxhcmdle1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OjAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2Qtc2xpZGVyLXRodW1ie1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDRweDtcclxuICAgICAgICAgICAgLnN3aXBlci1idXR0b24tbmV4dCwgLnN3aXBlci1idXR0b24tcHJldntcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWVkX3Byb2Rfc2xpZGVyX2JvcmFyZHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzowIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodF9wcm9ke1xyXG4gICAgICAgIC5wcm9kdWN0X25hbWV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yYXRpbmdTdGFyc3tcclxuXHJcbiAgICAgICAgICAgIHNwYW4uYXBwcmVjaWF0ZWR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHllbGxvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXNjb3VudFdyYXB7XHJcbiAgICAgICAgICAgIC5jb21tb25fYW1tb3VudF9wcm9ke1xyXG4gICAgICAgICAgICAgICAgZGVse1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9udHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGRhcms7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2xvcnNfd3JhcHtcclxuICAgICAgICAgICAgLmVhY2hfY29sb3Jze1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA0cHggMCAwIDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgLmFjdGl2ZUNvbG9ye1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRncmVlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWRkX2NhcnRfd3JhcHtcclxuICAgICAgICAgICAgLmFkZC10by1jYXJ0LXdyYXB7XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvdW50LXByb2R1Y3QtaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNXB4KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgLnVwLWRvd24tYXJyb3dze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZXh0ZW5kLXByb2R1Y3QtYmFkZ2UtaW5wdXQtYXJyb3dzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNCwgMTU5LCA1NiwgMC44NCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWV4dGVuZC1wcm9kdWN0LWJhZGdlLWlucHV0LWNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hZGQtdG8tY2FydHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA1cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWV4dGVuZC1wcm9kdWN0LWJhZGdlLWFkZC1idXR0b247XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuRGFyaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VydmljZXNfcHJvZHtcclxuICAgICAgICA+IGRpdntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hXYXlCRztcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVzY1NlcnZpY2Vze1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzZGNkY2RjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRlc2NyaXB0aW9uX3Byb2R1Y3R7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBib3gtc2hhZG93OjAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAgICAgICA+IGRpdntcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlcl9kZXNje1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtM3B4ICNjY2M7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zd2lwZXJfcmVsYXRlZF9wcm9ke1xyXG4gICAgICAgIC5zd2lwZXJBcnJvd3Mge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGg0e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IC01cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNjbi1pY29ucy1jb250e1xyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuLnByb2R1Y3RzLWZyYW17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIH1cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5zYWxlLWJhZGdle1xyXG4gICAgICAgIEBleHRlbmQgJWV4dGVuZC1wcm9kdWN0LWJhZGdlLXNhbGU7XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIEBleHRlbmQgJWV4dGVuZC1wcm9kdWN0LWJhZGdlLXNhbGUtYmVmb3JlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgQGV4dGVuZCAlZXh0ZW5kLXByb2R1Y3QtYmFkZ2Utc2FsZS1hZnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICA+YXtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogOTUlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIgaW1ne1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAubmFtZS1hbmQtc2VjdGlvbntcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICAgICAgICAgIHA6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICVleHRlbmQtcHJvZHVjdC1iYWRnZS1maXJzdC10aXRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICAlZXh0ZW5kLXByb2R1Y3QtYmFkZ2Utc2Vjb25kLXRpdGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByaWNlLWFuZC1yYXRpbmd7XHJcbiAgICAgICAgLnByb2R1Y3QtcHJpY2V7XHJcbiAgICAgICAgICAgIGRlbHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRyZWQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LXJhdGluZ3N7XHJcbiAgICAgICAgICAgIHNwYW4uYXBwcmVjaWF0ZWR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHllbGxvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFkZC10by1jYXJ0LXdyYXB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvdW50LXByb2R1Y3QtaW5wdXR7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDVweCk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgLnVwLWRvd24tYXJyb3dze1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVleHRlbmQtcHJvZHVjdC1iYWRnZS1pbnB1dC1hcnJvd3M7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDQsIDE1OSwgNTYsIDAuODQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJWV4dGVuZC1wcm9kdWN0LWJhZGdlLWlucHV0LWNvdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hZGQtdG8tY2FydHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNXB4KTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICBAZXh0ZW5kICVleHRlbmQtcHJvZHVjdC1iYWRnZS1hZGQtYnV0dG9uO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuRGFyaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgI3skbWQtZGV2aWNlfXtcclxuICAgIC5zZXJ2aWNlc19wcm9ke1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgID4gZGl2e1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAjeyRjb2x9e1xyXG4gICAgLnNlcnZpY2VzX3Byb2R7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgJy4vZ2xvYmFsU0NTUyc7XHJcblxyXG4lZXh0ZW5kLWZsZXgtZGVmYXVsdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4lZXh0ZW5kLXByb2R1Y3QtYmFkZ2Utc2Vjb25kLXRpdGxle1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuJWV4dGVuZC1wcm9kdWN0LWJhZGdlLWlucHV0LWNvdW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4lZXh0ZW5kLXByb2R1Y3QtYmFkZ2Utc2FsZS1hZnRlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBsZWZ0OiAtNnB4O1xyXG4gICAgdG9wOiAxMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4lZXh0ZW5kLXByb2R1Y3QtYmFkZ2Utc2FsZS1iZWZvcmV7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBsZWZ0OiAtOXB4O1xyXG4gICAgd2lkdGg6IDE5cHg7XHJcbiAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAkcmVkIDUwJSwgdHJhbnNwYXJlbnQgNTElKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuJWV4dGVuZC1wcm9kdWN0LWJhZGdlLXNhbGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcbiVleHRlbmQtcHJvZHVjdC1iYWRnZS1hZGQtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuJWV4dGVuZC1wcm9kdWN0LWJhZGdlLWlucHV0LWFycm93c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxNTksIDU2LCAwLjUyKTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4lZXh0ZW5kLXByb2R1Y3QtYmFkZ2UtZmlyc3QtdGl0bGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGNvbG9yOiAjNzg3ODc4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn0iLCIkZ3JlZW46IzY4OUYzODtcclxuJGdyZWVuRGFyazojNTA4YzFjO1xyXG4kZ3JlZW5SR0JBOiM2ODlmMzg4YztcclxuJGRpc2FibGVkQnV0dG9uOiM5YmEyOTU7XHJcbiRoaWdoV2F5Qkc6I0YyRjJGMjtcclxuJGRhcms6IzI2MjYyNjtcclxuJGdyZXk6IzYxNjE2MTtcclxuJHJlZDogI0Y0NDMzNjtcclxuJHllbGxvdzogI0ZCQzAyRDtcclxuXHJcbiRjb2w6IFwiKG1heC13aWR0aDogNTc2cHgpXCI7XHJcbiRzbS1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogNzY3cHgpXCI7XHJcbiRzbS1kZXZpY2U6IFwiKG1heC13aWR0aDogNzY3cHgpIGFuZCAobWluLXdpZHRoOjU3N3B4KVwiO1xyXG4kbWQtZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDk5MXB4KVwiO1xyXG4kbWQtZGV2aWNlOiBcIihtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDo3NjhweClcIjtcclxuJGxnLWRldmljZTogXCIobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOjk5MnB4KVwiO1xyXG4keGwtZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDEyMDBweClcIjtcclxuJHhsLWRldmljZTogXCIobWluLXdpZHRoOiAxMjAxcHgpXCI7IiwiQGltcG9ydCAnLi4vLi4vcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9nbG9iYWxTQ1NTL2V4dGVuZHMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9nbG9iYWxTQ1NTL2dsb2JhbFNDU1MnO1xyXG5cclxuLnBhZ2VpbmF0aW9uX3Nob3B7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOjdweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OjAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAgIGF7XHJcbiAgICAgICAgZm9udC1zaXplOjE3cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDRweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxyXG4gICAgICAgIGNvbG9yOiAkZGFyaztcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlX3BhZ2V7XHJcbiAgICAgICAgY29sb3I6ICRncmVlbjtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmVlbjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgLmRpc2FibGVkX3BhZ2V7XHJcbiAgICAgICAgY29sb3I6ICRkaXNhYmxlZEJ1dHRvblxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAjeyRjb2x9e1xyXG4gICAgLnBhZGRpbmdfbW9iaWxlX25vbmV7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAgMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/shop/shop-content/shop-content.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/shop/shop-content/shop-content.component.ts ***!
  \************************************************************************/
/*! exports provided: ShopContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopContentComponent", function() { return ShopContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _home_page_shop_badges_shop_badges_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home-page/shop-badges/shop-badges.component */ "./src/app/components/home-page/shop-badges/shop-badges.component.ts");




var ShopContentComponent = /** @class */ (function () {
    function ShopContentComponent() {
        this.shopBadgesComponent = new _home_page_shop_badges_shop_badges_component__WEBPACK_IMPORTED_MODULE_3__["ShopBadgesComponent"]();
        this.galleryComponent = new _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]();
        this.transferPositionPageination = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ShopContentComponent.prototype.ngOnInit = function () {
    };
    ShopContentComponent.prototype.ngDoCheck = function () {
        this.transferPositionPageination.emit(this.pageinationWrap.nativeElement.offsetTop);
    };
    ShopContentComponent.prototype.upCount = function (event) {
        this.galleryComponent.findElement(this.shopBadgesComponent.getParent(event.target, "count-product-input"), 'input')[0].value++;
    };
    ShopContentComponent.prototype.downCount = function (event) {
        if (this.galleryComponent.findElement(this.shopBadgesComponent.getParent(event.target, "count-product-input"), 'input')[0].value > 1) {
            this.galleryComponent.findElement(this.shopBadgesComponent.getParent(event.target, "count-product-input"), 'input')[0].value--;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pageinationWrap'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ShopContentComponent.prototype, "pageinationWrap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShopContentComponent.prototype, "transferPositionPageination", void 0);
    ShopContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop-content',
            template: __webpack_require__(/*! ./shop-content.component.html */ "./src/app/components/shop/shop-content/shop-content.component.html"),
            styles: [__webpack_require__(/*! ./shop-content.component.scss */ "./src/app/components/shop/shop-content/shop-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShopContentComponent);
    return ShopContentComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/shop.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/shop/shop.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"shop\" class=\"mt-4 main_shop_content\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"top-direction\">\n                    <div class=\"dicrection-path\">\n                        <a routerLink=\"/home\"><span class=\"lnr lnr-home\"></span> {{'header.navBar.button1' | translate}}</a>\n                        <a routerLink=\"/shop\"> {{'header.navBar.button2.main' | translate}}</a>\n                        <span>{{_pathWay}}</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-4 col-md-3\" >\n                <div #fixedLeftBar class=\"left_bar_fixed\" [ngStyle]='_fixedLeftBar'>\n                    <div class=\"left_bar_shop_21\">\n                        <app-categories (changePath)=\"changePathParent($event)\"></app-categories>\n                    </div>\n                    <div class=\"left_bar_shop_22\">\n                        <h4 class=\"filter_header m-0\">{{'shop.filter' | translate}}</h4>\n                        <app-price></app-price>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-9\">\n                <div class=\"row\">\n                    <div class=\"col-12 pl-0 mobile_padding_none\">\n                        <div class=\"top_sorting_panel\">\n                            <app-top-sort></app-top-sort>\n                        </div>\n                    </div>\n                    <div class=\"col-12\">\n                        <div class=\"main_content_badges\">\n                            <div class=\"right_bar_shop_content_23\">\n                                <app-shop-content (transferPositionPageination)=\"getPositonPageination($event)\"></app-shop-content>\n                            </div> \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/shop/shop.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/shop/shop.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.main_shop_content .top-direction {\n  margin-bottom: 20px; }\n.main_shop_content .top-direction .dicrection-path {\n    padding: 10px;\n    background-color: #F2F2F2; }\n.main_shop_content .top-direction .dicrection-path a {\n      text-decoration: none;\n      color: #262626;\n      position: relative; }\n.main_shop_content .top-direction .dicrection-path a:after {\n        margin: 0 5px;\n        position: relative;\n        content: \"»\"; }\n.main_shop_content .top-direction .dicrection-path a span {\n        margin-right: 3px; }\n.main_shop_content .top-direction .dicrection-path span {\n      color: #616161; }\n.main_shop_content .sticky {\n  position: fixed;\n  margin: 0; }\n.main_shop_content .abs {\n  position: absolute;\n  bottom: 0px;\n  top: auto !important;\n  left: 15px !important; }\n.main_shop_content .left_bar_fixed .left_bar_shop_21 {\n  background-color: #fff;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n.main_shop_content .left_bar_fixed .left_bar_shop_22 .filter_header {\n  background-color: #689F38;\n  color: #fff;\n  padding: 10px; }\n@media (max-width: 576px) {\n  .mobile_padding_none {\n    padding-left: 15px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL3Nob3AuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNob3BcXHNob3AuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9DOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxmcmFtLXNob3Avc3JjXFxnbG9iYWxTQ1NTXFxnbG9iYWxTQ1NTLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDR2pCO0VBRVEsb0JBQW1CLEVBc0J0QjtBQXhCTDtJQUlZLGNBQWE7SUFDYiwwQkNKTSxFRHNCVDtBQXZCVDtNQU9nQixzQkFBcUI7TUFDckIsZUNOSDtNRE9HLG1CQUFrQixFQVNyQjtBQWxCYjtRQVdvQixjQUFZO1FBQ1osbUJBQWtCO1FBQ2xCLGFBQVksRUFDZjtBQWRqQjtRQWdCb0Isa0JBQWlCLEVBQ3BCO0FBakJqQjtNQW9CZ0IsZUNqQkgsRURrQkE7QUFyQmI7RUEwQlEsZ0JBQWU7RUFDZixVQUFTLEVBQ1Y7QUE1QlA7RUErQlEsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxxQkFBb0I7RUFDcEIsc0JBQW9CLEVBQ3JCO0FBbkNQO0VBc0NZLHVCQUFzQjtFQUN0QixnSEFBa0csRUFDckc7QUF4Q1Q7RUEyQ2dCLDBCQzlDRjtFRCtDRSxZQUFXO0VBQ1gsY0FBYSxFQUNoQjtBQU1iO0VBQ0k7SUFDSSw4QkFDSixFQUFDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Nob3Avc2hvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5tYWluX3Nob3BfY29udGVudCAudG9wLWRpcmVjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbiAgLm1haW5fc2hvcF9jb250ZW50IC50b3AtZGlyZWN0aW9uIC5kaWNyZWN0aW9uLXBhdGgge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjsgfVxuICAgIC5tYWluX3Nob3BfY29udGVudCAudG9wLWRpcmVjdGlvbiAuZGljcmVjdGlvbi1wYXRoIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICMyNjI2MjY7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgIC5tYWluX3Nob3BfY29udGVudCAudG9wLWRpcmVjdGlvbiAuZGljcmVjdGlvbi1wYXRoIGE6YWZ0ZXIge1xuICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGNvbnRlbnQ6IFwiwrtcIjsgfVxuICAgICAgLm1haW5fc2hvcF9jb250ZW50IC50b3AtZGlyZWN0aW9uIC5kaWNyZWN0aW9uLXBhdGggYSBzcGFuIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7IH1cbiAgICAubWFpbl9zaG9wX2NvbnRlbnQgLnRvcC1kaXJlY3Rpb24gLmRpY3JlY3Rpb24tcGF0aCBzcGFuIHtcbiAgICAgIGNvbG9yOiAjNjE2MTYxOyB9XG5cbi5tYWluX3Nob3BfY29udGVudCAuc3RpY2t5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW46IDA7IH1cblxuLm1haW5fc2hvcF9jb250ZW50IC5hYnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgbGVmdDogMTVweCAhaW1wb3J0YW50OyB9XG5cbi5tYWluX3Nob3BfY29udGVudCAubGVmdF9iYXJfZml4ZWQgLmxlZnRfYmFyX3Nob3BfMjEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1haW5fc2hvcF9jb250ZW50IC5sZWZ0X2Jhcl9maXhlZCAubGVmdF9iYXJfc2hvcF8yMiAuZmlsdGVyX2hlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODlGMzg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4OyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubW9iaWxlX3BhZGRpbmdfbm9uZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7IH0gfVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vZ2xvYmFsU0NTUy9leHRlbmRzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vZ2xvYmFsU0NTUy9nbG9iYWxTQ1NTJztcclxuICAgIFxyXG4ubWFpbl9zaG9wX2NvbnRlbnR7XHJcbiAgICAudG9wLWRpcmVjdGlvbnsgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAuZGljcmVjdGlvbi1wYXRoe1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGlnaFdheUJHO1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiwrtcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3RpY2t5IHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmFicyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OjE1cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgLmxlZnRfYmFyX2ZpeGVke1xyXG4gICAgICAgIC5sZWZ0X2Jhcl9zaG9wXzIxe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OjAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxlZnRfYmFyX3Nob3BfMjJ7XHJcbiAgICAgICAgICAgIC5maWx0ZXJfaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgIFxyXG59XHJcbkBtZWRpYSAjeyRjb2x9e1xyXG4gICAgLm1vYmlsZV9wYWRkaW5nX25vbmV7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAgMTVweCAhaW1wb3J0YW50XHJcbiAgICB9XHJcbn0iLCIkZ3JlZW46IzY4OUYzODtcclxuJGdyZWVuRGFyazojNTA4YzFjO1xyXG4kZ3JlZW5SR0JBOiM2ODlmMzg4YztcclxuJGRpc2FibGVkQnV0dG9uOiM5YmEyOTU7XHJcbiRoaWdoV2F5Qkc6I0YyRjJGMjtcclxuJGRhcms6IzI2MjYyNjtcclxuJGdyZXk6IzYxNjE2MTtcclxuJHJlZDogI0Y0NDMzNjtcclxuJHllbGxvdzogI0ZCQzAyRDtcclxuXHJcbiRjb2w6IFwiKG1heC13aWR0aDogNTc2cHgpXCI7XHJcbiRzbS1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogNzY3cHgpXCI7XHJcbiRzbS1kZXZpY2U6IFwiKG1heC13aWR0aDogNzY3cHgpIGFuZCAobWluLXdpZHRoOjU3N3B4KVwiO1xyXG4kbWQtZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDk5MXB4KVwiO1xyXG4kbWQtZGV2aWNlOiBcIihtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDo3NjhweClcIjtcclxuJGxnLWRldmljZTogXCIobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOjk5MnB4KVwiO1xyXG4keGwtZGV2aWNlTWF4OiBcIihtYXgtd2lkdGg6IDEyMDBweClcIjtcclxuJHhsLWRldmljZTogXCIobWluLXdpZHRoOiAxMjAxcHgpXCI7Il19 */"

/***/ }),

/***/ "./src/app/components/shop/shop.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/shop/shop.component.ts ***!
  \***************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShopComponent = /** @class */ (function () {
    function ShopComponent(render) {
        this.render = render;
        this._fixedLeftBar = { width: null, left: null, top: null };
    }
    ShopComponent.prototype.leftBarRes = function ($event) {
        this._fixedLeftBar.width = this.fixedLeftBar.nativeElement.parentNode.getBoundingClientRect().width - 30 + 'px';
    };
    ShopComponent.prototype.leftBarFixed = function ($event) {
        var headerHeight = document.querySelector('header').getBoundingClientRect().height, parent = this.fixedLeftBar.nativeElement.parentNode, parentBounding = this.fixedLeftBar.nativeElement.parentNode.getBoundingClientRect(), nativeElm = this.fixedLeftBar.nativeElement, nativeElmBounding = nativeElm.getBoundingClientRect(), footer = document.querySelector('footer');
        Object.assign(this._fixedLeftBar, {
            width: parentBounding.width - 30 + "px",
            left: parentBounding.left + 15 + "px",
            top: headerHeight + 5 + 'px'
        });
        if (window.matchMedia('(min-width: 577px)').matches) {
            if (window.scrollY > parent.offsetTop - headerHeight) {
                nativeElm.classList.add('sticky');
            }
            else {
                nativeElm.classList.remove('sticky');
            }
            if (document.querySelector('.abs')) {
                if (window.scrollY < footer.offsetTop -
                    nativeElmBounding.height + headerHeight - 30) {
                    nativeElm.classList.add('sticky');
                    nativeElm.classList.remove('abs');
                }
            }
            if (window.scrollY + nativeElmBounding.height + headerHeight > footer.offsetTop - 15) {
                nativeElm.classList.remove('sticky');
                nativeElm.classList.add('abs');
            }
        }
    };
    ShopComponent.prototype.ngOnInit = function () {
    };
    ShopComponent.prototype.getPositonPageination = function (event) {
        this._paginationTop = event;
    };
    ShopComponent.prototype.changePathParent = function (msg) {
        console.log(msg);
        this._pathWay = msg;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fixedLeftBar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ShopComponent.prototype, "fixedLeftBar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ShopComponent.prototype, "leftBarRes", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ShopComponent.prototype, "leftBarFixed", null);
    ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/components/shop/shop.component.html"),
            host: {
                '(window:scroll)': 'leftBarFixed($event)',
                '(window:resize)': 'leftBarRes($event)',
            },
            styles: [__webpack_require__(/*! ./shop.component.scss */ "./src/app/components/shop/shop.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/top-sort/top-sort.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/shop/top-sort/top-sort.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n    <div  class=\"right_bar_shop_top_22\">\n        <div class=\"filter_dropdown\">\n            <div class=\"sort_by_button\" appSortShopProducts >{{sortTxt}} <i class=\"lnr lnr-chevron-down\"></i></div>\n            <ul class=\"dropdownUl\" type=\"none\">\n                <li>\n                    <a href=\"javascript:void(0)\" (click)=\"sortProducts('default', $event)\" >{{'shop.sorting.default' | translate}}</a>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\" (click)=\"sortProducts('a-f', $event)\" >{{'shop.sorting.af' | translate}}</a>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\" (click)=\"sortProducts('f-a', $event)\" >{{'shop.sorting.fa' | translate}}</a>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\" (click)=\"sortProducts('lowest', $event)\" >{{'shop.sorting.lfirst' | translate}}</a>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\" (click)=\"sortProducts('highest', $event)\" >{{'shop.sorting.hfirst' | translate}}</a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"show_count\">\n            <div class=\"show_count_button\" appCountShopBadges>{{'shop.showTxt' | translate}} {{countBadgesVal}} <i class=\"lnr lnr-chevron-down\"></i></div>\n            <ul class=\"dropdownUlCount\" type=\"none\">\n                <li>\n                    <a href=\"javascript:void(0)\" (click)=\"countBadges('10', $event)\" >10</a>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\" (click)=\"countBadges('20', $event)\" >20</a>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\" (click)=\"countBadges('50', $event)\" >50</a>\n                </li>\n            </ul>\n        </div>\n    </div>  \n</ng-container>"

/***/ }),

/***/ "./src/app/components/shop/top-sort/top-sort.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/shop/top-sort/top-sort.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right_bar_shop_top_22 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 7px 10px;\n  background-color: #fff;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n  .right_bar_shop_top_22 .sort_by_button, .right_bar_shop_top_22 .show_count_button {\n    font-size: 15px;\n    padding: 6px;\n    cursor: pointer; }\n  .right_bar_shop_top_22 .sort_by_button:hover, .right_bar_shop_top_22 .show_count_button:hover {\n      background-color: #F2F2F2; }\n  .right_bar_shop_top_22 .sort_by_button i, .right_bar_shop_top_22 .show_count_button i {\n      font-size: 12px;\n      font-weight: 600;\n      margin-left: 2px; }\n  .right_bar_shop_top_22 .filter_dropdown {\n    position: relative; }\n  .right_bar_shop_top_22 .filter_dropdown .dropdownUl {\n      z-index: 222;\n      left: 0px;\n      right: auto;\n      position: absolute;\n      top: calc(100% + 10px);\n      padding: 0;\n      background-color: #fff;\n      width: 130px;\n      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n      visibility: hidden;\n      opacity: 0;\n      transition: all 0.4s cubic-bezier(0.87, -0.41, 0.19, 1.44);\n      -webkit-transform: scale(0.8);\n      transform: scale(0.8); }\n  .right_bar_shop_top_22 .filter_dropdown .dropdownUl a {\n        padding: 4px 10px;\n        color: #616161;\n        display: block;\n        text-decoration: none;\n        transition: .4s; }\n  .right_bar_shop_top_22 .filter_dropdown .dropdownUl a:hover {\n          background-color: #F2F2F2; }\n  .right_bar_shop_top_22 .filter_dropdown .showSortList {\n      opacity: 1;\n      visibility: visible;\n      -webkit-transform: scale(1);\n              transform: scale(1); }\n  .right_bar_shop_top_22 .show_count {\n    position: relative; }\n  .right_bar_shop_top_22 .show_count .dropdownUlCount {\n      z-index: 222;\n      left: auto;\n      right: 0px;\n      position: absolute;\n      top: calc(100% + 10px);\n      padding: 0;\n      background-color: #fff;\n      width: 80px;\n      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n      visibility: hidden;\n      opacity: 0;\n      transition: all 0.4s cubic-bezier(0.87, -0.41, 0.19, 1.44);\n      -webkit-transform: scale(0.8);\n      transform: scale(0.8); }\n  .right_bar_shop_top_22 .show_count .dropdownUlCount a {\n        padding: 4px 10px;\n        color: #616161;\n        display: block;\n        text-decoration: none;\n        transition: .4s; }\n  .right_bar_shop_top_22 .show_count .dropdownUlCount a:hover {\n          background-color: #F2F2F2; }\n  .right_bar_shop_top_22 .show_count .showCountList {\n      opacity: 1;\n      visibility: visible;\n      -webkit-transform: scale(1);\n              transform: scale(1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL3RvcC1zb3J0L0M6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXGZyYW0tc2hvcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hvcFxcdG9wLXNvcnRcXHRvcC1zb3J0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Nob3AvdG9wLXNvcnQvQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcZnJhbS1zaG9wL3NyY1xcZ2xvYmFsU0NTU1xcZ2xvYmFsU0NTUy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Nob3AvdG9wLXNvcnQvQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcZnJhbS1zaG9wL3NyY1xcZ2xvYmFsU0NTU1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxjQUFhO0VBQ2IsK0JBQThCO0VBQzlCLG9CQUFtQjtFQUNuQixrQkFBZ0I7RUFDaEIsdUJBQXNCO0VBQ3RCLGdIQUFrRyxFQXdDckc7RUE5Q0Q7SUFRUSxnQkFBZTtJQUNmLGFBQVk7SUFDWixnQkFBZSxFQVVsQjtFQXBCTDtNQVlZLDBCQ2RNLEVEZ0JUO0VBZFQ7TUFnQlksZ0JBQWU7TUFDZixpQkFBZ0I7TUFDaEIsaUJBQWdCLEVBQ25CO0VBbkJUO0lBc0JRLG1CQUFrQixFQVVyQjtFQWhDTDtNQXdCWSxhQUFZO01FN0JwQixVRjhCNkI7TUU3QjdCLFlGNkJtQztNRTVCbkMsbUJBQWtCO01BQ2xCLHVCQUFzQjtNQUN0QixXQUFVO01BQ1YsdUJBQXNCO01BQ3RCLGFGd0IwQztNRXZCMUMsZ0hBQStHO01BQy9HLG1CQUFrQjtNQUNsQixXQUFVO01BQ1YsMkRBQTBEO01BQzFELDhCQUE2QjtNQUM3QixzQkFBcUIsRUZtQmhCO0VBMUJUO1FFU1Esa0JBQWlCO1FBQ2pCLGVBQWM7UUFDZCxlQUFjO1FBQ2Qsc0JBQXFCO1FBQ3JCLGdCQUFlLEVBSWxCO0VGakJMO1VFZVksMEJEakJNLEVDa0JUO0VGaEJUO01BNEJZLFdBQVU7TUFDVixvQkFBbUI7TUFDbkIsNEJBQW1CO2NBQW5CLG9CQUFtQixFQUN0QjtFQS9CVDtJQWtDUSxtQkFBa0IsRUFVckI7RUE1Q0w7TUFvQ1ksYUFBWTtNRXpDcEIsV0YwQzhCO01FekM5QixXRnlDbUM7TUV4Q25DLG1CQUFrQjtNQUNsQix1QkFBc0I7TUFDdEIsV0FBVTtNQUNWLHVCQUFzQjtNQUN0QixZRm9DeUM7TUVuQ3pDLGdIQUErRztNQUMvRyxtQkFBa0I7TUFDbEIsV0FBVTtNQUNWLDJEQUEwRDtNQUMxRCw4QkFBNkI7TUFDN0Isc0JBQXFCLEVGK0JoQjtFQXRDVDtRRVNRLGtCQUFpQjtRQUNqQixlQUFjO1FBQ2QsZUFBYztRQUNkLHNCQUFxQjtRQUNyQixnQkFBZSxFQUlsQjtFRmpCTDtVRWVZLDBCRGpCTSxFQ2tCVDtFRmhCVDtNQXdDWSxXQUFVO01BQ1Ysb0JBQW1CO01BQ25CLDRCQUFtQjtjQUFuQixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Nob3AvdG9wLXNvcnQvdG9wLXNvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9nbG9iYWxTQ1NTL2V4dGVuZHMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9nbG9iYWxTQ1NTL2dsb2JhbFNDU1MnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9nbG9iYWxTQ1NTL21peGlucyc7XHJcblxyXG5cclxuXHJcbi5yaWdodF9iYXJfc2hvcF90b3BfMjJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6N3B4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzowIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgICAuc29ydF9ieV9idXR0b24sIC5zaG93X2NvdW50X2J1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hXYXlCRztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZmlsdGVyX2Ryb3Bkb3due1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAuZHJvcGRvd25VbHtcclxuICAgICAgICAgICAgei1pbmRleDogMjIyO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBzaG93TGlzdCgwcHgsIGF1dG8sIDEzMHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNob3dTb3J0TGlzdHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zaG93X2NvdW50e1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAuZHJvcGRvd25VbENvdW50e1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyMjI7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHNob3dMaXN0KGF1dG8sIDBweCwgODBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAuc2hvd0NvdW50TGlzdHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbiIsIiRncmVlbjojNjg5RjM4O1xyXG4kZ3JlZW5EYXJrOiM1MDhjMWM7XHJcbiRncmVlblJHQkE6IzY4OWYzODhjO1xyXG4kZGlzYWJsZWRCdXR0b246IzliYTI5NTtcclxuJGhpZ2hXYXlCRzojRjJGMkYyO1xyXG4kZGFyazojMjYyNjI2O1xyXG4kZ3JleTojNjE2MTYxO1xyXG4kcmVkOiAjRjQ0MzM2O1xyXG4keWVsbG93OiAjRkJDMDJEO1xyXG5cclxuJGNvbDogXCIobWF4LXdpZHRoOiA1NzZweClcIjtcclxuJHNtLWRldmljZU1heDogXCIobWF4LXdpZHRoOiA3NjdweClcIjtcclxuJHNtLWRldmljZTogXCIobWF4LXdpZHRoOiA3NjdweCkgYW5kIChtaW4td2lkdGg6NTc3cHgpXCI7XHJcbiRtZC1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogOTkxcHgpXCI7XHJcbiRtZC1kZXZpY2U6IFwiKG1heC13aWR0aDogOTkxcHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KVwiO1xyXG4kbGctZGV2aWNlOiBcIihtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6OTkycHgpXCI7XHJcbiR4bC1kZXZpY2VNYXg6IFwiKG1heC13aWR0aDogMTIwMHB4KVwiO1xyXG4keGwtZGV2aWNlOiBcIihtaW4td2lkdGg6IDEyMDFweClcIjsiLCJAbWl4aW4gc2hvd0xpc3QoJGxlZnQsICRyaWdodCwgJHdpZHRoKSB7XHJcbiAgICBsZWZ0OiRsZWZ0O1xyXG4gICAgcmlnaHQ6JHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiBjYWxjKDEwMCUgKyAxMHB4KTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6ICR3aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC44NywgLTAuNDEsIDAuMTksIDEuNDQpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICBhe1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjE2MTYxO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hXYXlCR1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/shop/top-sort/top-sort.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shop/top-sort/top-sort.component.ts ***!
  \****************************************************************/
/*! exports provided: TopSortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopSortComponent", function() { return TopSortComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopSortComponent = /** @class */ (function () {
    function TopSortComponent() {
        this.sortTxt = 'Sort by Default';
        this.countBadgesVal = '10';
    }
    TopSortComponent.prototype.ngOnInit = function () {
    };
    TopSortComponent.prototype.sortProducts = function (sortBy, e) {
        this.sortTxt = e.target.innerText;
    };
    TopSortComponent.prototype.countBadges = function (count, e) {
        this.countBadgesVal = count;
    };
    TopSortComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-sort',
            template: __webpack_require__(/*! ./top-sort.component.html */ "./src/app/components/shop/top-sort/top-sort.component.html"),
            styles: [__webpack_require__(/*! ./top-sort.component.scss */ "./src/app/components/shop/top-sort/top-sort.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopSortComponent);
    return TopSortComponent;
}());



/***/ }),

/***/ "./src/app/directives/count-badges-shop/count-shop-badges.directive.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/directives/count-badges-shop/count-shop-badges.directive.ts ***!
  \*****************************************************************************/
/*! exports provided: CountShopBadgesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountShopBadgesDirective", function() { return CountShopBadgesDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CountShopBadgesDirective = /** @class */ (function () {
    function CountShopBadgesDirective(elem, rendererCount) {
        this.elem = elem;
        this.rendererCount = rendererCount;
        this.isOpen = false;
    }
    CountShopBadgesDirective.prototype.passDataCount = function () {
        this.nextElementCount = this.elem.nativeElement.nextElementSibling;
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.rendererCount.setElementClass(this.nextElementCount, "showCountList", true);
        }
        else {
            this.rendererCount.setElementClass(this.nextElementCount, "showCountList", false);
        }
    };
    CountShopBadgesDirective.prototype.hideCountList = function (e) {
        if (!e.target.closest('.show_count_button') && this.nextElementCount) {
            this.isOpen = false;
            this.rendererCount.setElementClass(this.nextElementCount, "showCountList", false);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CountShopBadgesDirective.prototype, "passDataCount", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CountShopBadgesDirective.prototype, "hideCountList", null);
    CountShopBadgesDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appCountShopBadges]',
            host: {
                '(window:click)': 'hideCountList($event)',
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
    ], CountShopBadgesDirective);
    return CountShopBadgesDirective;
}());



/***/ }),

/***/ "./src/app/directives/sort-products-shop/sort-shop-products.directive.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/directives/sort-products-shop/sort-shop-products.directive.ts ***!
  \*******************************************************************************/
/*! exports provided: SortShopProductsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortShopProductsDirective", function() { return SortShopProductsDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortShopProductsDirective = /** @class */ (function () {
    function SortShopProductsDirective(elem, renderer) {
        this.elem = elem;
        this.renderer = renderer;
        this.isOpenSort = false;
    }
    SortShopProductsDirective.prototype.passData = function () {
        this.nextElement = this.elem.nativeElement.nextElementSibling;
        this.isOpenSort = !this.isOpenSort;
        if (this.isOpenSort) {
            this.renderer.setElementClass(this.nextElement, "showSortList", true);
        }
        else {
            this.renderer.setElementClass(this.nextElement, "showSortList", false);
        }
    };
    SortShopProductsDirective.prototype.hideSortList = function (e) {
        if (!e.target.closest('.sort_by_button') && this.nextElement) {
            this.isOpenSort = false;
            this.renderer.setElementClass(this.nextElement, "showSortList", false);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SortShopProductsDirective.prototype, "passData", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SortShopProductsDirective.prototype, "hideSortList", null);
    SortShopProductsDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSortShopProducts]',
            host: {
                '(window:click)': 'hideSortList($event)',
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
    ], SortShopProductsDirective);
    return SortShopProductsDirective;
}());



/***/ }),

/***/ "./src/app/services/auth-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/auth-service.service.ts ***!
  \**************************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthServiceService = /** @class */ (function () {
    function AuthServiceService(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    AuthServiceService.prototype.SignUp = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (result) {
            console.log(result);
        }).catch(function (error) {
            console.log(error.message);
        });
    };
    // Sign in with email/password
    AuthServiceService.prototype.SignIn = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (result) {
            _this.router.navigate(['/home']);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    AuthServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthServiceService);
    return AuthServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyA4pWyrnsCWwb6aegYHQicldeDK1fnSLzM",
        authDomain: "fram-shop.firebaseapp.com",
        databaseURL: "https://fram-shop.firebaseio.com",
        projectId: "fram-shop",
        storageBucket: "fram-shop.appspot.com",
        messagingSenderId: "787774203754"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ruala\Desktop\fram-shop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map