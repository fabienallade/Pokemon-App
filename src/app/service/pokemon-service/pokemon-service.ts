import {Injectable} from "@angular/core";
import {Pokemon} from "../../model/pokemon/pokemon";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {FormSearchDataType} from "../../model/form-search.data.type";

@Injectable()
export class PokemonService {
  private pokemonsUrl = "api/pokemons"

  constructor(private httpClient: HttpClient) {
  }

  private log(info: string) {
    console.log(info)
  }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(error)
      this.log(`${operation} failed : ${error.message}`)
      return of(result as T)
    }
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_ => this.log(`fetched pokemons`)),
      catchError(this.handleError(`getPokemons`, []))
    )
  }

  createPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.httpClient.post<Pokemon>(this.pokemonsUrl, pokemon).pipe(
      tap(_ => this.log(`added pokemon`)),
      catchError(this.handleError<Pokemon>(`added Pokemon id=${pokemon.id}`))
    )
  }

  getPokemon(id: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(this.pokemonsUrl + `/${id}`).pipe(
      tap(_ => this.log(`feched pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    )
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.httpClient.put<Pokemon>(this.pokemonsUrl + `/${pokemon.id}`, pokemon).pipe(
      tap(_ => this.log(`update pokemon id=${pokemon.id}`)),
      catchError(this.handleError<Pokemon>(`update pokemon id=${pokemon.id}`, pokemon))
    )
  }

  deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.httpClient.delete<Pokemon>(this.pokemonsUrl + `/${pokemon.id}`).pipe(
      tap(_ => this.log(`delete pokemon id=${pokemon.id}`)),
      catchError(this.handleError<Pokemon>(`delete id=${pokemon.id}`, pokemon))
    )
  }

  filterByTypeAndRarete(pokemons: Pokemon[], filterData: FormSearchDataType): Pokemon[] {
    return pokemons.filter((value) => {
      if (filterData.rarete != 0 && filterData.type != "") {
        return value.types.includes(filterData.type) && value.rarete == filterData.rarete
      } else if (filterData.rarete != 0) {
        return value.rarete == filterData.rarete
      } else if (filterData.type !== "") {
        return value.types.includes(filterData.type)
      }
      return true
    })
  }

  // getPokemons(): Pokemon[] {
  //   return POKEMONS
  // }

  // getPokemon(id: number) {
  //   return this.getPokemons().find(value => value.id == id)
  // }

  getPokemonTypes(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Vol', 'Poison']
  }
}
