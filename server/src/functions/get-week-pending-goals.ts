import dayjs from "dayjs"
import weekOfYear from "dayjs/plugin/weekOfYear"

dayjs.extend(weekOfYear)
export function getWeekPendingGoals() {
  const currentYer = dayjs().year()
  const currentWeek = dayjs().week()
}

