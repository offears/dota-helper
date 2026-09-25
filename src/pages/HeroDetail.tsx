import { useParams, Link } from "react-router-dom";
import heroesData from "../data/heroes.json";
import { Hero } from "../types/hero";

const heroes = heroesData as Hero[];

const attrLabel: Record<string, string> = {
  STR: "🟥 STR",
  AGI: "🟢 AGI",
  INT: "🔵 INT",
};

export default function HeroDetail() {
  const { id } = useParams();
  const hero = heroes.find((h) => h.id === id);

  if (!hero) {
    return (
      <div>
        <p className="text-gray-400">Герой не найден.</p>
        <Link to="/heroes" className="text-accent">← Назад к героям</Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <Link to="/heroes" className="text-sm text-gray-400 hover:text-white">← Все герои</Link>

      <div className="flex items-center gap-4">
        <div className="w-24 h-24 rounded-xl bg-panel border border-border flex items-center justify-center text-xs text-gray-500">
          {hero.name}
        </div>
        <div>
          <h1 className="text-2xl font-bold">{hero.name}</h1>
          <p className="text-sm text-gray-400">
            {hero.roles.join(", ")} · {hero.positions.map((p) => `Pos ${p}`).join(", ")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-panel border border-border rounded-xl p-4 text-center">
          <div className="text-strength font-bold text-lg">{hero.strength}</div>
          <div className="text-xs text-gray-400">Strength</div>
        </div>
        <div className="bg-panel border border-border rounded-xl p-4 text-center">
          <div className="text-agility font-bold text-lg">{hero.agility}</div>
          <div className="text-xs text-gray-400">Agility</div>
        </div>
        <div className="bg-panel border border-border rounded-xl p-4 text-center">
          <div className="text-intelligence font-bold text-lg">{hero.intelligence}</div>
          <div className="text-xs text-gray-400">Intelligence</div>
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Способности</h2>
        <div className="flex flex-wrap gap-2">
          {hero.abilities.map((a) => (
            <span key={a} className="px-3 py-1.5 bg-panel border border-border rounded-lg text-sm">
              {a}
            </span>
          ))}
        </div>
      </div>

      {hero.powerTreads && (
        <div>
          <h2 className="font-semibold mb-2">POWER TREADS</h2>
          <div className="space-y-2">
            {(Object.keys(hero.powerTreads.notes) as Array<keyof typeof hero.powerTreads.notes>).map((a) => (
              <div
                key={a}
                className={`px-4 py-2 rounded-lg border text-sm flex gap-2 ${
                  a === hero.powerTreads!.recommended
                    ? "border-accent bg-accent/10"
                    : "border-border bg-panel"
                }`}
              >
                <span>{attrLabel[a]}</span>
                <span className="text-gray-400">
                  {a === hero.powerTreads!.recommended ? "рекомендуется — " : ""}
                  {hero.powerTreads!.notes[a]}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
