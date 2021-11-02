import "./header.css";
import LogoSvg from "./../../assets/img/logo.svg";
import PromotionalLogoSvg from "./../../assets/img/app_1.svg";

export const Header = () => {
  const links = [
    {
      title: "What is?",
      className: "navbar__link",
      key: "ho1",
      href: "#hoHome",
    },
    {
      title: "Security",
      className: "navbar__link",
      key: "ho2",
      href: "#hoSecurity",
    },
    {
      title: "Pricing",
      className: "navbar__link",
      key: "ho3",
      href: "#hoPricing",
    },
    {
      title: "Contact Us",
      className: "navbar__link",
      key: "ho4",
      href: "#hoContactUs",
    },
  ];

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__bar">
          <div className="header__logo">
            <img src={LogoSvg} alt="Logo of Nucleus" />
          </div>

          <nav className="navbar">
            {links.map((link) => (
              <a key={link.key} className={link.className} href={link.href}>
                {link.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="header__grid">
          <div className="header__text">
            <h1 className="header__heading">
              Receive and Make pays with nucleus
            </h1>
            <a className="header__account" href="#hoAccount">
              Get an Account
            </a>
          </div>

          <div className="header__promotional-grafic">
            <img src={PromotionalLogoSvg} alt="img promotional nucleus" />
          </div>
        </div>
      </div>
    </header>
  );
};
