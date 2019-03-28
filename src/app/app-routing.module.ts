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
  {path: "", redirectTo: '', pathMatch: 'full', component:HomePageComponent },
  {path: "home",  component:HomePageComponent},
  {path: "about-us", component:AboutUsComponent},
  {path: "contact", component:ContactComponent},
  {path: "partners", component:PartnersComponent},
  {path: "gallery", component:GalleryComponent},
  {path: "cart", component:CartComponent},
  {path: "my-account/:id", canActivate:[AuthGuardGuard],  component:MyAccountComponent},
  {path: "reset-password", component:ResetPasswordComponent},
  {path: "products/:id", component:ProductsComponent, pathMatch: 'full'},
  {path: "shop", component:ShopComponent},
  {path: "**", component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
