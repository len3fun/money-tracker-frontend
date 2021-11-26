import React from "react";

function Navbar(props) {
    return (
        <div>
            <nav className="navbar is-light mb-5" role="navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">Money tracker</a>
                </div>

                {(props.isLoggedIn ?
                        <div id="navbarBasic" className="navbar-menu">
                            <div className="navbar-start">
                                <a className="navbar-item" href="#" onClick={() => props.logout()}>Log out</a>
                            </div>
                        </div> :
                        null
                )}
            </nav>
        </div>
    )
}

export default Navbar;