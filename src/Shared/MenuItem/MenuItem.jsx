/* eslint-disable react/prop-types */

const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div>
      <div className="flex">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-16 h-16"
          src={image}
          alt={image}
        />
        <div>
          <h4 className="text-xl font-bold">{name}</h4>
          <p>{recipe}</p>
        </div>
        <span className="text-yellow-600">{price}</span>
      </div>
    </div>
  );
};

export default MenuItem;
