import React from "react";
import { Link } from "react-router-dom";
import myImage from "../../imgs/logo.svg";

const Navbar = () => {
	return (
		<header>
			<nav className='container'>
				<div className='logo'>
					<Link to='/'>
						<img src={myImage} alt='logo' />
					</Link>
				</div>
				<div className='links'>
					<ul>
						<li>
							<Link to='/hospitals'>Hospitals</Link>
						</li>
						<li>
							<Link to='/doctors'>Find Doctors</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

Navbar.propTypes = {};

export default Navbar;
