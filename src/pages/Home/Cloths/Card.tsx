const Card = ({ cloth }) => {
  const { image, title, category, size } = cloth;
  return (
    <div>
      <img className="rounded-lg p-3 md:p-0 " src={image} alt="" />
      <div className="my-3 text-center md:text-left">
        <h3 className="text-lg font-bold my-1 ">{title}</h3>
        <p>
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p>
          <span className="font-semibold">Size:</span> {size}
        </p>
        <button className="p-3 rounded-md text-white my-3 bg-gray-500    hover:bg-gray-700">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
