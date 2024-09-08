import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    // Implement Google Sign In logic here
    signInWithGoogle()
      .then((result) => {
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log(res.data);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User created by google successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        });
      })
      .catch((error) => console.log("Google Sign In Failed!", error));
  };

  return (
    <div className="flex justify-evenly bg-amber-600 p-3 mb-5 mx-8 rounded-md items-center">
      <FaGoogle></FaGoogle>
      <button onClick={handleGoogleSignIn}>SignInWithGoogle</button>
    </div>
  );
};

export default SocialLogin;
