import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useData } from '../../context/dataContext';

export const MenuList = () => {
  const { data, setCheck, check } = useData();
      const uniqueData = data
        .map((item) => item?.candidateStatus)
        .filter((item, i, arr) => arr.indexOf(item) === i)

  const listStyle = {
    maxWidth: 360,
    bgcolor: 'background.paper',
    position: 'absolute',
    top: '14rem',
    right: '0',
  };

  const changeHandler = (e) => {
    const clickedItem = e.target.value;
    const checked = e.target.checked;
    setCheck({ ...check, [clickedItem]: checked });
  };

  return (
    <List data-testid="modal" sx={listStyle}>
      {uniqueData.map((item) => {
        const labelId = `checkbox-list-label-${item}`;

        return (
          <ListItem key={item.candidateId}>
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox value={item} onChange={(e) => changeHandler(e)} />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
