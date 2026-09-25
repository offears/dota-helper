import { Link } from "react-router-dom";
import heroesData from "../data/heroes.json";
import { Hero } from "../types/hero";
import HeroCard from "../components/HeroCard";

const heroes = heroesData as Hero[];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold tracking-tight">
          DOTA <span className="text-accent">HELPER</span>
        </h1>
        <p className="text-gray-400 mt-3 max-w-md mx-auto">
          Помощник для выбора героев, предметов и стратегии на линии.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Link
            to="/counterpick"
            className="px-6 py-3 rounded-xl bg-accent hover:brightness-110 font-semibold"
          >
            КОНТРПИК
          </Link>
          <Link
            to="/lanes"
            className="px-6 py-3 rounded-xl bg-panel border border-border hover:border-accent font-semibold"
          >
            ПОМОЩЬ С ЛИНИЕЙ
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Популярные герои</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {heroes.map((h) => (
            <HeroCard key={h.id} hero={h} />
          ))}
        </div>
      </section>

      <p className="text-xs text-gray-500 text-center">Патч: 7.38 (данные условные, MVP)</p>
    </div>
  );
}
