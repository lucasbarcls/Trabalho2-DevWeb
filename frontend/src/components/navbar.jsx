import { AiOutlineHome, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  // Estado para controlar a quantidade de itens no carrinho
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    // Lógica para adicionar um item ao carrinho
    setCartCount(cartCount + 1);
  };

  return (
    <nav>
      <div className="Container">
        <h1 className="title">LOJINHACELL</h1>
        <div className="ContainerInput">
          <div>
            <input type="text" placeholder="Pesquise aqui" className="pesquisa" />
          </div>
          <div>
            <button className="buttonSearch">
              <AiOutlineSearch size={18} color="black" />
            </button>
          </div>
          <div>
            <a href="/">
              {" "}
              <button className="buttonHome">
                <AiOutlineHome size={18} color="black"></AiOutlineHome>
              </button>{" "}
            </a>
          </div>
          <div>
            <a href="/login">
              {" "}
              <button className="buttonLogin" type="button">
                Login
              </button>
            </a>
          </div>
          <div>
            <a href="/registrar">
              {" "}
              <button className="buttonRegister" type="button">
                Registrar
              </button>
            </a>
          </div>
          {/* Adicionando o carrinho */}
          <div className="cart-container">
            <button className="buttonCart" onClick={handleAddToCart}>
              <AiOutlineShoppingCart size={18} color="black" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
