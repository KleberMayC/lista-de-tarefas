import { useState, useEffect, useRef } from "react";

function Card3() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const addTodo = (e) => {
    e.preventDefault();

    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <section>
      <h1>Fazendo</h1>
      <form onSubmit={addTodo}>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button>Adicionar tarefa</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <p> {todo} </p>
            <button onClick={() => removeTodo(index)}> X </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Card3;
