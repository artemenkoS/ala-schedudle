import * as React from 'react';
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

import { ScheduleType } from '../../../../constants';
import { IFlight } from '../../types';

import { MuiTableCell, City, Flight, Postponed, Gate } from './styled';

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

  return (
    <TableContainer component={Paper} sx={{ maxHeight: '100%' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {titles().map((title) => (
              <MuiTableCell key={title}>{title}</MuiTableCell>
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
                <Flight>
                  {row.airlineIata} {row.flightNumber}
                </Flight>
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
