import React from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import WorksDetailsInput from "../WorksDetailsInput/WorksDetailsInput";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// eslint-disable-next-line @typescript-eslint/no-redeclare
const WorksDetails = () => {
  return (
    <Container maxWidth="md" style={{marginTop:"20px"}}>
      <div>
        <WorksDetailsInput />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell align="right">Task Number</StyledTableCell>
              <StyledTableCell align="right">Work Action</StyledTableCell>
              <StyledTableCell align="right">Time</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                name
              </StyledTableCell>
              <StyledTableCell align="right">A</StyledTableCell>
              <StyledTableCell align="right">B</StyledTableCell>
              <StyledTableCell align="right">C</StyledTableCell>
              <StyledTableCell align="right">D</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default WorksDetails;
