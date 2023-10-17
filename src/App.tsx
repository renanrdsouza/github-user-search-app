import "./App.css";
import MainCard from "./components/MainCard";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import Infos from "./components/Infos";
import ThemeSwitch from "./components/ThemeSwitch";
import { useThemeContext } from "./hooks/useThemeContext";

function App() {
  const { theme } = useThemeContext();

  return (
    <div
      className={
        theme === "light"
          ? "flex justify-center items-center min-h-screen bg-light-mode-light-gray font-space-mono text-custom-body"
          : "flex justify-center items-center min-h-screen bg-dark-mode-black font-space-mono text-custom-body"
      }
    >
      <MainCard>
        <Header children={<ThemeSwitch />} />
        <SearchForm />
        <Infos />
      </MainCard>
    </div>
  );
}

export default App;
