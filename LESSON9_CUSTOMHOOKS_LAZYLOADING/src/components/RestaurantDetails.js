import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { MENU_LINK } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantDetails = () => {
  // const [restaurantMenuData, setRestaurantMenuData] = useState(null);
  const { resId } = useParams();
  const restaurantMenuData = useRestaurantMenu(resId);
  // useEffect(() => {
  //   fetchRestaurant();
  // }, []);
  // const fetchRestaurant = async () => {
  //   const data = await fetch(MENU_LINK + resId);
  //   const json = await data.json();
  //   setRestaurantMenuData(json?.data);
  // };
  if (restaurantMenuData == null) {
    return <Skeleton />;
  }
  const { name, cuisines, costForTwoMessage, avgRating } =
    restaurantMenuData?.cards[2]?.card?.card?.info;
  const regularCard =
    restaurantMenuData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;
  const itemCards =
    regularCard?.itemCards ?? regularCard?.categories?.[0]?.itemCards;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <h3>
        {costForTwoMessage} - {avgRating}
      </h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}> {item.card.info.name}</li>
        ))}
      </ul>
      <div></div>
    </div>
  );
};

export default RestaurantDetails;
