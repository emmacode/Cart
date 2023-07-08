import { useContext } from "react";
import { ShopContext, ShopContextProps } from "../context/shopContext";

export function useShopContext(): ShopContextProps | null {
  return useContext(ShopContext) as ShopContextProps;
}
