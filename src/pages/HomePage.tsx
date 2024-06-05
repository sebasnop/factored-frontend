import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';

import { Header } from '../components/Header';
import { Link } from 'react-router-dom';

const signInButtonText: string = "Sign In";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth={false} component="section"
          sx={{ py: 8, backgroundColor:"#FEFEFE" }}>
          <Container maxWidth="lg">
            <Typography variant="h2" color="initial" gutterBottom>
              Factored AI Employees
            </Typography>
            <Link to={"/login"}>
              <Button variant="contained" color="primary">
                { signInButtonText }
              </Button>
            </Link>
          </Container>
        </Container>
      </main>
    </>
  );
}

export { HomePage };
