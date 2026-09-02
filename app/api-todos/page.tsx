import ApiTodoList from './components/ApiTodoList';
import { getTasks } from '@/lib/tasks';

export default async function ApiTodosPage() {
  const result = await getTasks();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Daftar Tugas (API)
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Data diambil dari DummyJSON API
        </p>

        <ApiTodoList initialTasks={result.tasks} />
      </div>
    </main>
  );
}