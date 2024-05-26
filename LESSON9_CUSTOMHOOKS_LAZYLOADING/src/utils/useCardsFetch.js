import { useState, useEffect } from "react";

const useCardsFetch = () => {
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    fetchCardsData();
  }, []);

  const fetchCardsData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?lat=17.5323579&lng=78.3785343"
    );
    const json = await data.json();
    setCardsData(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return cardsData;
};

export default useCardsFetch;
