import { Link } from "react-router-dom";

export function NavBar() {

    return (
    <nav>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
            <i className="fa fa-bars" aria-hidden="true"></i>
        </label>
        <label className="logo">Entertainment Bank</label>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/manage">Manage</Link></li>
        </ul>
    </nav>
    );
  }