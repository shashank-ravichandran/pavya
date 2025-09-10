import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductsSection.css";
import milk from "../assets/milk.jpg";
import ghee from "../assets/ghee.jpg";
import cheese from "../assets/cheese.jpg";

const products = [
  {
    id: 1,
    name: "Fresh Milk",
    image: milk,
    description: "Our farm-fresh milk is pure, wholesome, and free from additives.",
    nutrition: {
      Calories: "42 kcal",
      Protein: "3.4 g",
      Fat: "1 g",
      Carbohydrates: "5 g",
    },
  },
  {
    id: 2,
    name: "Bilona Ghee",
    image: ghee,
    description: "Hand-churned in the traditional way. Filled with patience, wisdom, and care.",
    nutrition: {
      Calories: "112 kcal",
      Fat: "12.7 g",
      Protein: "0 g",
      Carbohydrates: "0 g",
    },
  },
  {
    id: 3,
    name: "Curd",
    image: cheese,
    description: "Thick, natural, and untouched by shortcuts. Just the way our homes once knew.",
    nutrition: {
      Calories: "296 kcal",
      Protein: "20 g",
      Fat: "23 g",
      Carbohydrates: "4 g",
    },
  },
];

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div
            key={p.id}
            className="product-card"
            onClick={() => setSelectedProduct(p)}
          >
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <div className="modal-left">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            </div>
            <div className="modal-right">
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>
              <h4>Nutrition Info</h4>
              <ul>
                {Object.entries(selectedProduct.nutrition).map(([key, val]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {val}
                  </li>
                ))}
              </ul>

              <div className="modal-buttons">
                <button onClick={() => setSelectedProduct(null)}>Close</button>
                <Link to="/products" className="buy-btn">Buy Now</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}