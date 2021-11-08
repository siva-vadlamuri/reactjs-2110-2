import {Link} from 'react-router-dom';
function Navigation() {
    return (
        <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutus">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contactus">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
      </ul>
    )
}

export default Navigation
