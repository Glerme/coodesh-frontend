import { useNavigate } from "react-router";

import { Button } from "components/Button";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="centralized-container">
      <input type="text" />
      <input type="text" />
      <Button onClick={() => navigate("/home")}>Entrar</Button>
    </main>
  );
};
