import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const WorksDetailsInput = () => {
  return (
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
          id="outlined-date"
          label="Date"
          type="date"
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Task Number"
          type="number"
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-text"
          label="Work Action"
          type="text"
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-time"
          label="Time"
          type="time"
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained" color="success">
          Submit
        </Button>
      </div>
    </Box>
  );
};

export default WorksDetailsInput;
