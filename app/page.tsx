import { Music, MessageCircle, Smile } from "lucide-react";

export default function ESLWebsite() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Fun English Lessons 🎶</h1>

      <p>
        Learn English through music, conversation, and confidence-building.
      </p>

      <button style={{ padding: 10, marginTop: 10 }}>
        Book a Free Trial Lesson
      </button>

      <hr />

      <h2>About Me</h2>
      <p>
        Hi, I’m an English teacher based in the UK. I help learners speak English confidently.
      </p>

      <h2><Music /> Learn with Music</h2>
      <p>Songs make English easy to remember.</p>

      <h2><MessageCircle /> Real Conversation</h2>
      <p>Practice speaking from day one.</p>

      <h2><Smile /> No Pressure</h2>
      <p>Relaxed lessons to build confidence.</p>

      <h2>Contact</h2>
      <p>Email: yourname@email.com</p>
    </div>
  );
}
