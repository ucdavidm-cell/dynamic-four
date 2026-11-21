
import React, { useState } from "react";

import Arrivals from "./Arrivals";
import Review from "./Review";

import "./App.css";

export default function App() {
  const [activePage, setActivePage] = useState("arrivals");

  return (
    <div className="app">

      {/* NAVIGATION */}

      <nav className="main-navbar">
        <h2 className="brand-logo">YOUR BRAND</h2>

        <div className="nav-links">
          <button
            className={activePage === "arrivals" ? "active" : ""}
            onClick={() => setActivePage("arrivals")}
          >
            New Arrivals
          </button>

          <button
            className={activePage === "reviews" ? "active" : ""}
            onClick={() => setActivePage("reviews")}
          >
            Reviews
          </button>
        </div>
      </nav>

      {/* PAGE CONTENT */}

      <main>
        {activePage === "arrivals" && (
          <Arrivals />
        )}

        {activePage === "reviews" && (
          <Review />
        )}
      </main>

      {/* FOOTER */}

      <footer className="main-footer">
        <p>© 2026 YOUR BRAND. All Rights Reserved.</p>
      </footer>

    </div>
  );
}
