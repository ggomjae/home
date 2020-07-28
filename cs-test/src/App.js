import React from 'react';
import './App.css';
import Init from './view/init'
import Temp from './view/temp'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
             username:null,
             subject : {title:'web',sub:'gomjae'},
             cutomers:'',
             completed :0
      };
  }

  stateRefresh = ()=>{
    this.setState({
      customers:'',
      completed: 0
    });
    this.callApi()
      .then(res => this.setState({username: res}))
      .catch(err => console.log(err))
  }

  render() {
    console.log("3")

    return (
      <Router>
        <header>
          <Link to="/">
            <button>Init</button>
          </Link>
          <Link to="/join">
            <button>Temp</button>
          </Link>
        </header>
        <hr />
        <main>
          <Switch>
            <Route exact path="/" component={Init} />
            <Route path="/join" component={Temp} />
          </Switch>
        </main>
      </Router>
    );
    
  }
}

export default App;