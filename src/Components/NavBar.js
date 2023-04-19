import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded  w-full">
            <div class="container flex flex-wrap items-center justify-around mx-auto">
                <h2 class="font-press-start md:-mx-8">
                    <strong>U</strong>r<strong>T</strong>asks
                </h2>
                <ul className="flex flex-row flex-wrap justify-around  w-1/4">
                    <li>
                        <Link to="/taskList">List</Link>
                    </li>
                    <li>
                        <Link to="/taskForm">Form</Link>
                    </li>
                </ul>
                </div>
        </nav>
    );
};

export default NavBar;