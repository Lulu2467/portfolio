import { useId, useState } from "react";
import Icon from "./Icon";

export default function Accordion({ title, aside, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className={open ? "acc is-open" : "acc"}>
      <h3 className="acc-heading">
        <button
          type="button"
          className="acc-trigger"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="acc-title">{title}</span>
          {aside ? <span className="acc-aside">{aside}</span> : null}
          <Icon name={open ? "minus" : "plus"} size={18} />
        </button>
      </h3>
      <div className="acc-panel" id={id} role="region">
        <div className="acc-inner">{children}</div>
      </div>
    </div>
  );
}
