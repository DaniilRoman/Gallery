import React from 'react';
import ReactDOM from 'react-dom';
// import openSocket from 'socket.io-client';
import Socket from "./socketClient";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.socket = new Socket();
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value});
  }

  handleSubmit(event) {
    this.socket.sendMessage(this.state.value);
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  componentDidMount() {
    this.socket.connect();
  }
  

  componentWillUnmount(){
    this.socket.disconnect();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<NameForm/>, document.getElementById('app'));