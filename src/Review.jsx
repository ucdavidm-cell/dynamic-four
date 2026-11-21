
import React, { useState } from "react";
import "./Review.css";

const startingReviews = [
  {
    id: 1,
    name: "Customer 1",
    rating: 5,
    text: "Literally feels like a cloud. The interior fleece is incredibly soft and hasn't lost its fuzziness after three washes. New favorite lounge piece."
  },
  {
    id: 2,
    name: "Customer 2",
    rating: 5,
    text: "If you're looking for that perfect slouchy, streetwear aesthetic, this is it. It drops perfectly at the shoulders."
  },
  {
    id: 3,
    name: "Customer 3",
    rating: 5,
    text: "The stitching on this is immaculate. No loose threads, and the drawstring holes are reinforced."
  },
  {
    id: 4,
    name: "Customer 4",
    rating: 5,
    text: "Finally, a hoodie with a hood that actually covers your head properly! It's structured and holds its shape."
  }
];

export default function Review() {
  const [reviews, setReviews] = useState(startingReviews);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");

  function submitReview(e) {
    e.preventDefault();

    if (!name.trim() || !message.trim() || rating === 0) {
      setError("Please complete all fields and select a rating.");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      rating,
      text: message.trim()
    };

    setReviews((previous) => [newReview, ...previous]);

    setName("");
    setMessage("");
    setRating(0);
    setError("");
    setShowForm(false);
  }

  return (
    <section className="review-section">

      {/* CUSTOMER REVIEWS */}

      <div className="review-grid">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>

            <div className="review-photo">
              <div className="review-person">
                ★
              </div>
            </div>

            <h3>{review.name}</h3>

            <div className="review-stars">
              {"★".repeat(review.rating)}
              <span>
                {"★".repeat(5 - review.rating)}
              </span>
            </div>

            <div className="review-text">
              "{review.text}"
            </div>

          </div>
        ))}
      </div>

      {/* REVIEW HEADING */}

      <div className="review-banner">
        <h1>
          Share your experience
          <br />
          Leave a review
        </h1>
      </div>

      {/* REVIEW BUTTON */}

      <div className="review-bottom">

        <button
          className="leave-review-button"
          onClick={() => {
            setShowForm(!showForm);
            setError("");
          }}
        >
          {showForm ? "Close review form" : "Leave a review"}
        </button>

        {/* REVIEW FORM */}

        {showForm && (
          <form
            className="review-form"
            onSubmit={submitReview}
          >
            <h2>Write a Review</h2>

            <p>We would love to hear your experience!</p>

            <label>Your Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Your Rating</label>

            <div className="rating-selector">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={
                    star <= rating ? "star active" : "star"
                  }
                  onClick={() => setRating(star)}
                  aria-label={`Rate ${star} stars`}
                >
                  ★
                </button>
              ))}
            </div>

            <label>Your Review</label>

            <textarea
              placeholder="Tell us what you think..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
            />

            {error && (
              <p className="review-error">{error}</p>
            )}

            <button
              type="submit"
              className="submit-review-button"
            >
              Submit Review
            </button>

          </form>
        )}

      </div>

    </section>
  );
}
