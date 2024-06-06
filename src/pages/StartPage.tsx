import { Typography } from "@mui/material";
import { Header } from "../components/Header";

function StartPage() {
  
  return (
    <>
      <Header />
      <main>
        <Typography component="h1" variant="h5">
          Ya iniciaste sesión
        </Typography>
      </main>
    </>
  );
}

export { StartPage };