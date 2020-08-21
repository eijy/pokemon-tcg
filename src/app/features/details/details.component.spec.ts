import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { PokemonTcgService } from "../../shared/services";
import { ActivatedRoute, Router } from "@angular/router";
import { DetailsComponent } from "./details.component";
import { RouterTestingModule } from "@angular/router/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { of, Observable } from "rxjs";

import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("DetailsComponent", () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let pokemonService: PokemonTcgService;
  let router: ActivatedRoute;
  let httpTestingController: HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: "pl2-103" }),
            snapshot: {
              parent: {
                params: {
                  id: 1,
                },
              },
              paramMap: {
                get(name: string): string {
                  return "";
                },
              },
            },
          },
        },
        {
          provide: PokemonTcgService,
          useValue: {
            getCard: () => of({ id: "pl2-103", name: "id" }),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    httpTestingController = TestBed.get(HttpTestingController);
    pokemonService = TestBed.get(PokemonTcgService);
  }));

  afterEach(() => {
    httpTestingController.verify();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;

    pokemonService = TestBed.get(PokemonTcgService);
    router = TestBed.get(Router);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
