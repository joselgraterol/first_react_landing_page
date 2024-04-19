import React, {useState} from 'react'
import logo from "../images/logo.png"; 

function Navbar() {

    const [nav, setNav] = useState(false)

    function changeBackground() {
        if (window.scrollY >= 50) {
            setNav(true)
        }else{
            setNav(false)
        }
    }


    window.addEventListener("scroll", changeBackground)

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <a href="#" className='logo'>
                <img src={logo} alt="logo de la pagina" />
            </a>

            <input type="checkbox" className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' htmlFor="menu-btn">
                <span className='nav-icon'></span>
            </label>

            <ul className='menu'>
                <li><a href="#" className='active'>Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#presentaion">Ui ss</a></li>
                <li><a href="#download">Download</a></li>
            </ul>

        </nav>
    )
}

export default Navbar