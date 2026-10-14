import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import TabBar from "./TabBar";

export default function Frame({ overHero = false, actions = null, children }) {
  const { pathname, hash } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (hash) {
      const node = document.querySelector(hash);
      if (node) {
        node.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <a className="skip" href="#main">
        跳到内容
      </a>
      <Header overHero={overHero} onMenu={() => setMenuOpen(true)} />
      <Menu open={menuOpen} onClose={closeMenu} />
      <main id="main">{children}</main>
      <footer className="footer">
        <span className="wordmark">YANG XINYUE</span>
        <span className="label">© 2026 杨心玥 · 作品集</span>
      </footer>
      {actions ?? <TabBar />}
    </>
  );
}
