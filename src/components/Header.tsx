import slamLogo from "/slamlogo.svg";
import cdIcon from "/cd-icon.png"; // Replace with your icon path
import chevronIcon from "/chevron-down-white.png"; // Replace with your chevron path
import "../styles/Header.css";

function Header() {
  const links = [
    { label: "Our Story", href: "#" },
    { label: "Workshops", href: "#" },
    { label: "Blogs", href: "#" },
    {
      label: "Media",
      href: "#",
      dropdownItems: [
        { label: "Media Archive", href: "#" },
        { label: "Our podcast", href: "#" },
      ],
    },
    {
      label: "Get Involved",
      href: "#",
      dropdownItems: [
        { label: "Charities", href: "#" },
        { label: "Follow Us", href: "#" },
      ],
    },
  ];

  return (
    <header className="header">
      <a href="#" aria-label="Homepage">
        <img src={slamLogo} alt="Slamtitote Logo" />
      </a>
      <nav className="header__nav">
        {links.map((link) => (
          <div key={link.label} className="header__link-wrapper">
            <a href={link.href} className="header__link">
              {link.label}
              {link.dropdownItems && (
                <img
                  src={chevronIcon}
                  alt=""
                  className="header__chevron"
                />
              )}
            </a>

            {link.dropdownItems && (
              <div className="header__dropdown">
                {link.dropdownItems.map((item) => (
                  <a key={item.label} href={item.href} className="header__dropdown-item">
                    <img src={cdIcon} alt="" className="header__dropdown-icon" />
                    {item.label}
                  </a>
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
