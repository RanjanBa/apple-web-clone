import React from 'react';
import './ProductDetails.css';
import rupee from './../icons/rupee.png';
import AppleIcon from '@material-ui/icons/Apple';

function ProductDetails({
	apple_icon = false,
	title,
	series,
	subtitle,
	subtitle2,
	monthly_price,
	total_price,
	color = 'white',
}) {
	// color: rgba(255, 255, 255, 0.774);
	return (
		<div className='product-details' style={{ color: `${color}` }}>
			<div className='product-icon-title'>
				{apple_icon ? <AppleIcon /> : null}
				<h1 className='product-title'>{title}</h1>
			</div>
			{series ? <h2 className='series-title'>{series}</h2> : null}
			{subtitle ? <h3 className='product-subtitle'>{subtitle}</h3> : null}
			{subtitle2 ? (
				<h3 className='product-subtitle'>{subtitle2}</h3>
			) : null}
			{monthly_price || total_price ? (
				<h3
					className='product-price-details'
					style={{ opacity: '0.774' }}
				>
					From{' '}
					<img
						src={rupee}
						alt=''
						className='rupee-icon'
						style={{ opacity: '0.774' }}
					/>
					{monthly_price}/month or{' '}
					<img
						src={rupee}
						alt=''
						className='rupee-icon'
						style={{ opacity: '0.774' }}
					/>
					{total_price} before trade-in
				</h3>
			) : null}
		</div>
	);
}

export default ProductDetails;
