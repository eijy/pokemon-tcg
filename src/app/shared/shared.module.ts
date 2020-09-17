import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

//components
import {
  PokemonContainerComponent,
  PokemonCardComponent,
  PokemonSearchComponent,
} from "./components";

@NgModule({
  declarations: [
    PokemonContainerComponent,
    PokemonCardComponent,
    PokemonSearchComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [PokemonContainerComponent,PokemonCardComponent, PokemonSearchComponent],
})
export class SharedModule {}
