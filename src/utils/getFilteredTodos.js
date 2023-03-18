// Quedó amarrado a la estructura de datos de los todos, no es reutilizable
export const getFilteredTodos = (todos, search, sort) => {
  const filteredTodos = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(search.toLowerCase());
  });

  if (sort === "asc") {
    filteredTodos.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sort === "desc") {
    filteredTodos.sort((a, b) => b.title.localeCompare(a.title));
  }

  return filteredTodos;
};

// Estamos separando la lógica de filtrado y ordenamiento de la lógica de renderizado
// const filteredTodos = todos.filter((todo) => {
//   return todo.title.toLowerCase().includes(search.toLowerCase());
// });

// if (sort === "asc") {
//   filteredTodos.sort((a, b) => a.title.localeCompare(b.title));
// }

// if (sort === "desc") {
//   filteredTodos.sort((a, b) => b.title.localeCompare(a.title));
// }
