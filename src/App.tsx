
import React, { useState } from "react";
import Product from "./Product";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("products");
  const [cart, setCart] = useState(0);
  const [reviews, setReviews] = useState<any[]>([]);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setReviews([...reviews, { name, subject, message, rating }]);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setRating(0);
    setSent(true);
  }

  return (
    <div className="website">
      <nav>
        <div className="navlinks">
          <button onClick={() => setPage("products")}>Home</button>
          <button onClick={() => setPage("products")}>New Arrivals</button>
          <button onClick={() => setPage("products")}>Look Book</button>
          <button onClick={() => setPage("products")}>About</button>
        </div>

        <div className="logo">TF</div>

        <div className="navlinks">
          <button onClick={() => setPage("contact")}>Contact us</button>
          <button onClick={() => alert("Sign up coming soon!")}>Sign up</button>
          <button onClick={() => alert(`Cart: ${cart} items`)}>Cart ({cart})</button>
        </div>
      </nav>

      {page === "products" ? (
        <Product addToCart={() => setCart(cart + 1)} />
      ) : (
        <main className="contact">
          <div className="contactbox">
            <p>GET IN TOUCH</p>
            <h1>CONTACT US</h1>
            <p>HAVE A QUESTION, FEEDBACK, OR NEED
              SUPPORT? WE'RE HERE TO HELP</p>
          </div>

          <div className="contactcontent">
            <form onSubmit={submit}>
              <input value={name} onChange={e => setName(e.target.value)}
                placeholder="NAME*" required />

              <input type="email" value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="EMAIL*" required />

              <input value={subject}
                onChange={e => setSubject(e.target.value)}
                placeholder="SUBJECT" />

              <textarea value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="MESSAGE*" required />

              <div className="rating">
                <p>RATE YOUR EXPERIENCE</p>
                {[1, 2, 3, 4, 5].map(n => (
                  <button type="button" key={n}
                    className={rating >= n ? "active" : ""}
                    onClick={() => setRating(n)}>★</button>
                ))}
              </div>

              <button className="send" type="submit">
                SEND MESSAGE
              </button>

              {sent && <p className="success">
                Thank you! Your response was submitted.
              </p>}
            </form>

            <div className="details">
              <p>Insta-True.form.us</p>
              <p>Number-201-998-0000</p>
            </div>
          </div>

          {reviews.length > 0 && (
            <div className="reviews">
              <h2>Customer Responses</h2>
              {reviews.map((r, i) => (
                <div className="review" key={i}>
                  <h3>{r.name}</h3>
                  <p>{r.subject}</p>
                  <p>{r.message}</p>
                  <p>{"★".repeat(r.rating)}{"☆".repeat(5-r.rating)}</p>
                </div>
              ))}
            </div>
          )}
        </main>
      )}

      <footer>TRUE FORM © 2026</footer>
    </div>
  );
}
