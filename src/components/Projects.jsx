import { useMemo, useState } from "react";
import { projects } from "../data/portfolio";
import styles from "./Projects.module.css";

const statusColor = {
  DEPLOYED: "#33FF33",
  ACTIVE: "#FF9500",
  ARCHIVED: "#555",
};

export default function Projects() {
  const categories = useMemo(() => {
    const list = [...new Set(projects.map((p) => p.category))];
    return ["All", ...list];
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(0);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const project = filteredProjects[selectedProject] || filteredProjects[0];

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNum}>02</span>

          <h2 className={styles.title}>PROJECT_MANIFEST.LST</h2>

          <div className={styles.line}></div>
        </div>

        <div className={styles.prompt}>
          <span className={styles.green}>/home/ever/&gt;</span>
          <span className={styles.cmd}> dir /projects/*.exe</span>
        </div>

        <div className={styles.layout}>
          {/* Categories */}

          <div className={styles.categories}>
            <div className={styles.sidebarTitle}>CATEGORY</div>

            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.categoryItem} ${
                  selectedCategory === cat ? styles.categorySelected : ""
                }`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedProject(0);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects */}

          <div className={styles.list}>
            <div className={styles.sidebarTitle}>PROJECTS</div>

            {filteredProjects.map((p, i) => (
              <button
                key={p.id}
                className={`${styles.listItem} ${
                  selectedProject === i ? styles.selected : ""
                }`}
                onClick={() => setSelectedProject(i)}
              >
                <span className={styles.itemId}>{p.id}</span>

                <span className={styles.itemName}>{p.name}</span>

                <span
                  className={styles.itemStatus}
                  style={{
                    color: statusColor[p.status],
                  }}
                >
                  {p.status}
                </span>
              </button>
            ))}
          </div>

          {/* Detail */}

          {project && (
            <div className={styles.detail}>
              <div className={styles.detailHeader}>
                <span className={styles.detailId}>{project.id}</span>

                <span
                  className={styles.detailStatus}
                  style={{
                    color: statusColor[project.status],
                    borderColor: statusColor[project.status],
                  }}
                >
                  ● {project.status}
                </span>

                <span className={styles.detailYear}>{project.year}</span>
              </div>

              <h3 className={styles.detailName}>{project.name}</h3>

              <div className={styles.detailDivider}></div>

              <p className={styles.detailDesc}>{project.description}</p>

              {/* Gallery */}

              {project.images && project.images.length > 0 && (
                <>
                  <h4 className={styles.subtitle}>PROJECT EVIDENCE</h4>

                  <div className={styles.gallery}>
                    {project.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${project.name}-${idx}`}
                        className={styles.galleryImage}
                      />
                    ))}
                  </div>
                </>
              )}

              <h4 className={styles.subtitle}>TECHNOLOGIES</h4>

              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className={styles.detailBtn}
                target="_blank"
                rel="noreferrer"
              >
                &gt;&gt; VIEW_SOURCE.CMD
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
