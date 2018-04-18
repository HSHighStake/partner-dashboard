import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsFooterComponent } from './hs-footer.component';

describe('HsFooterComponent', () => {
  let component: HsFooterComponent;
  let fixture: ComponentFixture<HsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
