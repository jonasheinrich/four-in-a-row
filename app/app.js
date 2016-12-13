import React from 'react';
import { render } from 'react-dom';
import Board from './components/Board'
import axios from 'axios';

class App extends React.Component {
  componentWillMount() {
    this.setState({
      username: '',
      validating_user: false
    });
  }
  handleClick = (e) => {
    e.preventDefault();

    const username = this.refs.username.value;
    this.setState({
      username: username,
      validating_user: true
    });

    axios.post('http://localhost:3000/users', {user: {name: username}})
         .then(function() {
           this.setState({
             validating_user: false
           });
         }.bind(this))
         .catch(function(error) {
           this.setState({
             validating_user: false
           });
           console.log(error.response);
         }.bind(this));
  }

  render() {
    return(
      <div>
        <form>
          <fieldset>
            <legend>Username</legend>
            <input type='text' ref='username' />
            <input type='submit' onClick={this.handleClick}/>
          </fieldset>
        </form>
        <br />
        <div id='username'>
          Username: &nbsp;
          <span style={{color: this.state.validating_user ? '#d3d3d3' : 'black'}}>
            {this.state.username}
          </span>
          <div className='loader' style={{display: this.state.validating_user ? 'block' : 'none'}}>
          </div>
        </div>
        <br />
        <Board />
      </div>
    )
  }
}

export default App;
