import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppContextInterface, useAppContext } from "../context/AppContext";
import { LogoutButton } from "./LogoutButton";

function Header() {

  const signOutButtonText: string = "Sign out";  

  const {
    loggedIn,
  }: AppContextInterface = useAppContext();

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