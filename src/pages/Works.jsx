import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Frame from "../components/Frame";
import WorkCard from "../components/WorkCard";
import { categories, worksIn } from "../content/works";

export default function Works() {
  const [params, setParams] = useSearchParams();
  const category = categories.some((c) => c.id === params.get("c")) ? params.get("c") : "all";
  const [tag, setTag] = useState(null);

  const inCategory = worksIn(category);
  const tagsHere = [...new Set(inCategory.flatMap((work) => work.tags))];
  const activeTag = tagsHere.includes(tag) ? tag : null;
  const list = activeTag ? inCategory.filter((work) => work.tags.includes(activeTag)) : inCategory;

  const pickCategory = (id) => {
    setTag(null);
    setParams(id === "all" ? {} : { c: id }, { replace: true });
  };

  return (
    <Frame>
      <section className="page-head">
        <p className="label">Works</p>
        <h1 className="page-title">作品</h1>

        <div className="tabs" role="tablist" aria-label="作品分类">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={c.id === category}
              className={c.id === category ? "tab-btn is-active" : "tab-btn"}
              onClick={() => pickCategory(c.id)}
            >
              {c.label}
              <span className="tab-count">{worksIn(c.id).length}</span>
            </button>
          ))}
        </div>

        <div className="chips" aria-label="按类型筛选">
          <button
            type="button"
            className={activeTag ? "chip" : "chip is-active"}
            aria-pressed={!activeTag}
            onClick={() => setTag(null)}
          >
            全部类型
          </button>
          {tagsHere.map((t) => (
            <button
              key={t}
              type="button"
              className={t === activeTag ? "chip is-active" : "chip"}
              aria-pressed={t === activeTag}
              onClick={() => setTag(t === activeTag ? null : t)}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <ul className="works-grid" key={`${category}-${activeTag}`}>
        {list.map((work) => (
          <li key={work.slug} className="card grid-card">
            <WorkCard work={work} />
          </li>
        ))}
      </ul>
    </Frame>
  );
}
