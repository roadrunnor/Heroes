import { Component } from '@angular/core';

/**
 * @Component is a decorator function that specifies the Angular metadata
 *  for the component.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title_hero = 'Tower of Heroes';
  title_badass = 'Tower of Bad*sses';

}
