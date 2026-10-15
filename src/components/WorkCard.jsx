import { Link } from "react-router-dom";

export function Cover({ work, className = "" }) {
  if (work.cover) {
    return (
      <img
        className={className}
        src={work.cover.src}
        alt=""
        loading="lazy"
        style={{ objectPosition: work.cover.position }}
      />
    );
  }

  return (
    <span className={`plate ${className}`.trim()}>
      <span className="label">{work.plate?.place}</span>
      <span className="plate-title">{work.plate?.title ?? work.title}</span>
    </span>
  );
}

export default function WorkCard({ work, index }) {
  return (
    <Link className="card-link" to={`/work/${work.slug}`}>
      <span className="card-media">
        <Cover work={work} />
        {index ? <span className="card-index">{index}</span> : null}
        {work.draft ? <span className="card-draft">待补充</span> : null}
      </span>
      <span className="card-body">
        <span className="label">
          {work.category === "work" ? "实习与工作" : "学生作品"} · {work.tags[0]}
        </span>
        <span className="card-title">{work.title}</span>
        <span className="card-summary">{work.summary}</span>
        <span className="link-line">了解更多</span>
      </span>
    </Link>
  );
}
