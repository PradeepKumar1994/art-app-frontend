
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//Navbar.js

function Navbar(){
	return(
			<>
				<nav className="navbar">
					<div className="navbar-container">
						<Link to="/" className="navbar-logo">
							Sheshu-Arts <i className="fab fa-typo3"></i>
						</Link>
					</div>
				</nav>
			</>
		)
}

export default Navbar