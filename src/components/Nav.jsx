import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="nav">
      <Link className="nav-name" to="/">
        杨心玥
      </Link>
      <nav className="nav-links" aria-label="页面">
        <Link to="/#work">作品</Link>
        <Link to="/#about">关于</Link>
        <Link to="/#contact">联系</Link>
      </nav>
    </header>
  );
}
