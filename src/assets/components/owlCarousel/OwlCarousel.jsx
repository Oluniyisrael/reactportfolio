import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './OwlCarousel.css'; 

import wimg1 from '../../images/robofriends.png';
import wimg2 from '../../images/topmost.png';
import wimg3 from '../../images/oluwatoyin.png';
import wimg4 from '../../images/accuvice.png';

const excursionsData = [
  {
    imageUrl: wimg1,
    title: 'Robofriends',
    link: 'https://izzyrobofriends.netlify.app/',
    description: '(May 17th, 2018)',
  },
  {
    imageUrl: wimg2,
    title: 'Topmost Intercontinental academy', // Unique title for the second excursion
    link: 'https://topmostintc.netlify.app/',
    description: '(March 17th, 2022)',
  },
  {
    imageUrl: wimg3,
    title: 'Dr Ojo\'s portfolio', // Unique title for the third excursion
    link: 'https://www.oluwatoyinojo.com.ng/',
    description: '(July  23th, 2024)',
  },
  {
    imageUrl: wimg4,
    title: 'Accuvice', // Unique title for the third excursion
    link: 'https://accuvice.vercel.app/',
    description: '(August  29th, 2024)',
  },
];

const Excursions = () => {
  return (
    <OwlCarousel className='owl-theme' loop margin={10} items={1} dots={true}  autoplay={true} autoplaySpeed={1000} autoplayTimeout={5000} autoplayHoverPause={true}

    smartSpeed={100}>
      {excursionsData.map((excursion) => (
        <div className="col-md-5 col-11 m-auto" key={excursion.title}>
          <a href={excursion.link}><img src={excursion.imageUrl} alt={excursion.title} id="noBorder" /></a>
          <div className="person">
            <div className="title">
              <h4><span></span>   {excursion.description}</h4>
              <h2>{excursion.title}</h2>
            </div>
          </div>
        </div>
      ))}
    </OwlCarousel>
  );
};

export default Excursions;
