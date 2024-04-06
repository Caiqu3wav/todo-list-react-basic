import { Todo } from "../data/types"

interface TodosSummaryProps{
    todos: Todo[];
    deleteAllCompleted: () => void
}
export default function TodosSummary({
    todos,
    deleteAllCompleted
}: TodosSummaryProps) {

    const completedTodos = todos.filter(todo => todo.completed)

  return (
    <div className="text-center space-y-2">
        <p>
            {completedTodos.length}/{todos.length} todos completed
        </p>
        {completedTodos.length > 0 && (
            <button className="text-red-500 hover:underline text-sm font-medium" onClick={deleteAllCompleted}>
                Delete All completed todos
            </button>
        )}
    </div>
  )
}
