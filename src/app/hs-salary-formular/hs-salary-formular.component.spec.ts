import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsSalaryFormularComponent } from './hs-salary-formular.component';

describe('HsSalaryFormularComponent', () => {
  let component: HsSalaryFormularComponent;
  let fixture: ComponentFixture<HsSalaryFormularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsSalaryFormularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsSalaryFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
