"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { DateProduct } from "@/data/products";

const STORAGE_KEY = "palm-pixel-saved-dates";

export function useSavedDates(products: DateProduct[]) {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return;
    }

    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        setSavedIds(parsed);
      }
    } catch (error) {
      console.warn("Failed to parse saved dates", error);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
  }, [savedIds]);

  const toggleSaved = useCallback((productId: string) => {
    setSavedIds((current) => {
      if (current.includes(productId)) {
        return current.filter((id) => id !== productId);
      }
      return [...current, productId];
    });
  }, []);

  const savedProducts = useMemo(
    () => products.filter((product) => savedIds.includes(product.id)),
    [products, savedIds]
  );

  const isSaved = useCallback(
    (productId: string) => savedIds.includes(productId),
    [savedIds]
  );

  return {
    savedIds,
    savedProducts,
    toggleSaved,
    isSaved
  };
}
