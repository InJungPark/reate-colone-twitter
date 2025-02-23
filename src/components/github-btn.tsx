import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
  background-color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: #0064ff;
    color: white;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const GithubBtn = () => {
  const navigate = useNavigate();

  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (e) {
      console.warn(e);
    }
  };
  return (
    <Button onClick={onClick}>
      <Logo>
        <FaGithub size={20} style={{ objectFit: "contain" }} />
        Continue with Github
      </Logo>
    </Button>
  );
};

export default GithubBtn;
