import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";

export default function Frame({ children }) {
  const { pathname, hash } = useLocation();

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
      <Nav />
      <main id="main">{children}</main>
    </>
  );
}
