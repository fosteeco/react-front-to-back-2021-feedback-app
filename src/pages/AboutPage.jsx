import Card from "../components/shared/Card.jsx";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a react app to leave feedbcak for a product or service</p>
        <p>Version: 1.0.0</p>
      </div>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
