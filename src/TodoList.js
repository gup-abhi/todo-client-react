import { useState } from "react";
import List from "@mui/material/List";
import "bootstrap/dist/css/bootstrap.css";
import TodoCard from "./TodoCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Tooltip } from "@mui/material";

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
        <Card variant="outlined" className="my-3 bg-dark card">
          <CardActionArea sx={{ width: 1 }}>
            <CardContent sx={{ width: 1 }}>
              <Typography variant="body2" color="text.primary">
                <div className="empty">
                  <p className="text-white m-2">No Todo found</p>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
};

export default TodoList;
