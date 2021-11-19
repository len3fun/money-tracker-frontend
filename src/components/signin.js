import React from "react";

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: "",
            password: "",
        }

        this.login = this.login.bind(this);
        this.password = this.password.bind(this);

        this.signin = this.signin.bind(this);
    }

    login(event) {
        this.setState({ login: event.target.value })
    }

    password(event) {
        this.setState({ password: event.target.value })
    }

    async signin() {
        const response = await fetch("auth/sign-in", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.login,
                password: this.state.password
            })
        });
        if (response.ok) {
            console.log(response.ok)
        }
        if (response.status === 200) {
            console.log(response)
            console.log("200")
            const token = await response.json()
            this.props.handleLogin(true, token.token)
        }
        if (!response.ok) {
            console.log("error")
            console.log(response)
        }
    }

    render() {
        return (
            <div>
                <h1>Sign in</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-1">
                        <label htmlFor="inputLogin" className="form-label">Login</label>
                        <input type="text" onChange={this.login} className="form-control" id="inputLogin"/>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" onChange={this.password} className="form-control" id="inputPassword"/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.signin}>Sign in</button>
                    <a class="ml-3" href="/sign-up">Sign up</a>
                </form>
            </div>
        )
    }
}

export default Signin