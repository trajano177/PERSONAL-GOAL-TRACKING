import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z, { string } from 'zod'
import { deleteGoalCompletion } from '../../functions/delete-goal-completion'

export const deleteGoalCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.delete(
    '/delete-goal-completion',
    {
      schema: {
        body: z.object({
          goalCompletionId: z.string(),
        }),
      },
    },
    async request => {
      const { goalCompletionId } = request.body
      await deleteGoalCompletion({ goalCompletionId })
    }
  )
}
