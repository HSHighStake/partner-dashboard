import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsWorkingWithUsComponent } from './hs-working-with-us.component';

describe('HsWorkingWithUsComponent', () => {
  let component: HsWorkingWithUsComponent;
  let fixture: ComponentFixture<HsWorkingWithUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsWorkingWithUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsWorkingWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
