'use client';

import React, { useState } from 'react';

type TodoFormProps = {
  onAddTodo: (title: string) => void;
};

export default function TodoForm({
  onAddTodo,
}: TodoFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    onAddTodo(trimmedTitle);
    setTitle('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-12 rounded-lg border border-gray-700 p-5"
    >
      <div className="flex gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Tambahkan tugas baru..."
          className="flex-1 rounded-md border border-gray-300 px-4 py-4 text-xl outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          disabled={!title.trim()}
          className="rounded-md bg-blue-600 px-8 py-4 text-xl text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Tambah
        </button>
      </div>
    </form>
  );
}