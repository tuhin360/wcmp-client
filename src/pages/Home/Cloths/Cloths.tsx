import { useEffect, useState } from "react";
import Card from "./Card";

interface Cloth {
  id: number;
}

const Cloths = () => {
  const [cloths, setCloths] = useState<Cloth[]>([]);
  const [showAllCloths, setShowAllCloths] = useState(false); 

  useEffect(() => {
    fetch("http://localhost:5000/cloths")
      .then((res) => res.json())
      .then((data) => setCloths(data))
      .catch((err) => console.log(err));
  }, []);

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
          ? cloths.map((cloth) => <Card key={cloth.id} cloth={cloth} />)
          : cloths
              .slice(0, 6)
              .map((cloth) => <Card key={cloth.id} cloth={cloth} />)}
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
