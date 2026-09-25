import { Link } from "react-router-dom";
import { Item } from "../types/item";

export default function ItemCard({ item }: { item: Item }) {
  return (
    <Link
      to={`/items/${item.id}`}
      className="group bg-panel border border-border rounded-xl overflow-hidden hover:border-accent transition-colors"
    >
      <div className="aspect-square bg-bg flex items-center justify-center text-gray-600 text-xs">
        {item.name}
      </div>
      <div className="p-3">
        <div className="font-medium text-sm">{item.name}</div>
        <div className="text-xs text-gray-400 mt-1">{item.type} · {item.cost}g</div>
      </div>
    </Link>
  );
}
