import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

const STATIC_DATA_URL = 'assets/hous_test.json';

export class SIMULATION_TYPE {
  static HOUSEHOLD_SINGLE = 'HOUSEHOLD_SINGLE';
  static HOUSEHOLD_FAMILE = 'HOUSEHOLD_FAMILE';
}

export interface Simulation {
  _id: SimulationId;
  simName: string;
  type: SIMULATION_TYPE;
  resultLoadCurve: ResultLoadCurve;
  availabilities: Availability[];
  appliances: Appliance[];
}

export interface SimulationId {
  $oid: string;
}

export interface SimulationDate {
  $date: string;
}

export interface ResultLoadCurve {
  name: string;
  description: string;
  creationDate: SimulationDate;
  measurements: Measurement[];
}

export interface Measurement {
  time: number;
  value: number;
  lightingValue: number;
  activeOccupancy: number;
  occupancy: number;
}

export interface Appliance {
  _id: SimulationId;
  name: string;
  type: string;
  description: string;
  creationDate: SimulationDate;
  operationalModes: OperationMode[];
}

export interface Availability {
  _id: SimulationId;
  name: string;
  type: string;
  activities: Activity[];
  creationDate: SimulationDate;
}

export interface OperationMode {
  name: string,
  description: string,
  powerInputOn: number;
  powerInputOff: number;
  restartDelay: number;
  scaleFactor: number;
  duration: number;
  leftCycleTime: number;
  leftRestartDelay: number;
}

export interface Activity {
  name: string,
  start: SimulationDate,
  end: SimulationDate,
  type: string;
}

@Injectable()
export class HouseholdsService {

  selectedSimulation: Simulation;

  constructor(private http: HttpClient) {
  }

  getData(): Observable<Simulation[]> {
    return this.http.get<Simulation[]>(STATIC_DATA_URL);
  }

  getHouseholdTypeIcon(simulationType) {
    return simulationType === SIMULATION_TYPE.HOUSEHOLD_SINGLE ? 'person' : 'people_alt';
  }
}
