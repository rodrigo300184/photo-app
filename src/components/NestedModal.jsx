import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import { useDispatch } from "react-redux";
import { editDescription } from "../features/favorites/favoritesSlice";
import { TextareaAutosize } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal(props) {
  const dispatch = useDispatch();
  const newDescription = props.newDescription;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    dispatch(editDescription({ id: props.props.photo.id, newDescription }));
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleOpen}>
        Edit description
      </Button>
      <Modal
        open={open}
        onClose={handleSave}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 230 }}>
          <h2 id="child-modal-title">Description:</h2>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={7}
            style={{ width: 210 }}
            value={props.newDescription}
            onChange={(e) => props.setNewDescription(e.target.value)}
          ></TextareaAutosize>
          <Button variant="outlined" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal(props) {
  const [newDescription, setNewDescription] = useState(props.photo.description);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(
    () => setNewDescription(props.photo.description),
    [props.photo.description]
  );

  return (
    <div>
      <Button onClick={handleOpen}>{<InfoIcon />}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 250 }}>
          <h2 id="parent-modal-title">Information:</h2>
          <p id="parent-modal-description">
            <b>Description:</b> {newDescription}
          </p>
          <Box display="flex" justifyContent="center">
            <ChildModal
              newDescription={newDescription}
              setNewDescription={setNewDescription}
              props={props}
            />
          </Box>
          <p id="parent-modal-description">
            <b>Width:</b> {props.photo.width}
          </p>
          <p id="parent-modal-description">
            <b>Height:</b> {props.photo.height}
          </p>
          <p id="parent-modal-description">
            <b>Likes:</b> {props.photo.likes}
          </p>
          <p id="parent-modal-description">
            <b>Date added:</b> {props.photo.created_at.slice(0, 10)}
          </p>
          <Box display="flex" justifyContent="end">
            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
