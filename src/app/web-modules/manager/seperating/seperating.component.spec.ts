import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeperatingComponent } from './seperating.component';

describe('SeperatingComponent', () => {
  let component: SeperatingComponent;
  let fixture: ComponentFixture<SeperatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeperatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeperatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
