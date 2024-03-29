import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";

type Props = {
  children: React.ReactNode
}

const drawerWidth = 280;

export const JournalLayout = ({ children }:Props) => {
  return (
    <Box sx={{ display: "flex"}} className="animate__animated animated__fadeIn">

      <NavBar drawerWidth={ drawerWidth } />
      
      <SideBar drawerWidth={ drawerWidth } />

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3}}
      >
        <Toolbar />
        {children}
      </Box>

    </Box>
  )
}
