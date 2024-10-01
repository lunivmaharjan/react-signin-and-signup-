import SigninForm from './Components/SigninForm/SigninForm'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routers>
          <Route path='/'element={<SignupForm/>}>
            <Route path="/signin" element={<SigninForm/>} />
            </Route>            
        </Routers>
      </Router>
      <SigninForm/>
    </div>
  );
}

export default App;
