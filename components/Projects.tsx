const projects = [
  {
    title: "Debt Progress Tracker",
    description:
      "A mobile app concept for tracking debts, adding payments, and watching progress bars update over time.",
    tech: ["SwiftUI", "State", "Progress UI"],
  },
  {
    title: "Goodland Touring",
    description:
      "An Android project focused on maps, place details, and a clean tourism-style browsing experience.",
    tech: ["Kotlin", "Jetpack Compose", "Google Maps"],
  },
  {
    title: "System Health Frontend Server",
    description:
      "A custom server used to track system health metrics, computer specs, and performance data.",
    tech: ["Next.js", "TypeScript", "Responsive Design", "Docker", "Node.js"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-text" style={{ marginBottom: "28px" }}>
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {projects.map((project) => (
            <div key={project.title} className="card" style={{ padding: "24px" }}>
              <div
                style={{
                  height: "180px",
                  borderRadius: "18px",
                  marginBottom: "18px",
                  background:
                  "linear-gradient(135deg, rgba(37,99,235,0.35), rgba(30,64,175,0.08), rgba(255,255,255,0.03))",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              />

              <h3 style={{ marginBottom: "10px" }}>{project.title}</h3>
              <p className="section-text" style={{ marginBottom: "16px" }}>
                {project.description}
              </p>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {project.tech.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}