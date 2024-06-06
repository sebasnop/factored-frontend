import { Typography, Container } from "@mui/material";
import { Header } from "../components/Header";

function StartPage() {
  
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="lg" sx={{px:4, py:8}}>
          <Typography component="h1" variant="h5">
            Ya iniciaste sesión
          </Typography>
        </Container>
      </main>
    </>
  );
}

export { StartPage };