import { NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/counterpick", label: "Контрпик" },
  { to: "/lanes", label: "Линия" },
  { to: "/items", label: "Предметы" },
  { to: "/heroes", label: "Герои" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg text-sm transition-colors ${
      isActive ? "bg-accent text-white" : "text-gray-300 hover:bg-panel"
    }`;

  return (
    <header className="border-b border-border bg-panel/60 backdrop-blur sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-bold text-lg tracking-tight">
          DOTA <span className="text-accent">HELPER</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <input
          type="text"
          placeholder="Поиск героя или предмета..."
          className="hidden md:block bg-bg border border-border rounded-lg px-3 py-1.5 text-sm w-56 focus:outline-none focus:border-accent"
        />

        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          ☰
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-4 pb-4">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <input
            type="text"
            placeholder="Поиск..."
            className="bg-bg border border-border rounded-lg px-3 py-2 text-sm mt-2 focus:outline-none focus:border-accent"
          />
        </nav>
      )}
    </header>
  );
}
