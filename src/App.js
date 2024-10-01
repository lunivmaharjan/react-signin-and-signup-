import SigninForm from './Components/SigninForm/SigninForm'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/signin" element={<SigninForm/>} />x            
        </Routes>
      </Router>
      <SigninForm/>
    </div>
  );
}

export default App;
