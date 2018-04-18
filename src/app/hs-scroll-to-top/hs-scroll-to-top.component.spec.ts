import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsScrollToTopComponent } from './hs-scroll-to-top.component';

describe('HsScrollToTopComponent', () => {
  let component: HsScrollToTopComponent;
  let fixture: ComponentFixture<HsScrollToTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsScrollToTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsScrollToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
