import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsSalaryComponent } from './hs-salary.component';

describe('HsSalaryComponent', () => {
  let component: HsSalaryComponent;
  let fixture: ComponentFixture<HsSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
