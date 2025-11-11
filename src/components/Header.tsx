import { Link } from "react-router-dom";
import slamLogo from "/slamlogo.svg";
import cdIcon from "/cd-icon.png";
import chevronIcon from "/chevron-down-white.png";
import "../styles/Header.css";

type NavItem = {
  label: string;
  to?: string;
  dropdownItems?: { label: string; to: string }[];
};

function Header() {
  const links: NavItem[] = [
    { label: "Our Story", to: "/about-us" },
    { label: "Workshops", to: "/workshops" },
    { label: "Blogs", to: "/blogs" },
    {
      label: "Media",
      dropdownItems: [
        { label: "Media Archive", to: "/media/archive" },
        { label: "Our podcast", to: "/media/podcast" },
      ],
    },
    {
      label: "Get Involved",
      dropdownItems: [
        { label: "Charities", to: "/get-involved/charities" },
        { label: "Follow Us", to: "/get-involved/follow-us" },
      ],
    },
  ];

  return (
    <header className="header">
      <Link to="/" aria-label="Homepage" className="header__logo">
        <img src={slamLogo} alt="SLAMTIDOTE Logo" />
      </Link>

      <nav className="header__nav">
        {links.map((link) => (
          <div key={link.label} className="header__link-wrapper">
            {link.to ? (
              <Link to={link.to} className="header__link">
                {link.label}
              </Link>
            ) : (
              <button type="button" className="header__link header__btn">
                {link.label}
                {link.dropdownItems && (
                  <img src={chevronIcon} alt="" className="header__chevron" />
                )}
              </button>
            )}

            {link.dropdownItems && (
              <div className="header__dropdown">
                {link.dropdownItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="header__dropdown-item"
                  >
                    <img src={cdIcon} alt="" className="header__dropdown-icon" />
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}

export default Header;
