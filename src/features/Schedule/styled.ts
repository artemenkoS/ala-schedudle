import { NavLink } from 'react-router-dom';

import { styled } from '@mui/material';

export const RouteLink = styled(NavLink)(({ theme }) => ({
  fontFamily: 'Mulish',
  fontSize: 28,
  height: '54px',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1),
  textDecoration: 'none',
  marginBottom: theme.spacing(1),
  borderBottom: '5px solid transparent',
  color: 'black',
  '&.active': {
    backgroundColor: theme.palette.primary.light,
    borderBottomColor: theme.palette.primary.main,
  },
}));

export const MenuWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
}));

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  overflow: 'hidden',
  padding: theme.spacing(2, 4),
}));

export const AirportTitle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  fontSize: 60,
  marginBottom: theme.spacing(2),
}));

export const ScheduleWrapper = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  marginBottom: theme.spacing(5),
}));
