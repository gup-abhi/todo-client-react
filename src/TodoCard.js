import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Tooltip } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import EditTodoDialog from "./EditTodoDialog";
import Button from "@mui/material/Button";

const TodoCard = ({ entry, update, handleClose, remove }) => {
  return (
    <Card variant="outlined" className="my-3 bg-dark card">
      <CardActionArea sx={{ width: 1 }}>
        <CardContent sx={{ width: 1 }}>
          <Typography variant="body2" color="text.primary">
            <div className="container-fluid">
              <div className="row">
                <div className="col-2 col-lg-1">
                  <Tooltip title={entry.done ? "Incomplete" : "Complete"}>
                    <Checkbox
                      className="m-2 text-white"
                      edge="start"
                      checked={entry.done}
                      onClick={() => update({ ...entry, done: !entry.done })}
                      tabIndex={-1}
                      disableRipple
                    />
                  </Tooltip>
                </div>
                <div className="col-10 col-lg-9">
                  <p
                    className="m-2 text-wrap text-break text-white"
                    style={{
                      textDecoration: entry.done ? "line-through" : "none",
                    }}
                  >
                    {entry.note}
                  </p>
                </div>
                <div className="col-6 col-lg-1">
                  <EditTodoDialog
                    onClose={handleClose}
                    update={update}
                    todo={entry}
                    className="edit-button"
                  />
                </div>
                <div className="col-6 col-lg-1">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => remove(entry.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TodoCard;
