import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbenifitsComponent } from './viewbenifits.component';

describe('ViewbenifitsComponent', () => {
  let component: ViewbenifitsComponent;
  let fixture: ComponentFixture<ViewbenifitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbenifitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbenifitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
