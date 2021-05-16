import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketnewsComponent } from './cricketnews.component';

describe('CricketnewsComponent', () => {
  let component: CricketnewsComponent;
  let fixture: ComponentFixture<CricketnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
