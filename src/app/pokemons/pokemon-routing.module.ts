import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PokemonsComponent} from "./list-pokemon/pokemons.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {EditPokemonComponent} from "./edit-pokemon/edit-pokemon.component";
import {IsSignedInGuard} from "../service/guard/is-signed-in.guard";
import {CreatePokemonComponent} from "./create-pokemon/create-pokemon.component";
import {AlbumPokemonAnimationComponent} from "./album-pokemon-animation/album-pokemon-animation.component";

const pokemonRoutes: Routes = [
  {
    path: "pokemon",
    canActivate: [IsSignedInGuard],
    children: [
      {
        path: "", redirectTo: "pokemon/all",
        pathMatch: "full"
      },
      {
        path: "all",
        component: PokemonsComponent
      }, {
        path: "album",
        component: AlbumPokemonAnimationComponent
      },
      {
        path: "new",
        component: CreatePokemonComponent
      },
      {
        path: ":id",
        component: DetailPokemonComponent
      },
      {
        path: "edit/:id",
        component: EditPokemonComponent
      }
    ]
  }
]

@NgModule(
  {
    imports: [
      RouterModule.forRoot(pokemonRoutes),
    ],
    exports: [RouterModule]
  }
)
export class PokemonRoutingModule {

}
