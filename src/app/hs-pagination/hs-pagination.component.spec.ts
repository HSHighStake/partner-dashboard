import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsPaginationComponent } from './hs-pagination.component';

describe('HsPaginationComponent', () => {
  let component: HsPaginationComponent;
  let fixture: ComponentFixture<HsPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
