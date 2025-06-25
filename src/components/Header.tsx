import slamLogo from "/slamlogo.svg";
import "../styles/Header.css";

function Header() {
  const links = ["Our Story", "Workshops", "Events", "Media", "Get Involved"];

  return (
    <header className="header">
      <a href="#" aria-label="Homepage">
        <img src={slamLogo} alt="Slamtitote Logo" />
      </a>
      <nav className="header__nav">
        {links.map((label) => (
          <a key={label} href="#" className="header__link">
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
