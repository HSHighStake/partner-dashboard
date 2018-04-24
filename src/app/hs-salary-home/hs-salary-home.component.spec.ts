import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsSalaryHomeComponent } from './hs-salary-home.component';

describe('HsSalaryHomeComponent', () => {
  let component: HsSalaryHomeComponent;
  let fixture: ComponentFixture<HsSalaryHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsSalaryHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsSalaryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
