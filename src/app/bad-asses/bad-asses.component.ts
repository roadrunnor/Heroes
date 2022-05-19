import { Component, OnInit } from '@angular/core';
import { Bad_ass } from '../bad_ass';

@Component({
  selector: 'app-bad-asses',
  templateUrl: './bad-asses.component.html',
  styleUrls: ['./bad-asses.component.scss']
})
export class BadAssesComponent implements OnInit {

  //bad_ass = 'MentalDentist';
  bad_ass: Bad_ass = {
    id: 1,
    name: 'MentalDentist',
    isBold: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
