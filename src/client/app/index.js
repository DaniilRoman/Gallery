import React from 'react';
import ReactDOM from 'react-dom';
// import openSocket from 'socket.io-client';
import Socket from "./socketClient";
import { setTimeout } from 'timers';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.socket = new Socket();
    this.state = { value: '', result: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.socket.sendMessage(event.target.value);
    this.setState(
      { value: event.target.value });
  }
  

  //   handleChange(event) {
  //   event.preventDefault();
  //   this.socket.sendMessage(event.target.value);
  //   setTimeout(this.temp(event.target.value), 1000);
  // }

  // temp(value) {
  //   this.setState(
  //     { value: value, result: this.socket.result })
  // }

  handleSubmit(event) {
    this.socket.sendMessage(this.state.value);
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  componentDidMount() {
    this.socket.connect(this);
  }


  componentWillUnmount() {
    this.socket.disconnect();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

ReactDOM.render(<NameForm />, document.getElementById('app'));