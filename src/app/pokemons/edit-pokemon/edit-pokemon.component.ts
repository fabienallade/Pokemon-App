import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../../model/pokemon/pokemon";
import {PokemonService} from "../../service/pokemon-service/pokemon-service";
import {FormActionType} from "../../model/form-action-type";

@Component({
    selector: "edit-pokemon",
    templateUrl: "edit-pokemon.component.html",
    styleUrls: ["edit-pokemon.component.scss"]
  }
)
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined
  formTypeAction: FormActionType

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"]
    this.pokemonService.getPokemon(id).subscribe(
      (pokemon: Pokemon) => {
        this.pokemon = pokemon
      }
    )
  }

  constructor(private router: Router, private route: ActivatedRoute, private pokemonService: PokemonService) {
    this.formTypeAction = FormActionType.EDIT
  }
}
