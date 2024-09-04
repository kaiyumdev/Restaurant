/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="p-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 my-16">
        {items.map((item, index) => (
          <MenuItem key={index} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        {" "}
        <button className="btn btn-outline">Order</button>{" "}
      </Link>
    </div>
  );
};

export default MenuCategory;
