import { useRef } from "react";
import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";
import Frame from "../components/Frame";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import { getWork, honors, internships, profile, tools, works } from "../data";

export default function Home() {
  const hermes = getWork("hermes");
  const quna = getWork("quna");

  return (
    <Frame overHero>
      <section className="hero">
        <img
          className="hero-img"
          src="/images/portrait.jpg"
          alt="杨心玥的黑白肖像，短发，侧光打在脸上"
        />
        <div className="hero-copy">
          <p className="label">{profile.title}</p>
          <h1>{profile.name}</h1>
          <Link className="link-line" to="/#work">
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

      <WorkRail />

      <section className="feature">
        <Link className="feature-banner" to={`/work/${hermes.slug}`}>
          <img src={hermes.images[0].src} alt={hermes.images[0].alt} loading="lazy" />
          <span className="feature-copy">
            <span className="label">{hermes.latin}</span>
            <span className="feature-title">{hermes.title}</span>
            <span className="link-line">了解更多</span>
          </span>
        </Link>

        <div className="feature-split">
          <Reveal className="feature-media">
            <img src={quna.images[0].src} alt={quna.images[0].alt} loading="lazy" />
          </Reveal>
          <Reveal className="feature-text" delay={120}>
            <p className="label">{quna.latin}</p>
            <h2 className="serif-title">{quna.title}</h2>
            <p>{quna.intro}</p>
            <p className="feature-result">{quna.result}</p>
            <Link className="btn btn-outline" to={`/work/${quna.slug}`}>
              查看项目
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section experience" id="experience">
        <Reveal className="section-head">
          <p className="label">Experience</p>
          <h2 className="serif-title">实习经历</h2>
        </Reveal>
        <div className="acc-list">
          {internships.map((job, i) => (
            <Accordion
              key={job.org}
              defaultOpen={i === 0}
              title={job.org}
              aside={`${job.role} · ${job.time}`}
            >
              <p className="acc-role">
                {job.role} · {job.time}
              </p>
              {job.projects.map((project) => (
                <div className="job-project" key={project.title}>
                  <h4>{project.title}</h4>
                  <ul>
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {project.slug ? (
                    <Link className="link-line" to={`/work/${project.slug}`}>
                      查看项目
                    </Link>
                  ) : null}
                </div>
              ))}
            </Accordion>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <Reveal className="section-head">
          <p className="label">About</p>
          <h2 className="serif-title">关于</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-copy">
            <p>
              杨心玥，湖北美术学院艺术与科技专业，辅修艺术疗愈。作品在产品界面、线下活动和沉浸展览之间来回：同一条逻辑，有时长在屏幕上，有时长在房间里。
            </p>
            <p>湖北省心理咨询师协会艺术与心理专委会会员。平时画画、写书法、跳舞、读书。</p>
          </Reveal>
          <Reveal className="about-facts" delay={120}>
            <div>
              <p className="label">工具</p>
              <ul>
                {tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label">荣誉</p>
              <ul>
                {honors.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
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

function WorkRail() {
  const railRef = useRef(null);

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
          <h2 className="serif-title">作品系列</h2>
        </Reveal>
        <div className="rail-controls">
          <span className="label">共 {works.length} 件</span>
          <button type="button" className="round-btn" onClick={() => scrollBy(-1)} aria-label="上一件">
            <Icon name="back" size={18} />
          </button>
          <button type="button" className="round-btn" onClick={() => scrollBy(1)} aria-label="下一件">
            <Icon name="arrow" size={18} />
          </button>
        </div>
      </div>
      <ol className="rail" ref={railRef}>
        {works.map((work, i) => (
          <Reveal as="li" key={work.slug} className="card" delay={i * 80}>
            <Link to={`/work/${work.slug}`}>
              <span className="card-media">
                {work.cover ? (
                  <img
                    src={work.cover.src}
                    alt=""
                    loading="lazy"
                    style={{ objectPosition: work.cover.position }}
                  />
                ) : (
                  <span className="plate">
                    <span className="label">{work.plate.place}</span>
                    <span className="plate-title">{work.plate.title}</span>
                  </span>
                )}
                <span className="card-index">{work.index}</span>
              </span>
              <span className="card-body">
                <span className="label">{work.org}</span>
                <span className="card-title">{work.title}</span>
                <span className="card-summary">{work.summary}</span>
                <span className="link-line">了解更多</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
