import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li><a href="/">Countries</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header