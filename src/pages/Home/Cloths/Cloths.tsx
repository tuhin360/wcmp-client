import { useState } from "react";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";

interface Cloth {
  _id: number;
  image: string;
  title: string;
  category: string;
  size: string;
}

const Cloths = () => {
  const [showAllCloths, setShowAllCloths] = useState(false);

  const getCloths = async () => {
    return await fetch("http://localhost:5000/cloths").then((res) =>
      res.json()
    );
  };

  const { data, isLoading } = useQuery<Cloth[]>({
    queryKey: ["cloths"],
    queryFn: getCloths,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleViewAllClick = () => {
    setShowAllCloths(true);
  };

  return (
    <div className="my-32">
      <h2 className="text-3xl mb-10 md:mb-16 font-bold text-center ">
        Winter Clothes
      </h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {showAllCloths
          ? data?.map((cloth) => <Card key={cloth._id} cloth={cloth} />)
          : data
              ?.slice(0, 6)
              .map((cloth) => <Card key={cloth._id} cloth={cloth} />)}
      </div>
      {!showAllCloths && (
        <div className="text-center my-10">
          <button
            className=" bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-gray-400 transition duration-300"
            onClick={handleViewAllClick}
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default Cloths;
