import { Link, useLocation } from 'react-router-dom';
function Nav() {
    return (
        <div className="nav">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link
                        to="/About"
                    >
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/Projects"
                    >
                        Projects
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/Contact"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
