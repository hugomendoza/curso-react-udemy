import { useAppDispatch } from "../../hooks";
import {AppBar, Toolbar, IconButton, Grid, Typography} from "@mui/material";
import { LogoutOutlined, MenuOutlined} from "@mui/icons-material"

import { PropsNavBar } from "./types";
import { startLogout } from "../../store/auth";

export const NavBar = ({ drawerWidth = 240 }:PropsNavBar) => {

  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch( startLogout() );
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: {sm: `calc(100% - ${ drawerWidth}px)`},
        ml: {sm: `${ drawerWidth }px`}
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr:2, display: {sm: "none"} }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >

          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            JournalApp
          </Typography>

          <IconButton
            color="error"
            onClick={ onLogout }
          >
            <LogoutOutlined />
          </IconButton>

        </Grid>

      </Toolbar>
    </AppBar>
  )
}
