import {Injectable} from "@angular/core";
import * as Joi from '@hapi/joi';
import {PokemonService} from "../pokemon-service/pokemon-service";
import {Pokemon} from "../../model/pokemon/pokemon";
import {Observable} from "rxjs";

@Injectable()
export class ValidateFormPokemonService {
  pokemonSchema: Joi.Schema

  constructor(private pokemonService: PokemonService) {
    this.pokemonSchema = Joi.object<Pokemon>(
      {
        id: Joi.any(),
        name: Joi.string().pattern(/^[a-zA-Zàéèç]{1,25}$/).required(),
        hp: Joi.number().min(0).required(),
        cp: Joi.number().min(0).required(),
        picture: Joi.string().uri().required(),
        rarete: Joi.number().min(1).max(5).required(),
        types: Joi.any().required(),
        created: Joi.date().required()
      }
    )
  }

  public validate(pokemon: Pokemon): Joi.ValidationResult {
    let pokemonValidation: Joi.ValidationResult = this.pokemonSchema.validate(pokemon)
    return pokemonValidation
  }
}
