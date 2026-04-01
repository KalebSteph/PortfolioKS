export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-text" style={{ marginBottom: "28px" }}>
          I enjoy building mobile apps, websites, and UI-focused projects that look modern
          and are easy to use/navigate.
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
              Since I enrolled into Fort Hays Tech, I've learned that the key to making a great app/website is preparation, organization, attention to detail, and different views.
            </p>
          </div>

          <div className="card" style={{ padding: "24px" }}>
            <h3 style={{ marginBottom: "10px" }}>Community</h3>
            <p className="section-text">
              It is very important to me to be involved in my community and give back whenever I can. I have made that one of my goals and I am always looking for new ways to get involved.
            </p>
          </div>

          <div className="card" style={{ padding: "24px" }}>
            <h3 style={{ marginBottom: "10px" }}>Basketball</h3>
            <p className="section-text">
              Growing up playing basketball has taught me the value of teamwork, discipline, and communication. Which in my opinion are the most important soft skills to have in the workplace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}