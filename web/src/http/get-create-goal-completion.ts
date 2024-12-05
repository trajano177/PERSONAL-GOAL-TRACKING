

export async function createGoalCompletion(goalId: string) {
await fetch('http://localhost:3333/completions'), {
  method: 'POST',
  Headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify({
    goalId,
  })
}
}