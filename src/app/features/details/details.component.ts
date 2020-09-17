import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonTcgService } from "src/app/shared";
import { cards } from "../../shared/interfaces/cards"

interface card {
  card: cards
}

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.sass"],
})
export class DetailsComponent implements OnInit {
  card: cards | undefined;
  constructor(
    private pokemonServices: PokemonTcgService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get("id") || "";
    this.pokemonServices
      .getCard(id)
      .subscribe(
        (res: card) => {
          this.card = res.card;
        },
        (err: Object) => {
          console.log(err);
        }
      );
  }
}
