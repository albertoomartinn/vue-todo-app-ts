import { Task } from './Task'
import { TaskType } from './TaskType'

export class UrgentTask extends Task {
  get type(): TaskType {
    return TaskType.Urgent
  }
}
