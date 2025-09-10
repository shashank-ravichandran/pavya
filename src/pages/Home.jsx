import OurStory from "../components/OurStory";
import ProductsSection from "../components/ProductsSection";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/PavyaLogo-1.png";

export default function Home() {
  const partners = ["Partner A", "Partner B", "Partner C", "Partner D"];
  const numbers = [
    { label: "Bottles Sold", value: "1000+" },
    { label: "Happy Customers", value: "5000+" },
    { label: "Employments created", value: "200+" },
    { label: "Partners", value: "30" },
  ];
  const testimonialsTop = [
    { name: "Anjali Rao", feedback: "Pavya's products are always fresh and of top-notch quality!" },
    { name: "Ramesh Kumar", feedback: "I trust Pavya for my family’s nutrition. Excellent taste and purity." },
    { name: "Sneha Menon", feedback: "The customer service is fantastic. I highly recommend their products." },
    { name: "Karthik V", feedback: "High quality and dependable. Pavya is my go-to brand." },
  ];
  const testimonialsBottom = [
    { name: "Priya S", feedback: "I love how every product is so pure and delicious." },
    { name: "Vivek N", feedback: "The freshness and flavor are unmatched." },
    { name: "Maya T", feedback: "Excellent customer support and timely delivery!" },
    { name: "Arjun P", feedback: "The products truly care for health and taste." },
  ];

  const [currentPartner, setCurrentPartner] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentPartner((prev) => (prev + 1) % partners.length);
        setFade(true);
      }, 1000); 
    }, 5000);

    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <>
      <section className="hero">
        <div className="pageSection" style={{ padding: "50px" }}>
          <div className="flex-centered" style={{ justifyContent: "space-evenly", width: "100%" }}>
            <img src={logo} style={{ height: "auto", width: "500px" }} />
            <div>
              <p style={{ fontSize: "1.5rem" }}>
                Beyond food.
                It's faith turned into form.
                It's tradition breathing again in today's world.
                Every product carries our journey, our belief, and our love.
                When it reaches you, it is not just food. It's a part of heritage reborn.
              </p>
              <br />
              <h3 style={{ fontSize: "2rem" }}>Rooted in nature, crafted with care</h3>
              <Link to="/products"><button style={{ fontSize: "1.3rem" }}>Explore Products</button></Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div style={{ height: "70vh", textAlign: "center" }}>
          <ProductsSection />
          <p>* Click on a product to know more</p>
        </div>
      </section>

      <section>
        <div className="pageSection flex-centered" style={{ backgroundColor: "white" }}>
          <OurStory />
        </div>
      </section>


      <section className="partners-numbers-section" style={{display:"flex", alignItems:"center"}}>
        <div className="numbers">
          <div className="numbers-text">
            {numbers.map((item, index) => {
              return <>
                <span key={index} className="number-text">
                  {item.value} {item.label}
                </span>
              </>
            })}
          </div>
        </div>

        <div className="partners">
          <h2>Our Partners</h2>
          <div className={`partner-card ${fade ? "fade-in" : "fade-out"}`}>
            {partners[currentPartner]}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Don't take our word for it</h2>
        <div className="testimonials-slider top-row">
          <div className="testimonials-track">
            {testimonialsTop.concat(testimonialsTop).map((test, index) => (
              <div key={index} className="testimonial-card">
                <p>"{test.feedback}"</p>
                <h4>- {test.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-slider bottom-row">
          <div className="testimonials-track reverse">
            {testimonialsBottom.concat(testimonialsBottom).map((test, index) => (
              <div key={index} className="testimonial-card">
                <p>"{test.feedback}"</p>
                <h4>- {test.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}