import TodoItem from './TodoItem'

function TodoList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <div className="mt-6 space-y-3">
      {tasks.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-600 bg-[#172033] p-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-2xl text-purple-400">
            ✓
          </div>

          <p className="mt-4 font-bold text-slate-300">
            Your task list is empty
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Add your first task above to get started.
          </p>
        </div>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))
      )}
    </div>
  )
}

export default TodoList