import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

//components
import { PokemonContainerComponent, PokemonCardComponent } from "./components";

@NgModule({
  declarations: [PokemonContainerComponent, PokemonCardComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [PokemonContainerComponent],
})
export class SharedModule {}
