import React, {Component} from "react";
import Navbar from "./navbar";
import Activities from "./activities";
import Signin from "./signin";
import Sources from "./source";
import axios from "axios";

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            login: "",
            password: "",
            isRegistered: false,
            registrationFailed: false,
            errorMessage: "",
        }

        this.name = this.name.bind(this);
        this.login = this.login.bind(this);
        this.password = this.password.bind(this);
        this.signup = this.signup.bind(this);
    }

    name(event) {
        this.setState({name: event.target.value})
    }

    login(event) {
        this.setState({login: event.target.value})
    }

    password(event) {
        this.setState({password: event.target.value})
    }

    signup() {
        const signupUrl = "auth/sign-up"

        const headers = {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }

        axios.post(signupUrl, {
            name: this.state.name,
            username: this.state.login,
            password: this.state.password
        }, {
            headers: headers
        }).then(() => {
            this.setState({isRegistered: true})
        }).catch(error => {
            console.log(error.response)
            this.setState({
                registrationFailed: true,
                errorMessage: error.response.data.message,
            })
        })
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
                                    <input className="input" type="text" onChange={this.name}/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Login</label>
                                <div className="control">
                                    <input className="input" type="text" onChange={this.login}/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input className="input" type="password" onChange={this.password}/>
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