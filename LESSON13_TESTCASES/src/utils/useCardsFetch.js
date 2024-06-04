import { useState, useEffect } from "react";

const useCardsFetch = () => {
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    fetchCardsData();
  }, []);

  const fetchCardsData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=17.5323579&lng=78.3785343"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants;
      setCardsData(restaurants || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return cardsData;
};

export default useCardsFetch;
