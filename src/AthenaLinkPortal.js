import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

export default function AthenaLinkPortal() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setResults(null);

    // Placeholder for backend/AWS integration
    setTimeout(() => {
      setLoading(false);
      setResults([
        { title: "Quantum Computing Basics", author: "Alice Smith", year: "2024", institution: "MIT" },
        { title: "AI in Astronomy", author: "John Doe", year: "2024", institution: "Stanford" },
        { title: "Deep Learning for Physics", author: "Jane Roe", year: "2024", institution: "Caltech" },
      ]);
    }, 4000); // simulate search delay
  };

  return (
    <div className="portal-container">
      <h1 className="title">ATHENALINK.AI</h1>
      <h2 className="subtitle">DATA VAULT</h2>
      <p className="description">
        Access the quantum research database. Initialize your search parameters to begin data retrieval sequence.
      </p>

      {!loading && !results && (
        <form onSubmit={handleSearch} className="search-form">
          <input type="text" placeholder="Research Topic" />
          <input type="text" placeholder="Publication Year" />
          <input type="text" placeholder="Author Name" />
          <input type="text" placeholder="Institution Name" />
          <button type="submit">INITIATE SEARCH ⚡</button>
        </form>
      )}

      <AnimatePresence>
        {loading && (
          <motion.div
            className="lightspeed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            🚀 Entering Hyperspace...
          </motion.div>
        )}
      </AnimatePresence>

      {results && (
        <div className="results">
          {results.map((r, i) => (
            <div key={i} className="result-card">
              <h3>{r.title}</h3>
              <p>Author: {r.author}</p>
              <p>Year: {r.year}</p>
              <p>Institution: {r.institution}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
