import './Header.css';
export const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header-box">
					<a href="/" className="header-logo">
						<img src="https://placehold.jp/30x30.png" alt="logo" />
						<span>Abito</span>
					</a>
					<div className="header-controls">
						<button className="btn btn-outline">Вход и регистрация</button>
						<button className="btn btn-primary">Подать объявления</button>
					</div>
					<div className="header-burger">
						<img src="https://placehold.jp/30x19.png" alt="burger" />
					</div>
				</div>
			</div>
		</header>
	);
};
