import React from 'react'

function Nav() {
  return (
    <div>
       <nav className='container'>
      <img src='/images/brand_logo.png' alt=''/>
      <ul>
        <li href="#">Menu</li>
        <li href="#">location</li>
        <li href="#">Contact</li>
        <li href="#">About</li>
      </ul>
      <button>Login</button>
      </nav>
    </div>
  )
}

export default Nav
