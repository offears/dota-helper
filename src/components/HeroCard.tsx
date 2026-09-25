import { Link } from "react-router-dom";
import { Hero } from "../types/hero";

const attrColor: Record<string, string> = {
  STR: "text-strength",
  AGI: "text-agility",
  INT: "text-intelligence",
};

export default function HeroCard({ hero }: { hero: Hero }) {
  return (
    <Link
      to={`/heroes/${hero.id}`}
      className="group bg-panel border border-border rounded-xl overflow-hidden hover:border-accent transition-colors"
    >
      <div className="aspect-video bg-bg flex items-center justify-center text-gray-600 text-xs">
        {hero.name}
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <span className="font-medium">{hero.name}</span>
          <span className={`text-xs font-semibold ${attrColor[hero.primaryAttribute]}`}>
            {hero.primaryAttribute}
          </span>
        </div>
        <div className="text-xs text-gray-400 mt-1">
          {hero.positions.map((p) => `Pos ${p}`).join(", ")}
        </div>
      </div>
    </Link>
  );
}
