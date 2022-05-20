import { Component, isDevMode, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


/**
 * @Component is a decorator function that specifies the Angular 
 * metadata for the component.
 */
@Component({
  // The CLI generated three metadata properties:
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  /**
   * Show the hero by [Data Binding]
   * Open the heroes.component.html template file. 
   * Add a data binding to the new hero property.
   */
  //hero = 'Windstorm';

  /**
   * Refactor the component's hero property to be of type Hero. 
   * Initialize it with an id of 1 and the name Windstorm.
   * 
   * The page no longer displays properly because you changed 
   * the hero from a string to an object : error [object Object].
   */
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    isBold: false
  };

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
