import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsNavigationComponent } from './hs-navigation.component';

describe('HsNavigationComponent', () => {
  let component: HsNavigationComponent;
  let fixture: ComponentFixture<HsNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
