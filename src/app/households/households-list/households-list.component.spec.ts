import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdsListComponent } from './households-list.component';

describe('HouseholdsListComponent', () => {
  let component: HouseholdsListComponent;
  let fixture: ComponentFixture<HouseholdsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
