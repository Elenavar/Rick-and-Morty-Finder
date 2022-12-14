import '../styles/components/Header.scss';
function Header() {
  return (
    <header className="header">
      <h1 className="header__text">Rick and Morty</h1>
      <img
        src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/950/public/media/image/2019/05/rick-morty-temporada-4-llegara-noviembre.jpg?itok=6Bguw2Cu"
        alt="Rick and Morty"
      />
    </header>
  );
}

export default Header;
