import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWraperComponent } from './view-wraper.component';

describe('ViewWraperComponent', () => {
  let component: ViewWraperComponent;
  let fixture: ComponentFixture<ViewWraperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWraperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
