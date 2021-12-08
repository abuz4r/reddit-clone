import React from 'react'
import "./Nav.css"

export default function nav() {
    return (
        <div className="nav">
            <div className="nav-logo">
                <img src={"./reddit-logo.png"}/>
                <span className='nav-title'>reddit clone</span>
            </div>
            <div className="nav-search">
                <span>r/ </span>
                <input type="text" name="search"/>
            </div>
        </div>
    )
}
