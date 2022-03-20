import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Container } from "@mui/material";

const Header = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography sx={{ minWidth: 100 }}>Menu</Typography>
        <Typography sx={{ minWidth: 100 }}>Sign Up</Typography>
        <Tooltip title="Account settings">
          <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
        </Tooltip>
      </Box>
    </Container>
  );
};

export default Header;
