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
  

  handleSubmit(event) {
    this.socket.sendMessage(this.state.value);
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
            Type:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="hidden" value="Submit" />
        </form>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

ReactDOM.render(<NameForm />, document.getElementById('app'));