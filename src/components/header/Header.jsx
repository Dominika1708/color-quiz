import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="header-logo">
      <img
        className="header-img"
        src="../../public/colors.png"
        alt="header logo"
        width={50}
        height={50}
      ></img>
      <p className="header-title">
        <span>C</span>
        <span>O</span>
        <span>L</span>
        <span>O</span>
        <span>R</span>
        <span> Q</span>
        <span>U</span>
        <span>I</span>
        <span>Z</span> 
      </p>
    </div>
  </header>
);

export default Header;
