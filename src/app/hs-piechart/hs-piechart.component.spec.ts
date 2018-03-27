import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsPiechartComponent } from './hs-piechart.component';

describe('HsPiechartComponent', () => {
  let component: HsPiechartComponent;
  let fixture: ComponentFixture<HsPiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsPiechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
