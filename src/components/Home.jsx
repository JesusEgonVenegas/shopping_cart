import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <h1 style={{ padding: "1rem", margin: 0 }}>
        Let&apos;s find your next great outfit!
      </h1>
      <button onClick={() => navigate("/shop")}>Enter Shop</button>
    </div>
  );
};

export default Home;
