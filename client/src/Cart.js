import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { getWhatsAppCheckoutLink } from './whatsappFormatter';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/cart.css';

function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <Header />
        <div className="container mt-5">
          <div className="empty-cart">
            <h2>Your Cart is Empty</h2>
            <p>Start shopping to add items to your cart!</p>
            <Link to="/" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const total = getCartTotal();
  const whatsappLink = getWhatsAppCheckoutLink(cart);

  return (
    <div className="cart-page">
      <Header />
      <div className="container mt-5 mb-5">
        <h1 className="mb-4">🛒 Shopping Cart</h1>

        <div className="row">
          <div className="col-md-8">
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item card mb-3">
                  <div className="card-body">
                    <div className="item-header">
                      <div className="item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="item-details flex-grow-1">
                        <h5 className="item-name">{item.name}</h5>
                        <p className="item-price">₹{item.price} per unit</p>
                      </div>
                    </div>

                    <div className="item-controls">
                      <div className="quantity-control">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          −
                        </button>
                        <span className="quantity-display">{item.quantity}</span>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>

                      <div className="item-total">
                        <p className="total-price">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-4">
            <div className="cart-summary card sticky-top" style={{ top: '20px' }}>
              <div className="card-body">
                <h4 className="card-title mb-4">Order Summary</h4>

                <div className="summary-row mb-2">
                  <span>Items ({cart.reduce((sum, item) => sum + item.quantity, 0)}):</span>
                  <strong>₹{total.toFixed(2)}</strong>
                </div>

                <div className="summary-row mb-2">
                  <span>Shipping:</span>
                  <strong className="text-success">Free</strong>
                </div>

                <hr />

                <div className="summary-row mb-4">
                  <span>Total:</span>
                  <strong className="total-amount">₹{total.toFixed(2)}</strong>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-block w-100 mb-2"
                >
                  <i className="fab fa-whatsapp"></i> Send Order on WhatsApp
                </a>

                <Link to="/" className="btn btn-secondary btn-block w-100">
                  Continue Shopping
                </Link>

                <button
                  className="btn btn-outline-danger btn-block w-100 mt-3"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
