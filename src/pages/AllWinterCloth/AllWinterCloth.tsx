import { useEffect, useState } from "react";
import AllWinterClothCard from "./AllWinterClothCard";

interface Cloth {
  id: number;
}

const AllWinterCloth = () => {
  const [cloths, setCloths] = useState<Cloth[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/cloths")
      .then((res) => res.json())
      .then((data) => setCloths(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="pt-24 md:pt-32 pb-10 md:pb-24">
      <h2 className="pb-16 text-center text-2xl md:text-3xl font-bold">All Winter Cloth</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
        {cloths.map((cloth) => (
          <AllWinterClothCard key={cloth.id} cloth={cloth} />
        ))}
      </div>
    </div>
  );
};

export default AllWinterCloth;
