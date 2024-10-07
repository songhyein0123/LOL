export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  stats: {
    [key: string]: number;
  };
}
