/* eslint-disable react/prop-types */
import { useState } from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  // Get the items for the current page
  const currentItems = items.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10">
        {currentItems.map((item, index) => (
          <FoodCard key={index} item={item}></FoodCard>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {/* Render pagination buttons */}
        {Array.from(
          { length: Math.ceil(items.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`btn mx-1 ${
                currentPage === index ? "btn-primary" : "btn-outline"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default OrderTab;
