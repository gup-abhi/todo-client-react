import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Home = ({ todo, todos, setTodo, addTodo, deleteTodo, modifyTodo }) => {
  return (
    <div className="home">
      <h1 className="text-center fw-bolder">Todo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo} update={modifyTodo} />
    </div>
  );
};

export default Home;
