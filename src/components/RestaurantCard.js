const RestaurantCard = (props) => {
  const { title, price, image, rating } = props.resData;

  return (
    <div className="res-card m-4 p-4 w-[250px] bg-gray-200">
      <img className="res-logo" src={image} />
      <h3 className="font-bold py-2 text-lg">{title}</h3>
      <h4>{price}</h4>
      <h4>{rating.rate} Stars</h4>
    </div>
  );
};

export default RestaurantCard;
