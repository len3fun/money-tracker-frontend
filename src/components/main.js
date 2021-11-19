import React from "react";
import Sources from "./source";
import Signin from "./signin";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            token: "",
        }

    }

    logout() {
        this.setState({isLoggedIn: false})
    }

    tryLogin(isLoggedIn, token) {
        this.setState({isLoggedIn: isLoggedIn, token: token})
    }

    render() {
        return (
            <div>
                <ul className="navbar navbar-light bg-light">
                    <a className="navbar-brand">Money tracker</a>
                    {(this.state.isLoggedIn ?
                            <a className="nav-link disabled" onClick={() => this.logout()}>Log out</a> :
                            null
                    )}
                </ul>

                <div class="container">
                    <div class="row">
                        <div class="col-sm"></div>
                        <div class="col-sm">
                            {(this.state.isLoggedIn) ? null : <Signin handleLogin={this.tryLogin.bind(this)}/>}
                        </div>
                        <div className="col-sm">
                            { this.state.isLoggedIn ? <Sources token={this.state.token} /> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main