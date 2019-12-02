import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkforceManagementComponent } from './workforce-management.component';

describe('WorkforceManagementComponent', () => {
  let component: WorkforceManagementComponent;
  let fixture: ComponentFixture<WorkforceManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkforceManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkforceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
