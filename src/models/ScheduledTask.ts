import { Task } from './Task'
import { TaskType } from './TaskType'

export class ScheduledTask extends Task {
  get type(): TaskType {
    return TaskType.Scheduled
  }
}
