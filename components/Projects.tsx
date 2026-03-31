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
    title: "Portfolio Practice Site",
    description:
      "A custom portfolio built in Next.js with a different visual style, layout, and organization.",
    tech: ["Next.js", "TypeScript", "Responsive Design"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-text" style={{ marginBottom: "28px" }}>
          These are a few example projects that can live on your portfolio. Later you can replace
          them with your real screenshots, GitHub links, and live demos.
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
                    "linear-gradient(135deg, rgba(192,132,252,0.35), rgba(139,92,246,0.08), rgba(255,255,255,0.03))",
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