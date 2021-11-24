import React, {Component} from "react";
import Navbar from "./navbar";
import Activities from "./activities";
import Signin from "./signin";
import Sources from "./source";

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
        this.setState({Name: event.target.value})
    }

    Login(event) {
        this.setState({Login: event.target.value})
    }

    Password(event) {
        this.setState({Password: event.target.value})
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

    RegistrationForm = () => {

        return (
            <div className="columns">

                <div className="column"></div>
                <div className="column">
                    <div className="content">
                        <h1>Registration</h1>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input className="input" type="text" onChange={this.Name}/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Login</label>
                                <div className="control">
                                    <input className="input" type="text" onChange={this.Login}/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input className="input" type="password" onChange={this.Password}/>
                                </div>
                            </div>

                            <div className="field is-grouped">
                                <div className="control">

                                    <button type="submit" className="button is-link" onClick={this.signup}>Sign up
                                    </button>
                                </div>
                            </div>
                        </form>
                        {
                            this.state.isRegistered &&
                            <text>Registered successfully!</text>
                        }
                        {
                            this.state.registrationFailed &&
                            <text>Registration error: </text>
                        }
                        {
                            this.state.errorMessage &&
                            this.state.errorMessage
                        }
                    </div>
                </div>
                <div className="column"></div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Navbar isLoggeIn={false}/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm"></div>
                        <div className="col-sm">
                            <this.RegistrationForm/>
                        </div>
                        <div className="col-sm">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Signup