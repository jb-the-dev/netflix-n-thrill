import './App.css';
import ShowList from './shows/ShowList';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import CreateShow from './shows/CreateShow';
import EditShow from './shows/EditShow';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Netflix N Thrill</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/shows" replace />} />
          <Route path="/shows" element={<ShowList />}/>
          <Route path="/new" element={<CreateShow />} />
          <Route path="/shows/:show_id/edit" element={<EditShow />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
