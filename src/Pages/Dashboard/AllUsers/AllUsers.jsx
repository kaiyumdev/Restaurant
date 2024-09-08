import { FaTrashAlt, FaUsers } from "react-icons/fa";
import useUsers from "../../../hooks/useUsers";

const AllUsers = () => {
  const [users] = useUsers();
  console.log(users);
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h1>All Users</h1>
        <h1>Total Users: {users.length}</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {/* {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-lg bg-orange-500 xl"
                      >
                        <FaUsers />
                      </button>
                    )} */}
                  </td>
                  <td>
                    {/* <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-ghost btn-lg text-red-600 xl"
                    >
                      <FaTrashAlt />
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
