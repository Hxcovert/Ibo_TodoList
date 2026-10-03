function UserGuide() {
  return (
    <section className="rounded-3xl border border-slate-700 bg-[#1f2937] p-6 shadow-2xl">

      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-wider text-orange-400">
          Quick Guide
        </p>

        <h2 className="mt-1 text-2xl font-bold text-white">
          How It Works
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Manage your tasks in a few simple steps.
        </p>
      </div>

      <div className="space-y-4">

        <div className="flex gap-4 rounded-2xl bg-[#273449] p-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 font-bold text-purple-300">
            1
          </span>

          <div>
            <h3 className="font-bold text-slate-200">
              Add a Task
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Type your task in the input box and click Add Task.
            </p>
          </div>
        </div>

        <div className="flex gap-4 rounded-2xl bg-[#273449] p-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-400/15 font-bold text-orange-300">
            2
          </span>

          <div>
            <h3 className="font-bold text-slate-200">
              Mark Progress
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Click Mark Done when you finish a task.
            </p>
          </div>
        </div>

        <div className="flex gap-4 rounded-2xl bg-[#273449] p-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-400/15 font-bold text-teal-300">
            3
          </span>

          <div>
            <h3 className="font-bold text-slate-200">
              Manage Tasks
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Change a task back to Not Done or delete it when no longer needed.
            </p>
          </div>
        </div>

      </div>

      <div className="mt-6 rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4">
        <h3 className="font-bold text-purple-300">
          Task Status
        </h3>

        <p className="mt-1 text-sm text-purple-200/60">
          Purple is used for actions, orange shows unfinished tasks,
          and teal shows completed tasks.
        </p>
      </div>

    </section>
  )
}

export default UserGuide