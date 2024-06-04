import { CDN_LINK } from "../utils/constants";
const ResContainer = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, totalRatingsString, cuisines } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div
      data-testid="resContainer"
      className="w-[200px] p-3 mb-8 rounded-md hover:border hover:border-gray-400"
    >
      <div className="p-1 h-[350px] bg-gray-100">
        <img className="rounded-2xl p-3" src={CDN_LINK + cloudinaryImageId} />
        <h3 className="font-medium">{name}</h3>
        <div className="flex">
          <h3 className="pr-2">{avgRating}</h3>
          <h3>({totalRatingsString})</h3>
        </div>
        <h3>{deliveryTime}min</h3>
        <h3>{cuisines.slice(0, 3).join(",")}</h3>
      </div>
    </div>
  );
};

export const withPromotedLabel = (ResContainer) => {
  return (props) => {
    return (
      <div>
        <div className="absolute bg-black text-white rounded-md p-1 m-4">
          Promoted
        </div>
        <ResContainer {...props} />
      </div>
    );
  };
};

export default ResContainer;
