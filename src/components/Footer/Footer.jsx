import React from 'react';
import "./Footer.css";

const Footer = () => {

  let date = new Date();

  return (
    <footer className='footer bg-black flex flex-center' id="footer">
      <div className='container flex flex-center w-100'>
        <div className='grid footer-content text-center'>
          <p className='text'>Desenvolvimento de planos de marketing, pesquisa de mercado e análise de concorrência.</p>
          <span className='text'>&copy; {date.getFullYear().toString()} Agência de soluções de Marketing</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
