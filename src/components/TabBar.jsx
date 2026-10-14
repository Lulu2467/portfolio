import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";

const tabs = [
  { id: "top", to: "/", label: "首页", icon: "home" },
  { id: "work", to: "/#work", label: "作品", icon: "grid" },
  { id: "experience", to: "/#experience", label: "经历", icon: "case" },
  { id: "about", to: "/#about", label: "我", icon: "user" },
];

function useCurrentSection(enabled) {
  const [current, setCurrent] = useState("top");

  useEffect(() => {
    if (!enabled) return undefined;
    const ids = ["work", "experience", "about", "contact"];
    const onScroll = () => {
      let found = "top";
      for (const id of ids) {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top < window.innerHeight * 0.45) {
          found = id === "contact" ? "about" : id;
        }
      }
      setCurrent(found);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled]);

  return current;
}

export default function TabBar() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const current = useCurrentSection(onHome);
  const active = onHome ? current : "work";

  return (
    <nav className="tabbar" aria-label="快捷导航">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          to={tab.to}
          className={active === tab.id ? "tab is-active" : "tab"}
          aria-current={active === tab.id ? "page" : undefined}
          onClick={() => tab.id === "top" && window.scrollTo({ top: 0 })}
        >
          <Icon name={tab.icon} size={22} />
          <span>{tab.label}</span>
        </Link>
      ))}
    </nav>
  );
}
