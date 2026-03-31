const skills = [
  "SwiftUI",
  "Kotlin",
  "Jetpack Compose",
  "Next.js",
  "TypeScript",
  "HTML",
  "CSS",
  "JavaScript",
  "Firebase",
  "GitHub",
  "Node.js",
  "MySQL",
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-text" style={{ marginBottom: "28px" }}>
          A simple skills section works great for a practice portfolio. You can later split this
          into frontend, mobile, backend, and tools.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
          {skills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}