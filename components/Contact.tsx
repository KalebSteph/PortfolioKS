export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="card" style={{ padding: "30px" }}>
          <h2 className="section-title">Contact</h2>
          <p className="section-text" style={{ marginBottom: "24px" }}>
            For now, this can just be a practice contact section. Later you can connect it
            to email, Firebase, Formspree, or another backend.
          </p>

          <form
            style={{
              display: "grid",
              gap: "16px",
              maxWidth: "700px",
            }}
          >
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <textarea placeholder="Your message" />
            <button type="submit" className="btn btn-primary" style={{ width: "fit-content" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}