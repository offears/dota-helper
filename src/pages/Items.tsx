import { useMemo, useState } from "react";
import itemsData from "../data/items.json";
import { Item, ItemCategory } from "../types/item";
import ItemCard from "../components/ItemCard";

const items = itemsData as Item[];
const categories: ItemCategory[] = ["Boots", "Damage", "Defense", "Support", "Utility"];

export default function Items() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ItemCategory | null>(null);

  const filtered = useMemo(() => {
    return items
      .filter((i) => i.name.toLowerCase().includes(query.toLowerCase()))
      .filter((i) => !category || i.type === category);
  }, [query, category]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Предметы</h1>

      <input
        type="text"
        placeholder="Поиск предмета..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full md:w-80 bg-panel border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-accent"
      />

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(category === c ? null : c)}
            className={`px-3 py-1.5 rounded-lg text-sm border ${
              category === c ? "bg-accent border-accent" : "border-border text-gray-300"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map((i) => (
          <ItemCard key={i.id} item={i} />
        ))}
      </div>
    </div>
  );
}
