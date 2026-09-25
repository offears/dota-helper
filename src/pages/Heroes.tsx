import { useMemo, useState } from "react";
import heroesData from "../data/heroes.json";
import { Hero, Attribute, Position } from "../types/hero";
import HeroCard from "../components/HeroCard";

const heroes = heroesData as Hero[];
const attrs: Attribute[] = ["STR", "AGI", "INT"];
const positions: Position[] = [1, 2, 3, 4, 5];

export default function Heroes() {
  const [query, setQuery] = useState("");
  const [attr, setAttr] = useState<Attribute | null>(null);
  const [pos, setPos] = useState<Position | null>(null);

  const filtered = useMemo(() => {
    return heroes.filter((h) => {
      const matchesQuery = h.name.toLowerCase().includes(query.toLowerCase());
      const matchesAttr = !attr || h.primaryAttribute === attr;
      const matchesPos = !pos || h.positions.includes(pos);
      return matchesQuery && matchesAttr && matchesPos;
    });
  }, [query, attr, pos]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Герои</h1>

      <input
        type="text"
        placeholder="Поиск героя..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full md:w-80 bg-panel border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-accent"
      />

      <div className="flex flex-wrap gap-2">
        {positions.map((p) => (
          <button
            key={p}
            onClick={() => setPos(pos === p ? null : p)}
            className={`px-3 py-1.5 rounded-lg text-sm border ${
              pos === p ? "bg-accent border-accent" : "border-border text-gray-300"
            }`}
          >
            Pos {p}
          </button>
        ))}
        {attrs.map((a) => (
          <button
            key={a}
            onClick={() => setAttr(attr === a ? null : a)}
            className={`px-3 py-1.5 rounded-lg text-sm border ${
              attr === a ? "bg-accent border-accent" : "border-border text-gray-300"
            }`}
          >
            {a}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map((h) => (
          <HeroCard key={h.id} hero={h} />
        ))}
        {filtered.length === 0 && (
          <p className="text-gray-500 col-span-full">Ничего не найдено.</p>
        )}
      </div>
    </div>
  );
}
