import { useEffect, useState } from "react";
import AllWinterClothCard from "./AllWinterClothCard";
import { useQuery } from "@tanstack/react-query";

interface Cloth {
  id: number;
}

const AllWinterCloth = () => {
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

  return (
    <div className="pt-24 md:pt-32 pb-10 md:pb-24">
      <h2 className="pb-16 text-center text-2xl md:text-3xl font-bold">
        All Winter Cloth
      </h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
        {data?.map((cloth) => (
          <AllWinterClothCard key={cloth.id} cloth={cloth} />
        ))}
      </div>
    </div>
  );
};

export default AllWinterCloth;
