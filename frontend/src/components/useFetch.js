import { useEffect, useState } from "react";
import axios from "axios";
import { PASSWORD, USERNAME } from "utils";

const useFetch = () => {
  const [webshopItemz, setWebshopItemz] = useState([]);
  const [bearerToken, setBearerToken] = useState(null);

  useEffect(() => {
    axios
      .post("http://localhost:1337/auth/local", {
        identifier: "Geri",
        password: "C3jk74xsd9p",
      })
      .then((response) => {
        // Handle success.
        console.log("well done");
        setBearerToken(response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  }, []);

  useEffect(() => {
    console.log(bearerToken);
    axios
      .get("http://localhost:1337/products", {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
      .then((response) => {
        // Handle success.
        console.log("Data: ", response.data);
        setWebshopItemz(response.data);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  }, [bearerToken]);

  return { webshopItemz };
};

export default useFetch;
