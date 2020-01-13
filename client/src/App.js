import React, {Component} from 'react';
import './App.css';
import Listing from "./components/Listing";
import Forms from "./components/Form";


class App extends Component {

  render() { 
    return ( 
      <div className="App">
          <Forms />
          <Listing />
      </div> 
    );
  }
}
 
export default App;
