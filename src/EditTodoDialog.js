import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const EditTodoDialog = ({ openState, todo, update }) => {
  const [open, setOpen] = useState(openState);
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
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
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
            <ToggleButton value="true">Complete</ToggleButton>
            <ToggleButton value="false">Incomplete</ToggleButton>
          </ToggleButtonGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditTodoDialog;
