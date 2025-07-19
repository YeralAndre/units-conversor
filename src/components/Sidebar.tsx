import { X, Ruler, Thermometer, Scale, Clock } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  conversorMode: string;
  setConversorMode: (mode: string) => void;
}

export default function Sidebar({
  isOpen,
  onClose,
  conversorMode,
  setConversorMode,
}: SidebarProps) {
  return (
    <>
      {/* Overlay - Fondo oscuro */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        {/* Header del Sidebar */}
        <div className="sidebar-header">
          <h2 className="sidebar-title">Categorías</h2>
          <button className="sidebar-close-btn" onClick={onClose}>
            <X className="sidebar-close-icon" />
          </button>
        </div>

        {/* Contenido del Sidebar */}
        <div className="sidebar-content">
          <nav className="sidebar-nav">
            <button className={`sidebar-nav-item ${conversorMode === "temperature" ? "active" : ""}`} onClick={() => setConversorMode("temperature")}>
              <Thermometer className="sidebar-nav-icon" />
              <span>Temperatura</span>
            </button>
            <button className={`sidebar-nav-item ${conversorMode === "length" ? "active" : ""}`} onClick={() => setConversorMode("length")}>
              <Ruler className="sidebar-nav-icon" />
              <span>Longitud</span>
            </button>
            <button className={`sidebar-nav-item ${conversorMode === "weight" ? "active" : ""}`} onClick={() => setConversorMode("weight")}>
              <Scale className="sidebar-nav-icon" />
              <span>Masa</span>
            </button>
            <button className={`sidebar-nav-item ${conversorMode === "time" ? "active" : ""}`} onClick={() => setConversorMode("time")}>
              <Clock className="sidebar-nav-icon" />
              <span>Tiempo</span>
            </button>
          </nav>
        </div>
      </aside>
    </>
  );
}
