// Shopping.js
import React, { useState,useRef } from "react";
import products from "../data/product";
import Slider from "react-slick";
import { useCart } from "../CartContext";
import "../css/shopping.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import Middle from "./Middle";
import Header from "./Header";

function Shopping() {
  const { addToCart } = useCart();
  const [addedProducts, setAddedProducts] = useState({});
  const [quantities, setQuantities] = useState({});
  const carouselRef = useRef(null);

const scrollLeft = () => {
  carouselRef.current.scrollBy({ left: -220, behavior: "smooth" });
};
 const banners = [
    {
      img: require("../images/spices/abcd.png"),
      link: "/collections/dates",
    },
    {
      img: require("../images/spices/abc3.png"),
      link: "/collections/nuts",
    },
    {
      img: require("../images/spices/banner2.jpg"),
      link: "/collections/dry-fruits",
    },
    {
      img: require("../images/spices/banner3.png"),
      link: "/collections/diwali-products",
    },
  ];

const scrollRight = () => {
  carouselRef.current.scrollBy({ left: 220, behavior: "smooth" });
};

const [searchTerm, setSearchTerm] = useState("");

const filteredProducts = products.filter((p) =>
  p.name.toLowerCase().includes(searchTerm.toLowerCase())
);

const handleAddToCart = (product) => {
  const quantity = quantities[product.id] || 1;
  addToCart(product, quantity);
  setAddedProducts({ ...addedProducts, [product.id]: true });
  
  setTimeout(() => {
    setAddedProducts({ ...addedProducts, [product.id]: false });
  }, 2000);
};

const handleQuantityChange = (productId, value) => {
  const qty = Math.max(1, parseInt(value) || 1);
  setQuantities({ ...quantities, [productId]: qty });
};


const customerreviews = [
    {
        para: "The aroma and freshness of Quencher spices are unmatched. Their Red Chilli Powder adds the perfect color and taste to our food."
    },
    {
        para: "We’ve tried many spice brands, but Quencher stands out for its consistent quality and authentic flavor."
    },
    {
        para: "Their Garam Masala has become a must-have in our kitchen. Pure taste with rich aroma in every spoon."
    },
    {
        para: "Excellent packaging, premium quality, and great customer support. Highly recommended for retailers and wholesalers."
    },
    {
        para: "Quencher truly delivers what they promise — pure spices with traditional Indian taste."
    }
];

const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


return (
<div className="shopping-page">
  <Header />
   {/* ✅ Slider Section */}
      <div className="homeBanner show">
        <div className="homeSlider">
          <Slider {...sliderSettings} className="custom-slider">
            {banners.map((b, i) => (
              <div key={i} className="eachImage">
                <img src={b.img} alt={`banner-${i}`} />
                <div className="corner-blur-overlay"></div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

  {/* Search Bar */}
  <div class="search-container">
  <input
    type="text"
    placeholder="Search spices..."
    className="search-bar"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  </div>

  {/* Arrows + Carousel */}
  <div id="products" className="d-flex align-items-center">
    <button className="btn btn-light me-2" onClick={scrollLeft}>
      <i className="fas fa-chevron-left"></i>
    </button>

    <div className="carousel-container flex-grow-1" ref={carouselRef}>
      {filteredProducts.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover"
            }}
          />
          <div className="product-info">
            <h6 className="product-name">
              {product.name}
            </h6>
            <p className="product-price">₹{product.price}</p>
            
            <div className="product-controls">
              <div className="qty-input-group">
                <input
                  type="number"
                  min="1"
                  value={quantities[product.id] || 1}
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                  className="qty-input"
                  placeholder="Qty"
                />
              </div>
              <button
                className={`btn btn-sm add-to-cart-btn ${addedProducts[product.id] ? 'added' : ''}`}
                onClick={() => handleAddToCart(product)}
              >
                {addedProducts[product.id] ? (
                  <>
                    <i className="fas fa-check"></i> Added
                  </>
                ) : (
                  <>
                    <i className="fas fa-shopping-cart"></i> Add
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    <button className="btn btn-light ms-2" onClick={scrollRight}>
      <i className="fas fa-chevron-right"></i>
    </button>
      </div>
<Middle />
    {/* About Us Section */}
<div id="about-us" className="container-fluid about-us-section mt-5 p-4">
  <h3><u>About Us — Quencher:-</u></h3>
  <p>
    Welcome to Quencher, where flavor meets tradition.  
    We are more than just a spice brand — we are passionate curators of authentic taste, 
    committed to bringing the world's finest spices from farm to your kitchen.
    Founded with a love for bold flavors and natural ingredients, Quencher began as a small idea: 
    to make high-quality, ethically sourced spices accessible to every home cook, chef, and food lover.  
    Today, we proudly serve a community that shares our love for taste that tells a story.
    <br/>
   We offer a wide range of products including Red Chilli Powder, Kashmiri Lal Mirch, Garam Masala, Turmeric, Coriander, Chai Spice Blends, and many more — all prepared to enhance the aroma, color, and flavor of your food.
   <br/>
   </p>
   <p>At Quencher™, we believe every spice has a story to tell —</p>
   <p><b>“Har Masale Ki Ek Kahani.”</b></p><br/>
   <p><b>Why Choose Us?</b></p>
    <ul>
        <li><b>Premium Quality Spices</b></li>
        <li><b>Hygienically Processed & Packed</b></li>
        <li><b>Authentic Indian Flavors</b></li>
        <li><b>Trusted Sourcing Network</b></li>
        <li><b>Customer-Centric Approach</b></li>
    </ul>
    <br/>
    <p>
    Whether you are a home cook, retailer, wholesaler, or distributor, Quencher™ Spice & Beverage is committed to delivering products that combine tradition, purity, and taste in every pinch.
    </p>
</div>
         <div className="homeSlider">
            <div class="container text-center">
            <h2 class="titleH2">what our customer say</h2>
          <Slider {...sliderSettings}>
            {customerreviews.map((b, i) => (
              <div key={i} className="eachpara">
                <p>{b.para}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
  <a
  href="https://wa.me/919759710427"
  target="_blank"
  title="Click to open WhatsApp chat"
  rel="noopener noreferrer"
  class="whatsapp-float"
><i className="fab fa-whatsapp fa-2x"></i>
</a>
<Footer />
</div>

  );
}

export default Shopping;
