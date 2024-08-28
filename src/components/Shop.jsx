import { useEffect } from "react";
import "./Shop.css";
import Card from "./Card";
import { useState } from "react";

const Shop = ({ setCart }) => {
  const [storeData, setStoreData] = useState();
  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=8",
        );
        const data = await response.json();
        setStoreData(data);
      } catch (error) {
        console.error("Error fetching store data:", error);
      }
    };
    fetchStoreData();
  }, []);
  console.log(storeData);

  return (
    <main>
      <div className="store">
        {storeData &&
          storeData.map((item) => (
            <Card
              setCart={setCart}
              key={item.id}
              category={item.category}
              desc={item.description}
              id={item.id}
              img={item.image}
              price={item.price}
              title={item.title}
              rating={item.rating}
            />
          ))}
      </div>
    </main>
  );
};

export default Shop;
