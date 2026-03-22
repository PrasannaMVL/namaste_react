import { SWIGGY_IMG_URL } from "../utils/constants";
export const RestaurantCard = ({resData}) => {
    const {name, cuisines, avgRating, sla,cloudinaryImageId} = resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={SWIGGY_IMG_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard