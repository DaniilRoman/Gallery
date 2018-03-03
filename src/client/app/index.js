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


function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl/>,
  document.getElementById('app')
);