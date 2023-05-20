import { styled } from '@mui/material';
import { TableCell } from '@mui/material';

export const MuiTableCell = styled(TableCell)(({ theme }) => ({
  fontFamily: 'Mulish',
  fontSize: theme.spacing(2.5),
}));

export const City = styled('div')(({ theme }) => ({
  fontSize: theme.spacing(2.7),
  color: theme.palette.primary.main,
}));

export const Flight = styled('div')(({ theme }) => ({
  fontSize: theme.spacing(2.3),
  fontWeight: 200,
}));

export const Postponed = styled('span')(({ theme }) => ({
  textDecoration: 'line-through',
  color: theme.palette.error.light,
  paddingRight: theme.spacing(0.5),
  marginTop: theme.spacing(1),
}));

export const Gate = styled('div')(({ theme }) => ({
  fontSize: theme.spacing(3),
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.main,
  fontWeight: 700,
  textAlign: 'center',
  padding: theme.spacing(0.5),
}));
