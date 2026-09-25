export type ItemCategory = "Boots" | "Damage" | "Defense" | "Support" | "Utility";

export interface Item {
  id: string;
  name: string;
  image: string;
  cost: number;
  description: string;
  type: ItemCategory;
  bonuses: string[];
  attributes?: string[];
}
