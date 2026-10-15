import { Link } from "react-router-dom";
import Frame from "../components/Frame";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import {
  education,
  highlights,
  hobbies,
  honors,
  internships,
  profile,
  skills,
  strengths,
} from "../content/profile";

function Row({ label, latin, children }) {
  return (
    <Reveal as="section" className="cv-row">
      <div className="cv-label">
        <p className="label">{latin}</p>
        <h2 className="cv-heading">{label}</h2>
      </div>
      <div className="cv-body">{children}</div>
    </Reveal>
  );
}

export default function Resume() {
  return (
    <Frame>
      <section className="page-head cv-head">
        <div className="cv-id">
          <img className="cv-photo" src="/images/portrait.jpg" alt="杨心玥的黑白肖像" />
          <div>
            <p className="label">Résumé</p>
            <h1 className="page-title">{profile.name}</h1>
            <p className="cv-title">{profile.title}</p>
            <p className="cv-contact">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <span aria-hidden="true">·</span>
              <a href={`tel:${profile.phone}`}>{profile.phoneLabel}</a>
            </p>
          </div>
        </div>
        <a className="btn btn-outline" href={profile.resumePdf} download>
          <Icon name="download" size={16} />
          <span>下载 PDF 简历</span>
        </a>
      </section>

      <div className="cv">
        <Reveal className="stats-row cv-stats">
          {highlights.map((item) => (
            <div key={item.label}>
              <span className="stat-value">{item.value}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </Reveal>

        <Row label="教育背景" latin="Education">
          <p className="cv-main">{education.school}</p>
          <p className="cv-sub">
            {education.major} | {education.minor} · GPA {profile.gpa}
          </p>
          <p className="cv-sub">主修：{education.courses.join("、")}</p>
          <p className="cv-sub">{education.membership}</p>
        </Row>

        <Row label="实习经历" latin="Experience">
          {internships.map((job) => (
            <article className="cv-job" key={job.org}>
              <header className="cv-job-head">
                <h3 className="cv-main">{job.org}</h3>
                <span className="cv-time">{job.time}</span>
              </header>
              <p className="cv-sub">{job.role}</p>
              {job.projects.map((project) => (
                <div className="cv-project" key={project.title}>
                  <h4>{project.title}</h4>
                  <ul className="dash-list">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {project.slug ? (
                    <Link className="link-line" to={`/work/${project.slug}`}>
                      查看作品
                    </Link>
                  ) : null}
                </div>
              ))}
            </article>
          ))}
        </Row>

        <Row label="技能" latin="Skills">
          <ul className="cv-tags">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Row>

        <Row label="个人优势" latin="Strengths">
          <ul className="dash-list">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Row>

        <Row label="荣誉及证书" latin="Honors">
          <ul className="cv-lines">
            {honors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Row>

        <Row label="爱好" latin="Interests">
          <p className="cv-sub">{hobbies.join(" · ")}</p>
        </Row>
      </div>
    </Frame>
  );
}
