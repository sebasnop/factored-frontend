import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { AppContextInterface, useAppContext } from "../context/AppContext";
import { useState } from "react";

function LogoutButton() {
  const signOutButtonText: string = "Sign out";
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    loggedIn,
    setLoggedIn
  }: AppContextInterface = useAppContext();

  const handlelogout = () => {
    setLoggedIn(false);
  }

  return (
  <Button 
    variant="contained"
    color="info" 
    endIcon={<LogoutIcon />} 
    sx={ loggedIn ? {display:"inline-flex"} : {display:"none"}}
    onClick={handlelogout}
    disabled={isLoading}
    >
    { signOutButtonText }
  </Button>          
  );
}

export { LogoutButton };