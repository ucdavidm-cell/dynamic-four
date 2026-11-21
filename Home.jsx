
import React, { useState } from "react";
import "./Home.css";

const products = [
  {
    id: 1,
    name: "True Form Classic Sweater",
    price: 55,
    category: "Sweaters",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800",
  },
  {
    id: 2,
    name: "True Form Blue Jeans",
    price: 65,
    category: "Jeans",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800",
  },
  {
    id: 3,
    name: "True Form Neutral Sweater",
    price: 60,
    category: "Sweaters",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800",
  },
  {
    id: 4,
    name: "True Form Denim Jeans",
    price: 70,
    category: "Jeans",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800",
  },
];

function Home({ onAddToCart }) {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <main className="home-page">

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-label">WELCOME TO TRUE FORM</p>
          <h1>
            Find Your Fit.
            <br />
            Love Your Form.
          </h1>
          <p>Everyday essentials. Made for your style.</p>

          <a href="#shop" className="shop-now">
            SHOP NOW
          </a>
        </div>
      </section>

      {/* COLLECTION CATEGORIES */}
      <section className="collection-section">
        <h2>SHOP OUR COLLECTION</h2>
        <p>Simple styles. Timeless looks.</p>

        <div className="category-buttons">
          <button onClick={() => setCategory("Sweaters")}>
            SWEATERS →
          </button>

          <button onClick={() => setCategory("Jeans")}>
            JEANS →
          </button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="shop-section" id="shop">
        <div className="shop-heading">
          <p>THE TRUE FORM COLLECTION</p>
          <h2>SHOP OUR PRODUCTS</h2>
        </div>

        <div className="filter-buttons">
          {["All", "Sweaters", "Jeans"].map((item) => (
            <button
              key={item}
              className={category === item ? "active-filter" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />

                <span className="true-form-stamp">
                  TRUE FORM
                </span>
              </div>

              <div className="product-details">
                <p className="product-category">
                  {product.category}
                </p>

                <h3>{product.name}</h3>

                <p className="product-price">
                  ${product.price.toFixed(2)}
                </p>

                <button
                  className="add-cart-button"
                  onClick={() =>
                    onAddToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                    })
                  }
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BRAND MESSAGE */}
      <section className="brand-message">
        <h2>YOUR STYLE. YOUR FORM.</h2>
        <p>
          True Form is more than clothing.
          It's about feeling confident in your own style.
        </p>
      </section>

    </main>
  );
}

export default Home;