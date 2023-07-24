import { ICity } from './types';

export enum ScheduleType {
  Arrivals = 'arrivals',
  Departures = 'departures',
}

export const DEFAULT_CITY_ID = 'almaty';

export const SCHEDULE_PARAMS = {
  [ScheduleType.Arrivals]: 'ARR',
  [ScheduleType.Departures]: 'DEP',
};

export const CITIES: Record<string, ICity> = {
  almaty: {
    routeId: 'almaty',
    name: 'Almaty International Airport',
    endPoints: {
      schedule: 'https://alaport.com/Home/getCurrentFlights',
    },
  },
  astana: {
    routeId: 'astana',
    name: 'Astana International Airport',
    endPoints: {
      schedule: 'https://nqz-parser.onrender.com',
    },
  },
};
