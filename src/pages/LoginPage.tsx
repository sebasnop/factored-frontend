import { Container } from "@mui/material";
import { Header } from "../components/Header";

function LoginPage() {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth={false} component="section"
          sx={{ py: 8, backgroundColor:"#FEFEFE" }}>
            <Container maxWidth="md">
              Sign In
            </Container>
        </Container>
      </main>
    </>
  );
}

export { LoginPage };
