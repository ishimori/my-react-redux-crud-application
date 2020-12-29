import React,{Component} from 'react';


class App extends Component {
  render(){
    return(
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => console.log("i am click")} />

      </React.Fragment>

    )
  }
}

/*
class App extends Component {
  render(){
    return React.createElement(
      "div",
      null,
      "hello,world3"
    );
  }
}
*/

export default App;
