import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-pokemon-search",
  templateUrl: "./pokemon-search.component.html",
  styleUrls: ["./pokemon-search.component.sass"],
})
export class PokemonSearchComponent implements OnInit {
  @Output() onChangeHandler = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChange(changes) {
    this.onChangeHandler.emit(changes);
  }
}
