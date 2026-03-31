export default function Hero() {
  return (
    <section id="home">
      <div className="container">
        <div
          className="card"
          style={{
            padding: "40px",
            display: "grid",
            gridTemplateColumns: "1.3fr 0.7fr",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ color: "var(--accent-light)", marginBottom: "14px", fontWeight: 600 }}>
              Student • Developer • Designer
            </p>

            <h1
              style={{
                fontFamily: "var(--font-heading), serif",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                lineHeight: 1.05,
                marginBottom: "18px",
              }}
            >
              Building apps and websites
              <br />
              that feel modern and clean.
            </h1>

            <p
              style={{
                color: "var(--muted)",
                maxWidth: "650px",
                lineHeight: 1.8,
                marginBottom: "28px",
              }}
            >
              I’m creating a practice portfolio in Next.js to showcase projects,
              skills, and design work in a layout that feels different from the usual timeline format.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div
            style={{
              minHeight: "360px",
              borderRadius: "26px",
             background:
              "radial-gradient(circle at top, rgba(37,99,235,0.5), rgba(30,64,175,0.2), transparent 70%), linear-gradient(135deg, #1f1f2b, #14141c)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
        </div>
      </div>
    </section>
  );
}