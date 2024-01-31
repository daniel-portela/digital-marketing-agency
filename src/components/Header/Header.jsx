import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css";
import { FaPaperPlane } from "react-icons/fa";

const Header = () => {
  return (
    <header className='header flex flex-center flex-column'>
      <Navbar />
      <div className='container'>
        <div className='header-content text-center flex flex-column'>
          <h1 className='text-uppercase header-title'>Agência de soluções de Marketing
          </h1>
          <p className='text-lead'>Desenvolvimento de planos de marketing,
            pesquisa de mercado e análise de concorrência.</p>
          <a href="#blue-gradient" className='btn header-btn btn-blue'>
            <FaPaperPlane /> <span>Iniciar</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header