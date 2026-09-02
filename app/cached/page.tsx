import TodoCachedApp from './components/TodoCachedApp';
import { getTodos } from '@/lib/todos';

export default async function CachedPage() {
  const todos = await getTodos();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-2xl rounded-xl border border-gray-100 bg-white p-8 shadow-lg">
        <header className="mb-8 border-b pb-4">
          <h1 className="text-center text-3xl font-bold text-gray-800">
            Todo List - Local Storage
          </h1>

          <p className="mt-2 text-center text-gray-500">
            Data tersimpan di Local Storage
          </p>
        </header>

        <TodoCachedApp initialTodos={todos} />
      </div>
    </main>
  );
}