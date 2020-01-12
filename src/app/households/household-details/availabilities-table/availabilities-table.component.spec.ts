import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AvailabilitiesTableComponent} from './availabilities-table.component';
import {MatTableModule} from "@angular/material";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('AvailabilitiesTableComponent', () => {
  let component: AvailabilitiesTableComponent;
  let fixture: ComponentFixture<AvailabilitiesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule],
      declarations: [AvailabilitiesTableComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilitiesTableComponent);
    component = fixture.componentInstance;
    component.availabilities = [
      {
        "_id": {
          "$oid": "5aa83281020c6a1af847ee5f"
        },
        "name": "Worker1_Weekend",
        "type": "AVAILABILITY_WORKER",
        "activities": [
          {
            "name": "Wakeup",
            "start": {"$date": "1970-01-01T12:07:21.735Z"},
            "end": {"$date": "1970-01-01T12:22:21.735Z"},
            "type": "ACTIVITY_WAKUP"
          },
          {
            "name": "Take Shower",
            "start": {"$date": "1970-01-01T11:07:03.043Z"},
            "end": {"$date": "1970-01-01T11:22:03.043Z"},
            "type": "ACTIVITY_MORNING_COURSE"
          },
          {
            "name": "Get Ready",
            "start": {"$date": "1970-01-01T11:37:36.551Z"},
            "end": {"$date": "1970-01-01T11:52:36.551Z"},
            "type": "ACTIVITY_GETTING_READY"
          }
        ],
        "creationDate": {
          "$date": "2018-03-13T20:20:16.535Z"
        }
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort availabilities by creation date', () => {
    expect(component.availabilities[0].activities.map(activity => activity.start.$date)).toEqual([
      '1970-01-01T11:07:03.043Z',
      '1970-01-01T11:37:36.551Z',
      '1970-01-01T12:07:21.735Z'
    ]);
  });
});
