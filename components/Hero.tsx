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
              Developer • Student • Athlete • Barber
            </p>

            <h1
              style={{
                fontFamily: "var(--font-heading), serif",
                fontSize: "clamp(2.8rem, 6vw, 3rem)",
                lineHeight: 1.05,
                marginBottom: "18px",
              }}
            >
              Welcome. 
              <br />
              I'm [Kaleb Stephens, Frontend Developer].
            </h1>

            <p
              style={{
                color: "var(--muted)",
                maxWidth: "650px",
                lineHeight: 1.8,
                marginBottom: "28px",
              }}
            >
              I’m currently a student at Fort Hays Tech | Northwest and will graduating May(2026) with an Associates in App Development. I also play basketball for the college, cut hair and have my App Development with Swift Associate certification.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href="#projects" className="btn btn-primary">
                View Projects
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