import "./App.css"
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {

  return (
    <div className="App">
        <Sidebar />
        <div className="w-[90vw]">
        <Navbar />
        </div>
    </div>
  )
}

export default App
