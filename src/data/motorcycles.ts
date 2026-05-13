export type MotoColor = "blue" | "green" | "red";

export interface Motorcycle {
  id: string;
  brand: string;
  folder: string;
  model: string;
  tagline: string;
  year: number;
  priceUsd: number;
  colors: MotoColor[];
  specs: {
    displacement: string;
    power: string;
    torque: string;
    weight: string;
  };
}

export const COLORS: { id: MotoColor; label: string; hex: string }[] = [
  { id: "red", label: "Красный", hex: "#c41e3a" },
  { id: "blue", label: "Синий", hex: "#1e5a8c" },
  { id: "green", label: "Зелёный", hex: "#1f6b4a" },
];

export const MOTORCYCLES: Motorcycle[] = [
  {
    id: "ducati-panigale",
    brand: "Ducati",
    folder: "Ducati",
    model: "Panigale V4 S",
    tagline: "Точность супербайка, рождённого на треке.",
    year: 2025,
    priceUsd: 28995,
    colors: ["red", "blue", "green"],
    specs: {
      displacement: "1 103 см³",
      power: "210 л.с.",
      torque: "123 Н·м",
      weight: "172 кг (сухая)",
    },
  },
  {
    id: "honda-cbr",
    brand: "Honda",
    folder: "Honda",
    model: "CBR1000RR-R",
    tagline: "ДНК MotoGP — на дороге общего пользования.",
    year: 2025,
    priceUsd: 28499,
    colors: ["red", "blue", "green"],
    specs: {
      displacement: "999 см³",
      power: "214 л.с.",
      torque: "112 Н·м",
      weight: "201 кг",
    },
  },
  {
    id: "kawasaki-ninja",
    brand: "Kawasaki",
    folder: "Kawasaki",
    model: "Ninja ZX-10R",
    tagline: "Чемпионская генетика и управляемость каждый день.",
    year: 2025,
    priceUsd: 16999,
    colors: ["red", "blue", "green"],
    specs: {
      displacement: "998 см³",
      power: "200 л.с.",
      torque: "115 Н·м",
      weight: "207 кг",
    },
  },
  {
    id: "suzuki-gsx",
    brand: "Suzuki",
    folder: "Suzuki",
    model: "GSX-R1000R",
    tagline: "Сбалансированная агрессия и выверенный ход.",
    year: 2025,
    priceUsd: 17999,
    colors: ["red", "blue", "green"],
    specs: {
      displacement: "999 см³",
      power: "199 л.с.",
      torque: "118 Н·м",
      weight: "202 кг",
    },
  },
  {
    id: "yamaha-r1",
    brand: "Yamaha",
    folder: "Yamaha",
    model: "YZF-R1",
    tagline: "Кроссплейн-коленвал и богатая электроника.",
    year: 2025,
    priceUsd: 18299,
    colors: ["red", "blue", "green"],
    specs: {
      displacement: "998 см³",
      power: "200 л.с.",
      torque: "112 Н·м",
      weight: "203 кг",
    },
  },
];

export function imagePath(folder: string, color: MotoColor): string {
  return `/images/${folder}/${color}.png`;
}

export function colorLabel(id: MotoColor): string {
  return COLORS.find((c) => c.id === id)?.label ?? id;
}
