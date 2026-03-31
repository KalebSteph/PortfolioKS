export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-text" style={{ marginBottom: "28px" }}>
          I enjoy building mobile apps, websites, and UI-focused projects that look polished
          and are easy to use. I work with tools like SwiftUI, Kotlin, Next.js, Firebase,
          and SQL-based backends, and I like creating projects that are both useful and visually clean.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          <div className="card" style={{ padding: "24px" }}>
            <h3 style={{ marginBottom: "10px" }}>Development</h3>
            <p className="section-text">
              Building responsive apps and websites with clean structure and reusable code.
            </p>
          </div>

          <div className="card" style={{ padding: "24px" }}>
            <h3 style={{ marginBottom: "10px" }}>Design</h3>
            <p className="section-text">
              Creating layouts, color systems, and interfaces that feel modern and intentional.
            </p>
          </div>

          <div className="card" style={{ padding: "24px" }}>
            <h3 style={{ marginBottom: "10px" }}>Growth</h3>
            <p className="section-text">
              Learning through projects and improving by turning ideas into working products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}