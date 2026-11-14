import "./Home.css";

function Home() {
  return (
    <div>
      <nav>
        <div>
          <a href="#shop">All Products</a>
          <a href="#men">Men</a>
          <a href="#women">Women</a>
        </div>

        <a href="#home" className="logo">True Form</a>

        <div>
          <a href="#contact">Contact</a>
          <a href="#signup">Sign Up</a>
          <a href="#cart">Cart</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <h1>Find Your Fit.</h1>
          <h1>Love Your Form.</h1>
        <p>That's Your True Form.</p>
        <a className="button" href="#shop">SHOP NOW</a>
      </section>

      <section id="shop">
        <h2>SHOP OUR COLLECTION</h2>
        <div className="products">
          <a href="#sweaters">SWEATERS →</a>
          <a href="#jeans">JEANS →</a>
        </div>
      </section>

      <section id="men">
        <h2>MEN'S COLLECTION</h2>
        <a href="#shop">SHOP NOW</a>
      </section>

      <section id="women">
        <h2>WOMEN'S COLLECTION</h2>
        <a href="#shop">SHOP NOW</a>
      </section>

      <section id="sweaters">
        <h2>OUR SWEATERS</h2>
        <p>Comfort meets style.</p>
      </section>

      <section id="jeans">
        <h2>OUR JEANS</h2>
        <p>Find your perfect fit.</p>
      </section>

      <section id="cart">
        <h2>YOUR CART</h2>
        <p>Your cart is empty.</p>
      </section>

      <section id="signup">
        <h2>JOIN TRUE FORM</h2>
        <input type="email" placeholder="Enter your email" />
        <button>Sign Up</button>
      </section>

      <section id="contact">
        <h2>CONTACT US</h2>
        <p>We'd love to hear from you!</p>
      </section>

      <footer>
        <h2>TRUE FORM</h2>
        <p>Find Your Fit. Love Your Form.</p>
        <p>© 2026 TRUE FORM</p>
      </footer>
    </div>
  );
}

export default Home; 