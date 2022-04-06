import axios from "axios";
import { useEffect } from "react";

function FetchData() {
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:3004/jobs");
        const data = response.data;
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
}

export default FetchData;
