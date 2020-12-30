import React from 'react';
import PropTypes from 'prop-types';

const App = () => {

  const profiles = [
      {name : "Taro", age:10},
      {name : "Hanako", age:13},
      {name : "11", age:13},
      {name : "NoName3"}
  ]
  return (
    <div>
      {
        profiles.map((profile,index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>I am {props.name}, and {props.age} years old!</div>
}
User.propTypes = {
  name : PropTypes.string,
  age  : PropTypes.number.isRequired
}
/*
User.defaultProps = {
  age : 1
}
*/
export default App;
