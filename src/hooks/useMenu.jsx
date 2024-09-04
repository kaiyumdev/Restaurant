/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5001/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  return [menu, loading, error];
};

export default useMenu;
