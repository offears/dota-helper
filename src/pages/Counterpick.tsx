import { useState } from "react";
import heroesData from "../data/heroes.json";
import itemsData from "../data/items.json";
import countersData from "../data/counters.json";
import { Hero } from "../types/hero";
import { Item } from "../types/item";

const heroes = heroesData as Hero[];
const items = itemsData as Item[];

interface CounterEntry {
  hero: string;
  counterHeroes: string[];
  counterItems: string[];
  dangers: string[];
  tips: string[];
}
const counters = countersData as CounterEntry[];

function HeroSelect({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex-1">
      <label className="text-xs text-gray-400">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-panel border border-border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-accent"
      >
        <option value="">— выберите героя —</option>
        {heroes.map((h) => (
          <option key={h.id} value={h.id}>{h.name}</option>
        ))}
      </select>
    </div>
  );
}

export default function Counterpick() {
  const [myHero, setMyHero] = useState("");
  const [enemyHero, setEnemyHero] = useState("");

  const enemy = heroes.find((h) => h.id === enemyHero);
  const entry = counters.find((c) => c.hero === enemyHero);

  return (
    <div className="space-y-8 max-w-2xl">
      <h1 className="text-2xl font-bold">Контрпик</h1>

      <div className="flex flex-col md:flex-row gap-4 items-end">
        <HeroSelect label="Мой герой" value={myHero} onChange={setMyHero} />
        <div className="text-gray-500 pb-2 md:pb-3 font-bold">VS</div>
        <HeroSelect label="Герой противника" value={enemyHero} onChange={setEnemyHero} />
      </div>

      {enemy && !entry && (
        <p className="text-gray-500 text-sm">
          Для героя «{enemy.name}» пока нет данных по контрпику (MVP: заполнено только для Axe).
        </p>
      )}

      {enemy && entry && (
        <div className="space-y-6">
          <section>
            <h2 className="font-semibold mb-2">Контргерои</h2>
            <div className="flex flex-wrap gap-2">
              {entry.counterHeroes.map((id) => (
                <span key={id} className="px-3 py-1.5 bg-panel border border-border rounded-lg text-sm capitalize">
                  {id}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-semibold mb-2">Контрпредметы</h2>
            <div className="flex flex-wrap gap-2">
              {entry.counterItems.map((id) => {
                const item = items.find((i) => i.id === id);
                return (
                  <span key={id} className="px-3 py-1.5 bg-panel border border-border rounded-lg text-sm">
                    {item?.name ?? id}
                  </span>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-strength">Опасности</h2>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              {entry.dangers.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="font-semibold mb-2">Советы</h2>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              {entry.tips.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}
