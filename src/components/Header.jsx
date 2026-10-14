import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function Header({ overHero, onMenu }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const clear = overHero && !scrolled;

  return (
    <header className={clear ? "header is-clear" : "header"}>
      <button className="header-btn" type="button" onClick={onMenu}>
        <Icon name="menu" />
        <span className="header-btn-label">菜单</span>
      </button>
      <Link className="wordmark" to="/">
        YANG XINYUE
      </Link>
      <Link className="header-btn header-contact" to="/#contact">
        <span className="header-btn-label">联系</span>
        <Icon name="mail" />
      </Link>
    </header>
  );
}
