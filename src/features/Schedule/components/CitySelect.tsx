import * as React from 'react';

import { Button, Menu, MenuItem } from '@mui/material';

interface Props {
  cities: Set<TrustedHTML>;
  onSelect: (city: TrustedHTML | null) => void;
}

export const CitySelect = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickItem = (city: TrustedHTML) => () => {
    setAnchorEl(null);
    props.onSelect(city);
  };

  const handleClose = () => {
    setAnchorEl(null);
    props.onSelect(null);
  };

  return (
    <>
      <Button onClick={handleClick}>Выбрать направление</Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClickItem('' as unknown as TrustedHTML)}>Показать все</MenuItem>
        {Array.from(props.cities)
          .sort()
          .map((city, i) => (
            <MenuItem onClick={handleClickItem(city)} key={i}>
              <span dangerouslySetInnerHTML={{ __html: city }} />
            </MenuItem>
          ))}
      </Menu>
    </>
  );
};
