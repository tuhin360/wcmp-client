import { useEffect, useState } from "react";
import Card from "./Card";

interface Cloth {
  id: number;
  // Define other properties of Cloth here
}

const Cloths = () => {
  const [cloths, setCloths] = useState<Cloth[]>([]);
  const [showAllCloths, setShowAllCloths] = useState(false); // State variable to track whether to show all cloths or not

  useEffect(() => {
    fetch("http://localhost:5000/cloths")
      .then((res) => res.json())
      .then((data) => setCloths(data))
      .catch((err) => console.log(err));
  }, []);

  const handleViewAllClick = () => {
    setShowAllCloths(true); // Set showAllCloths state to true when "View All" button is clicked
  };

  return (
    <div>
      <h2 className="text-center text-2xl mb-8">Winter Clothes</h2>
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {showAllCloths
          ? cloths.map((cloth) => <Card key={cloth.id} cloth={cloth} />)
          : cloths
              .slice(0, 6)
              .map((cloth) => <Card key={cloth.id} cloth={cloth} />)}
      </div>
      {!showAllCloths && (
        <div className="text-center my-10">
          <button
            className="py-3 px-10 text-2xl rounded-md text-white my-1 bg-gray-500 hover:bg-gray-700"
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
