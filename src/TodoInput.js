import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const TodoInput = ({ todo, setTodo, addTodo }) => {
  return (
    <div className="input-wrapper text-center m-3">
      <TextField
        name="todo"
        value={todo}
        className="text-field"
        label="Create a new todo"
        variant="outlined"
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button className="m-2 ml-3" variant="contained" onClick={addTodo}>
        Add
      </Button>
    </div>
  );
};

export default TodoInput;
