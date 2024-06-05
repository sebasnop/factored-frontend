import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Stack } from '@mui/material';

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
        <Typography variant="h3" color="initial">
          Factored AI Employees
        </Typography>
      </main>
    </>
  );
}

export default App;
