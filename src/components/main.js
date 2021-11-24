import React from "react";
import Sources from "./source";
import Signin from "./signin";
import Activities from "./activities";
import Navbar from "./navbar";

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
                <Navbar isLoggedIn={this.state.isLoggedIn} logout={this.logout.bind(this)}/>

                <div class="container">
                    <div class="columns">
                        <div class="col-sm"></div>
                        <div class="col-sm">
                            {(this.state.isLoggedIn) ? <Activities token={this.state.token}/> :
                                <Signin handleLogin={this.tryLogin.bind(this)}/>}
                        </div>
                        <div className="col-sm">
                            {this.state.isLoggedIn ? <Sources token={this.state.token}/> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main