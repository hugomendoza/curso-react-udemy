import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";

import { PropsNavBar, notesProps } from "./types";
import { useAppSelector } from "../../hooks";
import SideBarItem from "./SideBarItem";



export const SideBar = ({ drawerWidth }:PropsNavBar) => {
  
  const { displayName } = useAppSelector( state => state.auth );
  const { notes } = useAppSelector( state => state.journal );
  console.log("🚀 ~ file: SideBar.tsx:13 ~ SideBar ~ notes", notes)

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: {sm: 0} }}
    >
      <Drawer
        variant="permanent" // Review docs for more options
        open // Can be open or open=true
        sx={{
          display: {xs: "block"},
          "& .MuiDrawer-paper": {boxSizing: "border-box", width: drawerWidth}
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            { displayName }
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {
            notes.map( (note:notesProps) => (
              <SideBarItem key={ note.id } {...note}/>
            ))
          }
        </List>

      </Drawer>
    </Box>
  )
}
