import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../src/assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Jun 27, 2024</p>
          <p className="uppercase">Where can we get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit perferendis optio iure autem dicta hic delectus, esse
            similique dignissimos alias consequatur, sint veritatis suscipit
            quibusdam tenetur dolores nesciunt, animi ipsum. Consectetur, a
            totam! Labore autem exercitationem maxime aliquam sapiente magnam.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
