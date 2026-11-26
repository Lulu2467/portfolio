import { Link } from "react-router-dom";
import LiquidDeck from "../liquid/LiquidDeck";
import { profile } from "../content/profile";
import { works } from "../content/works";

const cards = works
  .filter((w) => w.featured && w.cover?.src)
  .map((w) => ({
    slug: w.slug,
    title: w.title,
    summary: w.summary,
    cover: w.cover.src,
  }));

export default function Home() {
  return (
    <>
      <LiquidDeck profile={profile} cards={cards} />
      <nav className="liquid-links" aria-label="其它页面">
        <Link to="/works">全部作品</Link>
        <Link to="/resume">履历</Link>
        <a href={`mailto:${profile.email}`}>联系</a>
      </nav>
    </>
  );
}
