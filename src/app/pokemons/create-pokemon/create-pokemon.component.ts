import {AfterViewInit, Component, OnInit} from "@angular/core";
import {Pokemon} from "../../model/pokemon/pokemon";
import {FormActionType} from "../../model/form-action-type";

@Component({
  selector: "create-pokemon",
  templateUrl: "create-pokemon.component.html",
  styleUrls: ["create-pokemon.component.scss"]
})
export class CreatePokemonComponent implements OnInit, AfterViewInit {
  pokemon: Pokemon
  formTypeAction: FormActionType

  constructor() {
    this.pokemon = new Pokemon()
    this.pokemon.name = ""
    this.formTypeAction = FormActionType.CREATE
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

}
