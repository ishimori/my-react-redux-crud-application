import React from 'react';

/*
class App extends Component {
  render(){
    return(
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => console.log("i am click")} />

      </React.Fragment>

    )
  }
}
*/

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <div>Hi</div>
    </div>
  )
}

const Cat = () => {
  return <div>meow!</div>
}

export default App;
