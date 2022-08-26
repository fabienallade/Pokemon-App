import {Injectable} from "@angular/core";
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";
import {POKEMONS} from "../../model/pokemon/mock-pokemon";

@Injectable()
export class InMemoryData implements InMemoryDbService {
  createDb(): {} | Observable<{}> | Promise<{}> {
    return {
      pokemons: POKEMONS
    };
  }

}
