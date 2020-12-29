import React from 'react';
import './CustomBtns.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function CustomBtns({ btn1, btn2, color = 'rgb(87 90 197 / 95%)' }) {
	return (
		<div className='home-learn-buy' style={{ color: `${color}` }}>
			<div>
				<h3>{btn1}</h3>
				<ArrowForwardIosIcon style={{ color: `${color}` }} />
			</div>
			<div>
				<h3>{btn2}</h3>
				<ArrowForwardIosIcon style={{ color: `${color}` }} />
			</div>
		</div>
	);
}

export default CustomBtns;
