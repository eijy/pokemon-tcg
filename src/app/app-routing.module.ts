import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListTcgComponent, DetailsComponent } from "./features";

const routes: Routes = [
  {
    path: "",
    component: ListTcgComponent,
  },
  {
    path: "details/:id",
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
