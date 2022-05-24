import { Component, OnInit } from '@angular/core';
import { Badass } from '../badass';
import { BADASSES } from '../mock-badasses';

@Component({
  selector: 'app-bad-asses',
  templateUrl: './badasses.component.html',
  styleUrls: ['./badasses.component.scss']
})
export class BadAssesComponent implements OnInit {

  badasses = BADASSES;
  selectedBadass?: Badass;


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(badass: Badass): void {
    this.selectedBadass = badass;
  }
}
