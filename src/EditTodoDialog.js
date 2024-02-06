import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const EditTodoDialog = ({ todo, update }) => {
  const [open, setOpen] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.text);
  const [alignment, setAlignment] = useState(todo.done ? "true" : "false");

  const handleChange = (event, newAlignment) => {
    console.log(newAlignment);
    setAlignment(newAlignment);
  };

  const handleOpen = () => {
    setOpen(true);
    setEditedTodo(todo.note);
    setAlignment(todo.done ? "true" : "false");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    update({ ...todo, done: alignment === "true", note: editedTodo });
    handleClose();
  };

  return (
    <>
      <Button
        className="mx-2"
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        Edit
      </Button>
      <Dialog sx={{ maxWidth: 1 }} open={open} onClose={handleClose}>
        <DialogTitle className="m-3 p-0">Edit Todo</DialogTitle>
        <DialogContent sx={{ width: "75%" }}>
          <TextField
            autoFocus
            label="Todo"
            type="text"
            fullWidth
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Todo Complete/Incomplete"
          >
            <ToggleButton className="m-2 p-2" value="true">
              Complete
            </ToggleButton>
            <ToggleButton className="m-2 p-2" value="false">
              Incomplete
            </ToggleButton>
          </ToggleButtonGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} variant="outlined" color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditTodoDialog;
