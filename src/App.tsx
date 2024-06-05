import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Box, Stack, Button } from '@mui/material';

function App() {
  return (
    <>
      <AppBar position='static' color="primary" elevation={0}>
        <Toolbar>
          <Typography variant="h6">
            Factored AI
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth={false} component="section"
          sx={{ py: 8, backgroundColor:"#FEFEFE" }}>
          <Container maxWidth="lg">
            <Typography variant="h3" color="initial" gutterBottom>
              Factored AI Employees
            </Typography>
            <Button variant="contained" color="primary">
              Iniciar sesión
            </Button>
          </Container>
        </Container>
      </main>
    </>
  );
}

export default App;
