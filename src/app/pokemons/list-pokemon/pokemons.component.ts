import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Pokemon} from "../../model/pokemon/pokemon";
import {Router} from "@angular/router";
import {PokemonService} from "../../service/pokemon-service/pokemon-service";
import {FormSearchDataType} from "../../model/form-search.data.type";
import {AuthService} from "../../service/pokemon-service/auth-service";

@Component({
  selector: "list-pokemon",
  templateUrl: "pokemon.component.html",
  styleUrls: ["pokemon.component.scss"]
})
export class PokemonsComponent implements OnInit, AfterViewInit {
  pokemons: Pokemon[]
  searchFormData: FormSearchDataType = new FormSearchDataType("", 0)

  @ViewChild("toolTip") toolTip!: ElementRef

  @ViewChild("deconnect") deconnect !: ElementRef

  constructor(private router: Router,
              private pokemonService: PokemonService, private authService: AuthService) {
    this.pokemons = []
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(
      (pokemons: Pokemon[]) => {
        this.pokemons = pokemons
      },
    )
  }

  selectPokemon(pokemon: Pokemon) {
    this.router.navigate([`/pokemon/`, pokemon.id])
  }

  ngAfterViewInit(): void {
    M.Tooltip.init(this.toolTip.nativeElement, {})
    M.FloatingActionButton.init(this.deconnect.nativeElement, {direction: "top"})
  }

  ratingUpdated($event: Event) {
  }

  submitSearch($event: any) {
    this.pokemonService.getPokemons().subscribe(
      (pokemons: Pokemon[]) => {
        this.pokemons = this.pokemonService.filterByTypeAndRarete(pokemons, $event)
      },
    )
  }

  resetForm($event: any) {
    this.pokemonService.getPokemons().subscribe((value) => {
      this.pokemons = value
    })
  }

  logout() {
    this.authService.logOut()
    M.toast({html: "Deconnexion réussi avec succes"})
    this.router.navigate(['/login'])
  }
}
