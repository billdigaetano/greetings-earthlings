// About.js — restored tilt logic with no captions, final bio included

import React from 'react';
import './About.css';

import top1 from '../about-assets/about-top1.jpg';
import top2 from '../about-assets/about-top2.jpg';
import top3 from '../about-assets/about-top3.jpg';
import top4 from '../about-assets/about-top4.jpg';
import top5 from '../about-assets/about-top5.jpg';
import top6 from '../about-assets/about-top6.jpg';
import top7 from '../about-assets/about-top7.jpg';
import top8 from '../about-assets/about-top8.jpg';

import bottom1 from '../about-assets/about-bottom1.jpg';
import bottom2 from '../about-assets/about-bottom2.jpg';
import bottom3 from '../about-assets/about-bottom3.jpg';
import bottom4 from '../about-assets/about-bottom4.jpg';
import bottom5 from '../about-assets/about-bottom5.jpg';
import bottom6 from '../about-assets/about-bottom6.jpg';
import bottom7 from '../about-assets/about-bottom7.jpg';
import bottom8 from '../about-assets/about-bottom8.jpg';

const topPhotos = [top1, top2, top3, top4, top5, top6, top7, top8];
const bottomPhotos = [bottom1, bottom2, bottom3, bottom4, bottom5, bottom6, bottom7, bottom8];

function Polaroid({ src, index }) {
  const rotate = (index % 2 === 0 ? -1 : 1) * (5 + Math.random() * 5); // original tilt logic
  const style = {
    transform: `rotate(${rotate}deg)`
  };
  return (
    <div className="polaroid" style={style}>
      <img src={src} alt={`Polaroid ${index}`} />
    </div>
  );
}

function About() {
  return (
    <div className="about-page">
      <div className="photo-collage top">
        {topPhotos.map((photo, i) => (
          <Polaroid key={i} src={photo} index={i} />
        ))}
      </div>

      <div className="bio-section">
        <div className="notebook-paper">
          <h2>About the Founder</h2>
          <p>
            Bill DiGaetano<br />
            <strong>Founder, Greetings Earthlings</strong><br /><br />
            Bill spent 15 years building multi-unit businesses in the food, hospitality, and franchising world — eventually becoming CEO of a $50M franchise group operating across multiple states. Before that, he was a U.S. Army Green Beret with deployments to Afghanistan and Colombia. He’s obsessed with customer experience, surprise-and-delight moments, and the art of making someone’s day just a little more personal. His wife and kids begrudgingly work at Greetings Earthlings for little to no pay for a boss they often describe as a pain in the a$$.
          </p>
        </div>
      </div>

      <div className="photo-collage bottom">
        {bottomPhotos.map((photo, i) => (
          <Polaroid key={i} src={photo} index={i} />
        ))}
      </div>
    </div>
  );
}

export default About;
