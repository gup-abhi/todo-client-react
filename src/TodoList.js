import { useState } from "react";
import EditTodoDialog from "./EditTodoDialog";

const TodoList = ({ list, remove, update }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {list?.length > 0 ? (
        <ul className="todo-list">
          {list.map((entry, index) => (
            <div className="todo" key={index}>
              <li
                style={{
                  textDecoration: entry.done ? "line-through" : "none",
                }}
              >
                {entry.note}
              </li>
              <EditTodoDialog
                open={open}
                onClose={handleClose}
                update={update}
                todo={entry}
              />
              {entry.done ? (
                <button
                  className="complete-button"
                  onClick={() => update({ ...entry, done: false })}
                >
                  Incomplete
                </button>
              ) : (
                <button
                  className="complete-button"
                  onClick={() => update({ ...entry, done: true })}
                >
                  Complete
                </button>
              )}
              <button
                className="delete-button"
                onClick={() => remove(entry.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No Task found</p>
        </div>
      )}
    </>
  );
};

export default TodoList;
