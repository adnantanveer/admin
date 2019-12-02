import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoallistingComponent } from './goallisting.component';

describe('GoallistingComponent', () => {
  let component: GoallistingComponent;
  let fixture: ComponentFixture<GoallistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoallistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoallistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
