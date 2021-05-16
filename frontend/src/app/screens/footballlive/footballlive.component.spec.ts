import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballliveComponent } from './footballlive.component';

describe('FootballliveComponent', () => {
  let component: FootballliveComponent;
  let fixture: ComponentFixture<FootballliveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballliveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
