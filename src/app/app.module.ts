import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {PokemonModule} from "./pokemons/pokemon.module";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryData} from "./service/in-memory-data/in-memory-data";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./login/login.component";
import {IsSignedInGuard} from "./service/guard/is-signed-in.guard";
import {AuthService} from "./service/pokemon-service/auth-service";
import {IsNotSignedInGuard} from "./service/guard/is-not-signed-in.guard";
import {ValidateFormPokemonService} from "./service/validation/validate-form-pokemon.service";
import {NgParticlesModule} from "ng-particles";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PokemonModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryData, {dataEncapsulation: false}),
  ],
  providers: [
    IsSignedInGuard,
    IsNotSignedInGuard,
    ValidateFormPokemonService,
    AuthService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
