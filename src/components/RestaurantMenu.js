import { useState, useEffect } from "react";
import {RES_MENU_API} from "../utils/constant"; 

const RestaurantMenu = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU_API);
   const json = await data.text();
   // const json = JSON.parse(text);

    console.log(json);
   //setResData(text?.data?.cards?.[2]?.card?.card?.info);
  };

  return (
    <div className="res-menu">
      <h1>{name}</h1>
    </div>
  );
};

export default RestaurantMenu;
