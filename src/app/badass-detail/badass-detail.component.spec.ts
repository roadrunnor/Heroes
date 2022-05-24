import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadassDetailComponent } from './badass-detail.component';

describe('BadassDetailComponent', () => {
  let component: BadassDetailComponent;
  let fixture: ComponentFixture<BadassDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadassDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadassDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
