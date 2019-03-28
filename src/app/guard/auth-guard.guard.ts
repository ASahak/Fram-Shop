import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import {AuthServiceService} from "../services/auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    public router:Router,
    public authService:AuthServiceService
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService._afAuth.authState.pipe(
        take(1),
        map(authState => !! authState),
        tap(auth=>{
          if(!auth){
              this.router.navigate(['/home'])
          }
        })
      )
  }
}
