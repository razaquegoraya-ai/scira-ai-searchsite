"use client";

import Image from "next/image";
import styles from "./page.module.css";

import React, { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.open(`https://scira.ai?q=${encodeURIComponent(query)}`, "_blank");
    }
  };


  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f8fafc" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 24 }}>Sirca.ai Search Demo</h1>
      <form onSubmit={handleSearch} style={{ display: "flex", gap: 8, marginBottom: 32 }}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter your search (e.g. acne, diabetes cure)"
          style={{ padding: 12, fontSize: 16, borderRadius: 6, border: "1px solid #ccc", width: 320 }}
          required
        />
        <button type="submit" style={{ padding: "12px 24px", fontSize: 16, borderRadius: 6, background: "#2563eb", color: "#fff", border: "none" }}>
          Search
        </button>
      </form>

      <div style={{ marginTop: 16, color: "#64748b", fontSize: 14, textAlign: "center", maxWidth: 600 }}>
        <em>
          This demo opens results from a live remote AI search engine. Available sources (web, Reddit, Twitter, YouTube, etc.) depend on the remote engine’s capabilities.
        </em>
      </div>
    </div>
  );
}
