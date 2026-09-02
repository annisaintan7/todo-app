'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import TodoForm from '@/app/components/TodoForm';
import TodoList from '@/app/components/TodoList';
import type { Todo } from '@/app/types/todo';

type TodoCachedAppProps = {
  initialTodos: Todo[];
};

export default function TodoCachedApp({
  initialTodos,
}: TodoCachedAppProps) {
  const [todos, setTodos] = useLocalStorage<Todo[]>(
    'TODO_LIST_CACHE',
    initialTodos
  );

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      description: '',
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodos((currentTodos) => [
      newTodo,
      ...currentTodos,
    ]);
  };

  const handleToggleTodo = (id: number) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((currentTodos) =>
      currentTodos.filter(
        (todo) => todo.id !== id
      )
    );
  };

  const handleReset = () => {
    setTodos(initialTodos);
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between rounded-lg border bg-green-50 p-4">
        <div>
          <p className="font-semibold text-green-700">
            Local Storage Aktif
          </p>

          <p className="text-sm text-green-600">
            Data tersimpan di browser.
          </p>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="rounded-md bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
        >
          Reset
        </button>
      </div>

      <TodoForm onAddTodo={handleAddTodo} />

      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}