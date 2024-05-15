import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Cloth {
  id: number;
  image: string;
  title: string;
  category: string;
  size: string[];
  description: string;
}

const ClothDetails = () => {
  const { id } = useParams();
  const [cloth, setCloth] = useState<Cloth | null>(null);

  useEffect(() => {
    const fetchClothDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/cloths/${id}`);
        const data = await response.json();
        setCloth(data);
      } catch (error) {
        console.error("Error fetching cloth details:", error);
      }
    };

    fetchClothDetails();
  }, [id]);

  if (!cloth) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 ">
      <div className="md:w-1/2 md:my-28 mt-20 p-4 md:p-0">
        <img src={cloth.image} alt={cloth.title} className="rounded-lg" />
      </div>
      <div className="md:w-1/2 md:my-28  text-center md:text-left">
        <h3 className="text-lg font-bold mb-2">{cloth.title}</h3>
        <p className="mb-2">
          <span className="font-semibold">Category:</span> {cloth.category}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Size:</span> {cloth.size.join(", ")}
        </p>
        <p className="mb-2">
          <span className="font-semibold ">Description:</span>{" "}
          {cloth.description}
        </p>
        <div className="mb-10">
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-gray-400 transition duration-300">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClothDetails;
