export type Attribute = "STR" | "AGI" | "INT";
export type Position = 1 | 2 | 3 | 4 | 5;
export type Role =
  | "Carry" | "Support" | "Nuker" | "Disabler"
  | "Jungler" | "Durable" | "Escape" | "Pusher" | "Initiator";

export interface Hero {
  id: string;
  name: string;
  image: string;
  primaryAttribute: Attribute;
  strength: number;
  agility: number;
  intelligence: number;
  roles: Role[];
  positions: Position[];
  abilities: string[];
  powerTreads?: {
    recommended: Attribute;
    notes: Partial<Record<Attribute, string>>;
  };
}
