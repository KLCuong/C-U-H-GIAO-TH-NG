import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import PersonPinCircleOutlinedIcon from "@mui/icons-material/PersonPinCircleOutlined";
import PanToolAltOutlinedIcon from "@mui/icons-material/PanToolAltOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoxCustom from "src/components/BoxCustom/BoxCustom";

export default function FormUrgent() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const navigateToViewRequest = () => {
    navigate("/createrequest");
  };
  const navigateToViewFeedBack = () => {
    navigate("/Feedback");
  };
  return (
    <Box
      sx={{
        zIndex: 3,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "98vh",
      }}
    >
      <BoxCustom label="Urgent">
        <Box
          sx={{
            paddingTop: { xs: "2%", xsm: "10%", md: "5px" },
            color: "#565e6d",
            pl: { xs: "10%", xsm: "10%", md: "5%" },
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "30px", xsm: "28px", xs: "23px" },
              pt: { xs: "20%" },
              pb: { xs: "10%", md: "5%",
                display: "flex", justifyContent: "center"},
            }}
          >
            Request Here
          </Typography>
          <Box
            sx={{
              display: "flex",
              //paddingBottom: { md: "100px", xs: "60px" },
              cursor: "pointer",
            }}
            onClick={handleClickOpen}
          >
            <PersonPinCircleOutlinedIcon sx={{ color: "#565e6d" }} />
            <Typography sx={{ fontSize: { xsm: "23px", xs: "15px" } }}>
              Click here to add your location
            </Typography>
          </Box>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleClose} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
          <Box sx={{ display: "flex", justifyContent: "center" }}>

          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={navigateToViewRequest}
              sx={{ color: "#d9d9d9", mb: 3, cursor: "pointer"  }}
            >
              <Button sx={{ display: "flex", justifyContent: "center" }}>
              Request Now
              </Button>
            </Button>
            <Button
                onClick={navigateToViewFeedBack}
                sx={{ color: "#d9d9d9", mb: 3, cursor: "pointer"  }}
            >
              <Button sx={{ display: "flex", justifyContent: "center" }}>
                Feedback
              </Button>
            </Button>
          </Box>
        </Box>
      </BoxCustom>
    </Box>
  );
}
