import React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TableBody } from "@mui/material";

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

interface IProps {
  date: string;
  taskNumber: number;
  workAction: string;
  time: number;
  id?: number;
}

const WorksDetails = ({ date, taskNumber, workAction, time }: IProps) => {
  return (
    <TableBody>
      <StyledTableRow>
        <StyledTableCell component="th" scope="row">
          {date}
        </StyledTableCell>
        <StyledTableCell align="right">{taskNumber}</StyledTableCell>
        <StyledTableCell align="right">{workAction}</StyledTableCell>
        <StyledTableCell align="right">{time}</StyledTableCell>
        <StyledTableCell align="right">x</StyledTableCell>
      </StyledTableRow>
    </TableBody>
  );
};

export default WorksDetails;
