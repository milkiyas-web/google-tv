import React from 'react'
import logo from './GT_icon.png'
import './Header.css'
function Header() {
    return (
        <div className="header">
            <div className="header__title">
              <img src={logo} alt="" className="header__logo"/>
              <h3>Google TV</h3>
            </div>
            <div className="header__nav">
                    <li>For You</li>
                    <li>Watchlist</li>
                    <li>Live</li>
                    <li>Beyond TV</li>
            </div>
            <button className="header__button">Get it now</button>
        </div>
    )
}

export default Header
