import Link from "@docusaurus/Link";
import React from "react";
import styles from "../css/projects.module.css";

const projects: Project[] = [
  {
    title: "NetPlus",
    description:
      "NetPlus 用户使用手册",
    link: "/netplus",
    repo: "http://netplus.idc25.cn",
  },
  {
    title: "NatGO",
    description:
      "NatGO 用户使用手册",
    link: "/natgo",
    repo: "http://natgo.cn",
  },
];
function Project(project: Project) {
  return (
    <div className={styles.project}>
      <div className={styles.flex}>
        <Link className={styles.projectGitHub} to={`${project.repo}`}>
          {project.title}
        </Link>
        <p>{project.description}</p>
      </div>
      <div>
        <Link className="button button--primary" to={project.link}>
          Go
        </Link>
      </div>
    </div>
  );
}

export default function Projects(): JSX.Element {
  return (
    <section className={styles.projects}>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  repo: string;
  link: string;
}
