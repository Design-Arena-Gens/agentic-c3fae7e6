import { SavedClient } from "@/components/SavedClient";
import { dateProducts } from "@/data/products";

export default function SavedPage() {
  return <SavedClient products={dateProducts} />;
}
