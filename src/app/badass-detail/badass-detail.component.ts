import { Component, Input, OnInit } from '@angular/core';
import { Badass } from '../badass';

@Component({
  selector: 'app-badass-detail',
  templateUrl: './badass-detail.component.html',
  styleUrls: ['./badass-detail.component.scss']
})
export class BadassDetailComponent implements OnInit {

  @Input() badass?: Badass;

  constructor() { }

  ngOnInit(): void {
  }

}
