import Image from "next/image";

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
              I'm [Kaleb Stephens, Frontend Developer]
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
    position: "relative",
    width: "100%",
    height: "380px",
    borderRadius: "26px",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.08)",
  }}
>
  <Image
    src="/Portrait.JPG"
    alt="Profile"
    fill
    style={{
      objectFit: "cover",
    }}
  />

  {/* Optional overlay for style */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to top, rgba(0,0,0,0.4), transparent 60%)",
    }}
  />
</div>
        </div>
      </div>
    </section>
  );
}