import React from 'react';
import './App.css';
import Init from './view/init'

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
             username:null
      };
  }

  componentDidMount(){
      fetch('api')
          .then(res=>res.json())
          .then(data=>this.setState({username:data.user_id}));
  }

  render() {
    const {username} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            {username ? `Hello ${username}` : 'Hello World'}
            <Init></Init>
          </header>
        </div>
    );
  }
}

export default App;