import { useParams } from 'react-router-dom';
import { Typography, Container, CircularProgress, Grid, Box, Paper, styled} from "@mui/material";
import { Header } from "../components/Header";
import useEmployee from '../hooks/useEmployee';

function ProfilePage() {
  const { id } = useParams<{ id: string }>();
  const employeeId = Number(id);
  const { employee, loading, error } = useEmployee(employeeId);

  if (loading) return <Container maxWidth="lg" sx={{ px: 4, py: 8 }}><CircularProgress /></Container>;
  if (error) return <Container maxWidth="lg" sx={{ px: 4, py: 8 }}>Error: {error.message}</Container>;

  if (!employee) {
    return <Container maxWidth="lg" sx={{ px: 4, py: 8 }}>The employee data was not found.</Container>;
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Header />
      <main>
        <Container maxWidth="lg" sx={{ px: 4, py: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
                <Box width={230} height={230} sx={{backgroundColor:"black"}} mx={"auto"}></Box>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Typography component="h1" variant="h4">
                {employee.name}
              </Typography>
              <Typography component="h2" variant="h6">
                {employee.position}
              </Typography>
              <Typography variant="body2">
                <a href={"mailto:"+employee.email}>{employee.email}</a>
              </Typography>
              <Box mt={3}>
                <Typography variant="body1">
                  <b>Country: </b>{employee.country}
                </Typography>
                <Typography variant="body1">
                  <b>City: </b>{employee.city}
                </Typography>
                <Typography variant="body1">
                  <b>English level: </b>{employee.english}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Container sx={{mt:5}}>
            <Typography component="h3" variant="h5" align="center">
              Skills
            </Typography>
            <Box width={230} height={230} sx={{backgroundColor:"black"}} mx={"auto"} mt={3}></Box>
          </Container>
        </Container>
      </main>
    </>
  );
}

export { ProfilePage };