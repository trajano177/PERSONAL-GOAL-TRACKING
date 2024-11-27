import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/ui/create-goal'
import { Summary } from './components/summary'
import { useQuery } from '@tanstack/react-query'
import { EmptyGoals } from './components/empty-goals'
import { getSummary } from './http/get-summary'
// import { EmptyGoals } from './components/empty-goals'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}
      <CreateGoal />
    </Dialog>
  )
}