import { useState, useRef, useEffect } from "react";
import { useChat } from "../hooks/useChat";

const QUICK_ASKS = [
  "What are Badal's top skills?",
  "Tell me about his projects",
  "What is his education background?",
  "Is he available for hire?",
];

function TypingIndicator() {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center", padding: "0.5rem 0" }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="typing-dot"
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "var(--text3)",
            display: "inline-block",
            animation: "blink 1.2s ease-in-out infinite",
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

function Message({ role, content }) {
  const isUser = role === "user";
  return (
    <div
      className="animate-fadeUp"
      style={{
        display: "flex",
        gap: "0.75rem",
        flexDirection: isUser ? "row-reverse" : "row",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.75rem",
          fontWeight: 600,
          marginTop: 2,
          background: isUser
            ? "rgba(124,106,255,0.2)"
            : "linear-gradient(135deg,var(--accent),var(--accent3))",
          color: isUser ? "var(--accent2)" : "#fff",
          border: isUser ? "1px solid rgba(124,106,255,0.3)" : "none",
        }}
      >
        {isUser ? "U" : "AI"}
      </div>

      {/* Bubble */}
      <div
        style={{
          padding: "0.75rem 1rem",
          borderRadius: 16,
          fontSize: "0.85rem",
          lineHeight: 1.6,
          maxWidth: "80%",
          background: isUser ? "var(--accent)" : "var(--bg3)",
          color: isUser ? "#fff" : "var(--text2)",
          border: isUser ? "none" : "1px solid var(--border)",
        }}
      >
        {content}
      </div>
    </div>
  );
}

export default function AIChat() {
  const { messages, loading, sendMessage } = useChat();
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <section id="ai" style={{ padding: "5rem 2.5rem", background: "var(--bg2)" }}>
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: "0.75rem",
          color: "var(--accent2)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "0.75rem",
          textAlign: "center",
        }}
      >
        AI-Powered
      </div>
      <h2
        style={{
          fontFamily: "var(--font)",
          fontWeight: 700,
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          letterSpacing: "-0.02em",
          marginBottom: "0.5rem",
          textAlign: "center",
        }}
      >
        Ask About Me
      </h2>
      <p style={{ textAlign: "center", color: "var(--text2)", fontSize: "0.9rem", marginBottom: "2.5rem" }}>
        Powered by Claude AI — ask anything about my skills, projects, or background.
      </p>

      {/* Chat box */}
      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 24,
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "1rem 1.5rem",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "linear-gradient(135deg,var(--accent),var(--accent3))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              color: "#fff",
              fontSize: "0.85rem",
            }}
          >
            B
          </div>
          <div>
            <div style={{ fontFamily: "var(--font)", fontWeight: 600, fontSize: "0.9rem" }}>
              Badal's AI Assistant
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--green)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", display: "inline-block" }} />
              Online
            </div>
          </div>
        </div>

        {/* Messages */}
        <div
          style={{
            padding: "1.5rem",
            minHeight: 220,
            maxHeight: 320,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {messages.map((m, i) => (
            <Message key={i} role={m.role} content={m.content} />
          ))}
          {loading && (
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,var(--accent),var(--accent3))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                AI
              </div>
              <div
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: 16,
                  background: "var(--bg3)",
                  border: "1px solid var(--border)",
                }}
              >
                <TypingIndicator />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick ask chips */}
        <div
          style={{
            padding: "0 1.5rem 1rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {QUICK_ASKS.map((q) => (
            <button
              key={q}
              onClick={() => { sendMessage(q); }}
              style={{
                background: "var(--bg3)",
                border: "1px solid var(--border)",
                color: "var(--text2)",
                padding: "0.35rem 0.85rem",
                borderRadius: "100px",
                fontSize: "0.78rem",
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "var(--body)",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "var(--accent)";
                e.target.style.color = "var(--accent2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "var(--border)";
                e.target.style.color = "var(--text2)";
              }}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input row */}
        <div
          style={{
            padding: "1rem 1.5rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask something about Badal..."
            style={{
              flex: 1,
              background: "var(--bg3)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "0.65rem 1rem",
              color: "var(--text)",
              fontFamily: "var(--body)",
              fontSize: "0.875rem",
              outline: "none",
            }}
            onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
          />
          <button
            onClick={handleSend}
            disabled={loading}
            style={{
              background: loading ? "var(--text3)" : "var(--accent)",
              border: "none",
              borderRadius: 10,
              width: 38,
              height: 38,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "opacity 0.2s",
              flexShrink: 0,
            }}
          >
            <svg
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
