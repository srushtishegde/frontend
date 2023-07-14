import React from 'react';

const Menu = () => {
  const foodItems = [
    { name: 'Manaqish', image: 'https://www.willflyforfood.net/wp-content/uploads/2021/06/lebanese-food-sfiha.jpg.webp', price: '$10' },
    { name: 'Baba Ganoush', image: 'https://www.willflyforfood.net/wp-content/uploads/2021/06/lebanese-food-baba-ganoush.jpg.webp', price: '$12' },
    { name: 'Varenyky', image: 'https://www.willflyforfood.net/wp-content/uploads/2021/08/ukranian-food-varenyky.jpg.webp', price: '$8' },
    { name: 'Snezhanka', image: 'https://www.willflyforfood.net/wp-content/uploads/2021/12/bulgarian-food-snezhanka.jpg.webp', price: '$15' },
    { name: 'Coxinhas', image: 'https://www.willflyforfood.net/wp-content/uploads/2021/10/brazilian-food-coxinha.jpg.webp', price: '$9' },
    { name: 'Gambas al Ajillo', image: 'https://www.willflyforfood.net/wp-content/uploads/2020/07/bodega-joan5.jpg.webp', price: '$11' }
  ];

  return (
    <div>
      <h1>Menu</h1>
      {foodItems.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <img src={item.image} alt={item.name} />
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Menu;


