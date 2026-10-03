import { useState } from 'react'

function TodoForm({ onAddTask }) {
  const [task, setTask] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (task.trim() === '') {
      return
    }

    onAddTask(task.trim())
    setTask('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="What needs to be done?"
        className="min-w-0 flex-1 rounded-2xl border border-slate-600 bg-[#111827] px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
      />

      <button
        type="submit"
        className="rounded-2xl bg-purple-600 px-7 py-4 font-bold text-white shadow-lg shadow-purple-900/20 transition hover:bg-purple-500 active:scale-95"
      >
        + Add Task
      </button>
    </form>
  )
}

export default TodoForm