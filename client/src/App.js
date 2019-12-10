import React, {Component} from 'react';
import './App.css';
import Listing from "./components/Listing";

class App extends Component {

  render() { 
    return ( 
      <div className="App">
          <Listing />
      </div> 
    );
  }
}
 
export default App;
