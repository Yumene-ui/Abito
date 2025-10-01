import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { useEffect, useState } from 'react';
import { cardArray } from '../pages/constants';

export const Layout = () => {
	const [searchText, setSearchText] = useState('');
	const [products, setProduct] = useState([]);
	const handleSearch = event => {
		setSearchText(event.target.value);
	};

	const handleSearchArray = () => {
		setProduct(cardArray.filter(item => item.title.includes(searchText) || item.price.includes(searchText)));
	};

	useEffect(() => {
		setProduct(cardArray);
	}, []);

	return (
		<>
			<Header />
			<main>
				<section className="search">
					<div className="container">
						<div className="search-box">
							<input type="text" value={searchText} onChange={handleSearch} />
							<button className="btn btn-primary search-btn" onClick={handleSearchArray}>
								<img className="search-btn__icon" src="https://placehold.jp/15x15.png" alt="search" />
								<span className="search-btn__text">Найти</span>
							</button>
						</div>
					</div>
				</section>
				<Outlet context={{ products }} />
			</main>
		</>
	);
};
