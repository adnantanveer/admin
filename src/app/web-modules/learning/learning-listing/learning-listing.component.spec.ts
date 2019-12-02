import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningListingComponent } from './learning-listing.component';

describe('LearningListingComponent', () => {
  let component: LearningListingComponent;
  let fixture: ComponentFixture<LearningListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
