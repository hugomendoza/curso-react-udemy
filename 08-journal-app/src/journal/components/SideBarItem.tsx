import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMemo } from 'react';
import { useAppDispatch } from '../../hooks';
import { setActiveNote } from '../../store/journal';

interface props {
  title: string
  body:string
  id?: number
  date: number
  imageUrls: Array<string>
}


export default function SideBarItem({ title, body, id, date, imageUrls = [] }:props) {

  const dispatch = useAppDispatch();

  const onClickNote = () => {
    dispatch( setActiveNote ({title, body, id, date, imageUrls}))
  }
  
  const newTitle = useMemo( () => {
    return title.length > 17
      ? title.substring(0, 17) + "..."
      : title
  }, [title]);

  return (
    <ListItem
      disablePadding
    >
      <ListItemButton onClick={ onClickNote }>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid>
          <ListItemText primary={ newTitle } />
          <ListItemText secondary={ body } />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
