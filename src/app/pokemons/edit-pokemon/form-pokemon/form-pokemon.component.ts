import {AfterViewInit, Component, Input, OnInit} from "@angular/core";
import {Pokemon} from "../../../model/pokemon/pokemon";
import {ActivatedRoute, Router} from "@angular/router";
import * as M from "materialize-css";
import {PokemonService} from "../../../service/pokemon-service/pokemon-service";
import {FormActionType} from "../../../model/form-action-type";
import {ValidateFormPokemonService} from "../../../service/validation/validate-form-pokemon.service";

@Component({
  selector: "form-pokemon",
  templateUrl: "form-pokemon.component.html",
  styleUrls: ["form-pokemon.component.scss"]
})
export class FormPokemonComponent implements OnInit, AfterViewInit {
  @Input() pokemon: Pokemon | any
  @Input() action !: FormActionType
  types: any = null

  constructor(private route: ActivatedRoute, private router: Router,
              private pokemonService: PokemonService, private validateFormPokemonService: ValidateFormPokemonService) {

  }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypes()
    if (!this.checkFormType()) {
      this.pokemonService.getPokemons().subscribe(
        (value) => {
          this.pokemon.id = value.length + 1
        }
      )
    }
  }


  submitForm() {
    let validate = this.validateFormPokemonService.validate(this.pokemon)
    if (validate.error != undefined) {
      M.toast({html: validate.error.message})
      return
    }
    if (this.checkFormType()) {
      this.editPokemon(this.pokemon)
    } else {
      this.createPokemon(this.pokemon)
    }
  }

  editPokemon(pokemon: Pokemon) {
    this.pokemonService.updatePokemon(this.pokemon).subscribe(
      (pokemon) => {
        this.router.navigate(["/pokemon/" + this.pokemon.id])
        M.toast({
          html: `Opération de modification réussie de ${this.pokemon!.name}`,
          classes: "green rounded",
          activationPercent: 0.5
        })
      }
    )
  }

  createPokemon(pokemon: Pokemon) {
    this.pokemonService.createPokemon(this.pokemon).subscribe(
      (pokemon) => {
        this.router.navigate(["/pokemon/all"])
        M.toast({
          html: `Opération d'ajout réussie de ${this.pokemon!.name}`,
          classes: "green rounded",
          activationPercent: 0.5
        })
      }
    )
  }

  ngAfterViewInit() {
    M.updateTextFields()
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type)
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false
    }
    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false
    }
    return true
  }

  selectType($event: any, type: string) {
    let checked = $event.target.checked;
    if (checked) {
      this.pokemon.types.push(type)
    } else {
      this.pokemon.types = this.pokemon.types.filter((value: string) => value !== type)
    }
  }

  checkFormType() {
    return this.action == FormActionType.EDIT;
  }

  ratingUpdated($event: Event) {
    this.pokemon.rarete = $event
  }
}
