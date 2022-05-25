//import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Homepage from './Screens/Homepage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        
        <Navbar />

        <BrowserRouter>
          <Route path="/home" exact component={Homepage}/>
        </BrowserRouter>
        
      {/* </header> */}
      
    </div>
  );
}

export default App;
