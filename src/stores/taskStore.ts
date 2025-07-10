import type { Task } from '@/models/Task'
import { TaskFactory } from '@/models/TaskFactory'
import type { TaskForm, TaskType } from '@/models/TaskType'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [] as Task[],
  }),
  getters: {
    completedTasks: (state) => {
      return () => state.tasks.filter((task) => task.completed)
    },
    pendingTasks: (state) => {
      return () => state.tasks.filter((task) => !task.completed)
    },
    tasksByType: (state) => {
      return (type: TaskType) => state.tasks.filter((task) => task.type === type)
    },
  },
  actions: {
    addTask(type: TaskType, title: string, description: string) {
      const formattedDescription = description.replace(/\n/g, '<br>')
      const task = TaskFactory.create(type, title, formattedDescription)

      this.tasks.push(task)
    },

    updateTask(task: Task, taskForm: TaskForm) {
      const existingTask = this.tasks.find((t) => t.id === task.id)

      if (!existingTask) return

      existingTask.title = taskForm.title
      existingTask.description = taskForm.description
    },

    toggleTaskCompleted(task: Task) {
      const existingTask = this.tasks.find((t) => t.id === task.id)

      existingTask?.toggleCompleted()
    },
    deleteTask(task: Task) {
      const index = this.tasks.findIndex((t) => t.id === task.id)
      if (index > -1) {
        this.tasks.splice(index, 1)
      }
    },
  },
})
