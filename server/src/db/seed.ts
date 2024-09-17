import { client, db } from ".";
import { goalCompletions, goals } from "./schema";
import dayjs from 'dayjs'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const result = await db.insert(goals).values([
    { title: 'acodar cedo', desiredWeeklyFrequency: 5 },
    { title: 'me exercitar', desiredWeeklyFrequency: 3 },
    { title: 'meditar', desiredWeeklyFrequency: 2 }

  ]).returning()

  const startOfweek = dayjs().startOf('week')

  await db.insert(goalCompletions).values([
    {
      goalId: result[0].id, createdAt: startOfweek.toDate()
    },
    {
      goalId: result[1].id, createdAt: startOfweek.add(1, 'day').toDate()
    }
  ])
}

seed().finally(() => {
  client.end()
})