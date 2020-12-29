import React from 'react';
import './Home.css';
import ProductDetails from './ProductDetails';
import CustomBtns from './CustomBtns';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import iphone12 from './../icons/iphone12.png';
import airpods from './../icons/airpodsmax.jpg';
import homepodmini from './../icons/homepod_mini.webp';
import macbookair from './../icons/macbookair.jpg';
import applewatch1 from './../icons/applewatch1.jpg';

function Home() {
	return (
		<div className='home'>
			<div className='home-product-ad-details'>
				<p className='home-shop-details'>
					Shop now at the Apple Store online with many great ways to
					buy. Get free, no-contact delivery, Specialist help and{' '}
					<strong className='light-blue-word'>more</strong>
					<ArrowForwardIosIcon />
				</p>
				<div className='new-product-ad'>
					<div className='new-product-bg-img-container'>
						<div className='new-product-bg-img'></div>
					</div>
					<ProductDetails
						title={'iPhone 12 Pro'}
						subtitle={`it's a leap year.`}
						monthly_price={'14,111'}
						total_price={'1,19,900'}
					/>
					<CustomBtns btn1={'Learn more'} btn2={'Buy'} />
				</div>
			</div>

			<div className='product-2'>
				<ProductDetails
					title={'iPhone 12'}
					subtitle={'Blast Past fast'}
					monthly_price={'8,227'}
					total_price={'69,900'}
					color='#333333'
				/>
				<CustomBtns btn1={'Learn more'} btn2={'Buy'} />
				<img className='product-2-img' src={iphone12} alt='' />
			</div>

			<div className='air-pods-max'>
				<div className='air-pods-max-title'>
					<div>A</div>
					<div>i</div>
					<div>r</div>
					<div>P</div>
					<div>o</div>
					<div>d</div>
					<div>s</div>
					<div>M</div>
					<div>a</div>
					<div>x</div>
				</div>
				<img className='air-pods-max-img' src={airpods} alt='' />
				<div style={{ position: 'absolute', bottom: '0' }}>
					<CustomBtns btn1={'Learn more'} btn2={'Buy'} />
				</div>
			</div>

			<div className='homepod-mini'>
				<img src={homepodmini} alt='' />
				<ProductDetails title={'HomePod mini'} color={'#333333'} />
				<CustomBtns btn1={'Learn more'} btn2={'Buy'} />
			</div>

			<div className='macbook-air'>
				<ProductDetails
					title={'MacBook Air'}
					subtitle={`Power. It's in the Air.`}
				/>
				<CustomBtns btn1={'Learn more'} btn2={'Buy'} />
				<img className='mac-book-air-img' src={macbookair} alt='' />
			</div>

			<div className='products-row'>
				<div className='watch-series-6'>
					<ProductDetails
						apple_icon={true}
						title={'WATCH'}
						series={'SERIES 6'}
						subtitle={'The future of health is on your wrist.'}
						color={'#333333'}
					/>
					<CustomBtns btn1={'Learn more'} btn2={'Buy'} />
					<img className='apple-watch-img' src={applewatch1} alt='' />
				</div>
				<div className='apple-one'>
					<ProductDetails
						apple_icon={true}
						title={'One'}
						subtitle={'Bundle four Apple services.'}
						subtitle2={'And enjoy more for less.'}
						color='black'
					/>

					<CustomBtns btn1={'Learn more'} btn2={'Try it free'} />
				</div>
			</div>
		</div>
	);
}

export default Home;
