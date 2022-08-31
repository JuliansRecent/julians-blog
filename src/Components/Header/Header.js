import React from 'react';
import './Header.css';

function header(props) {
	return (
		<div className='header-container'>
			<h1 className='header-title d-flex justify-content-center align-items-center'>
				Julian's Blog
			</h1>
			<nav className='navbar d-flex justify-content-center'>
				<ul className='d-flex flex-row'>
					<li>
						<button className='btn nav-btn'>Home</button>
					</li>
					<li>
						<button className='btn nav-btn'>Python</button>
					</li>
					<li>
						<button className='btn nav-btn'>React</button>
					</li>
					<li>
						<button className='btn nav-btn'>PostgreSQL</button>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default header;
