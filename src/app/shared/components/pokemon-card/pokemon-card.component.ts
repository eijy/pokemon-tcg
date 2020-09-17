import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";


// interfaces
import { cards } from "../../interfaces/cards";

@Component({
  selector: "app-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.sass"],
})
export class PokemonCardComponent implements OnInit {
  @Input() card: cards | undefined;
  constructor(private router: Router) {}
  ngOnInit() {}
  goToDetails(card: cards | undefined) {
    this.router.navigate([`details/${card?.id}`]);
  }
}
