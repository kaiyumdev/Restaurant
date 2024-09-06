import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      {" "}
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order</Link>
      </li>
      <li>
        <Link to="/signup">SignUp</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
      {user ? (
        <li className="flex items-center justify-center">
          <button onClick={handleLogOut} className="btn btn-ghost">
            LogOut
          </button>
        </li>
      ) : (
        <li className="flex items-center justify-center">
          <button>
            <Link to="/login">Login</Link>
          </button>
        </li>
      )}
      <li>
        {" "}
        <span>{user && user.displayName}</span>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Restaurant</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
