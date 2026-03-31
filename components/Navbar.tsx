export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(14px)",
        background: "rgba(15, 15, 20, 0.75)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 20px",
        }}
      >
        <a
          href="#home"
          style={{
            fontWeight: 800,
            fontSize: "1.1rem",
            letterSpacing: "0.5px",
          }}
        >
          Kaleb Stephens<span style={{ color: "var(--accent)" }}></span>
        </a>

        <nav style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#projects">Projects</a>
        <a className="nav-link" href="#skills">Skills</a>
        </nav>
      </div>
    </header>
  );
}