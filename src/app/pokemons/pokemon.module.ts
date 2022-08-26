import {NgModule} from "@angular/core";
import {PokemonsComponent} from "./list-pokemon/pokemons.component";
import {PokemonTypeColorPipe} from "./pipe/pokemon-type-color.pipe";
import {BorderCardDirective} from "./directives/border-card.directive";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {EditPokemonComponent} from "./edit-pokemon/edit-pokemon.component";
import {FormPokemonComponent} from "./edit-pokemon/form-pokemon/form-pokemon.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {PokemonRoutingModule} from "./pokemon-routing.module";
import {PokemonService} from "../service/pokemon-service/pokemon-service";
import {CreatePokemonComponent} from "./create-pokemon/create-pokemon.component";
import {RatingStarComponent} from "./rating-star/rating-star.component";
import {PreloadingComponent} from "../preloading/preloading.component";
import {ImageNotFoundDirective} from "./directives/image-not-found.directive";
import {SearchPokemonComponent} from "./search-pokemon/search-pokemon.component";
import {NgParticlesModule} from "ng-particles";
import {AlbumPokemonAnimationComponent} from "./album-pokemon-animation/album-pokemon-animation.component";

@NgModule(
  {
    declarations: [
      PokemonsComponent,
      PokemonTypeColorPipe,
      BorderCardDirective,
      DetailPokemonComponent,
      EditPokemonComponent,
      FormPokemonComponent,
      CreatePokemonComponent,
      RatingStarComponent,
      PreloadingComponent,
      ImageNotFoundDirective,
      SearchPokemonComponent,
      AlbumPokemonAnimationComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      NgParticlesModule,
      PokemonRoutingModule
    ],
    providers: [
      PokemonService
    ],
    bootstrap: []
  }
)
export class PokemonModule {

}
