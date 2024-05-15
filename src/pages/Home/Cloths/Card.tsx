import { Link } from "react-router-dom";

const Card = ({ cloth }) => {
  const { _id, image, title, category, size } = cloth;
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
        <Link to={`/cloth/${_id}`}>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-gray-400 transition duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
