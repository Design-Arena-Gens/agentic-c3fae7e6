"use client";

import Link from "next/link";
import { clsx } from "clsx";

type SavedBadgeProps = {
  count: number;
  highlight?: boolean;
};

export function SavedBadge({ count, highlight = false }: SavedBadgeProps) {
  return (
    <Link href="/saved" className={clsx("saved-badge", highlight && "saved-badge-active")}
    >
      Saved {count > 0 ? `(${count})` : ""}
    </Link>
  );
}
