import React from 'react';
import './LandingPage.css'
import photo1 from '../../../Assets/macbook-with-code-stock-image.avif'
import photo2 from '../../../Assets/macbook-bright-background-w-code.avif'

function LandingPage(props) {
    return (
			<div className='blog-container'>
				<article className='blog-card'>
					<a href=''>
						<div className='blog-image-1'></div>
					</a>
					<div className='blog-content'>
						<div className='blog-category'></div>
						<div className='blog-title'>Back</div>
						<div className='blog-description'>sdfgsdfgsdf</div>
					</div>
				</article>
				<article className='blog-card'>
					<a href=''>
						<div className='blog-image-1'></div>
					</a>
					<div>
						<div className='blog-category'></div>
						<div className='blog-title'>Back</div>
						<div className='blog-description'>sdfgsdfgsdf</div>
					</div>
				</article>
			</div>
		);
}

export default LandingPage;