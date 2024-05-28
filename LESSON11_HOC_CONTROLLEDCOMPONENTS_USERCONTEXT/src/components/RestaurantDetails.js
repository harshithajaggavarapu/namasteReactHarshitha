import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { MENU_LINK } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategorySection from "./RestaurantCategorySection";
const RestaurantDetails = () => {
  // const [restaurantMenuData, setRestaurantMenuData] = useState(null);
  const { resId } = useParams();
  const restaurantMenuData = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (restaurantMenuData == null) {
    return <Skeleton />;
  }
  const { name, cuisines, costForTwoMessage, avgRating } =
    restaurantMenuData?.cards[2]?.card?.card?.info;
  const categories =
    restaurantMenuData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);
  return (
    <div className="text-center">
      <div className="w-6/12 inline-block m-4 p-2 rounded-lg shadow-md border border-solid border-gray-200">
        <h1 className="font-bold p-4">{name}</h1>
        <h2 className="mx-2">{cuisines.join(",")}</h2>
        <h3>
          {costForTwoMessage} - {avgRating}
        </h3>
      </div>

      {categories.map((category, index) => (
        <RestaurantCategorySection
          key={category?.card?.card?.info?.title}
          info={category?.card?.card}
          dropDown={index == showIndex && true}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantDetails;
