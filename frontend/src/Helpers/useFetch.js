import { useEffect, useState } from "react";

export const useFetchGet = async (endPoint) => {

  // console.log("endpoint", endPoint)
  try {
    const response = await fetch(`http://localhost:4600/${endPoint}`, {
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


  const [state, setState] = useState({
    data: "",
  });


  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4600/${endPoint}`, {
        method: "POST",
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

  return {
    state,
    fetchData
  };
};


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJiM2RlMTY5ZC1jZjYxLTQ0M2MtYTNjYS1iYWE2MzBkZTljYzkiLCJlbWFpbCI6InBydWViYTEzQHBydWViYTIuY29tIiwicm9sZSI6IkNsaWVudGUiLCJuYmYiOjE3MDkyMzEyNjEsImV4cCI6MTcwOTMxNzY2MSwiaWF0IjoxNzA5MjMxMjYxfQ.cd7ZXcmVxFv4DviGl-McOZLAnvIsHXGIUf2YuioS7yw