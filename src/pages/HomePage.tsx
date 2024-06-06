import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';

import { Header } from '../components/Header';
import { Link } from 'react-router-dom';
import { AppContextInterface, useAppContext } from '../context/AppContext';

function HomePage() {
  const signInButtonText: string = "Sign In";
  const viewEmployeesButtonText: string = "View employee profiles";

  const {
    loggedIn,
  }: AppContextInterface = useAppContext();

  return (
    <>
      <Header />
      <main>
        <Container maxWidth={false} component="section"
          sx={{ py: 8, backgroundColor:"#FEFEFE" }}>
          <Container maxWidth="lg">
            <Typography variant="h2" gutterBottom>
              Factored AI Employees
            </Typography>
            { 
            loggedIn ? 
            
            <Link to={"/start"}>
              <Button variant="contained" color="secondary" sx={{textTransform: "none"}}>
                { viewEmployeesButtonText }
              </Button>
            </Link>

            : 
            
            <Link to={"/login"}>
              <Button variant="contained" color="primary">
                { signInButtonText }
              </Button>
            </Link>
            
            }
          </Container>
        </Container>
      </main>
    </>
  );
}

export { HomePage };
