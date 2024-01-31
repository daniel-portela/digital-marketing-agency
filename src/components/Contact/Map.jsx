import React from 'react';
import "./Contact.css";

const Map = () => {
  return (
    <div className='map-content'>
      {/* eslint-disable-next-line */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15591.635741475911!2d-42.9008376039794!3d-12.321915993469815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75d60fb42ca26c3%3A0x631d2eef7b5d300b!2sOliveira%20dos%20Brejinhos%2C%20BA%2C%2047530-000!5e0!3m2!1spt-BR!2sbr!4v1706634023484!5m2!1spt-BR!2sbr" width="100%" height="450" style={{ border: 0 }}></iframe>
    </div>
  )
}

export default Map
