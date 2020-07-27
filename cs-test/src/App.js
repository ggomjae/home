import React from 'react';
import './App.css';
import Init from './view/init'

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
             username:null,
             subject : {title:'web',sub:'gomjae'}
      };
  }

  render() {
    console.log("3")

    return (
        <div className="App">
          <header className="App-header">
            <Init></Init>
          </header>
        </div>
    );
  }
}

export default App;