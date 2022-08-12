import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex">
        <Link className="navbar-brand" to="/">useContext</Link>
        <div className="d-flex">
          <div className="navbar-nav d-flex w-100">
            <NavLink
              className={({isActive}) => `nav-link ${ isActive ? "active" : "" }`}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({isActive}) => `nav-link ${ isActive ? "active" : "" }`}
              to="about"
            >
              About
            </NavLink>
            <NavLink
              className={({isActive}) => `nav-link ${ isActive ? "active" : "" }`}
              to="/login"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
