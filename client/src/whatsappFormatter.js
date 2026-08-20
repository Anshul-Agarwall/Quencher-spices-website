export const generateWhatsAppMessage = (cartItems) => {
  if (cartItems.length === 0) {
    return 'I would like to place an order.';
  }

  const itemsList = cartItems
    .map(
      (item) =>
        `${item.name} (Qty: ${item.quantity}) - ₹${(item.price * item.quantity).toFixed(2)}`
    )
    .join('\n');

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return `Hi! I'd like to order:\n\n${itemsList}\n\n*Total: ₹${total.toFixed(2)}*\n\nPlease confirm availability and provide delivery details. Thank you!`;
};

export const getWhatsAppCheckoutLink = (cartItems) => {
  const phoneNumber = '919759710427';
  const message = generateWhatsAppMessage(cartItems);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
