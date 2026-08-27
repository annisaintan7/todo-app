import { getTodos } from '../../../lib/todos';
import TaskDetailCard from './components/TaskDetailCard';
import TaskNotFound from './components/TaskNotFound';

export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const todos = await getTodos();

  const todo = todos.find((item) => item.id === Number(id));

  if (!todo) {
    return <TaskNotFound id={id} />;
  }

  return <TaskDetailCard todo={todo} />;
}