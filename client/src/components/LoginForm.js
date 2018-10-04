import React from 'react';

class LoginForm extends React.Component {
    render() {
        return (
            <div className="container login">
            <h1 className="judul">Login Form</h1>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        )
    }
}

export default LoginForm