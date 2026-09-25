import { useParams, Link } from "react-router-dom";
import itemsData from "../data/items.json";
import { Item } from "../types/item";

const items = itemsData as Item[];

export default function ItemDetail() {
  const { id } = useParams();
  const item = items.find((i) => i.id === id);

  if (!item) {
    return (
      <div>
        <p className="text-gray-400">Предмет не найден.</p>
        <Link to="/items" className="text-accent">← Назад к предметам</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-xl">
      <Link to="/items" className="text-sm text-gray-400 hover:text-white">← Все предметы</Link>

      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-xl bg-panel border border-border flex items-center justify-center text-xs text-gray-500">
          {item.name}
        </div>
        <div>
          <h1 className="text-2xl font-bold">{item.name}</h1>
          <p className="text-sm text-gray-400">{item.type} · {item.cost}g</p>
        </div>
      </div>

      <p className="text-gray-300">{item.description}</p>

      <div>
        <h2 className="font-semibold mb-2">Бонусы</h2>
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
          {item.bonuses.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
