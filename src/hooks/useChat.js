import { useState, useRef } from "react";
import { AI_CONTEXT } from "../data/resume";

export function useChat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi! I'm Badal's AI assistant. Ask me about his skills, projects, education, or availability!",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const historyRef = useRef([]);

  async function sendMessage(userText) {
    if (!userText.trim() || loading) return;

    // Add user message to UI
const userMsg = { role: "user", content: userText };

setMessages((prev) => [...prev, userMsg]);

historyRef.current = [...historyRef.current, userMsg];

setLoading(true);

try {
  const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "API key missing. Add REACT_APP_GEMINI_API_KEY to your .env file."
    );
  }

  const response = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        contents: [
          {
            role: "user",

            parts: [
              {
                text: `
${AI_CONTEXT}

User Question:
${userText}
                `,
              },
            ],
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));

    throw new Error(
      err?.error?.message || `HTTP ${response.status}`
    );
  }

  const data = await response.json();

  const reply =
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    "No response from Gemini.";

  const assistantMsg = {
    role: "assistant",
    content: reply,
  };

  setMessages((prev) => [...prev, assistantMsg]);

}  catch (err) {
  console.error("Ai Chat Error:", err);

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      content: `⚠️ ${err.message}`,
    },
  ]);

} finally {
  setLoading(false);
}

}

return { messages, loading, sendMessage };
}