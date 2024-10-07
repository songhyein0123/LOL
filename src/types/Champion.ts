export interface Champion {
  id: string;
  name: string;
  title: string;
  lore: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
  };
}

export interface ChampionDetail {
  id: string;
  name: string;
  title: string;
  blurb: string;
}

export interface Ability {
  id: string;
  name: string;
  description: string;
}
