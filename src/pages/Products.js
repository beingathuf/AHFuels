import React, { useState } from "react";
import "./Products.css";
import accessoriesImg from "../assets/accessories.jpg";
import electricalsImg from "../assets/electricals.jpg";
import fittingsImg from "../assets/fittings.jpg";
import exteriorImg from "../assets/exterior.jpg";
import { ChevronDown, ChevronUp } from "lucide-react";

const productCategories = [
  {
    title: "Accessories",
    image: accessoriesImg,
    items: [
      "Seat Covers",
      "Steering Wheel Covers",
      "Dashboard Decor",
      "Air Fresheners",
      "Mobile Holders",
    ],
  },
  {
    title: "Electricals",
    image: electricalsImg,
    items: [
      "LED Headlights",
      "Fog Lights",
      "Interior Light Strips",
      "Horn Systems",
      "Battery Terminals",
    ],
  },
  {
    title: "Fittings",
    image: fittingsImg,
    items: [
      "Door Side Beading",
      "Roof Rails",
      "Bumper Guards",
      "Mud Flaps",
      "Number Plate Frames",
    ],
  },
  {
    title: "Exterior Enhancements",
    image: exteriorImg,
    items: [
      "Chrome Garnish",
      "Car Covers",
      "Wiper Blades",
      "Spoilers",
      "Alloy Wheels",
    ],
  },
];

const Products = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleCard = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="products-section">
      <div className="container">
        <h2 className="products-heading">Our Product Categories</h2>
        <p className="products-subheading">
          Explore a wide range of quality auto products grouped by category.
        </p>
        <div className="card-grid">
          {productCategories.map((cat, index) => (
            <div className="product-card" key={index}>
              <img src={cat.image} alt={cat.title} className="card-image" />
              <div className="card-content">
                <div
                  className="card-header"
                  onClick={() => toggleCard(index)}
                >
                  <h3 className="card-title">{cat.title}</h3>
                  {openIndexes.includes(index) ? (
                    <ChevronUp className="card-toggle" />
                  ) : (
                    <ChevronDown className="card-toggle" />
                  )}
                </div>
                {openIndexes.includes(index) && (
                  <ul className="card-list">
                    {cat.items.map((item, i) => (
                      <li className="card-item" key={i}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
