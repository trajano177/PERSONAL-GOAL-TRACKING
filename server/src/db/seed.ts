import { db } from ".";
import { goalCompletions, goals } from "./schema";

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  await db.insert(goals).values([
    { title: 'Acordar cedo', desireWeeklyFrequency: 5},
    { title: 'não exercitar', desireWeeklyFrequency: 3},
    { title: 'meditar', desireWeeklyFrequency: 1}
  ])
}

seed()