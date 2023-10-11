import "./App.css";
import MainCard from "./components/MainCard";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import Infos from "./components/Infos";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-light-mode-light-gray font-space-mono text-custom-body">
      <MainCard>
        <Header />
        <SearchForm />
        <Infos />
      </MainCard>
    </div>
  );
}

export default App;
