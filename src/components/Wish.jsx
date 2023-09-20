import React from 'react';
import wish1 from '../assets/wish1.jpg';
import wish2 from '../assets/wish2.jpg';
import wish3 from '../assets/wish3.jpg';
import wish4 from '../assets/wish4.jpg';
import '../style/wish.css';
import { Fade } from 'react-reveal';

function Wish() {
  return (
    <div className="wish-container">
      <div className="wish-left">
        <h1>Birthday Wish</h1>
        <div className="birthday-text-border"></div>
        <p>
          Selamat ulang tahun Sabilaa! Semoga dengan bertambahnya usia Bila menjadi anak yang lebih baik, sholehah, rezekinya lancar terus, sehat dan bahagia selalu, dan semakin banyak orang yang sayang sama Bila. Semoga semua yang
          dicita-citakan Bila akan tercapai. Semangat yaa belajarnya biar bisa masuk ke Universitas impian Bila dan bisa membanggakan orang tua Aamiinn...
        </p>
      </div>
      <div className="wish-right">
        <img src={wish1} alt="" className="wishphoto-1" />
        <img src={wish2} alt="" className="wishphoto-2" />
        <img src={wish3} alt="" className="wishphoto-3" />
        <img src={wish4} alt="" className="wishphoto-4" />
      </div>
    </div>
  );
}

export default Wish;
