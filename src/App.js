import SigninForm from './Components/SigninForm/SigninForm'
import {BrowserRouter as Router, Routers, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routers>
          <Route>
          <Route path='/signin' element={<SigninForm/>} />
          
          
          </Route>
        </Routers>
      </Router>
      <SigninForm/>
    </div>
  );
}

export default App;
