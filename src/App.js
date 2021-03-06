import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import About from "./components/About"
import Resume from "./components/Resume"
import Projects from "./components/Projects"
import {AnimatePresence} from 'framer-motion'

function App() {
  
  return (
    <Router>
      <div id= "App" className="App">
        <div className="container app-container">
          <div className = "row app-row ">
            <div className="col-lg-3 col-md-12 mb-2 px-1">
                <Sidebar/>  
            </div>
            <div className ="col-lg-9 col-md-12 pb-2 px-1 container">
            <div className = " app-main-content ">
                <Navbar/>                  
                    <Switch>
                        <Route path = "/about">
                            <About/>
                        </Route>

                        <Route path = "/resume">
                            <Resume/>
                        </Route>

                        <Route path = "/projects">
                            <Projects/>
                        </Route>

                        <Route>
                            <Redirect to= "/about" />
                        </Route>
                    </Switch>                  
            </div>
            </div>
          </div>  
        </div>
      </div>
    </Router>
  );
}

export default App;
