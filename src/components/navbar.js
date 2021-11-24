import React from "react";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar is-light" role="navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">Money tracker</a>
                    </div>

                    {(this.props.isLoggedIn ?
                            <div id="navbarBasic" className="navbar-menu">
                                <div className="navbar-start">
                                    <a className="navbar-item" href="#" onClick={() => this.props.logout()}>Log out</a>
                                </div>
                            </div> :
                            null
                    )}
                </nav>
            </div>
        )
    }
}

export default Navbar;