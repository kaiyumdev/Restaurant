/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, price, recipe, image, _id } = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {};
  return (
    <div>
      <SectionTitle
        heading="Update Item"
        subHeading="Refresh Info"
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
            defaultValue={name}
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
              defaultValue={category}
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
              <option value="drinks">Drinks</option>
            </select>
          </div>
          <div className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Receipe Price</span>
            </div>
            <input
              {...register("price", { required: true })}
              defaultValue={price}
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
              defaultValue={recipe}
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
          Update Menu Item <FaUtensils></FaUtensils>
        </button>
      </form>
    </div>
  );
};

export default UpdateItem;
