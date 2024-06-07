import { Typography, Container } from "@mui/material";
import { Header } from "../components/Header";
import { EmployeesTable } from "../components/EmployeesTable";

function EmployeesPage() {
  
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="lg" sx={{px:4, py:8}}>
          <Typography component="h1" variant="h3" gutterBottom>
            Employees
          </Typography>
          <Typography variant="body1" sx={{pb: 2}}>
            Click on an employee's row to view their profile in detail
          </Typography>
          <EmployeesTable />
        </Container>
      </main>
    </>
  );
}

export { EmployeesPage };