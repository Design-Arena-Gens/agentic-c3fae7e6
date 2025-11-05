import { HomeClient } from "@/components/HomeClient";
import { dateProducts } from "@/data/products";

export default function HomePage() {
  return <HomeClient products={dateProducts} />;
}
