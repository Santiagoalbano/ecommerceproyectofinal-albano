import React from "react";
import CartWidget from "../CartWidget";
import '../NavBar/navBar.css'
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="container">
			<nav className="nav">
				<div className="nav__brand1">
					<NavLink className="nav__link1" to="/">
						Sorella Blockbuster
					</NavLink>
				</div>
				<ul className="nav__list">
					<li>
						<NavLink className="nav__link0" to="/categoria/films">
							Peliculas
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__link2" to="/categoria/series">
						   Series
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__link3" to="cart">
							<CartWidget />
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
