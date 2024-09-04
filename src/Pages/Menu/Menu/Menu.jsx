import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      <MenuCategory title="offered" items={offered}></MenuCategory>
      <MenuCategory
        title="dessert"
        items={desserts}
        img={dessertImg}
      ></MenuCategory>
      <MenuCategory title="pizza" items={pizzas} img={pizzaImg}></MenuCategory>
      <MenuCategory title="salad" items={salads} img={saladImg}></MenuCategory>
      <MenuCategory title="soup" items={soups} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
