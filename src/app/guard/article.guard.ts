import { Injectable } from "@angular/core";
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable,of } from "rxjs";
@Injectable({
      providedIn: 'root'
})
export class ArticleGuard implements CanActivate{
      constructor(){}
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
          return of( false)
      }
}