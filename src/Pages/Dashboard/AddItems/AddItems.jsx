/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res.data.data.display_url);
  };
  return (
    <div>
      <SectionTitle
        heading="add an Item"
        subHeading="What's new?"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <div className="form-control w-full my-6">
          <div className="label">
            <span className="label-text">Recipe Name</span>
          </div>
          <input
            {...register("name", { required: true })}
            required
            type="text"
            placeholder="Receipe Name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-6">
          <div className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select
              defaultValue="default"
              {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Select a Category?
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drink</option>
              <option value="drinks">Offered</option>
            </select>
          </div>
          <div className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Receipe Price</span>
            </div>
            <input
              {...register("price", { required: true })}
              type="text"
              placeholder="Price Name"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>
        </div>
        <div className="my-4">
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full max-w-xs"
          />
        </div>
        <button className="btn">
          Add Item <FaUtensils></FaUtensils>
        </button>
      </form>
    </div>
  );
};

export default AddItems;
