import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PokemonCardComponent } from "./pokemon-card.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("PokemonCardComponent", () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonCardComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    component.card = {
      id: "pl2-103",
      name: "Alakazam 4",
      nationalPokedexNumber: 65,
      imageUrl: "https://images.pokemontcg.io/pl2/103.png",
      imageUrlHiRes: "https://images.pokemontcg.io/pl2/103_hires.png",
      types: ["Psychic"],
      supertype: "Pokémon",
      subtype: "Level Up",
      ability: {
        name: "Damage Switch",
        text:
          "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon SP to another of your Pokémon SP. This power can't be used if Alakazam 4 is affected by a Special Condition.",
        type: "Poké-Power",
      },
      hp: "100",
      retreatCost: ["Colorless", "Colorless"],
      convertedRetreatCost: 2,
      number: "103",
      artist: "Ryo Ueda",
      rarity: "Rare Holo Lv.X",
      series: "Platinum",
      set: "Rising Rivals",
      setCode: "pl2",
      text: [
        "Put this card onto your Active Alakazam 4. Alakazam 4 LV.X can use any attack, Poké-Power, or Poké-Body from its previous Level.",
      ],
      attacks: [
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: "Mind Shock",
          text:
            "This attack's damage isn't affected by Weakness or Resistance.",
          damage: "50",
          convertedEnergyCost: 3,
        },
      ],
      weaknesses: [{ type: "Psychic", value: "×2" }],
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
