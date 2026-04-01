const skills = [
  "SwiftUI",
  "Kotlin",
  "Jetpack Compose",
  "Next.js",
  "TypeScript",
  "HTML",
  "Tailwind CSS",
  "JavaScript",
  "Firebase",
  "GitHub",
  "Vercel",
  "MySQL",
  "Docker",
  "React Native",
  "Visual Studio Code",
  "Figma",
  "Angular",
  "UI/UX Design",
  "Kotlin Multiplatform",
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-text" style={{ marginBottom: "28px" }}>
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