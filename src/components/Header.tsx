import slamLogo from "/slamlogo.svg";
import "../styles/Header.css";

function Header() {
  return (
    <>
      <header>
        <a href="#" target="_blank">
          <img src={slamLogo} className="logo" alt="Slamtidote Logo" />
        </a>
        <nav>
          <a className="nav-link" href="#">
            Our Story
          </a>
          <a className="nav-link" href="#">
            Workshops
          </a>
          <a className="nav-link" href="#">
            Blogs
          </a>
          <a className="nav-link" href="#">
            Events
          </a>
          <a className="nav-link" href="#">
            Socials
          </a>
          <a className="nav-link" href="#">
            Media Archive
          </a>
          <a className="nav-link" href="#">
            Charities
          </a>
          <a className="nav-link" href="#">
            Podcast
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
