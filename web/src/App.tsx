
import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/ui/create-goal'
import { EmptyGoals } from './components/ui/empty-goals'

 export  function App() {
 return (
 <Dialog>

  <EmptyGoals />
  <CreateGoal />
 </Dialog>
)
}

// Summary