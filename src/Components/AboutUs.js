import React from 'react';

const AboutUs = () => {
  const organizationDetails = {
    name: "ABC Food Company",
    mission: "Our mission is to provide high-quality and nutritious food to our customers while promoting sustainability and supporting local communities.",
    history: "Established in 20XX, ABC Food Company has been a leading provider of delicious and healthy food products. Over the years, we have built a strong reputation for our commitment to quality and customer satisfaction.",
    location: "123 Main Street, City, Country",
    contact: {
      email: "info@abcfoodcompany.com",
      phone: "123-456-7890"
    },
    achievements: [
      "Received the 'Best Food Company' award in 20XX",
      "Partnered with local farmers to support sustainable agriculture",
      "Expanded our distribution network to reach customers nationwide"
    ]
  };

  return (
    <div>
      <h1>About Us</h1>
      <h2>{organizationDetails.name}</h2>
      <p>{organizationDetails.mission}</p>
      <h3>History</h3>
      <p>{organizationDetails.history}</p>
      <h3>Location</h3>
      <p>{organizationDetails.location}</p>
      <h3>Contact Details</h3>
      <p>Email: {organizationDetails.contact.email}</p>
      <p>Phone: {organizationDetails.contact.phone}</p>
      <h3>Achievements</h3>
      <ul>
        {organizationDetails.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUs;

