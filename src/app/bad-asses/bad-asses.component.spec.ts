import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadAssesComponent } from './bad-asses.component';

describe('BadAssesComponent', () => {
  let component: BadAssesComponent;
  let fixture: ComponentFixture<BadAssesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadAssesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadAssesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
