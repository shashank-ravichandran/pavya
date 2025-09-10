import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import "../styles/Products.css";

const products = [
  {
    id: 1,
    name: "Fresh Milk",
    image: "/images/milk.jpg",
    description: "Our farm-fresh milk is pure, wholesome, and free from additives.",
    options: [
      { label: "100ml", price: 10 },
      { label: "200ml", price: 18 },
      { label: "500ml", price: 45 },
      { label: "1000ml", price: 80 },
    ],
  },
  {
    id: 2,
    name: "Bilona Ghee",
    image: "/images/ghee.jpg",
    description: "Hand-churned in the traditional way. Filled with patience, wisdom, and care.",
    options: [
      { label: "100ml", price: 90 },
      { label: "200ml", price: 170 },
      { label: "500ml", price: 400 },
      { label: "1000ml", price: 750 },
    ],
  },
  {
    id: 3,
    name: "Curd",
    image: "/images/cheese.jpg",
    description: "Thick, natural, and untouched by shortcuts. Just the way our homes once knew.",
    options: [
      { label: "100g", price: 30 },
      { label: "250g", price: 70 },
      { label: "500g", price: 130 },
      { label: "1kg", price: 250 },
    ],
  },
];

export default function Products() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (productId, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [productId]: value,
    }));
  };

  const getCartItem = (product, optionLabel) => {
    return cartItems.find(
      (item) => item.id === product.id && item.selectedOption === optionLabel
    );
  };

  return (
    <section className="products-page">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map((product) => {
          const defaultOption = product.options[0];
          const selectedOptionLabel = selectedOptions[product.id] || defaultOption.label;
          const selectedOption = product.options.find((opt) => opt.label === selectedOptionLabel);
          const cartItem = getCartItem(product, selectedOption.label);

          return (
            <div key={product.id + selectedOption.label} className="product-card">
              <div className="dropdown-container">
                <select
                  value={selectedOption.label}
                  onChange={(e) => handleOptionChange(product.id, e.target.value)}
                  className="variant-dropdown"
                >
                  {product.options.map((opt) => (
                    <option key={opt.label} value={opt.label}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{selectedOption.price}</p>
              <p>{product.description}</p>

              <div className="product-actions">
                {!cartItem ? (
                  <button
                    onClick={() =>
                      addToCart({
                        ...product,
                        selectedOption: selectedOption.label,
                        price: selectedOption.price,
                      })
                    }
                    className="add-btn"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        removeFromCart({
                          ...product,
                          selectedOption: selectedOption.label,
                          price: selectedOption.price,
                        })
                      }
                    >
                      -
                    </button>
                    <span>{cartItem.quantity}</span>
                    <button
                      onClick={() =>
                        addToCart({
                          ...product,
                          selectedOption: selectedOption.label,
                          price: selectedOption.price,
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}