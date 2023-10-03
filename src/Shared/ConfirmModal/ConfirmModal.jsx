/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmModal = ({ open, handleClose, onConfirm, content }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    
    >
      <div   className="h-44 my-auto">

      <DialogTitle>

        <div className="text-lg font-semibold">
          Confirmation Modal
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <div className="font-medium my-2">
            {content}
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <div className=" ">
          <button onClick={onConfirm} className="text-red-500 bg-white px-4 py-2">
            Confirm
          </button>
          <button className="bg-white px-4 py-2" onClick={handleClose}>Cancel</button>
        </div>
      </DialogActions>
      </div>
    </Dialog>
  );
};

export default ConfirmModal;
