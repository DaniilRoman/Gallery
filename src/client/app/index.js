import React from 'react';
import ReactDOM from 'react-dom';

// class App extends React.Component {
// //   render () {
// //     return <p> Hello React project</p>;
// //   }
// // }

//   getInitialState: function () {

//     // This is called before our render function. The object that is 
//     // returned is assigned to this.state, so we can use it later.

//     return { elapsed: 0 };
//   },

//   componentDidMount: function () {

//     // componentDidMount is called by react when the component 
//     // has been rendered on the page. We can set the interval here:

//     this.timer = setInterval(this.tick, 50);
//   },

//   componentWillUnmount: function () {

//     // This method is called immediately before the component is removed
//     // from the page and destroyed. We can clear the interval here:

//     clearInterval(this.timer);
//   },

//   tick: function () {

//     // This function is called every 50 ms. It updates the 
//     // elapsed counter. Calling setState causes the component to be re-rendered

//     this.setState({ elapsed: new Date() - this.props.start });
//   },

//   render: function () {

//     var elapsed = Math.round(this.state.elapsed / 100);

//     // This will give a number with one digit after the decimal dot (xx.x):
//     var seconds = (elapsed / 10).toFixed(1);

//     // Although we return an entire <p> element, react will smartly update
//     // only the changed parts, which contain the seconds variable.

//     return <p>This example was started <b>{seconds} seconds</b> ago.</p>;
//   }

// const FunctionalComponent = (props) => {
//   return <h3>Hi, {props.name}!</h3>
// };

// // class component
// class ClassComponent extends React.Component {
//   render() {
//       return <h3>Hi, {this.props.name}!</h3>;
//   }
// }

// // composing multiple components in one React element
// const app = (
//   <div>
//       <FunctionalComponent name="John" />
//       <ClassComponent name="Jack" />
//   </div>
// );

// // same as above but using component
// function App(props) {
//   return (
//       <div>
//           <FunctionalComponent name="John" />
//           <ClassComponent name="Jack" />
//       </div>
//   )
// }

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('app'));