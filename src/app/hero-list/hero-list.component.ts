import { Component, OnInit } from '@angular/core';
import {HeroService} from "../services/hero.service";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  /**
   * Dependency injection in Angular
   * @param heroService
   */
  constructor( heroService : HeroService) { }

  ngOnInit(): void {
  }

}
