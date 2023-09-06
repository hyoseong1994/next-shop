export interface Product {
  id: number;
  name: string;
  price: number;
  type: "tops" | "bottoms" | "outerwear" | "accessories";
  image: string[];
}
