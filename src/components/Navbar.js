import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar(){
	const [click, setClick]  = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if(window.innerWidth <= 960){
			setButton(false);
		}else{
			setButton(true);
		}
	};

	useEffect(() => {showButton();}, []);
	
	window.addEventListener('resize',showButton);

	return(
			<>
				<nav className="navbar">
					<div className="navbar-container">
						<Link to="/" className="navbar-logo">
							Sheshu-Arts <i className="fab fa-typo3"></i>
						</Link>
						<div className='menu-icon' onClick={handleClick}>
							<i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
						</div>
						<ul className={click ? 'nav-menu active' : 'nav-menu'}>
							<li className='nav-item'>
								<Link to='/home' className='nav-links' onClick={closeMobileMenu}>Home</Link>
							</li>
							<li className='nav-item'>
								<Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>Gallery</Link>
							</li>
							<li className='nav-item'>
								<Link to='/shop-with-us' className='nav-links' onClick={closeMobileMenu}>Shop</Link>
							</li>
							<li className='nav-item'>
								<Link to='/about-me' className='nav-links' onClick={closeMobileMenu}>About Me</Link>
							</li>
							<li className='nav-item'>
								<Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>Contact us</Link>
							</li>
						</ul>
						{button && <Button buttonStyle='btn--outline'>Subcribe</Button>}
					</div>
				</nav>
			</>
		);
}

export default Navbar;