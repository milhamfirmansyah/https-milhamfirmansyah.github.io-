import React, { Component } from 'react';
import Slider from 'react-slick';
import bila1 from '../carousel assets/bila1.jpg';
import bila5 from '../carousel assets/bila5.jpg';
import bila11 from '../carousel assets/bila11.jpg';
import bila14 from '../carousel assets/bila14.jpg';
import bila16 from '../carousel assets/bila16.jpg';
import bila22 from '../carousel assets/bila22.jpg';
import bila23 from '../carousel assets/bila23.jpg';
import bila27 from '../carousel assets/bila27.jpg';
import bila28 from '../carousel assets/bila28.jpg';
import bila30 from '../carousel assets/bila30.jpg';
import bila32 from '../carousel assets/bila32.jpg';
import bila35 from '../carousel assets/bila35.jpg';
import bila37 from '../carousel assets/bila37.jpg';
import bila39 from '../carousel assets/bila39.jpg';
import bila43 from '../carousel assets/bila43.jpg';
import bila48 from '../carousel assets/bila48.jpg';
import bila50 from '../carousel assets/bila50.jpg';
import bila52 from '../carousel assets/bila52.jpg';
import bila53 from '../carousel assets/bila53.jpg';
import bila54 from '../carousel assets/bila54.jpg';
import bila57 from '../carousel assets/bila57.jpg';
import bila58 from '../carousel assets/bila58.jpg';
import bila62 from '../carousel assets/bila62.jpg';
import bila66 from '../carousel assets/bila66.png';
import bila67 from '../carousel assets/bila67.png';
import bila68 from '../carousel assets/bila68.png';
import bila69 from '../carousel assets/bila69.png';
import bila70 from '../carousel assets/bila70.png';
import bila71 from '../carousel assets/bila71.png';
import bila72 from '../carousel assets/bila72.png';
import bila74 from '../carousel assets/bila74.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/carousel.css';

export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: false,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      autoplay: true,
      autoplaySpeed: 1300,
      pauseOnHover: false,
    };

    return (
      <div className="carousel-cont">
        <Slider {...settings}>
          <div>
            <img src={bila1} className="carousel-picture" />
          </div>
          <div>
            <img src={bila5} className="carousel-picture" />
          </div>
          <div>
            <img src={bila69} className="carousel-picture" />
          </div>
          <div>
            <img src={bila66} className="carousel-picture" />
          </div>
          <div>
            <img src={bila11} className="carousel-picture" />
          </div>
          <div>
            <img src={bila70} className="carousel-picture" />
          </div>
          <div>
            <img src={bila58} className="carousel-picture" />
          </div>
          <div>
            <img src={bila14} className="carousel-picture" />
          </div>
          <div>
            <img src={bila16} className="carousel-picture" />
          </div>
          <div>
            <img src={bila22} className="carousel-picture" />
          </div>
          <div>
            <img src={bila74} className="carousel-picture" />
          </div>
          <div>
            <img src={bila23} className="carousel-picture" />
          </div>
          <div>
            <img src={bila27} className="carousel-picture" />
          </div>
          <div>
            <img src={bila28} className="carousel-picture" />
          </div>
          <div>
            <img src={bila30} className="carousel-picture" />
          </div>
          <div>
            <img src={bila32} className="carousel-picture" />
          </div>
          <div>
            <img src={bila35} className="carousel-picture" />
          </div>
          <div>
            <img src={bila37} className="carousel-picture" />
          </div>
          <div>
            <img src={bila67} className="carousel-picture" />
          </div>
          <div>
            <img src={bila39} className="carousel-picture" />
          </div>
          <div>
            <img src={bila43} className="carousel-picture" />
          </div>
          <div>
            <img src={bila48} className="carousel-picture" />
          </div>
          <div>
            <img src={bila50} className="carousel-picture" />
          </div>
          <div>
            <img src={bila72} className="carousel-picture" />
          </div>
          <div>
            <img src={bila52} className="carousel-picture" />
          </div>
          <div>
            <img src={bila68} className="carousel-picture" />
          </div>
          <div>
            <img src={bila54} className="carousel-picture" />
          </div>
          <div>
            <img src={bila57} className="carousel-picture" />
          </div>
          <div>
            <img src={bila71} className="carousel-picture" />
          </div>
          <div>
            <img src={bila62} className="carousel-picture" />
          </div>
        </Slider>
      </div>
    );
  }
}
