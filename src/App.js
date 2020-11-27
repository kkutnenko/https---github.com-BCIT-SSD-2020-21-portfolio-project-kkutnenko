import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className = "row">
          <div className="col-lg-3">
              
              <Sidebar/> 
              
          </div>
          

          <div className = "col-lg-9 app-main">
              main
          </div>
        </div>  
      </div>
    </div>
  );
}

export default App;
