import navbar from "./components/navbar"
import {Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import Navbar from "./components/navbar"
import "../src/index.css"
import ProductCard from './components/cards/cards'; // Importe o componente
import {useState, useEffect} from "react";
import axios from "axios";


function App() {
  const [produtos, setProdutos] = useState([]);//estado para armazenar a lista de produtos

  //requisicao para a API buscando os dados dos produtos e atualizando o estado produtos
  useEffect(() => {
    axios.get('http://localhost:3333/produtos')//utilizacao do axios para pegar as informacoes do backend
      .then(response => {
        setProdutos(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/registrar" element={<Register/>}/>
      </Routes>

      <marra2>
      {produtos.length > 0 ? (
        produtos.map(produto => (
          <ProductCard key={produto.id} product={produto} />
        ))
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
      </marra2>

      
    </> 
  )
}

export default App;