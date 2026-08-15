import { personal, stats } from "../data/resume";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        // minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(5rem, 10vw, 7rem) clamp(1.25rem, 5vw, 2.5rem) clamp(2rem, 5vw, 4rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient orbs */}
      <div
        className="orb-1"
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle,#7c6aff,transparent)",
          filter: "blur(80px)",
          opacity: 0.18,
          top: -100,
          right: -100,
          pointerEvents: "none",
        }}
      />
      <div
        className="orb-2"
        style={{
          position: "absolute",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle,#38bdf8,transparent)",
          filter: "blur(80px)",
          opacity: 0.15,
          bottom: -50,
          left: -50,
          pointerEvents: "none",
        }}
      />

      {/* Available badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "rgba(124,106,255,0.12)",
          border: "1px solid rgba(124,106,255,0.3)",
          padding: "0.35rem 1rem",
          borderRadius: "100px",
          fontFamily: "var(--mono)",
          fontSize: "0.78rem",
          color: "var(--accent2)",
          marginBottom: "1.5rem",
          width: "fit-content",
        }}
      >
        <span
          className="badge-dot"
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "var(--green)",
            display: "inline-block",
          }}
        />
        Available for opportunities
      </div>

      {/* Heading */}
      <h1
        style={{
          fontFamily: "var(--font)",
          fontWeight: 800,
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          lineHeight: 1.0,
          letterSpacing: "-0.03em",
          marginBottom: "0.3rem",
        }}
      >
        DevOps &
        <span
          style={{
            display: "block",
            background: "linear-gradient(90deg,var(--accent2),var(--accent3))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Cloud Engineer.
        </span>
      </h1>

      <p
        style={{
          fontSize: "1rem",
          color: "var(--text2)",
          maxWidth: 500,
          lineHeight: 1.7,
          margin: "1.5rem 0 2.5rem",
        }}
      >
        {personal.tagline}
      </p>

      {/* CTA buttons */}
      <div style={{ display: "flex", gap: "clamp(0.75rem, 2vw, 1rem)", flexWrap: "wrap" }}>
        <a
          href="#projects"
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "clamp(0.6rem, 1.5vw, 0.75rem) clamp(1.2rem, 3vw, 1.8rem)",
            borderRadius: "100px",
            fontWeight: 600,
            fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
            textDecoration: "none",
            boxShadow: "0 0 30px rgba(124,106,255,0.35)",
            transition: "transform 0.2s, box-shadow 0.2s",
            minHeight: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 0 40px rgba(124,106,255,0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 0 30px rgba(124,106,255,0.35)";
          }}
        >
          View Projects
        </a>
        <a
          href="/Badal_Maurya_CV.pdf"
          download="Badal_Maurya_CV.pdf"
          style={{
            border: "1px solid var(--border2)",
            color: "var(--text2)",
            padding: "clamp(0.6rem, 1.5vw, 0.75rem) clamp(1.2rem, 3vw, 1.8rem)",
            borderRadius: "100px",
            fontWeight: 500,
            fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
            textDecoration: "none",
            transition: "border-color 0.2s, color 0.2s",
            minHeight: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderColor = "var(--accent2)";
            e.target.style.color = "var(--text)";
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = "var(--border2)";
            e.target.style.color = "var(--text2)";
          }}
        >
          Download CV
        </a>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(2rem, 5vw, 3rem)",
          marginTop: "clamp(5rem, 5vw, 4rem)",
          paddingTop: "clamp(1rem, 3vw, 2rem)",
          borderTop: "1px solid var(--border)",
          justifyContent: "space-around",
        }}
      >
        {stats.map((s) => (
          <div key={s.label} style={{ minWidth: "clamp(80px, 25vw, 150px)" }}>
            <span
              style={{
                fontFamily: "var(--font)",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                color: "var(--text)",
                display: "block",
              }}
            >
              {s.num}
            </span>
            <span
              style={{
                fontSize: "clamp(0.65rem, 2vw, 0.8rem)",
                color: "var(--text3)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginTop: "0.2rem",
                display: "block",
                lineHeight: 1.3,
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
