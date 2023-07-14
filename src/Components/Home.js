import React from 'react';
import Carousel from './Carousel';
import Card from './Card';

const Home = () => {
  const slides = [
    { image: 'slide1.jpg', caption: 'Slide 1' },
    { image: 'slide2.jpg', caption: 'Slide 2' },
    { image: 'slide3.jpg', caption: 'Slide 3' }
  ];

  const cards = [
    { title: 'Card 1', description: 'Description of card 1.' },
    { title: 'Card 2', description: 'Description of card 2.' },
    { title: 'Card 3', description: 'Description of card 3.' }
  ];

  return (
    <div>
      <h1>Home</h1>
      <Carousel slides={slides} />

      <div className="card-container">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default Home;

