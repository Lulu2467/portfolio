import { useRef } from "react";
import { Link } from "react-router-dom";
import Frame from "../components/Frame";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import WorkCard from "../components/WorkCard";
import { education, highlights, internships, profile } from "../content/profile";
import { getWork, works, worksIn } from "../content/works";

const entries = [
  { id: "work", title: "实习与工作", latin: "Internship & Work", cover: "/images/hermes-booth.jpg" },
  { id: "student", title: "学生作品", latin: "Student Works", cover: "/images/grad-board.jpg" },
];

export default function Home() {
  const hermes = getWork("hermes");

  return (
    <Frame overHero>
      <section className="hero">
        <img className="hero-img" src="/images/portrait.jpg" alt="杨心玥的黑白肖像，短发，侧光打在脸上" />
        <div className="hero-copy">
          <p className="label">{profile.title}</p>
          <h1>{profile.name}</h1>
          <Link className="link-line" to="/works">
            探索作品
          </Link>
        </div>
      </section>

      <Reveal as="section" className="statement">
        <p className="label">作品集 · 2026</p>
        <p className="statement-text">{profile.lead}</p>
        <p className="statement-meta">
          {profile.school} · {profile.major} · 辅修{profile.minor}
        </p>
      </Reveal>

      <FeaturedRail />

      <section className="section entries">
        {entries.map((entry, i) => (
          <Reveal key={entry.id} delay={i * 120}>
            <Link className="entry" to={`/works?c=${entry.id}`}>
              <span className="entry-media">
                <img src={entry.cover} alt="" loading="lazy" />
              </span>
              <span className="entry-copy">
                <span className="label">{entry.latin}</span>
                <span className="entry-title">{entry.title}</span>
                <span className="entry-count">{worksIn(entry.id).length} 件作品</span>
                <span className="link-line">进入</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="feature">
        <Link className="feature-banner" to={`/work/${hermes.slug}`}>
          <img src={hermes.cover.src} alt="爱马仕圣诞派对现场的厨具柜照相亭" loading="lazy" />
          <span className="feature-copy">
            <span className="label">{hermes.latin}</span>
            <span className="feature-title">{hermes.title}</span>
            <span className="link-line">了解更多</span>
          </span>
        </Link>
      </section>

      <section className="section resume-brief" id="resume">
        <Reveal className="section-head section-head-row">
          <div>
            <p className="label">Résumé</p>
            <h2 className="serif-title">履历</h2>
          </div>
          <Link className="link-line" to="/resume">
            查看完整履历
          </Link>
        </Reveal>

        <Reveal className="stats-row">
          {highlights.map((item) => (
            <div key={item.label}>
              <span className="stat-value">{item.value}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </Reveal>

        <div className="brief-grid">
          <Reveal className="brief-col">
            <p className="label">教育</p>
            <p className="brief-main">{education.school}</p>
            <p className="brief-sub">
              {education.major} · {education.minor}
            </p>
          </Reveal>
          <Reveal className="brief-col" delay={100}>
            <p className="label">实习经历</p>
            <ul className="brief-list">
              {internships.map((job) => (
                <li key={job.org}>
                  <span className="brief-main">{job.org}</span>
                  <span className="brief-sub">
                    {job.role} · {job.time}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="brief-actions">
          <Link className="btn btn-solid" to="/resume">
            完整履历
          </Link>
          <a className="btn btn-outline" href={profile.resumePdf} download>
            <Icon name="download" size={16} />
            <span>下载 PDF 简历</span>
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <Reveal className="contact-inner">
          <p className="label">Contact</p>
          <h2 className="serif-title">联系我</h2>
          <p className="contact-note">2026 届，正在看 AI 产品设计与体验设计岗位。</p>
          <div className="contact-actions">
            <a className="btn btn-solid" href={`mailto:${profile.email}`}>
              发送邮件
            </a>
            <a className="btn btn-outline" href={`tel:${profile.phone}`}>
              拨打电话
            </a>
          </div>
          <p className="contact-lines">
            {profile.email}
            <br />
            {profile.phoneLabel}
          </p>
        </Reveal>
      </section>
    </Frame>
  );
}

function FeaturedRail() {
  const railRef = useRef(null);
  const featured = works.filter((work) => work.featured);

  const scrollBy = (direction) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector(".card");
    const step = card ? card.getBoundingClientRect().width + 24 : rail.clientWidth * 0.8;
    rail.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="section works" id="work">
      <div className="section-head section-head-row">
        <Reveal>
          <p className="label">Selected Works</p>
          <h2 className="serif-title">精选作品</h2>
        </Reveal>
        <div className="rail-controls">
          <Link className="link-line" to="/works">
            全部 {works.length} 件
          </Link>
          <button type="button" className="round-btn" onClick={() => scrollBy(-1)} aria-label="上一件">
            <Icon name="back" size={18} />
          </button>
          <button type="button" className="round-btn" onClick={() => scrollBy(1)} aria-label="下一件">
            <Icon name="arrow" size={18} />
          </button>
        </div>
      </div>
      <ol className="rail" ref={railRef}>
        {featured.map((work, i) => (
          <li key={work.slug} className="card">
            <WorkCard work={work} index={String(i + 1).padStart(2, "0")} />
          </li>
        ))}
      </ol>
    </section>
  );
}
