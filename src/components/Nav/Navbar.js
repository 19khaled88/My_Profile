import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../CSS/nav.css'
import { menuItems } from '../../data/data.js'
const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false)
  const navigate = useNavigate()
  const mobileMenu = () => {
    setMenuStatus(!menuStatus)
  }
  const urlHandler = (link) => {
    if (link === 'Home') {
      navigate(`/`)
    } else {
      navigate(`/${link}`)
    }
  }
  return (
    <div className="Nav">
      <div>Portfolio</div>
      <div>
        <ul>
          {menuItems.map((e) => (
            <button key={e.id} onClick={() => urlHandler(e.btn)}>
              {e.btn}
            </button>
          ))}
         {/* <button>
            <img src="/search.png" width="30px" height="30px" />
            Search
          </button> */}
        </ul>
      </div>
      <img
        src={`${menuStatus === true ? '/up-arrow.png' : '/menu.png'}`}
        alt="No Image"
        width="40px"
        height="40px"
        onClick={() => mobileMenu()}
      />

      <div id={`${menuStatus === true ? 'activeMenu' : 'inActiveMenu'}`}>
        {menuItems.map((e) => (
          <a key={e.id} href={`#${e.btn}`}>
            {e.btn}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
