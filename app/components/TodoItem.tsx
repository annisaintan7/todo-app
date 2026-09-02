'use client';

import type { Todo } from '../types/todo';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg mb-3">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <div>
          <span
            className={
              todo.completed
                ? 'line-through text-gray-400'
                : 'text-gray-800'
            }
          >
            {todo.title}
          </span>

          {todo.description && (
            <p className="text-sm text-gray-500">
              {todo.description}
            </p>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        className="px-3 py-2 bg-red-500 text-white rounded-md"
      >
        Hapus
      </button>
    </div>
  );
}