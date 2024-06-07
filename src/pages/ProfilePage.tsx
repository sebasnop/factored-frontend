import { useParams } from 'react-router-dom';
import { Typography, Container, CircularProgress, Grid, Box, Link, Stack, Avatar } from "@mui/material";
import { Header } from "../components/Header";
import useEmployee from '../hooks/useEmployee';
import {
  Link as RouterLink,
} from 'react-router-dom';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

function ProfilePage() {
  const { id } = useParams<{ id: string }>();
  const employeeId = Number(id);
  const { employee, loading, error } = useEmployee(employeeId);

  if (loading) return <Container maxWidth="lg" sx={{ px: 4, py: 8 }}><CircularProgress /></Container>;
  if (error) return <Container maxWidth="lg" sx={{ px: 4, py: 8 }}>Error: {error.message}</Container>;

  if (!employee) {
    return <Container maxWidth="lg" sx={{ px: 4, py: 8 }}>The employee data was not found.</Container>;
  }

  
  ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

  const radarOptions = {
    scales: {
        r: {
            min: 1,
            max: 5,
            ticks: {
                stepSize: 1,
            },
        },
    },
};

  const skillsData = {
    labels: Object.keys(employee.skills),
    datasets: [
        {
            label: 'Skills',
            data: Object.values(employee.skills),
            backgroundColor: 'rgba(34, 202, 236, 0.2)',
            borderColor: 'rgba(34, 202, 236, 1)',
            borderWidth: 2,
        },
    ],
};

  return (
    <>
      <Header />
      <main>
        <Container maxWidth="lg" sx={{ px: 4, py: 8 }}>
          <Stack>
            <Link component={RouterLink} to="/employees" sx={{ mb: 3 }}>
              &lt; Back to all employees table
            </Link>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Box width={230} height={230} mx={"auto"}>
                <Avatar alt={employee.name} src="https://avatar.iran.liara.run/public" sx={{width:230,height:230}}></Avatar>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={8}>
                <Typography component="h1" variant="h4">
                  {employee.name}
                </Typography>
                <Typography component="h2" variant="h6">
                  {employee.position}
                </Typography>
                <Typography variant="body2">
                  <Link href={"mailto:" + employee.email}>{employee.email}</Link>
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
                
                <Box sx={{ mt: 5 }} >
                  <Typography component="h3" variant="h5" align="left">
                    Skills
                  </Typography>
                  <div style={{ maxWidth: '600px', margin: '20px auto' }}>
                    <Radar data={skillsData} options={radarOptions}/>
                  </div>
                </Box>
                
              </Grid>
            </Grid>
          </Stack>


        </Container>
      </main>
    </>
  );
}

export { ProfilePage };