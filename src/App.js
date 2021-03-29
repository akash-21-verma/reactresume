import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}  /> 
      <Route path="/skills" exact component={Skills}  /> 
      <Route path="/contact" exact component={Contact}  /> 
    </Router>
  );
}

export default App;
