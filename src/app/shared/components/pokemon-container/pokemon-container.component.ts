import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pokemon-container",
  templateUrl: "./pokemon-container.component.html",
  styleUrls: ["./pokemon-container.component.sass"],
})
export class PokemonContainerComponent implements OnInit {
  @Input() result;
  constructor() {}

  ngOnInit() {}
}
