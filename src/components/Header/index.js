// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="two">
    <div className="inner">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="logo"
        className="img"
      />
      <h1>Wave</h1>
    </div>
    <nav className="nav-header">
      <div className="container">
        <ul className="list-container">
          <li className="list">
            <Link to="/">Home</Link>
          </li>
          <li className="list">
            <Link to="/about">About</Link>
          </li>
          <li className="list">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)
export default Header
