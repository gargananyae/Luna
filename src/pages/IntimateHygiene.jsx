import React from "react";
import "./IntimateHygiene.css"; // Replace 'PeriodProducts.css' with the actual file path of your CSS file
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import intimate_hygiene_products from "../data/prod_dataih";

const IntimateHygiene = () => {
  const listItems = intimate_hygiene_products.map((item) => (
    <div className="main_content_wrap" key={item.id}>
      <div className="card">
        <div className="card_img">
          <img src={item.thumb} alt={item.product_name} />
        </div>
        <div className="card_header">
          <h2>{item.product_name}</h2>
          <p>{item.description}</p>
          <p className="price">
            <span className="price_icon">
              <i className="fas fa-shopping-bag"></i>
            </span>
            {item.price}
            <span>{item.currency}</span>
          </p>
          <div className="btn">Add to cart</div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="main_content_pp">
      <Header />
      <div className="container">
        <h1>Intimate Hygiene</h1>
        <div className="card_container">{listItems}</div>
      </div>
      <Footer />
    </div>
  );
};

export default IntimateHygiene;
