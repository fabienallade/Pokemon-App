import {Injectable} from "@angular/core";
import {FormLoginDataType} from "../../model/form-login.data.type";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
  EMAIL: string = "alladefabien@gmail.com"
  PASSWORD: string = "fabien"

  login(loginFormData: FormLoginDataType): Observable<boolean> {
    return new Observable((observer) => {
      let isAuhtentificate: boolean = false

      if (loginFormData.email === this.EMAIL && loginFormData.password == this.PASSWORD) {
        localStorage.setItem("app_login", "yes")
        observer.next(true)
      } else {
        isAuhtentificate = false
        observer.error("Login error")
      }
      observer.complete()
    })
  }

  isLogin(): boolean {
    return localStorage.getItem("app_login") != null
  }

  logOut(){
    localStorage.clear()
  }
}
