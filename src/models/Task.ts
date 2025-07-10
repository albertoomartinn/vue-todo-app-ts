import type { TaskType } from './TaskType'

export abstract class Task {
  id: string
  title: string
  description: string
  createdAt: Date
  completed: boolean

  constructor(
    id: string,
    title: string,
    description: string,
    createdAt: Date = new Date(),
    completed: boolean = false,
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.createdAt = createdAt
    this.completed = completed
  }

  abstract get type(): TaskType

  toggleCompleted(): void {
    this.completed = !this.completed
  }
}
