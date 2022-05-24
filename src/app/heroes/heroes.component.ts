import { Component, isDevMode, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  // The CLI generated three metadata properties:
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
    //console.log(isDevMode)
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
