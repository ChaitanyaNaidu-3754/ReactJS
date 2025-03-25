import './App.css';
import TreeView from './components';
import menus from "./components/tree";


function App() {

  return (
    <>
      <TreeView menus={menus} />
    </>
  )
}

export default App
