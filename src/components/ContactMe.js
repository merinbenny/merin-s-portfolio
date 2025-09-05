import { Button } from "react-bootstrap";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export const ContactMe = () => {
  return (
    <div style={{ minHeight: "200px", padding: "40px 20px", background: "#f8f9fa", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px", color: "#000" }}>Let's create something cool together!</h2>

      <div className="d-flex justify-content-center gap-3 flex-wrap">
        {/* Mail button */}
        <Button
          variant="dark"
          href="mailto:merinsimmy@gmail.com"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <FaEnvelope /> Mail
        </Button>

        {/* LinkedIn button */}
        <Button
          variant="info"
          href="https://www.linkedin.com/in/merin-benny-358b921a0"
          target="_blank"
          rel="noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <FaLinkedin /> LinkedIn
        </Button>
      </div>
    </div>
  );
};
