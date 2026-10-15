import { Link, Navigate, useParams } from "react-router-dom";
import Blocks from "../components/Blocks";
import Frame from "../components/Frame";
import Icon from "../components/Icon";
import { Cover } from "../components/WorkCard";
import { profile } from "../content/profile";
import { getWork, works } from "../content/works";

export default function Work() {
  const { slug } = useParams();
  const work = getWork(slug);

  if (!work) {
    return <Navigate to="/works" replace />;
  }

  const siblings = works.filter((item) => item.category === work.category);
  const index = siblings.findIndex((item) => item.slug === work.slug);
  const prev = siblings[(index - 1 + siblings.length) % siblings.length];
  const next = siblings[(index + 1) % siblings.length];
  const categoryLabel = work.category === "work" ? "实习与工作" : "学生作品";

  const actions = (
    <div className="action-bar">
      <Link className="action-icon" to={`/works?c=${work.category}`} aria-label="作品列表">
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
      <article className="work" key={work.slug}>
        <header className="work-head">
          <div className="work-cover">
            <Cover work={work} />
          </div>
          <div className="work-info">
            <Link className="back-link label" to={`/works?c=${work.category}`}>
              <Icon name="back" size={14} />
              {categoryLabel}
            </Link>
            {work.draft ? <span className="draft-badge">内容待补充</span> : null}
            <h1 className="work-title">{work.title}</h1>
            <p className="work-latin">{work.latin}</p>
            <p className="work-summary">{work.summary}</p>
            <dl className="work-meta">
              <div>
                <dt className="label">机构 / 课程</dt>
                <dd>{work.org}</dd>
              </div>
              <div>
                <dt className="label">时间</dt>
                <dd>{work.time}</dd>
              </div>
              <div>
                <dt className="label">角色</dt>
                <dd>{work.role}</dd>
              </div>
              <div>
                <dt className="label">类型</dt>
                <dd>{work.tags.join(" · ")}</dd>
              </div>
            </dl>
          </div>
        </header>

        <Blocks blocks={work.blocks} />

        <nav className="work-pager" aria-label="同类作品">
          <Link to={`/work/${prev.slug}`}>
            <span className="label">上一件</span>
            <span className="pager-title">{prev.title}</span>
          </Link>
          <Link to={`/work/${next.slug}`}>
            <span className="label">下一件</span>
            <span className="pager-title">{next.title}</span>
          </Link>
        </nav>
      </article>
    </Frame>
  );
}
