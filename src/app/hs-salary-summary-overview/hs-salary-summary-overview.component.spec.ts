import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsSalarySummaryOverviewComponent } from './hs-salary-summary-overview.component';

describe('HsSalarySummaryOverviewComponent', () => {
  let component: HsSalarySummaryOverviewComponent;
  let fixture: ComponentFixture<HsSalarySummaryOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsSalarySummaryOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsSalarySummaryOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
