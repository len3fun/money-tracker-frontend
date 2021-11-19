import React, {Component} from "react";

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Name: "",
            Login: "",
            Password: "",
            isRegistered: false,
            registrationFailed: false,
            errorMessage: "",
        }

        this.Name = this.Name.bind(this);
        this.Login = this.Login.bind(this);
        this.Password = this.Password.bind(this);

        // this.handleSubmit = this.handleSubmit.bind(this);
        this.signup = this.signup.bind(this);
    }

    Name(event) {
        this.setState({ Name: event.target.value })
    }

    Login(event) {
        this.setState({ Login: event.target.value })
    }

    Password(event) {
        this.setState({ Password: event.target.value })
    }

    async signup() {
        const response = await fetch("auth/sign-up", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.Name,
                username: this.state.Login,
                password: this.state.Password
            })
        });
        if (response.ok) {
            console.log(response.ok)
        }
        if (response.status === 200) {
            this.setState({isRegistered: true})
        }
        if (!response.ok) {
            const msg = await response.json()
            const errorMsg = msg.message
            console.log(errorMsg)
            this.setState({
                registrationFailed: true,
                errorMessage: errorMsg,
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Registration</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-1">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" onChange={this.Name} className="form-control" id="inputName"/>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="inputLogin" className="form-label">Login</label>
                        <input type="text" onChange={this.Login} className="form-control" id="inputLogin"/>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" onChange={this.Password} className="form-control" id="inputPassword"/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.signup}>Sign up</button>
                </form>
                {this.state.isRegistered &&
                    <text>Registered successfully!</text>
                }
                {this.state.registrationFailed &&
                    <text>Registration error: </text>
                }
                {this.state.errorMessage &&
                    this.state.errorMessage
                }
            </div>
        )
    }
};

export default Signup