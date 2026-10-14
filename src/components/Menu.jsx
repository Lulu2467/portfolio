import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { profile, works } from "../data";
import Icon from "./Icon";

const sections = [
  { to: "/#work", label: "作品" },
  { to: "/#experience", label: "实习经历" },
  { to: "/#about", label: "关于" },
  { to: "/#contact", label: "联系" },
];

export default function Menu({ open, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    closeRef.current?.focus();
    const onKey = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div className={open ? "menu is-open" : "menu"} aria-hidden={!open}>
      <button
        className="menu-scrim"
        type="button"
        tabIndex={-1}
        aria-label="关闭菜单"
        onClick={onClose}
      />
      <aside
        className="menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="菜单"
        inert={!open}
      >
        <button
          ref={closeRef}
          className="header-btn menu-close"
          type="button"
          onClick={onClose}
        >
          <Icon name="close" />
          <span className="header-btn-label">关闭</span>
        </button>

        <nav className="menu-sections" aria-label="页面">
          {sections.map((item) => (
            <Link key={item.to} to={item.to} onClick={onClose}>
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="label menu-label">作品</p>
        <ul className="menu-works">
          {works.map((work) => (
            <li key={work.slug}>
              <Link to={`/work/${work.slug}`} onClick={onClose}>
                <span className="menu-thumb">
                  {work.cover ? (
                    <img
                      src={work.cover.src}
                      alt=""
                      style={{ objectPosition: work.cover.position }}
                    />
                  ) : (
                    <span className="menu-thumb-plate" />
                  )}
                </span>
                <span>
                  <span className="menu-work-title">{work.title}</span>
                  <span className="label">{work.org}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <a className="menu-mail" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </aside>
    </div>
  );
}
