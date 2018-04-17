import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsSalarySummaryComponent } from './hs-salary-summary.component';

describe('HsSalarySummaryComponent', () => {
  let component: HsSalarySummaryComponent;
  let fixture: ComponentFixture<HsSalarySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsSalarySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsSalarySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
