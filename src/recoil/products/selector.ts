import { selector } from "recoil";
import axios from "axios";
import { productState } from "./atoms";
import { Product } from "@/types/Produc";

export const productSelector = selector<Product[]>({
  key: "productSelector",
  get: async ({ get }) => {
    const existingProducts = get(productState);

    try {
      const response = await axios.get("/api/products", {
        params: {
          type: existingProducts,
        },
      });
      return response.data || [];
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
});
