import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";

import { PropsNavBar } from "./types";


export const SideBar = ({ drawerWidth }:PropsNavBar) => {
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
            Fernando Herrera
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {
            ["Enero", "Febrero", "Marzo", "Abril"].map( text => (
              <ListItem
                key={ text }
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid>
                    <ListItemText primary={ text } />
                    <ListItemText secondary={ "lorem ipsum" } />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>

      </Drawer>
    </Box>
  )
}
