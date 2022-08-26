import {AfterViewInit, Component, OnInit} from "@angular/core";
import * as M from "materialize-css";
import {AuthService} from "../service/pokemon-service/auth-service";
import {FormLoginDataType} from "../model/form-login.data.type";
import {Router} from "@angular/router";

@Component({
  selector: "login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.scss"]
})
export class LoginComponent implements OnInit, AfterViewInit {
  isLoading: boolean = false
  loginInfo: FormLoginDataType = new FormLoginDataType(
    "",
    ""
  )

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    M.updateTextFields()
  }

  submitForm() {
    console.log(this.loginInfo)
    this.authService.login(this.loginInfo).subscribe(
      (value) => {
        if (value) {
          M.toast({html: "Connexion réussie ", classes: "rounded green"})
          this.router.navigate(["/"])
        }
      },
      (error)=>{
        M.toast({html:"Connexion Echouée",classes:" rounded yellow"})
      }
    )
  }
}
