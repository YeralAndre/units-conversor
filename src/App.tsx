import { useState } from "react";
import "@fontsource-variable/jetbrains-mono";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HistorySidebar from "./components/HistorySidebar";
import ConversorCard from "./components/ConversorCard";
import { Clock, Ruler, Scale, Thermometer } from "lucide-react";
import Conversors from "./conversors.json";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [conversorMode, setConversorMode] = useState("temperature");

  const handleMenuClick = () => {
    setIsSidebarOpen(true);
    if (isHistoryOpen) setIsHistoryOpen(false);
  };

  const handleHistoryClick = () => {
    setIsHistoryOpen(true);
    if (isSidebarOpen) setIsSidebarOpen(false);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleCloseHistory = () => {
    setIsHistoryOpen(false);
  };

  const icons: {
    [key: string]: React.ReactNode;
  } = {
    temperature: <Thermometer className="card-icon" />,
    length: <Ruler className="card-icon" />,
    weight: <Scale className="card-icon" />,
    time: <Clock className="card-icon" />,
  };

  const categoryTitles: {
    [key: string]: string;
  } = {
    temperature: "Temperatura",
    length: "Longitud",
    weight: "Peso",
    time: "Tiempo",
  };

  console.log("Conversor Mode:", conversorMode);

  return (
    <main className="container">
      <Navbar
        onMenuClick={handleMenuClick}
        onHistoryClick={handleHistoryClick}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
        conversorMode={conversorMode}
        setConversorMode={setConversorMode}
      />
      <HistorySidebar isOpen={isHistoryOpen} onClose={handleCloseHistory} />
      <div className="content">
        <ConversorCard
          key={conversorMode} // Esta key fuerza el remount cuando cambia la categoría
          title={categoryTitles[conversorMode]}
          Icon={icons[conversorMode]}
          units={Object.values(
            Conversors[conversorMode as keyof typeof Conversors]
          )}
          mode={conversorMode}
        />
      </div>
      <footer className="footer">
        <p>© 2025 - Todos los derechos reservados</p>
      </footer>
    </main>
  );
}

export default App;
