"use client";

import React from "react";

/**
 * Simple placeholder button so the app can compile without
 * depending on Supabase or animation libraries.
 * If you don't need this, you can remove all usages of DevAccessButton.
 */
export default function DevAccessButton() {
  return (
    <button
      type="button"
      className="rounded-full border border-accent/60 bg-transparent px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent/10"
    >
      Developer Access
    </button>
  );
}






