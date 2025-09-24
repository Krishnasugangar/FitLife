import React from 'react';
import './ShopPage.css';

// Example product data
const products = [
  {
    name: "Fresh Pressed Juices",
    price: "₹25.00 every month",
    image: "/fresh-juice.jpg",
    url: "https://fiddle-banjo-snxg.squarespace.com/shop/p/fresh-pressed-juices-ma5sb"
  },
  {
    name: "Protein Bars",
    price: "₹36.00 every month",
    image: "/protein-bar.jpg",
    url: "https://fiddle-banjo-snxg.squarespace.com/shop/p/protein-bars-b2ep5"
  },
  {
    name: "Endurance T-Shirt",
    price: "₹30.00",
    image: "/tshirt.jpg",
    url: "https://fiddle-banjo-snxg.squarespace.com/shop/p/sweatshirt-dz3sp"
  },
  {
    name: "Protein Powder",
    price: "₹30.00 every month",
    image: "/protein-powder.jpg",
    url: "https://fiddle-banjo-snxg.squarespace.com/shop/p/protein-powder-kbdl9"
  },
  {
    name: "Creatine",
    price: "₹30.00 every month",
    image: "/creatine.jpg",
    url: "https://fiddle-banjo-snxg.squarespace.com/shop/p/protein-powder-kbdl9"
  },
  {
    name: "Endurance T-Shirt",
    price: "₹30.00",
    image: "/tshirt.jpg",
    url: "https://fiddle-banjo-snxg.squarespace.com/shop/p/sweatshirt-dz3sp"
  }
];

const ShopPage = () => (
  <section className="shop-grid">
    {products.map(item => (
      <div key={item.name + item.price} className="shop-card">
        <div className="product-img-bg">
          <img src={item.image} alt={item.name} />
        </div>
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="shop-title">{item.name}</a>
        <div className="shop-price">{item.price}</div>
      </div>
    ))}
  </section>
);

export default ShopPage;
