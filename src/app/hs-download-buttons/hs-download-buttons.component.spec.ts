import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsDownloadButtonsComponent } from './hs-download-buttons.component';

describe('HsDownloadButtonsComponent', () => {
  let component: HsDownloadButtonsComponent;
  let fixture: ComponentFixture<HsDownloadButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsDownloadButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsDownloadButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
