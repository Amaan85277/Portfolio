import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";

function Toast({ type = "", setToastType = () => {} }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setToastType(""); //resetting toast
  };

  if (type?.toLowerCase() === "success") {
    return (
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%", backgroundColor: "#4831d4" }}
        >
          {`Thanks for connecting :)`}
        </Alert>
      </Snackbar>
    );
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: "100%", backgroundColor: "red" }}
      >
        {`Some error occurred. Please try later!`}
      </Alert>
    </Snackbar>
  );
}

export default Toast;
