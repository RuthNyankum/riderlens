import { useEffect } from "react";
import api from "../lib/api";

const HomePage = () => {
  useEffect(() => {
    api
      .get("/health")
      .then((res) => console.log("Server connected:", res.data))
      .catch((err) => console.error("Server error:", err));
  }, []);

  return <div>Home Page</div>;
};

export default HomePage;
