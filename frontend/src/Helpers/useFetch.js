import { useEffect, useState } from "react";

export const useFetchGet = async (endPoint) => {

  // console.log("endpoint", endPoint)
  try {
    const response = await fetch(`http://localhost:4600/${endPoint}`, {
      // method: method ? method : "GET",
      headers: {
        "Authorization": localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ""
      }
    });
    const data = await response.json();
    // console.log("data: ", data);
    return data;

  } catch (error) {
    console.log("Error: " + error);
  }
};


export const useFetchPost = (endPoint, input) => {

  // console.log(method)
  const [state, setState] = useState({
    data: "",
  });


  const fetchData = async () => {
    console.log("token1", localStorage.getItem("token"))
    try {

      const response = await fetch(`http://localhost:4600/${endPoint}`, {
        // method: method ? method : "GET",
        // method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ""
        },
        body: JSON.stringify(input),
      });
      const data = await response.json();
      localStorage.setItem("token", data.token);
      setState({
        data,
      });

    } catch (error) {
      setState({
        data: "",
      });
    }
  };

  useEffect(() => {
    if (!endPoint) {
      return
    }
    fetchData();
  }, [])

  console.log("token2", localStorage.getItem("token"))
  return {
    state,
    fetchData
  };

};
