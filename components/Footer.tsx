export default function Footer() {
  return (
    <footer>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <p>© 2026 Kaleb Stephens</p>

        <div style={{ display: "flex", gap: "12px" }}>
          <a href="https://github.com/KalebSteph" target="_blank" className="tag">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/kaleb-stephens-02a907353/" target="_blank" className="tag">
            LinkedIn
          </a>
          <a href="mailto:kalstph9@gmail.com" className="tag">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}