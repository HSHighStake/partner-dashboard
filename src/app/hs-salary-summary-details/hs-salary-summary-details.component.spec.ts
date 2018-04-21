import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsSalarySummaryDetailsComponent } from './hs-salary-summary-details.component';

describe('HsSalarySummaryDetailsComponent', () => {
  let component: HsSalarySummaryDetailsComponent;
  let fixture: ComponentFixture<HsSalarySummaryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsSalarySummaryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsSalarySummaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
