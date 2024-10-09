
import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/ui/create-goal'
//import { EmptyGoals } from './components/ui/empty-goals'
import { Summary } from './components/summary'


 export  function App() {
 return (
 <Dialog>

  <Summary />
  <CreateGoal />
 </Dialog>
)
}

// Summary

// <EmptyGoals /