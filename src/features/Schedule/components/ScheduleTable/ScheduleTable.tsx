// ScheduleTable.tsx

import * as React from 'react';
import { Table, TableHead,  TableBody, TableRow, Paper, TableContainer } from '@mui/material';
import { ScheduleType } from '../../../../constants';
import { IFlight } from '../../types';
import { MuiTableCell, City, Flight, Postponed, Gate } from './styled';
import {
  ScheduleBlocksWrapper,
  ScheduleBlock,
  TimeFlight,
  AirlineStatus,
  ScheduleBlockSection
} from './styled';

type Props = {
  flights: IFlight[];
  scheduleType: ScheduleType;
};

export const ScheduleTable = (props: Props) => {
  const titles = () => {
    return [
      'Дата',
      'Рейс',
      'Авиакомпания',
      props.scheduleType === ScheduleType.Departures ? 'Гейт' : '',
      'Статус',
    ].filter(Boolean);
  };

  const isMobile = window.innerWidth <= 768; // Check if the screen is mobile-sized

  if (isMobile) {
    return (
      <ScheduleBlocksWrapper>
        {props.flights.map((row) => (
          <ScheduleBlock key={row.afskey}>
            <ScheduleBlockSection>
              <TimeFlight>
                {row.stad.split(' ')[0]}
                <div>
                  {row.stad.split(' ')[1] === row.etad.split(' ')[1] ? (
                    row.stad.split(' ')[1]
                  ) : (
                    <>
                      <Postponed>{row.stad.split(' ')[1]}</Postponed>
                      {row.etad.split(' ')[1]}
                    </>
                  )}
                </div>
              </TimeFlight>  
              <div>
                <City
                  dangerouslySetInnerHTML={
                    props.scheduleType === ScheduleType.Departures
                      ? { __html: row.path.destination.destinationRu }
                      : { __html: row.path.origin.originRu }
                  }
                />
                <Flight>{row.airlineIata} {row.flightNumber}</Flight>
              </div>
            </ScheduleBlockSection>
      
            <AirlineStatus>
              <div>{row.airlineName}</div>
              {props.scheduleType === ScheduleType.Departures && (
                <div>
                  <Gate>{row.gate === null ? '--' : row.gate}</Gate>
                </div>
              )}
              <div dangerouslySetInnerHTML={{ __html: row.remark.remarkRu }} />
            </AirlineStatus>
          </ScheduleBlock>
        ))}
      </ScheduleBlocksWrapper>
    );
  }

  // Desktop Layout
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '100%' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {titles().map((title) => (
              <MuiTableCell key={title}>
                {title}
              </MuiTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.flights.map((row) => (
            <TableRow key={row.afskey}>
              <MuiTableCell>
                {row.stad.split(' ')[0]}
                <div>
                  {row.stad.split(' ')[1] === row.etad.split(' ')[1] ? (
                    row.stad.split(' ')[1]
                  ) : (
                    <>
                      <Postponed>{row.stad.split(' ')[1]}</Postponed>
                      {row.etad.split(' ')[1]}
                    </>
                  )}
                </div>
              </MuiTableCell>
              <MuiTableCell>
                <City
                  dangerouslySetInnerHTML={
                    props.scheduleType === ScheduleType.Departures
                      ? { __html: row.path.destination.destinationRu }
                      : { __html: row.path.origin.originRu }
                  }
                />
                <Flight>{row.airlineIata} {row.flightNumber}</Flight>
              </MuiTableCell>
              <MuiTableCell>{row.airlineName}</MuiTableCell>
              {props.scheduleType === ScheduleType.Departures && (
                <MuiTableCell>
                  <Gate>{row.gate === null ? '--' : row.gate}</Gate>
                </MuiTableCell>
              )}
              <MuiTableCell dangerouslySetInnerHTML={{ __html: row.remark.remarkRu }} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
