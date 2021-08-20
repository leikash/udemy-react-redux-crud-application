import React from "react";
import PropTypes from 'prop-types';

// function App() {
//   const greeting = "Hi, Tom!";
//   const dom = <h1 className="foo">{greeting}</h1>;
// //  return <h1>Hello, world!</h1>;
//   return dom;
// }
// function App() {
// //   return <input type="text" onClick={() => {console.log("It's clicked")}}></input>;
// //   return <input type="text" onChange={() => {console.log("It's changed!")}}></input>;
//   return (
//     // <div>
//     //   <label htmlFor="bar">bar</label>
//     //   <input type="text" onChange={() => {console.log("It's changed!")}} />;
//     // </div>
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("It's changed!")}} />;
//     </React.Fragment>
//   )
//  }
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("It's changed!")}} />;
//     </React.Fragment>
//     )
//   }
// }

const App = () => {
  const profiles = [
    { name: "Taro", age: 13 },
    { name: "Hanako", age: 8 },
    { name: "One", age: 3 },
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
    )
}

const User  = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old! </div>;
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}

// User.defaultProps = {
//   age: 1
// }

export default App;
