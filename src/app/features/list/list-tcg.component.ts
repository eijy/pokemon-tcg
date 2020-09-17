import { Component, OnInit } from "@angular/core";
import { PokemonTcgService } from "../../shared/services";
import { Observable } from "rxjs";

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
interface IRes {
  cards: cards[]
}
@Component({
  selector: "app-list-tcg",
  templateUrl: "./list-tcg.component.html",
  styleUrls: ["./list-tcg.component.sass"],
})
export class ListTcgComponent implements OnInit {
  list: cards[] | undefined;
  listAux: cards[] | undefined;
  constructor(private pokemonServices: PokemonTcgService) {}

  ngOnInit() {
    this.pokemonServices.list().subscribe(
      (res: IRes) => {
        this.list = res.cards.sort((a:cards, b:cards) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        this.listAux = [...this.list];
      },
      (err: Object) => {
        console.log(err);
      }
    );
  }
  onChange(event) {
    this.listAux = this.list.filter((item) => {
      return item.name.toLowerCase().includes(event.toLowerCase()) && item;
    });
  }
}
