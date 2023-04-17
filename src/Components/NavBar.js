import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                {/* <li>
                    <Link to="/">Home</Link>
                </li> */}
                <li>
                    <Link to="/taskList">List</Link>
                </li>
                <li>
                    <Link to="/taskForm">Form</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
