import { AppBar, Box, Toolbar } from "@mui/material";
import { Link } from 'react-router-dom';
import { LogoutButton } from "./LogoutButton";

function Header() {

  return (
      <AppBar position='static' color="primary" elevation={1}>
        <Toolbar sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
          <Link to={"/"}>
            <Box sx={{display:"flex", alignItems: "center"}}>
              <img src="https://factored.ai/wp-content/uploads/2020/11/Recurso-13.png" 
              alt="Factored AI logo" height={40}/>
            </Box>
          </Link>
          <LogoutButton />
        </Toolbar>
      </AppBar>
  );
}

export { Header };