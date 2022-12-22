import React from 'react'
import '../../CSS/nav.css'
const Navbar = () => {
  return (
    <div className="Nav">
      <div>Logo</div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact</li>
          <li style={{ display: 'flex', flexDirection: 'row' }}>
            <img
              src="/search.png"
              width="30px"
              height="30px"
              style={{ marginRight: '5px' }}
            />
            Search
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
