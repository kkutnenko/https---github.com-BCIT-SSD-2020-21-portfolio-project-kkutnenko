import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className = "row">
          <div className="col-lg-3">
              <div className=" app_sidebar">
                <Sidebar/>
              </div>
          </div>
          

          <div className = "col-lg-9 app_main">
              main
          </div>
        </div>  
      </div>
    </div>
  );
}

export default App;
