import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types/todo';

export default function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Tugas Anda
      </h2>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}