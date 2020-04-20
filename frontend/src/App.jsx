import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useEffect } from "react";
import Axios from "axios";

const initialItems = [
  {
    url:
      "https://photos.smugmug.com/Animals/Birds/Warblers/Yellow-Warbler-2013/i-Tr5rQBN/0/f058a66f/X5/191130_Camino%20de%20grava%20entre%20el%20Corchito%20y%20Estero%20de%20Chicxulub_079-X5.jpg",
    caption: "image 1",
    details: "details 1",
  },
  {
    url:
      "https://photos.smugmug.com/Animals/Reptiles/Crocodilians/American-Crocodile/i-vkN5pCN/0/b92acda4/5K/151029_Everglades_729-5K.jpg",
    caption: "Image 2",
    details: "details 2",
  },
  {
    url:
      "https://photos.smugmug.com/Animals/Reptiles/Lizards/Pygmy-Horned-Lizard-2013/i-cdRKpxK/0/fe991315/X5/131005_ManastashRidge_693-X5.jpg",
    caption: "Image 3",
    details: "details 3",
  },
];

const App = () => {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    console.log("app", process.env.BACKEND_URL);
    console.log("app", BACKEND_URL);
    const url = BACKEND_URL;
    Axios.get(url)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <Carousel>
          {items.map((item, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={item.url}
                alt={"Slide " + toString(idx)}
              />
              <Carousel.Caption>
                <h3>{item.caption}</h3>
                <p>{item.details}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default App;
