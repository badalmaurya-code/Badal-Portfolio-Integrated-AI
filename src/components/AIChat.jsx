import { useState, useRef, useEffect } from "react";
import { useChat } from "../hooks/useChat";

const QUICK_ASKS = [
  "What are Badal's top skills?",
  "What are Badal's Productive & AI Tools skills?",
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
          fontSize: "clamp(0.8rem, 2vw, 0.85rem)",
          lineHeight: 1.6,
          maxWidth: "85%",
          background: isUser ? "var(--accent)" : "var(--bg3)",
          color: isUser ? "#fff" : "var(--text2)",
          border: isUser ? "none" : "1px solid var(--border)",
          wordWrap: "break-word",
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
  const [isOpen, setIsOpen] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, isOpen]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener("open-ai-chat", handleOpenChat);
    return () => window.removeEventListener("open-ai-chat", handleOpenChat);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {/* Chat Window */}
      {isOpen && (
        <div
          className="animate-fadeUp"
          style={{
            width: "350px",
            maxWidth: "calc(100vw - 48px)",
            height: "500px",
            maxHeight: "calc(100vh - 120px)",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
            marginBottom: "16px",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "1rem",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "var(--bg2)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
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
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "var(--text2)",
                cursor: "pointer",
                padding: "0.25rem",
                display: "flex",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              padding: "1rem",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              flex: 1,
            }}
          >
            {messages.length === 0 && (
              <p style={{ textAlign: "center", color: "var(--text2)", fontSize: "0.85rem", margin: "auto" }}>
                Hi! Ask anything about my skills, projects, or background.
              </p>
            )}
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
              padding: "0.75rem",
              display: "flex",
              flexWrap: "nowrap",
              gap: "0.5rem",
              overflowX: "auto",
              flexShrink: 0,
              borderTop: "1px solid var(--border)",
            }}
            className="no-scrollbar"
          >
            {QUICK_ASKS.map((q) => (
              <button
                key={q}
                onClick={() => { sendMessage(q); }}
                style={{
                  background: "var(--bg3)",
                  border: "1px solid var(--border)",
                  color: "var(--text2)",
                  padding: "0.35rem 0.75rem",
                  borderRadius: "100px",
                  fontSize: "0.7rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  fontFamily: "var(--body)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
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
              padding: "1rem",
              borderTop: "1px solid var(--border)",
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              flexShrink: 0,
              backgroundColor: "var(--card)",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask something..."
              style={{
                flex: 1,
                background: "var(--bg3)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "0.65rem 1rem",
                color: "var(--text)",
                fontFamily: "var(--body)",
                fontSize: "0.85rem",
                outline: "none",
                minHeight: "40px",
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
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "opacity 0.2s",
                flexShrink: 0,
              }}
            >
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--accent), var(--accent3))",
          color: "#fff",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          transition: "transform 0.2s",
          zIndex: 10000,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>
    </div>
  );
}
