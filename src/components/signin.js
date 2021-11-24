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
            <div className="content">
                <h1>Sign in</h1>
                <form onSubmit={(e) => e.preventDefault()}>

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
                            <button className="button is-link" onClick={this.signin}>Sign in</button>
                        </div>
                        <a className="mt-2" href="/sign-up">Sign up</a>

                    </div>
                </form>
            </div>
        )
    }
}

export default Signin