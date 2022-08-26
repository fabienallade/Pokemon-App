import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../pokemon-service/auth-service";

@Injectable()
export class IsSignedInGuard implements CanActivate {
  lol: boolean = false

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree>
    | boolean | UrlTree {
    if (!this.authService.isLogin()) {
      this.router.navigate(["/login"])
    }

    return true;
  }

}
