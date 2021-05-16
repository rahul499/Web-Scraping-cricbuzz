import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketscheduleComponent } from './cricketschedule.component';

describe('CricketscheduleComponent', () => {
  let component: CricketscheduleComponent;
  let fixture: ComponentFixture<CricketscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
