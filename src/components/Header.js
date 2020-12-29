import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import AppleIcon from '@material-ui/icons/Apple';
import SearchIcon from '@material-ui/icons/Search';
import StoreIcon from '@material-ui/icons/Store';
import {
	home_link,
	ipad_link,
	mac_link,
	support_link,
	tv_link,
	watch_link,
	music_link,
	store_link,
	iphone_link,
} from '../Constants';

function Header() {
	return (
		<div className='header'>
			<div className='header-options'>
				<Link to={home_link}>
					<AppleIcon className='header-option' />
				</Link>

				<Link to={mac_link}>
					<div className='header-option'>Mac</div>
				</Link>
				<Link to={ipad_link}>
					<div className='header-option'>iPad</div>
				</Link>
				<Link to={iphone_link}>
					<div className='header-option'>iPhone</div>
				</Link>

				<Link to={watch_link}>
					<div className='header-option'>Watch</div>
				</Link>

				<Link to={tv_link}>
					<div className='header-option'>TV</div>
				</Link>

				<Link to={music_link}>
					<div className='header-option'>Music</div>
				</Link>

				<Link to={support_link}>
					<div className='header-option'>Support</div>
				</Link>

				<SearchIcon className='header-option' />
				<Link to={store_link}>
					<StoreIcon className='header-option' />
				</Link>
			</div>
		</div>
	);
}

export default Header;
