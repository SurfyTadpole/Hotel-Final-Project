import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmenitiesComponent } from './ammenities.component';

describe('AmmenitiesComponent', () => {
  let component: AmmenitiesComponent;
  let fixture: ComponentFixture<AmmenitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmmenitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
