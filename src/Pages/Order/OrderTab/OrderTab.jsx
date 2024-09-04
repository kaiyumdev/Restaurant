import React from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <FoodCard key={index} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
