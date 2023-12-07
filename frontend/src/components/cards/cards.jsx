// src/components/ProductCard.js

import React from 'react';
import "../cards/cards.css";

const ProductCard = ({ product }) => {
  return (

      <div className="card">
        <img src={product.imagepath} alt={product.name} />
        <div className="nome">{product.nome}</div>
        <div className="description">{product.description}</div>
        <div className="price">R$ {product.price}</div>
        <button>Comprar</button>
      </div>

  );
};

export default ProductCard;
