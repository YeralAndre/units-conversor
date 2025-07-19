import { History, Menu } from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
  onHistoryClick: () => void;
}

export default function Navbar({ onMenuClick, onHistoryClick }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-icon-container" onClick={onMenuClick}>
        <Menu className="navbar-icon" />
      </div>
      <h1 className="navbar-title">CONVERSOR</h1>
      <div className="navbar-icon-container" onClick={onHistoryClick}>
        <History className="navbar-icon" />
      </div>
    </nav>
  );
}
