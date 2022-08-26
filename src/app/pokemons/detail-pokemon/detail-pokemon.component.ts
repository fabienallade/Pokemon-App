import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../../model/pokemon/pokemon";
import * as M from "materialize-css";
import {PokemonService} from "../../service/pokemon-service/pokemon-service";
import {Observable} from "rxjs";

@Component({
  selector: "detail-pokemon",
  templateUrl: "detail-pokemon.component.html",
  styleUrls: ["detail-pokemon.component.scss"]
})
export class DetailPokemonComponent implements OnInit, AfterViewInit {
  pokemon: Pokemon | undefined
  modalController : any

  @ViewChild('modalRef') modalRef!: ElementRef

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"]
    this.pokemonService.getPokemon(id).subscribe(
      (pokemon: Pokemon) => {
        this.pokemon = pokemon
      }
    )
  }

  constructor(private router: Router, private route: ActivatedRoute, private pokemonService: PokemonService) {
  }

  ngAfterViewInit(): void {
    this.modalController = new M.Modal(this.modalRef.nativeElement, {})
  }

  goBack() {
    this.router.navigate(["/"])
  }

  updatePokemon(pokemon: Pokemon) {
    this.router.navigate([`/pokemon/edit`, pokemon.id])
  }

  deletePokemon($event?: Event) {
    let supress: boolean = confirm("Etes vous sur de vouloir supprimer le pokemon")
    if (supress) {
      this.pokemonService.deletePokemon(this.pokemon!).subscribe(
        (value) => {
          M.toast({
            html: `Opération de suppression réussie de ${this.pokemon!.name}`,
            classes: "green rounded",
            activationPercent: 0.5
          })
          this.router.navigate([`/pokemon/all`])
        }
      )
    }
  }

  // openModal() {
  //   this.modalController.open()
  // }
}
