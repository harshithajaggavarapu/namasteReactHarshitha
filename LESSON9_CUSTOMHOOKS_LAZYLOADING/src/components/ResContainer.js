import { CDN_LINK } from "../utils/constants";
const ResContainer = (props) => {
    const { resData } = props;
    const { name, cloudinaryImageId, avgRating, totalRatingsString, cuisines } = resData?.info;
    const { deliveryTime } = resData?.info?.sla

    return <div className="res-container">
        <div className="res-card">
            <img className="res-image" src={CDN_LINK + cloudinaryImageId} />
            <h3>{name}</h3>
            <div className="ratings">
                <h3 className="rating-value">{avgRating}</h3>
                <h3>({totalRatingsString})</h3>
            </div>
            <h3>{deliveryTime}min</h3>
            <h3>{cuisines.slice(0, 3).join(",")}</h3>

        </div>
    </div>
}

export default ResContainer;