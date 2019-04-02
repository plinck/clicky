import React from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let elem = document.querySelector(".sidenav");
        M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
        return (
            // <!--  NAV -->
            <div>
                <ul className="sidenav" id="mobile-links">
                    <Link to="/" className="brand-logo"><i className="material-icons">blur_circular</i>Home</Link>
                </ul>
                <nav className="nav-wrapper indigo">
                    <div className="container">
                        <a href="/" className="brand-logo center hide-on-large-only">Clicky</a>
                        <a href="/" className="brand-logo hide-on-med-and-down"><i className="material-icons">blur_circular</i>Clicky</a>
                        <a href="#!" className="sidenav-trigger" data-target="mobile-links">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/">Dashboard</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            // <!--  END NAV -->
        );
    }
}

export default Navigation;