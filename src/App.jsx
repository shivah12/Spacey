import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from './assets/images/img_1.png';
import slide_image_2 from './assets/images/img_2.png';
import slide_image_3 from './assets/images/img_3.png';
import slide_image_4 from './assets/images/img_4.png';
import slide_image_5 from './assets/images/img_5.png';
import slide_image_6 from './assets/images/img_6.png';
import slide_image_7 from './assets/images/img_7.png';
import slide_image_8 from './assets/images/img_8.png';
import audioFile from './assets/audio.mp3';

function App() {
  const audioRef = useRef(null);
  const [audioMuted, setAudioMuted] = useState(true);

  const handleInteraction = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setAudioMuted(false);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Spacey</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        onSlideChange={handleInteraction}
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
          <h2>Mercury</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
          <h2>Venus</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
          <h2>Earth</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
          <h2>Mars</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
          <h2>Jupiter</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
          <h2>Saturn</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
          <h2>Uranus</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
          <h2>Neptune</h2>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>

      <audio ref={audioRef} controls={false} loop muted={audioMuted}>
        <source src={audioFile} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}

export default App;
