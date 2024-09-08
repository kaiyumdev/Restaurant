import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const handleGoogleSignIn = () => {
    // Implement Google Sign In logic here
  };

  return (
    <div className="flex justify-evenly bg-amber-600 p-3 mb-5 mx-8 rounded-md items-center">
      <FaGoogle></FaGoogle>
      <button onClick={handleGoogleSignIn}>SignInWithGoogle</button>
    </div>
  );
};

export default SocialLogin;
