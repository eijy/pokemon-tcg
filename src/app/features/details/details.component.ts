import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonTcgService } from "src/app/shared";

interface cards {
  id: string;
  name: string;
  nationalPokedexNumber: number;
  imageUrl: string;
  imageUrlHiRes: string;
  types: Array<string>;
  supertype: string;
  subtype: string;
  evolvesFrom: string;
  hp: string;
  retreatCost: Array<string>;
  number: string;
  artist: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  attacks: Array<object>;
  weakness: Array<object>;
}
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
    this.pokemonServices
      .getCard(this.route.snapshot.paramMap.get("id"))
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
