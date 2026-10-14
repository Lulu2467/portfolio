import { useState } from "react";
import { Link } from "react-router-dom";
import Frame from "../components/Frame";
import { honors, profile, tools, works } from "../data";

export default function Home() {
  const [activeSlug, setActiveSlug] = useState(works[0].slug);
  const active = works.find((work) => work.slug === activeSlug) ?? works[0];

  return (
    <Frame>
      <section className="cover">
        <p className="spine" aria-hidden="true">
          Portfolio
        </p>
        <div className="cover-grid">
          <div className="cover-copy">
            <div>
              <h1>{profile.name}</h1>
              <p className="latin">{profile.latin}</p>
              <p className="lead">{profile.lead}</p>
            </div>
            <div className="cover-foot">
              <p>
                {profile.school} · {profile.major}
                <br />
                辅修{profile.minor}
                <br />
                {profile.now}
              </p>
              <Link className="cover-next" to="/#work">
                <span>01</span>
                <span>就绪</span>
              </Link>
            </div>
          </div>
          <figure className="portrait-wrap">
            <img
              src="/images/portrait.jpg"
              alt="杨心玥的黑白肖像，短发，侧光打在脸上"
            />
          </figure>
        </div>
      </section>

      <section className="works" id="work">
        <div className="works-layout">
          <div>
            <h2>作品</h2>
            <ol className="work-list">
              {works.map((work) => {
                const isActive = work.slug === active.slug;
                return (
                  <li key={work.slug}>
                    <Link
                      className={isActive ? "work-row is-active" : "work-row"}
                      to={`/work/${work.slug}`}
                      onMouseEnter={() => setActiveSlug(work.slug)}
                      onFocus={() => setActiveSlug(work.slug)}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className="work-index">{work.index}</span>
                      <span className="work-copy">
                        <span className="work-title">{work.title}</span>
                        <span className="work-meta">
                          {work.org} · {work.time}
                        </span>
                        <span className="work-summary">{work.summary}</span>
                      </span>
                      <Media work={work} className="inline-media" />
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
          <aside className="stage" aria-hidden="true">
            <Media key={active.slug} work={active} className="stage-media" />
            <p className="stage-caption">
              <span>{active.index}</span>
              {active.title}
            </p>
          </aside>
        </div>
      </section>

      <section className="about" id="about">
        <h2>关于</h2>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              杨心玥，湖北美术学院艺术与科技专业，辅修艺术疗愈。作品在产品界面、线下活动和沉浸展览之间来回：同一条逻辑，有时长在屏幕上，有时长在房间里。
            </p>
            <p>
              2026 年春在银河驿站做 AI 产品设计。2025
              年夏在 Fn Media Lab 做体验设计，项目包括趣拿节、南极船之书，以及爱马仕派对和上海图书馆的活动。
            </p>
            <p>
              湖北省心理咨询师协会艺术与心理专委会会员。平时画画、写书法、跳舞、读书。
            </p>
          </div>
          <div className="about-facts">
            <div>
              <h3>工具</h3>
              <ul>
                {tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>经历</h3>
              <ul>
                <li>银河驿站 · AI 产品设计实习 · 2026.01–03</li>
                <li>Fn Media Lab · 体验设计实习 · 2025.06–09</li>
              </ul>
            </div>
            <div>
              <h3>荣誉</h3>
              <ul>
                {honors.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>联系</h2>
        <p className="contact-note">2026 届，正在看设计岗位。</p>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className="contact-phone" href={`tel:${profile.phone}`}>
          {profile.phoneLabel}
        </a>
      </section>
    </Frame>
  );
}

function Media({ work, className }) {
  if (work.plate && work.images.length === 0) {
    return (
      <div className={`plate ${className}`}>
        <span>{work.plate.place}</span>
        <strong>{work.plate.title}</strong>
      </div>
    );
  }

  const image = work.images[0];
  return (
    <img
      className={className}
      src={image.src}
      alt=""
    />
  );
}
