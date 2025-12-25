import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating, areaName } =
    resData?.info;
  return (
    <div className="res-card">
      <div className="image-wrapper">
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
        <div className="image-gradient"></div>
        <div className="price-overlay">ITEMS AT {costForTwo}</div>
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
