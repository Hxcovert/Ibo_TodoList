function TodoItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-slate-700 bg-[#273449] p-4 transition hover:border-purple-500/50 sm:flex-row sm:items-center sm:justify-between">

      <div className="min-w-0">
        <p
          className={`break-words text-lg font-semibold ${
            task.done
              ? 'text-slate-500 line-through'
              : 'text-slate-100'
          }`}
        >
          {task.text}
        </p>

        <span
          className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-bold ${
            task.done
              ? 'bg-teal-400/15 text-teal-300'
              : 'bg-orange-400/15 text-orange-300'
          }`}
        >
          {task.done ? '✓ Done' : '● Not Done'}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onToggleTask(task.id)}
          className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-purple-500 active:scale-95"
        >
          {task.done ? 'Mark Not Done' : 'Mark Done'}
        </button>

        <button
          type="button"
          onClick={() => onDeleteTask(task.id)}
          className="rounded-xl bg-slate-700 px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-red-500 hover:text-white active:scale-95"
        >
          Delete
        </button>
      </div>

    </div>
  )
}

export default TodoItem