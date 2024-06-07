import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';
import useEmployees from '../hooks/useEmployees';

function EmployeesTable () {
    const { employees, loading, error } = useEmployees();
    const navigate = useNavigate();

    const handleRowClick = (employeeId: number) => {
        navigate(`/employees/${employeeId}`);
    };

    if (loading) return <CircularProgress />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Position</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map(employee => (
                        <TableRow key={employee.id} onClick={() => handleRowClick(employee.id)}>
                            <TableCell>{employee.id}</TableCell>
                            <TableCell>{employee.name}</TableCell>
                            <TableCell>{employee.position}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export { EmployeesTable };
