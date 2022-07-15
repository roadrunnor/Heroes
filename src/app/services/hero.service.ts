import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Injectable({

  /**
   * This is metadata, providedIn: 'root', means that the HeroService is
   * visible throughout the application.
   */
  providedIn: 'root'
})

export class HeroService {

  constructor() {
  }

  /**
   * Next, to get the hero mock data, add a getHeroes() method that returns
   * the heroes from mock.heroes.ts.
   */

  getHeroes(): Hero[] {
    return HEROES;
  }

}


