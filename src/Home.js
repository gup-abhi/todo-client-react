import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "./config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [username, setUsername] = useState(sessionStorage.getItem("username"));

  const notify = (message) => toast(message);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/note/${username}`);
      setTodos(response.data);
    } catch (error) {
      notify(error.response.data.message);
      console.error("Error fetching data: ", error.response.data.message);
    }
  };

  const postTodo = async (note) => {
    const body = {
      note,
    };
    try {
      const response = await axios.post(
        `${API_BASE_URL}/note/${username}`,
        body
      );
      console.log(`postTodo - ${JSON.stringify(response.data)}`);
      return response.data;
    } catch (error) {
      notify(error.response.data.message);
      console.error("Error posting todo: ", error.response.data.message);
    }
  };

  const addTodo = async () => {
    if (todo !== "") {
      const note = await postTodo(todo);
      setTodos([...todos, note]);
      setTodo("");
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/note/${id}`);
      console.log(`deleteTodo - ${JSON.stringify(response.data)}`);
      fetchData();
    } catch (error) {
      notify(error.response.data.message);
      console.error("Error deleting todo: ", error.response.data.message);
    }
  };

  const modifyTodo = async (note) => {
    console.log(`note - ${JSON.stringify(note)}`);
    setTodos(
      todos.map((todo) =>
        todo.id === note.id
          ? { ...todo, done: note.done, note: note.note }
          : todo
      )
    );
    updateTodo(note);
  };

  const updateTodo = async (note) => {
    console.log(`updateTodo before - ${JSON.stringify(note)}`);
    try {
      const response = await axios.put(`${API_BASE_URL}/note/${note.id}`, note);
      console.log(`updateTodo after - ${JSON.stringify(response.data)}`);
    } catch (error) {
      notify(error.response.data.message);
      console.error("Error updating todo", error.response.data.message);
    }
  };

  return (
    <div className="home">
      <h1 className="text-center fw-bolder">Todo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo} update={modifyTodo} />
    </div>
  );
};

export default Home;
