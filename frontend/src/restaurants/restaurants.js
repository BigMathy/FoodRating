// src/restaurants.js
import pizzerei from '../assets/Die Pizzerei.jpeg'


export const restaurantData = [
  {
    id: 1,
    name: "Thai Li Ba",
    location: "Adolf-Pichler-Platz 3/Rathausgalerie, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Asia", "Thai"],
    price: "$$"
  },
  {
    id: 2,
    name: "Le Murge",
    location: "am Wiltener Platzl, Leopoldstraße 27, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Italian"],
    price: "$$"
  },
  {
    id: 3,
    name: "Nomads",
    location: "Templstraße 32, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Asia", "Mongolian"],
    price: "$"
  },
  {
    id: 4,
    name: "Cool Run Inn",
    location: "Schöpfstraße 14, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Karibian", "International"],
    price: "$$"
  },
  {
    id: 5,
    name: "Miso",
    location: "Seilergasse 14, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Asia", "Korean"],
    price: "$$"
  },
  {
    id: 6,
    name: "Brasserei",
    location: "Burggraben 17, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["European", "Western"],
    price: "$$"
  },
  {
    id: 7,
    name: "Restaurant Marta",
    location: "Viaduktbögen 70, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["European"],
    price: "$$"
  },
  {
    id: 8,
    name: "Summit & Friends",
    location: "Maria-Theresien-Straße 49a, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Bar", "Breakfest"],
    price: "$"
  },
  {
    id: 9,
    name: "Heublume Wilten",
    location: "Templstraße 32, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["European"],
    price: "$"
  },
  {
    id: 10,
    name: "TONY'S - High quality Pizzeria",
    location: "Maximilianstraße 9, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Italian", "Pizza"],
    price: "$$"
  },
  {
    id: 11,
    name: "Colours Bar Bistro",
    location: "Innstraße 1, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Restaurant", "Bar"],
    price: "$"
  },
  {
    id: 12,
    name: "Restaurant Stiftskeller Innsbruck",
    location: "Stiftgasse 1/7, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["European", "Middle"],
    price: "$$"
  },
  {
    id: 13,
    name: "farina pizzabar & cafe'",
    location: "Herzog-Friedrich-Straße 13, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Italian", "Pizza"],
    price: "$"
  },
  {
    id: 14,
    name: "Himalayan Nepali Kitchen",
    location: "Maximilianstraße 11, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Napelian"],
    price: "$"
  },
  {
    id: 15,
    name: "Restaurant Akropolis",
    location: "Innrain 13, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Greek"],
    price: "$$"
  },
  {
    id: 16,
    name: "Oishi Innsbruck",
    location: "Maximilianstraße 33, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: ""
  },
  {
    id: 17,
    name: "Mundvoll Innsbruck",
    location: "Anichstraße 10, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Fast Food", "International"],
    price: "$"
  },
  {
    id: 18,
    name: "Machete – Burrito Kartell",
    location: "Anichstraße 29, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Mexican"],
    price: "$"
  },
  {
    id: 19,
    name: "360° Cafe",
    location: "Rathaus Galerien, Maria-Theresien-Straße 18, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["European"],
    price: "$"
  },
  {
    id: 20,
    name: "Die Pizzerei",
    location: "Bozner Pl. 6, 6020 Innsbruck",
    image: {pizzerei},
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Italian", "Pizza"],
    price: "$$"
  },
  {
    id: 21,
    name: "HAO WEI DAO",
    location: "Leopoldstraße 7, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Asia", "Korean"],
    price: "$$"
  },
  {
    id: 22,
    name: "Trattoria-Pizzeria Due Sicilie",
    location: "Höttinger G. 15, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Italian", "Pizza"],
    price: "$$"
  },
  {
    id: 23,
    name: "Read Pizza",
    location: "Museumstraße 19, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Italian", "Pizza"],
    price: "$$"
  },
  {
    id: 24,
    name: "Baklava Cafe",
    location: "Stiftgasse 4, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Turkey"],
    price: "$"
  },
  {
    id: 25,
    name: "Una Pizza",
    location: "Universitätsstraße 3/Top 1, 6020 Innsbruck",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Italian", "Pizza"],
    price: "$$"
  },
  {
    id: 26,
    name: "Das Schnitzerl",
    location: "Messe Bahnhof",
    image: "https://via.placeholder.com/150",
    visited: false,
    ratings: { food: 0, location: 0, price: 0 },
    comment: "",
    cuisine: ["Schnitel"],
    price: "$$"
  },
  {
    id: 27,
    name: "Mutti Essen",
    location: "Tarrenz",
    image: "https://via.placeholder.com/150",
    visited: true,
    ratings: {food: 5, location: 5, price: 5},
    comment: "",
    cuisine: ["Everything"],
    price: "FREE"
  }
];
