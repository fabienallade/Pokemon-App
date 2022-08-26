import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LoginComponent} from "./login/login.component";
import {IsSignedInGuard} from "./service/guard/is-signed-in.guard";
import {IsNotSignedInGuard} from "./service/guard/is-not-signed-in.guard";

const routes: Routes = [
  {
    path: "", pathMatch: "full", redirectTo: "/pokemon/all"
  },
  {
    path: "login", component: LoginComponent, canActivate: [IsNotSignedInGuard]
  },
  {
    path: "**", pathMatch: "full", component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
