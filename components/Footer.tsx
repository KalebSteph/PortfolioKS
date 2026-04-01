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

        <div style={{ display: "flex", gap: "16px" }}>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
        </div>
      </div>
    </footer>
  );
}