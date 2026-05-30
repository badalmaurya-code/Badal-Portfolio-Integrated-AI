export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "clamp(1.5rem, 3vw, 2rem) clamp(1rem, 5vw, 2.5rem)",
        borderTop: "1px solid var(--border)",
        fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
        color: "var(--text3)",
        fontFamily: "var(--mono)",
      }}
    >
      Built with ❤️ by Badal Maurya · React.js · Tailwind CSS · AI-Powered
    </footer>
  );
}
