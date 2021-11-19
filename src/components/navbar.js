import React from "react";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">Money tracker</a>
                {(this.props.isLoggedIn ?
                        <a className="nav-link" href="#" onClick={() => this.props.logout()}>Log out</a> :
                        null
                )}
            </ul>
        )
    }
}

export default Navbar;