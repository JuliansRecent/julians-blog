import React from 'react';
import './Footer.css'

function Footer(props) {
    return (
			<div className='footer-body d-flex justify-content-between'>
				<span className='footer-text'><a href="">Julian's Blog</a></span>
				<div>
					<ul className='d-flex gap-2'>
						<li>
							<a href='https://www.julian-segura12.com/'>Portfolio </a>
						</li>
						<li className='ml-1'>
							<a href='https://www.linkedin.com/in/julian-segura12/'>
								· LinkedIn
							</a>
						</li>
						<li className='ml-1'>
							<a href='mailto:juliansrecent@gmail.com'>· Email</a>
						</li>
					</ul>
				</div>
			</div>
		);
}

export default Footer;