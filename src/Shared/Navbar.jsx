import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li className="flex items-center justify-center">
        <Link to="/">Home</Link>
      </li>
      <li className="flex items-center justify-center">
        <Link to="/menu">Menu</Link>
      </li>
      <li className="flex items-center justify-center">
        <Link to="/order/salad">Order</Link>
      </li>

      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/userHome">Dashboard</Link>
        </li>
      )}
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminHome">Dashboard</Link>
        </li>
      )}
      <li className="flex items-center justify-center">
        <Link to="/signup">SignUp</Link>
      </li>
      <li className="flex items-center justify-center">
        <Link to="/dashboard/cart">
          <button className="btn flex items-center justify-center">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart?.length}</div>
          </button>
        </Link>
      </li>

      {user && (
        <li className="flex items-center justify-center">{user.displayName}</li>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden flex items-center justify-center"
          >
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
        <Link
          to="/"
          className="btn btn-ghost text-xl flex items-center justify-center"
        >
          Restaurant
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center justify-center">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        {/* <a className="btn flex items-center justify-center"></a> */}
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
      </div>
    </div>
  );
};

export default Navbar;
