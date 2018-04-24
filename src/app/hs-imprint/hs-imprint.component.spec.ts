import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsImprintComponent } from './hs-imprint.component';

describe('HsImprintComponent', () => {
  let component: HsImprintComponent;
  let fixture: ComponentFixture<HsImprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsImprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsImprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
