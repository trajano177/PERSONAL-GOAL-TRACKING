import { eq } from 'drizzle-orm'
import { db } from '../db'
import { goalCompletions, goals } from '../db/schema'

interface DeleteGoalCompletionRequest {
  goalCompletionId: string
}

export async function deleteGoalCompletion({
  goalCompletionId,
}: DeleteGoalCompletionRequest) {
  const result = await db
    .delete(goalCompletions)
    .where(eq(goalCompletions.id, goalCompletionId))
    .returning()

  const deletedGoalCompletion = result[0]
  return { deletedGoalCompletion }
}
