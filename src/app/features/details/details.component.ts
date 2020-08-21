import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonTcgService } from "src/app/shared";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.sass"],
})
export class DetailsComponent implements OnInit {
  card;
  constructor(
    private pokemonServices: PokemonTcgService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.pokemonServices
      .getCard(this.route.snapshot.paramMap.get("id"))
      .subscribe(
        (res) => {
          this.card = res.card;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
