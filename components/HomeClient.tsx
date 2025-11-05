"use client";

import type { DateProduct } from "@/data/products";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { SavedBadge } from "@/components/SavedBadge";
import { useSavedDates } from "@/hooks/useSavedDates";

type HomeClientProps = {
  products: DateProduct[];
};

export function HomeClient({ products }: HomeClientProps) {
  const { savedIds, toggleSaved, isSaved } = useSavedDates(products);

  const featured = products.filter((product) => product.featured);
  const seasonal = products.filter((product) => !product.featured);

  return (
    <div className="page-shell">
      <Header />
      <main className="main-content">
        <section className="hero">
          <div className="hero-text">
            <h1>Elevated Date Fruit Curations</h1>
            <p>
              Palm & Pixel curates limited harvest date varietals with tasting notes,
              pairing prompts, and seasonal drops you can save for gifting moments.
            </p>
            <SavedBadge count={savedIds.length} highlight={savedIds.length > 0} />
          </div>
          <div className="hero-panel">
            <div className="hero-card">
              <span className="hero-label">Signature Drop</span>
              <h2>Mirage Flight Trio</h2>
              <p>
                A rotating flight featuring our top three terroir-driven date profiles, hand
                boxed and story-carded for sensory exploration.
              </p>
              <button type="button" className="cta-primary">
                Explore Pairings
              </button>
            </div>
          </div>
        </section>

        <section className="grid-section">
          <header className="section-header">
            <h2>Featured Cellar Picks</h2>
            <p>Pantry staples elevated by meticulous curing and climate-controlled aging.</p>
          </header>
          <div className="product-grid">
            {featured.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onToggleSaved={toggleSaved}
                saved={isSaved(product.id)}
              />
            ))}
          </div>
        </section>

        <section className="grid-section">
          <header className="section-header">
            <h2>Seasonal Gallery</h2>
            <p>Limited run releases and experimental finishes for special occasions.</p>
          </header>
          <div className="product-grid">
            {seasonal.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onToggleSaved={toggleSaved}
                saved={isSaved(product.id)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
