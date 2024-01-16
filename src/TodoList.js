import { useState } from "react";
import EditTodoDialog from "./EditTodoDialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import "bootstrap/dist/css/bootstrap.css";
import Button from "@mui/material/Button";
import TodoCard from "./TodoCard";

const TodoList = ({ list, remove, update }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {list?.length > 0 ? (
        <div className={`m-3 list-wrapper`}>
          <List className="todo-list">
            {list.map((entry, index) => (
              // <ListItem disablePadding key={index} className="my-3">
              //   <ListItemButton>
              //     <Tooltip title={entry.done ? "Incomplete" : "Complete"}>
              //       <ListItemIcon>
              //         <Checkbox
              //           edge="start"
              //           checked={entry.done}
              //           onClick={() => update({ ...entry, done: !entry.done })}
              //           tabIndex={-1}
              //           disableRipple
              //         />
              //       </ListItemIcon>
              //     </Tooltip>
              //     <ListItemText
              //       style={{
              //         textDecoration: entry.done ? "line-through" : "none",
              //       }}
              //       primary={entry.note}
              //     />
              //     <EditTodoDialog
              //       onClose={handleClose}
              //       update={update}
              //       todo={entry}
              //       className="edit-button"
              //     />
              //     <Button
              //       variant="contained"
              //       color="secondary"
              //       onClick={() => remove(entry.id)}
              //     >
              //       Delete
              //     </Button>
              //   </ListItemButton>
              // </ListItem>
              <TodoCard
                key={index}
                entry={entry}
                update={update}
                remove={remove}
                handleClose={handleClose}
              />
            ))}
          </List>
        </div>
      ) : (
        <div className="empty">
          <p>No Task found</p>
        </div>
      )}
    </>
  );
};

export default TodoList;
