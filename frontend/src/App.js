import './App.css';
import ShowList from './shows/ShowList';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CreateShow from './shows/CreateShow';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Netflix N Thrill</h1>
        <Routes>
          <Route path="/" element={<ShowList />}/>
          <Route path="/new" element={<CreateShow />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
