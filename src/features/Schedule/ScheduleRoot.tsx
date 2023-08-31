import * as React from 'react';
import { useParams, Navigate } from 'react-router-dom';

import { AirportLink, MenuWrapper } from './styled';
import { Schedule } from './Schedule';

import { CITIES, DEFAULT_CITY_ID, SCHEDULE_PARAMS, ScheduleType } from '../../constants';
import { ICity } from '../../types';

export const ScheduleRoot = () => {
  const params = useParams<{ routeId: string; scheduleType: ScheduleType }>();
  const city: ICity | undefined = params.routeId ? CITIES[params.routeId] : undefined;

  if (!city || !params.scheduleType || !SCHEDULE_PARAMS[params.scheduleType]) {
    return <Navigate to={`/${CITIES[DEFAULT_CITY_ID].routeId}/${ScheduleType.Arrivals}`} />;
  }

  return (
    <>
      <MenuWrapper>
        {Object.values(CITIES).map((city) => (
          <AirportLink key={city.routeId} to={`/${city.routeId}/${ScheduleType.Arrivals}`}>
            {city.name}
          </AirportLink>
        ))}
      </MenuWrapper>
      <Schedule city={city} scheduleType={params.scheduleType} />
    </>
  );
};
