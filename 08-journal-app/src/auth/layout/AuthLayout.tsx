import { Grid, Typography } from "@mui/material";

type Props = {
  children: React.ReactNode,
  title?: string
}

export const AuthLayout = ({ children, title = "" }:Props) => {
  return (
    
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      // sx = extended style
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        // xs = breakpoint   
        xs={ 3 }
        sx={{
          width: { sm: 450},
          backgroundColor:"white",
          padding: 3,
          borderRadius: 2
        }}>

        <Typography variant="h5" sx={{ mb: 1}}>{ title }</Typography>

        { children }

      </Grid>
    </Grid>

  )
}
