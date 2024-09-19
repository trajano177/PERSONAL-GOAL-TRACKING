import dayjs from "dayjs"
import weekOfYear from "dayjs/plugin/weekOfYear"
import { db } from "../db"
import { goalCompletions, goals } from "../db/schema"
import { lte, and, count, gte } from "drizzle-orm"

dayjs.extend(weekOfYear)
export function getWeekPendingGoals() {
  const firestDayOfWeek = dayjs().startOf('week').toDate()
  const lastDayOfWeek = dayjs().endOf('week').toDate()

  const goalsCreateUpToWeek = db.$with('goals_created_up_to_week').as(
    db.select({
      id: goals.id,
      title: goals.title,
      desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
      createdAt: goals.createdAt
    }).from(goals).where(lte(goals.createdAt, lastDayOfWeek))
  )

  const goalCompletionsCounts = db.$with('goal_completion_counts').as(
    db.select({
      goalId: goalCompletions.goalId,
      completionCount: count(goalCompletions.id)
    }).from(goalCompletions).where(and(
      gte(goals.createdAt, firestDayOfWeek),
      lte(goals.createdAt, firestDayOfWeek)
    )).groupBy(goalCompletions.goalId)
  )
}

