import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './guard/auth-guard.guard';
// Block AllPages
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
// ________________________
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { PartnersComponent } from './components/partners/partners.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CartComponent } from './components/cart/cart.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProductsComponent } from './components/products/products.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {path: "", redirectTo: '', pathMatch: 'full', component:HomePageComponent , data: { title: 'Fram Shop' }},
  {path: "",  component:HomePageComponent, data: { title: 'Fram Shop' }},
  {path: "about-us", component:AboutUsComponent, data: { title: 'About Us' }},
  {path: "contact", component:ContactComponent, data: { title: 'Contact Us' }},
  {path: "partners", component:PartnersComponent, data: { title: 'Our Partners' }},
  {path: "gallery", component:GalleryComponent, data: { title: 'Gallery' }},
  {path: "cart", canActivate:[AuthGuardGuard], component:CartComponent, data: { title: 'My Cart' }},
  {path: "my-account/:id", canActivate:[AuthGuardGuard],  component:MyAccountComponent, data: { title: 'My Account' }},
  {path: "reset-password", component:ResetPasswordComponent, data: { title: 'Reset Password' }},
  {path: "products/:id", component:ProductsComponent, pathMatch: 'full', data: { title: 'Individual Product' }},
  {path: "shop", component:ShopComponent, data: { title: 'Shop' }},
  {path: "**", component:NotFoundPageComponent, data: { title: 'Not Fount' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
