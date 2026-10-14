import { Link, Navigate, useParams } from "react-router-dom";
import Frame from "../components/Frame";
import { getWork, works } from "../data";

export default function Work() {
  const { slug } = useParams();
  const work = getWork(slug);

  if (!work) {
    return <Navigate to="/" replace />;
  }

  const index = works.findIndex((item) => item.slug === work.slug);
  const next = works[(index + 1) % works.length];

  return (
    <Frame>
      <article className="case">
        <Link className="back" to="/#work">
          全部作品
        </Link>
        <p className="case-index">{work.index}</p>
        <header className="case-head">
          <h1>{work.title}</h1>
          <dl>
            <div>
              <dt>机构</dt>
              <dd>{work.org}</dd>
            </div>
            <div>
              <dt>时间</dt>
              <dd>{work.time}</dd>
            </div>
            <div>
              <dt>角色</dt>
              <dd>{work.role}</dd>
            </div>
          </dl>
        </header>

        {work.plate && work.images.length === 0 ? (
          <div className="plate case-plate">
            <span>{work.plate.place}</span>
            <strong>{work.plate.title}</strong>
          </div>
        ) : null}

        <div className="case-body">
          <p className="case-intro">{work.intro}</p>
          <ol className="case-points">
            {work.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ol>
        </div>

        {work.images.length > 0 ? (
          <div className="case-images">
            {work.images.map((image) => (
              <figure key={image.src}>
                <img src={image.src} alt={image.alt} />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : null}

        <Link className="next-work" to={`/work/${next.slug}`}>
          <span>下一件</span>
          <strong>
            {next.index} {next.title}
          </strong>
        </Link>
      </article>
    </Frame>
  );
}
