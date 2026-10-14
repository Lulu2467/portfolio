import { Link, Navigate, useParams } from "react-router-dom";
import Accordion from "../components/Accordion";
import Frame from "../components/Frame";
import Gallery from "../components/Gallery";
import Icon from "../components/Icon";
import { getWork, profile, works } from "../data";

export default function Work() {
  const { slug } = useParams();
  const work = getWork(slug);

  if (!work) {
    return <Navigate to="/" replace />;
  }

  const index = works.findIndex((item) => item.slug === work.slug);
  const next = works[(index + 1) % works.length];

  const actions = (
    <div className="action-bar">
      <Link className="action-icon" to="/#work" aria-label="全部作品">
        <Icon name="grid" size={22} />
        <span>作品</span>
      </Link>
      <a className="action-icon" href={`mailto:${profile.email}`} aria-label="发送邮件">
        <Icon name="mail" size={22} />
        <span>联系</span>
      </a>
      <Link className="btn btn-solid action-main" to={`/work/${next.slug}`}>
        下一件 · {next.title}
      </Link>
    </div>
  );

  return (
    <Frame actions={actions}>
      <article className="pdp" key={work.slug}>
        <div className="pdp-media">
          {work.images.length > 0 ? (
            <Gallery images={work.images} />
          ) : (
            <div className="plate pdp-plate">
              <span className="label">{work.plate.place}</span>
              <span className="plate-title">{work.plate.title}</span>
            </div>
          )}
        </div>

        <aside className="pdp-info">
          <Link className="back-link label" to="/#work">
            <Icon name="back" size={14} />
            全部作品
          </Link>
          <p className="label pdp-kicker">
            {work.index} · {work.org}
          </p>
          <h1 className="pdp-title">{work.title}</h1>
          <p className="pdp-latin">{work.latin}</p>
          <p className="pdp-summary">{work.summary}</p>

          <dl className="pdp-meta">
            <div>
              <dt className="label">角色</dt>
              <dd>{work.role}</dd>
            </div>
            <div>
              <dt className="label">时间</dt>
              <dd>{work.time}</dd>
            </div>
          </dl>

          <div className="acc-list">
            <Accordion title="项目介绍" defaultOpen>
              <p>{work.intro}</p>
            </Accordion>
            <Accordion title="我的工作" defaultOpen>
              <ul className="dash-list">
                {work.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Accordion>
            {work.result ? (
              <Accordion title="成果">
                <p>{work.result}</p>
              </Accordion>
            ) : null}
          </div>

          <div className="pdp-actions">
            <Link className="btn btn-solid" to={`/work/${next.slug}`}>
              下一件 · {next.title}
            </Link>
            <a className="btn btn-outline" href={`mailto:${profile.email}`}>
              联系我
            </a>
          </div>
        </aside>
      </article>
    </Frame>
  );
}
