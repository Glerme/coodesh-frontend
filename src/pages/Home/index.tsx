import { Header } from "components/Header";
import { useState } from "react";
import { HomeView } from "views/Home";

export const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen(!isMenuOpen)}
      />
      <HomeView />
    </>
  );
};
