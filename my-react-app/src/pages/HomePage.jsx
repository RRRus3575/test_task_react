import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to TravelTrucks</h1>
      <p>Your adventure starts here!</p>
      <Link to="/catalog">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
          View Now
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
