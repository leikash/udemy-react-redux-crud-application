import React from "react";
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
  return <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>
}

const Cat  = () => {
  return <div>Meow!</div>;
}

export default App;
