import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {PokemonService} from "../../service/pokemon-service/pokemon-service";
import {FormSearchDataType} from "../../model/form-search.data.type";

@Component({
  selector: "search-pokemon",
  templateUrl: "search-pokemon.component.html",
  styleUrls: ["search-pokemon.component.scss"]
})
export class SearchPokemonComponent implements OnInit, AfterViewInit {
  @ViewChild("selectTypeInput") selectTypeInput !: ElementRef
  @ViewChild("rareteFormSelect") rareteFormSelect!: ElementRef
  @Output() submitSearch = new EventEmitter()
  @Output() resetForm = new EventEmitter()
  @Input("searchFormData") searchFormData: FormSearchDataType = new FormSearchDataType("",0)
  pokemonTypes: any = {}

  constructor(private pokemonService: PokemonService) {
  }

  ngAfterViewInit(): void {
    M.FormSelect.init(this.selectTypeInput.nativeElement, {})
    M.FormSelect.init(this.rareteFormSelect.nativeElement, {})
  }

  ngOnInit(): void {
    this.pokemonTypes = this.pokemonService.getPokemonTypes()
  }

  onSubmit() {
    this.submitSearch.emit(this.searchFormData)
  }

  onResetForm() {
    this.resetForm.emit(this.searchFormData)
  }
}
