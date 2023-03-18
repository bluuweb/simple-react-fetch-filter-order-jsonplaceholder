import { useState } from "react";
import { getFilteredTodos } from "./utils/getFilteredTodos";

import SearchBar from "./components/SearchBar";
import SortBy from "./components/SortBy";

import useTodo from "./hooks/useTodos";

export default function App() {
  const { error, loading, todos } = useTodo();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("all");

  const filteredTodos = getFilteredTodos(todos, search, sort);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Todos</h1>
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <SortBy
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      />

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            {todo.id} - {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
