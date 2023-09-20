import React from 'react';
import '../style/letter.css';
import letter from '../assets/letter.png';
import letter2 from '../assets/letter2.png';
import { Zoom, Fade } from 'react-reveal';

function Letter({ close }) {
  return (
    <div className="let-container">
      <Fade bottom>
        <button onClick={close}>Close</button>
      </Fade>
      <Fade bottom>
        <p className="dear">Dear Sabila Rizkia Sari,</p>
      </Fade>
      <Fade bottom>
        <p className="first-par">
          Hi Biwaa! Salam kenal namaku Ilham, aku orang Sidoarjo Jawa Timur. Aku tau Bila pertama kali dari tiktok hehe. Pertama kali lihat konten Bila yang addicted to cowo pake sarung. Btw orang Jawa Timur suka pake sarung hahaha. Bila
          anaknya cantik banget Masyaallah sumpah ga boong.. tiap hari aku suka nontonin tiktok Bila wkwk.. emang bole secantik itu Bil??? Bila juga keren banget jadi top 5 RRQ School Ambassador bisa banggain nama sekolah dan pasti orang
          tua Bila juga bangga.. Good job Bila! Keep doing what makes you happy, I always support you :&#41;
        </p>
      </Fade>
      <Fade bottom>
        <p className="sec-par">
          Bahagia terus yaa Bilaa, kalo nanti ketemu sama beberapa hal yang bikin sedih, Bila harus percaya ya bahwa masih ada banyak hal menyenangkan lain yang akan datang di hidup Bila. Happy Birthday Sabilaa! Salam kenal.. Makasih udah
          cantik
        </p>{' '}
      </Fade>
      <br />
      <br />
      <Fade bottom>
        <p className="letter-from">Your Biggest Fan</p>
      </Fade>
      <img src={letter} alt="" className="letter1" />
      <img src={letter2} alt="" className="letter2" />
    </div>
  );
}

export default Letter;
