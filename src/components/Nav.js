import React from 'react'
import {Link } from 'react-router-dom'

const Nav = () => {
  
  return (
    <nav className="navbar">
      <h4>Starboard</h4>
      <div>
        <Link to = '/'>Home</Link>
        <Link to = '/listings'>Boat Listings</Link>
        <Link to = '/new'>Add Boat</Link>
      </div>
    </nav>
  )
}

export default Nav
