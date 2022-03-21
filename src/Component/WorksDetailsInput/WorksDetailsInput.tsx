import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import WorksDetails from "../WorksDetails/WorksDetails";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import {
  Container,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

interface IWorksDetail {
  date: string;
  taskNumber: number;
  workAction: string;
  time: number;
  id?: number;
}

const WorksDetailsInput = () => {
  const [workDetail, setWorkDetail] = useState<IWorksDetail>(
    {} as IWorksDetail
  );
  const [workDetails, setWorkDetails] = useState<IWorksDetail[]>([]);

  const handelWorkDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWorkDetail({
      ...workDetail,
      [e.target.name]: e.target.value,
      id: Math.floor(Math.random() * 1000),
    });
  };

  const addWorkDetails = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setWorkDetails([...workDetails, workDetail]);
    setWorkDetail({
      date: "",
      taskNumber: 0,
      workAction: "",
      time: 0,
      id: 0,
    });
    e.preventDefault();
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <form action="submit">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{ marginBottom: "20px" }}>
            <TextField
              name="date"
              onChange={handelWorkDetails}
              id="outlined-date"
              label="Date"
              type="date"
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              name="taskNumber"
              onChange={handelWorkDetails}
              id="outlined-number"
              label="Task Number"
              type="number"
              required
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              name="workAction"
              onChange={handelWorkDetails}
              id="outlined-text"
              label="Work Action"
              type="text"
              required
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              name="time"
              onChange={handelWorkDetails}
              id="outlined-time"
              label="Time"
              type="time"
              required
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              type="submit"
              onClick={addWorkDetails}
              variant="contained"
              color="success"
            >
              Submit
            </Button>
          </div>
        </Box>
      </form>

      <div>
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

            {workDetails.map((workDetail) => (
              <WorksDetails
                date={workDetail.date}
                taskNumber={workDetail.taskNumber}
                workAction={workDetail.workAction}
                time={workDetail.time}
                key={workDetail.id}
              />
            ))}
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
};

export default WorksDetailsInput;
