import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ListTcgComponent, DetailsComponent } from "./features";
import { SharedModule } from "./shared/shared.module";
@NgModule({
  declarations: [AppComponent, ListTcgComponent, DetailsComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  exports: [SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
