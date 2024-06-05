import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

function Header() {
  return (
      <AppBar position='static' color="primary" elevation={1}>
        <Toolbar>
          <Link to={"/"}>
            <Box sx={{display:"flex", alignItems: "center"}}>
              <img src="https://factored.ai/wp-content/uploads/2020/11/Recurso-13.png" 
              alt="Factored AI logo" height={40}/>
            </Box>
          </Link>
        </Toolbar>
      </AppBar>
  );
}

export { Header };