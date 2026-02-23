import { NavBar, NavFooter } from 'kpmp-common-components';
import { ComparatorTool } from './components/Comparator';


function App() {
  return (
    <div>
      <NavBar app='atlas' comparatorOn='true'/>
        <ComparatorTool />
      <NavFooter app='atlas'/>
    </div>
  )
}

export default App