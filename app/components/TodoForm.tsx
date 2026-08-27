'use client';

import React, { useState } from 'react';

export default function TodoForm() {
  const [title, setTitle] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim()) return;

    setTitle('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 p-4 bg-gray-50 rounded-lg border"
    >
      <div className="flex gap-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Tambahkan tugas baru..."
          className="flex-1 p-3 rounded-md border border-gray-300"
        />

        <button
          type="submit"
          className="px-5 py-3 bg-blue-600 text-white rounded-md"
        >
          Tambah
        </button>
      </div>
    </form>
  );
}