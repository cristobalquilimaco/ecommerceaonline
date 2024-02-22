// Componente React
import { useState } from "react";
import images from "../../utils/img";
import "./styles/Banner.css";
import icon1 from "/public/cambios-devoluciones-icono.svg";
import icon2 from "/public/envio-gratis.webp";
import icon3 from "/public/gana-50.webp";
import icon4 from "/public/venta-online.webp";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextIndex = () => {
    const nextBanner = (currentIndex + 1) % images.length;
    setCurrentIndex(nextBanner);
  };

  const goToPrevIndex = () => {
    const prevBanner = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevBanner);
  };

  return (
    <div className="custom-banner">
      <article className="custom__banner2">
        <section className="custom-slider">
          <div className="custom-slider-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className="custom-slide">
                <img className="banner__img" src={image} alt="" />
              </div>
            ))}
          </div>
        </section>
        <ul className="icon_info_banner">
          <li className="icon__and_info">
            <img className="icon_individual" src={icon1} alt="" />
            <p>30 days for exchanges or returns.</p>
          </li>
          <li className="icon__and_info">
            <img className="icon_individual" src={icon2} alt="" />
            <p>Free shipping on all products to more than 930 municipalities.</p>
          </li>
          <li className="icon__and_info">
            <img className="icon_individual" src={icon3} alt="" />
            <p>You can earn half of your purchase.</p>
          </li>
          <li className="icon__and_info">
            <img className="icon_individual" src={icon4} alt="" />
            <p>Buy online and pick up in store.</p>
          </li>
        </ul>
        <section className="custom-btn">
          <button className="custom-prev-button" onClick={goToPrevIndex}>
            Prev
          </button>
          <button className="custom-next-button" onClick={goToNextIndex}>
            Next
          </button>
        </section>
      </article>
    </div>
  );
};

export default Banner;
