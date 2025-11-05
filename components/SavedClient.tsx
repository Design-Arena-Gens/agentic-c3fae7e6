"use client";

import type { DateProduct } from "@/data/products";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { SavedBadge } from "@/components/SavedBadge";
import { useSavedDates } from "@/hooks/useSavedDates";

export function SavedClient({ products }: { products: DateProduct[] }) {
  const { savedProducts, toggleSaved, savedIds } = useSavedDates(products);

  return (
    <div className="page-shell">
      <Header />
      <main className="main-content">
        <section className="saved-hero">
          <div>
            <h1>Your Saved Curations</h1>
            <p>
              Keep track of drops that caught your eye. We will hold them in your browser so
              you can build tasting flights anytime.
            </p>
          </div>
          <SavedBadge count={savedIds.length} highlight={savedIds.length > 0} />
        </section>

        {savedProducts.length === 0 ? (
          <div className="empty-state">
            <h2>Nothing saved yet</h2>
            <p>
              Browse our seasonal gallery and tap Save on date varietals you want to revisit.
            </p>
          </div>
        ) : (
          <div className="product-grid">
            {savedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                saved
                onToggleSaved={toggleSaved}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
