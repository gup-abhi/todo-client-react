import "./App.css";
import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import axios from "axios";
import API_BASE_URL from "./config";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/abhi`);
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const postTodo = async (note) => {
    const body = {
      note,
    };
    try {
      const response = await axios.post(`${API_BASE_URL}/abhi`, body);
      console.log(`postTodo - ${JSON.stringify(response.data)}`);
      return response.data;
    } catch (error) {
      console.error("Error posting todo: ", error);
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
      const response = await axios.delete(`${API_BASE_URL}/${id}`);
      console.log(`deleteTodo - ${JSON.stringify(response.data)}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting todo: ", error);
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
      const response = await axios.put(`${API_BASE_URL}/${note.id}`, note);
      console.log(`updateTodo after - ${JSON.stringify(response.data)}`);
    } catch (error) {
      console.error("Error updating todo", error);
    }
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo} update={modifyTodo} />
    </div>
  );
}

export default App;
