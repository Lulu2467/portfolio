import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";

const tabs = [
  { id: "home", to: "/", label: "首页", icon: "home" },
  { id: "works", to: "/works", label: "作品", icon: "grid" },
  { id: "resume", to: "/resume", label: "履历", icon: "case" },
  { id: "contact", to: "/#contact", label: "联系", icon: "mail" },
];

function useContactInView(enabled) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setInView(false);
      return undefined;
    }
    const onScroll = () => {
      const node = document.getElementById("contact");
      setInView(Boolean(node && node.getBoundingClientRect().top < window.innerHeight * 0.5));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled]);

  return inView;
}

export default function TabBar() {
  const { pathname } = useLocation();
  const contactInView = useContactInView(pathname === "/");

  let active = "home";
  if (pathname.startsWith("/work")) active = "works";
  if (pathname.startsWith("/resume")) active = "resume";
  if (pathname === "/" && contactInView) active = "contact";

  return (
    <nav className="tabbar" aria-label="快捷导航">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          to={tab.to}
          className={active === tab.id ? "tab is-active" : "tab"}
          aria-current={active === tab.id ? "page" : undefined}
          onClick={() => tab.id === "home" && window.scrollTo({ top: 0 })}
        >
          <Icon name={tab.icon} size={22} />
          <span>{tab.label}</span>
        </Link>
      ))}
    </nav>
  );
}
