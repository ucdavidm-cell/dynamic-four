import React, { useState } from "react";
import "./Model.css";
const colors = [
  { name: "Beige", color: "#c5b4a8" },
  { name: "Blue", color: "#319be5" },
  { name: "Teal", color: "#168fa5" },
  { name: "Burgundy", color: "#842e35" },
  { name: "Black", color: "#17171c" }
];
export default function Model() {
  const [selected, setSelected] = useState("");
  return (
    <section className="models">
      <h3>Models</h3>
      {["Men", "Women"].map(gender => (
        <div className="model-row" key={gender}>
          {colors.map(item => (
            <div
              className={`model-card ${selected === gender + item.name ? "active" : ""}`}
              key={item.name}
              onClick={() => setSelected(gender + item.name)}
            >
              <div
                className="hoodie-model"
                style={{ backgroundColor: item.color }}
              >
                <span>♥</span>
              </div>
              <p>{item.name}</p>
              <small>{gender}</small>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
