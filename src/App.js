import React, { useState } from 'react';
import './App.css';

function App() {
  const [productData, setProductData] = useState({
    nombre: 'Celular Samsung A30',
    descripcion: 'Samsung Galaxy A30 te ofrece formas de hacer más. La cámara ultra ancha encaja más en el marco, y con una batería de 4000 mAh, puede durar más tiempo.',
    precio: 110000,
    sku: 'SKU123',
    cantidad: 5
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleBuyClick = () => {
    if (productData.cantidad > 0) {
      setProductData({
        ...productData,
        cantidad: productData.cantidad- 1
      });
      setConfirmationMessage('Gracias por su compra');
    } else {
      setConfirmationMessage('¡Lo sentimos! Este producto está agotado.');
    }
  };

  return (
    <div className="product-detail">
      <h1>{productData.nombre}</h1>
      <p>{productData.descripcion}</p>
      <p>Precio: ${productData.precio.toFixed(2)}</p>
      <p>SKU: {productData.sku}</p>
      <p>Cantidad disponible: {productData.cantidad}</p>
      <button onClick={handleBuyClick}>Comprar</button>
      <div className="confirmation-message">{confirmationMessage}</div>
    </div>
  );
}

export default App;
