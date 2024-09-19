import { goalCompletions, goals } from "../db/schema"
import { db } from "../db"
import { count, lte , gte, sql, eq, and } from "drizzle-orm"
import dayjs from "dayjs"

interface CreateGoalCompletionRequest {
  goalId: string
}

export async function createGoalCompletion( {goalId}: CreateGoalCompletionRequest) { 
  const firestDayOfWeek = dayjs().startOf('week').toDate()
  const lastDayOfWeek = dayjs().endOf('week').toDate()
  const goalCompletionsCounts = db.$with('goal_completion_counts').as(
    db.select({
      goalId: goalCompletions.goalId,
      completionCount: count(goalCompletions.id)
      .as('completionCount')
    }).from(goalCompletions).where(and(
      gte(goalCompletions.createdAt, firestDayOfWeek),
      lte(goalCompletions.createdAt, firestDayOfWeek),
      eq(goalCompletions.id, goalId)
    )).groupBy(goalCompletions.goalId)
  )

  const result = await db.with(goalCompletionsCounts).select({
    desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
    completionCount: sql `
    COALESCE(${goalCompletionsCounts.completionCount}, 0)
    `.mapWith(Number)
  })
  .from(goals)
  .leftJoin(goalCompletionsCounts, eq(goalCompletionsCounts.goalId, goals.id))
  .where(eq(goals.id, goalId))
  .limit(1)

  const {completionCount, desiredWeeklyFrequency }= result[0]
 
  if(completionCount >= desiredWeeklyFrequency) {
    throw new Error('Goal already completed this week')
  }
  const inserResult = await db.insert(goalCompletions).values({
   goalId
  }).returning()

  const goalCompletion = inserResult[0]

  return { goalCompletion}
}