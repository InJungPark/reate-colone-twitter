import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Home = () => {
  const navigate = useNavigate();

  const logOut = () => {
    auth.signOut();
    navigate("/login");
  };

  return (
    <div>
      <h1>
        <button onClick={logOut}>LogOut</button>
      </h1>
    </div>
  );
};

export default Home;
