import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsSalarySummayComponent } from './hs-salary-summay.component';

describe('HsSalarySummayComponent', () => {
  let component: HsSalarySummayComponent;
  let fixture: ComponentFixture<HsSalarySummayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsSalarySummayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsSalarySummayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
