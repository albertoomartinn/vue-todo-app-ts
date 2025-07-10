import type { Task } from './Task'

export enum TaskType {
  Urgent = 'urgent',
  Scheduled = 'scheduled',
}

export type TaskForm = Pick<Task, 'title' | 'description' | 'type'>
