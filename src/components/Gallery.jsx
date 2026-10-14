import { useEffect, useRef, useState } from "react";

export default function Gallery({ images }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const onScroll = () => {
      const next = Math.round(track.scrollLeft / track.clientWidth);
      setIndex(Math.min(images.length - 1, Math.max(0, next)));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [images.length]);

  return (
    <div className="gallery">
      <div className="gallery-track" ref={trackRef}>
        {images.map((image) => (
          <figure
            key={image.src}
            className={image.tall ? "gallery-item is-tall" : "gallery-item"}
          >
            <div className="gallery-frame">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
            <figcaption className="label">{image.caption}</figcaption>
          </figure>
        ))}
      </div>
      {images.length > 1 ? (
        <div className="gallery-dots" aria-hidden="true">
          {images.map((image, i) => (
            <span key={image.src} className={i === index ? "is-active" : ""} />
          ))}
          <span className="gallery-count">
            {index + 1} / {images.length}
          </span>
        </div>
      ) : null}
    </div>
  );
}
