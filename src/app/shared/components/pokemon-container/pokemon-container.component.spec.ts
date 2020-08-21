import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PokemonContainerComponent } from "./pokemon-container.component";
import { PokemonCardComponent } from "../pokemon-card";

describe("PokemonContainerComponent", () => {
  let component: PokemonContainerComponent;
  let fixture: ComponentFixture<PokemonContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonContainerComponent, PokemonCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
