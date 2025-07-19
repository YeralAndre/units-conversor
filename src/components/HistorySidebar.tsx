import { X, Clock, ArrowRight } from "lucide-react";

interface HistorySidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Datos de ejemplo para el historial
const historyData = [
    {
        id: 1,
        type: "Temperatura",
        from: { value: 25, unit: "°C" },
        to: { value: 77, unit: "°F" },
        timestamp: "Hace 5 minutos",
    },
    {
        id: 2,
        type: "Longitud",
        from: { value: 100, unit: "cm" },
        to: { value: 1, unit: "m" },
        timestamp: "Hace 15 minutos",
    },
    {
        id: 3,
        type: "Masa",
        from: { value: 5, unit: "kg" },
        to: { value: 11.02, unit: "lbs" },
        timestamp: "Hace 1 hora",
    },
    {
        id: 4,
        type: "Volumen",
        from: { value: 1, unit: "L" },
        to: { value: 1000, unit: "ml" },
        timestamp: "Hace 2 horas",
    },
    {
        id: 5,
        type: "Área",
        from: { value: 100, unit: "m²" },
        to: { value: 1076.39, unit: "ft²" },
        timestamp: "Hace 3 horas",
    },
    {
        id: 6,
        type: "Temperatura",
        from: { value: 32, unit: "°F" },
        to: { value: 0, unit: "°C" },
        timestamp: "Hace 4 horas",
    },
    {
        id: 7,
        type: "Velocidad",
        from: { value: 60, unit: "km/h" },
        to: { value: 16.67, unit: "m/s" },
        timestamp: "Hace 5 horas",
    },
    {
        id: 8,
        type: "Longitud",
        from: { value: 1, unit: "mi" },
        to: { value: 1.609, unit: "km" },
        timestamp: "Hace 6 horas",
    },
    {
        id: 9,
        type: "Presión",
        from: { value: 1, unit: "atm" },
        to: { value: 101325, unit: "Pa" },
        timestamp: "Hace 7 horas",
    },
];

export default function HistorySidebar({
  isOpen,
  onClose,
}: HistorySidebarProps) {
  return (
    <>
      {/* Overlay - Fondo oscuro (reutilizando clase) */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

      {/* Sidebar desde la derecha */}
      <aside
        className={`sidebar sidebar-right ${
          isOpen ? "sidebar-right-open" : ""
        }`}
      >
        {/* Header del Sidebar (reutilizando estructura) */}
        <div className="sidebar-header">
          <h2 className="sidebar-title">Historial</h2>
          <button className="sidebar-close-btn" onClick={onClose}>
            <X className="sidebar-close-icon" />
          </button>
        </div>

        {/* Contenido del Sidebar */}
        <div className="sidebar-content">
          <div className="history-list">
            {historyData.map((item) => (
              <div key={item.id} className="history-item">
                <div className="history-item-header">
                  <Clock className="history-item-icon" />
                  <span className="history-item-type">{item.type}</span>
                  <span className="history-item-time">{item.timestamp}</span>
                </div>
                <div className="history-conversion">
                  <div className="history-conversion-from">
                    <span className="history-value">{item.from.value}</span>
                    <span className="history-unit">{item.from.unit}</span>
                  </div>
                  <ArrowRight className="history-arrow" />
                  <div className="history-conversion-to">
                    <span className="history-value">{item.to.value}</span>
                    <span className="history-unit">{item.to.unit}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Mensaje cuando no hay historial */}
            {historyData.length === 0 && (
              <div className="history-empty">
                <Clock className="history-empty-icon" />
                <p className="history-empty-text">
                  No hay conversiones en el historial
                </p>
                <p className="history-empty-subtitle">
                  Las conversiones aparecerán aquí
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
