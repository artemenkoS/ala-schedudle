// styled.ts

import { styled } from '@mui/material';
import { TableCell } from '@mui/material';

export const MuiTableCell = styled(TableCell)(({ theme }) => ({
  fontFamily: 'Mulish',
  fontSize: theme.spacing(2.5),
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.spacing(1.6),
  },
}));

export const City = styled('div')(({ theme }) => ({
  fontSize: theme.spacing(2.7),
  color: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.spacing(2.3),
  },
}));

export const Flight = styled('div')(({ theme }) => ({
  fontSize: theme.spacing(2.3),
  fontWeight: 200,
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.spacing(1.9),
  },
}));

export const Postponed = styled('span')(({ theme }) => ({
  textDecoration: 'line-through',
  color: theme.palette.error.light,
  paddingRight: theme.spacing(0.5),
  marginTop: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.spacing(2.2),
  },
}));

export const Gate = styled('div')(({ theme }) => ({
  fontSize: theme.spacing(3),
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.main,
  fontWeight: 700,
  textAlign: 'center',
  padding: theme.spacing(0.5),
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.spacing(2.1),
  },
}));


export const ScheduleBlocksWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),


}));

export const ScheduleBlock = styled('div')(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: theme.spacing(2.4),
  padding: theme.spacing(1.5),
  border:'1px solid black'

}));

export const ScheduleBlockSection = styled('div')(({ theme }) => ({
 display: 'flex',
 justifyContent:'space-evenly'

}));

export const TimeFlight = styled('div')(({ theme }) => ({
  fontSize: theme.spacing(2.4),
  marginBottom: theme.spacing(0.5),
}));

export const AirlineStatus = styled('div')(({ theme }) => ({
  fontSize: theme.spacing(2.4),
  fontWeight: 200,
}));
