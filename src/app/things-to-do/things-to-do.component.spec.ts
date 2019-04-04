import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsToDoComponent } from './things-to-do.component';

describe('ThingsToDoComponent', () => {
  let component: ThingsToDoComponent;
  let fixture: ComponentFixture<ThingsToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingsToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
