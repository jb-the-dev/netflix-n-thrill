import './App.css';
import ShowList from './ShowList';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Netflix N Thrill</h1>
        <Routes>
          <Route path="/" element={<ShowList />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
