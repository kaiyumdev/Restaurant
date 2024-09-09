import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5001",
});

const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      const token = localStorage.getItem("token");
      console.log("request stopped by interceptor", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  //intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      console.log("status error in the interceptor: ", error);
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
