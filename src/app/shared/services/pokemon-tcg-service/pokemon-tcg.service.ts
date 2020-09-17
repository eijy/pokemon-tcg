import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";

import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class PokemonTcgService {
  constructor(private httpClient: HttpClient) {}
  list(): any {
    return this.httpClient.get(`${environment.url}/cards`);
  }
  getCard(id: number): any {
    return this.httpClient.get(`${environment.url}/cards/${id}`);
  }
}
