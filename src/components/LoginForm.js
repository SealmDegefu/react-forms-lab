import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }


onHandleChangeUserName = (event) =>{
this.setState({
  username: event.target.value
})
}
onHandleChangePassword = (event) =>{
  this.setState({
   password: event.target.value
  })
  }

  onSubmit= (event) =>{
    event.preventDefault();
    if(this.state.username && this.state.password !== ""){
      return this.props.handleLogin(this.state)
    };
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value = {this.state.username} onChange={this.onHandleChangeUserName}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.onHandleChangePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
