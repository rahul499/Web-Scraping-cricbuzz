import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketliveComponent } from './cricketlive.component';

describe('CricketliveComponent', () => {
  let component: CricketliveComponent;
  let fixture: ComponentFixture<CricketliveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketliveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
