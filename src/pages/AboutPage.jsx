import Card from "../components/shared/Card.jsx";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a react app to leave feedbcak for a product or service</p>
        <p>Version: 1.0.0</p>
      </div>
      <p>
        <a href="/">Back to Home</a>
      </p>
    </Card>
  );
}

export default AboutPage;
