import React from 'react';
import './LocationsPage.css';

const locations = [
  {
    city: "BANGALORE",
    addressLines: [
      "111 MG Road",
      "Bangalore, KA",
      "560001"
    ],
    email: "bangalore@example.com",
    phone: "(080)-2222-2222",
    image: "/bangalore-map.jpg"
  },
  {
    city: "HYDERABAD",
    addressLines: [
      "222 Banjara Hills",
      "Hyderabad, TS",
      "500034"
    ],
    email: "hyderabad@example.com",
    phone: "(040)-3333-3333",
    image: "/hyderabad-map.jpg"
  }
];

const LocationsPage = () => (
  <div className="locations-page">
    {locations.map(loc => (
      <section className="location-section" key={loc.city}>
        <div className="location-left">
          <h2 className="location-title">{loc.city}</h2>
          <div>
            {loc.addressLines.map(line => (
              <div key={line}>{line}</div>
            ))}
          </div>
          <h3 className="contact-title">CONTACT</h3>
          <div>{loc.email}</div>
          <div>{loc.phone}</div>
        </div>
        <div className="location-map">
          <img src={loc.image} alt={loc.city + " map"} />
        </div>
      </section>
    ))}
  </div>
);

export default LocationsPage;
