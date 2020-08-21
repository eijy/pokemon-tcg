import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.sass"],
})
export class PokemonCardComponent implements OnInit {
  @Input() card;
  constructor(private router: Router) {}
  ngOnInit() {}
  goToDetails(card) {
    // console.log(card);
    // let cardAux = {
    //   ...card,
    //   attacks: JSON.stringify(card.attacks),
    //   resistances: JSON.stringify(card.resistances),
    //   weaknesses: JSON.stringify(card.weaknesses),
    // };
    this.router.navigate([`details/${card.id}`]);
  }
}
