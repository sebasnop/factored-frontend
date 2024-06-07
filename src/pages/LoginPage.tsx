import { Avatar, Box, Container, Link, Typography } from "@mui/material";
import { Header } from "../components/Header";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoginForm } from "../components/LoginForm";
import {
  Link as RouterLink,
} from 'react-router-dom';

function LoginPage() {
  
  return (
    <>
      <Header />
      <main>
        <Container maxWidth={false} component="section"
          sx={{ py: 8, backgroundColor:"#FEFEFE" }}>
          <Container maxWidth="xs">
            <Box
              sx={{
                marginTop: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>

              <LoginForm />
              <Link component={RouterLink} to="/" sx={{mt:3}}>
                &lt; Back home
              </Link>
            </Box>
          </Container>
        </Container>
      </main>
    </>
  );
}

export { LoginPage };
