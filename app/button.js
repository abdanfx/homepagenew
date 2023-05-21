import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          marginTop: "20px",
          marginLeft: "40px",
        }}
      >
        <Button variant="contained" color="success">
          Join Now
        </Button>
        <Button variant="contained">Explore</Button>
      </Stack>
    </>
  );
}