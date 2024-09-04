import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../hooks/useMenu";
import menuImg from "../../assets/menu/banner3.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => (item.category = "offered"));
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Cover img={menuImg} title="Our Menu"></Cover>
    </div>
  );
};

export default Menu;
