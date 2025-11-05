"use client";

import { useMemo } from "react";
import { clsx } from "clsx";
import type { DateProduct } from "@/data/products";

const palette = [
  "linear-gradient(135deg, #f2b880 0%, #f2994a 100%)",
  "linear-gradient(135deg, #d4a373 0%, #a17452 100%)",
  "linear-gradient(135deg, #c08457 0%, #8f5f3d 100%)",
  "linear-gradient(135deg, #f7d1ba 0%, #e29578 100%)"
];

function useCardTexture(seed: string) {
  return useMemo(() => {
    const index = seed.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return palette[index % palette.length];
  }, [seed]);
}

type ProductCardProps = {
  product: DateProduct;
  onToggleSaved: (id: string) => void;
  saved: boolean;
};

export function ProductCard({ product, saved, onToggleSaved }: ProductCardProps) {
  const texture = useCardTexture(product.id);

  return (
    <article className={clsx("product-card", product.featured && "product-card-featured")}>
      <div className="product-media" style={{ backgroundImage: texture }}>
        <span className="product-origin">{product.origin}</span>
      </div>
      <div className="product-body">
        <header>
          <div className="product-name-line">
            <h3>{product.name}</h3>
            <span className="product-price">${product.price}</span>
          </div>
          <p className="product-description">{product.description}</p>
        </header>
        <footer className="product-footer">
          <div>
            <span className="flavor-chip">{product.flavor}</span>
          </div>
          <button
            type="button"
            onClick={() => onToggleSaved(product.id)}
            className={clsx("save-pill", saved && "save-pill-active")}
          >
            {saved ? "Saved" : "Save"}
          </button>
        </footer>
      </div>
    </article>
  );
}
