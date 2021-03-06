import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useNavigate } from "react-router-dom";
import JobDescription from "./JobDescription";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import apiService from "../app/apiService";
import { CircularProgress } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "50%",
  width: "70%",
  bgcolor: "rgb(18, 18, 18)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function TransitionsModal() {
  let navigate = useNavigate();

  const [open, setOpen] = React.useState(true);
  const { id } = useParams();

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  const [job, setJob] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await apiService.get(`/jobs/${id}`);
        setJob(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetch(id);
  }, [id]);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {loading ? (
              <CircularProgress m="auto" />
            ) : (
              <JobDescription job={job} />
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionsModal;
