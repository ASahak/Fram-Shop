import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Block AllPages
import { HeaderComponent } from './components/header/header.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { FooterComponent } from './components/footer/footer.component';
// ________________________

// Home Page components 
import { HomePageComponent } from './components/home-page/home-page.component';
import { SliderComponent } from './components/home-page/slider/slider.component';
import { ServicesPartComponent } from './components/home-page/services-part/services-part.component';
import { ShopCategoriesComponent } from './components/home-page/shop-categories/shop-categories.component';
import { ShopBadgesComponent } from './components/home-page/shop-badges/shop-badges.component';
import { PartnersHomeComponent } from './components/home-page/partners-home/partners-home.component';
// ______________________________

import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { PartnersComponent } from './components/partners/partners.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CartComponent } from './components/cart/cart.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { ProfileSettingsComponent } from './components/my-account/profile-settings/profile-settings.component';
import { AccountSettingsComponent } from './components/my-account/account-settings/account-settings.component';
import { LoginFormComponent } from './components/header/login-form/login-form.component';
import { RegisterFormComponent } from './components/header/register-form/register-form.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProductsComponent } from './components/products/products.component';
import { ShopComponent } from './components/shop/shop.component';
import { CategoriesComponent } from './components/shop/categories/categories.component';
import { TopSortComponent } from './components/shop/top-sort/top-sort.component';
import { ShopContentComponent } from './components/shop/shop-content/shop-content.component';

// Directives
import { SortShopProductsDirective } from './directives/sort-products-shop/sort-shop-products.directive';
import { CountShopBadgesDirective } from './directives/count-badges-shop/count-shop-badges.directive';
import { PriceComponent } from './components/shop/filter/price/price.component';
// _______________

// Plugins

import { Ng5SliderModule } from 'ng5-slider';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ImageCropperComponent, CropperSettings } from 'ngx-img-cropper';

// ____________________

// Firebase____________________
import {AngularFireModule} from "@angular/fire"
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireDatabaseModule} from "@angular/fire/database"
import { environment } from '../environments/environment';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import { AngularFireStorageModule } from '@angular/fire/storage';
// ______________________

// NGRX___________________
import { StoreModule } from '@ngrx/store';
import { methodReducer } from './store/reducers/methods.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MethodsEffects } from './store/effects/methods.effects';
// ______________________
import { ProductPricePipe } from './pipes/product-price.pipe';
import { ProductStarsPipe } from './pipes/product-stars.pipe';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NotFoundPageComponent,
        HomePageComponent,
        FooterComponent,
        SliderComponent,
        ServicesPartComponent,
        ShopCategoriesComponent,
        ShopBadgesComponent,
        PartnersHomeComponent,
        AboutUsComponent,
        ContactComponent,
        PartnersComponent,
        GalleryComponent,
        CartComponent,
        MyAccountComponent,
        ProfileSettingsComponent,
        AccountSettingsComponent,
        LoginFormComponent,
        RegisterFormComponent,
        ResetPasswordComponent,
        ProductsComponent,
        ShopComponent,
        CategoriesComponent,
        TopSortComponent,
        ShopContentComponent,
        SortShopProductsDirective,
        CountShopBadgesDirective,
        PriceComponent,
        ImageCropperComponent,
        ProductPricePipe,
        ProductStarsPipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        Ng5SliderModule,
        HttpClientModule,
        
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        StoreModule.forRoot({
          _methods:methodReducer,
        }),
        StoreDevtoolsModule.instrument({ 
          maxAge: 25,
          logOnly: environment.production 
        }),
        EffectsModule.forRoot([MethodsEffects]),
        ReactiveFormsModule,
        AngularFireStorageModule
    ],
    providers: [
      AngularFirestore,
      MethodsEffects,
      Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
