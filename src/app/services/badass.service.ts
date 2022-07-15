import { Injectable } from '@angular/core';
import { Badass } from "../badass";
import { BADASSES } from "../mock-badasses";

@Injectable({

  /**
   * This is metadata, providedIn: 'root', means that the HeroService is
   * visible throughout the application.
   */
  providedIn: 'root'
})
export class BadassService {

  constructor() { }

  /**
   * Next, to get the hero mock data, add a getHeroes() method that returns
   * the heroes from mock.heroes.ts.
   */
  getBadass(): Badass[] {
    return BADASSES;
  }
}
