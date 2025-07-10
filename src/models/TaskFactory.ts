import { TaskType } from './TaskType'
import { Task } from './Task'
import { nanoid } from 'nanoid'
import { UrgentTask } from './UrgentTask'
import { ScheduledTask } from './ScheduledTask'

export class TaskFactory {
  static create(type: TaskType, title: string, description: string): Task {
    const id = nanoid()
    switch (type) {
      case TaskType.Urgent:
        return new UrgentTask(id, title, description)
      case TaskType.Scheduled:
        return new ScheduledTask(id, title, description)
      default:
        throw new Error('Invalid task type')
    }
  }
}
