import Gallery from "./Gallery";
import Icon from "./Icon";
import Reveal from "./Reveal";

function Figure({ image, className = "" }) {
  return (
    <figure className={`fig ${image.tall ? "is-tall" : ""} ${className}`.trim()}>
      <div className="fig-frame">
        <img src={image.src} alt={image.alt} loading="lazy" />
      </div>
      {image.caption ? <figcaption className="label">{image.caption}</figcaption> : null}
    </figure>
  );
}

function Paragraphs({ body }) {
  const list = Array.isArray(body) ? body : [body];
  return list.map((text) => <p key={text}>{text}</p>);
}

function VideoBlock({ block }) {
  if (block.src) {
    return (
      <figure className="fig">
        <video className="video" src={block.src} poster={block.poster} controls preload="none" playsInline />
        {block.caption ? <figcaption className="label">{block.caption}</figcaption> : null}
      </figure>
    );
  }

  if (block.embed) {
    return (
      <figure className="fig">
        <div className="video-embed">
          <iframe src={block.embed} title={block.caption ?? "视频"} allowFullScreen loading="lazy" />
        </div>
        {block.caption ? <figcaption className="label">{block.caption}</figcaption> : null}
      </figure>
    );
  }

  return (
    <figure className="fig">
      <div className="video-placeholder">
        {block.poster ? <img src={block.poster} alt="" loading="lazy" /> : null}
        <span className="video-play" aria-hidden="true">
          <Icon name="play" size={22} />
        </span>
        <span className="video-pending label">视频待上传</span>
      </div>
      {block.caption ? <figcaption className="label">{block.caption}</figcaption> : null}
    </figure>
  );
}

function EmbedBlock({ block }) {
  return (
    <div className="embed">
      <div className="embed-bar">
        <span className="label">{block.title}</span>
        {block.note ? <span className="embed-note">{block.note}</span> : null}
        <a className="link-line" href={block.src} target="_blank" rel="noreferrer">
          新窗口打开
        </a>
      </div>
      <div className="embed-frame" style={block.ratio ? { aspectRatio: block.ratio } : undefined}>
        <iframe src={block.src} title={block.title} loading="lazy" />
      </div>
    </div>
  );
}

function Block({ block }) {
  switch (block.type) {
    case "text":
      return (
        <div className="b-text">
          {block.heading ? <h2 className="b-heading">{block.heading}</h2> : null}
          <Paragraphs body={block.body} />
        </div>
      );
    case "image":
      return <Figure image={block} className="b-wide" />;
    case "images":
      return (
        <div className={`b-images b-wide cols-${block.items.length}`}>
          {block.items.map((image) => (
            <Figure key={image.src} image={image} />
          ))}
        </div>
      );
    case "gallery":
      return (
        <div className="b-wide">
          <Gallery images={block.items} />
        </div>
      );
    case "video":
      return (
        <div className="b-wide">
          <VideoBlock block={block} />
        </div>
      );
    case "embed":
      return (
        <div className="b-wide">
          <EmbedBlock block={block} />
        </div>
      );
    case "stats":
      return (
        <div className="b-stats">
          {block.items.map((item) => (
            <div key={item.label}>
              <span className="stat-value">{item.value}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      );
    case "steps":
      return (
        <div className="b-steps">
          {block.heading ? <h2 className="b-heading">{block.heading}</h2> : null}
          <ol>
            {block.items.map((item, i) => (
              <li key={item.title}>
                <span className="step-index">{String(i + 1).padStart(2, "0")}</span>
                <span className="step-title">{item.title}</span>
                <span className="step-body">{item.body}</span>
              </li>
            ))}
          </ol>
        </div>
      );
    case "list":
      return (
        <div className="b-text">
          {block.heading ? <h2 className="b-heading">{block.heading}</h2> : null}
          <ul className="dash-list">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}

export default function Blocks({ blocks }) {
  return (
    <div className="blocks">
      {blocks.map((block, i) => (
        <Reveal key={`${block.type}-${i}`} className={`block block-${block.type}`}>
          <Block block={block} />
        </Reveal>
      ))}
    </div>
  );
}
