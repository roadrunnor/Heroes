import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlecasePipeComponent } from './titlecase-pipe.component';

describe('TitlecasePipeComponent', () => {
  let component: TitlecasePipeComponent;
  let fixture: ComponentFixture<TitlecasePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlecasePipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlecasePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
