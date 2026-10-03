import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import UserGuide from './components/UserGuide'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      done: false,
    }

    setTasks([...tasks, newTask])
  }

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, done: !task.done }
          : task
      )
    )
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const clearAllTasks = () => {
    setTasks([])
  }

  const completedTasks = tasks.filter((task) => task.done).length

  return (
    <div className="min-h-screen bg-[#111827] px-4 py-8 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">

        <header className="mb-8">
          <div className="mb-3 inline-block rounded-full bg-purple-500/20 px-4 py-2 text-sm font-semibold text-purple-300">
            DCIT 26 • Task Manager
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My To-Do List
          </h1>

          <p className="mt-2 max-w-xl text-slate-400">
            Organize your tasks, track your progress, and stay productive.
          </p>
        </header>

        <main className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-start">

          <section className="rounded-3xl border border-slate-700 bg-[#1f2937] p-5 shadow-2xl sm:p-7">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-purple-400">
                  Your Tasks
                </p>

                <h2 className="mt-1 text-2xl font-bold text-white">
                  Task List
                </h2>
              </div>

              <div className="rounded-2xl bg-[#111827] px-4 py-3 text-center">
                <p className="text-xs text-slate-500">
                  Completed
                </p>

                <p className="text-xl font-bold text-teal-400">
                  {completedTasks}/{tasks.length}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <TodoForm onAddTask={addTask} />
            </div>

            <TodoList
              tasks={tasks}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
            />

            {tasks.length > 0 && (
              <button
                type="button"
                onClick={clearAllTasks}
                className="mt-5 w-full rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 font-semibold text-red-300 transition hover:bg-red-500/20 active:scale-[0.99]"
              >
                Clear All Tasks
              </button>
            )}

          </section>

          <UserGuide />

        </main>

        <footer className="mt-8 text-center text-sm text-slate-500">
          <p>
            Laboratory 2 | React + Tailwind CSS
          </p>
        </footer>

      </div>
    </div>
  )
}

export default App