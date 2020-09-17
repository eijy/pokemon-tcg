import { Component, OnInit, Input } from "@angular/core";

//interfaces
import { cards } from "../../interfaces/cards";

@Component({
  selector: "app-pokemon-container",
  templateUrl: "./pokemon-container.component.html",
  styleUrls: ["./pokemon-container.component.sass"],
})
export class PokemonContainerComponent implements OnInit {
  @Input() result: cards[] | undefined;
  constructor() {}

  ngOnInit() {}
}
