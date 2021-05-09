import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Button from "../Button/Button";
import './Navbar.css';
const Navbar = () => {
    const [hamburgerClicked, setHamburgerClicked] = useState(false);
    const [button, setButton] = useState(true);

    const hamburgerClickHandler = () =>  setHamburgerClicked(!hamburgerClicked);
    const closeMenuHandler = () => setHamburgerClicked(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMenuHandler}>
                        Global <i className="fab fa-avianex" />
                    </Link>
                    <div className="menu-icon">
                        <i onClick={hamburgerClickHandler} className={hamburgerClicked ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className={hamburgerClicked ? 'nav-menu active': 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMenuHandler}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/services" className="nav-links" onClick={closeMenuHandler}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/products" className="nav-links" onClick={closeMenuHandler}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/signup" className="nav-links-mobile" onClick={closeMenuHandler}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle={'btn--outline'}>
                        Sign Up
                    </Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;