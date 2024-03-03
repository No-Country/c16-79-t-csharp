import { useState } from "react";


const apiUrl = import.meta.env.VITE_LINK_API;
console.log(apiUrl)
export const useFetchGet = (endPoint) => {
  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}${endPoint}`, {
        headers: {
          "Authorization": localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ""
        }
      });
      const data = await response.json();
      console.log("data: ", data);
      return data;
    } catch (error) {
      console.log("Error: " + error);
    }
  }
  return {
    fetchData
  };
}

export const useFetchPost = (endPoint, input) => {

  // console.log(method)
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

  // useEffect(() => {
  //   if(!input){
  //     return
  //   }
  //   fetchData();
  //   //eslint-disable-next-line
  // }, [input])

  return {
    state,
    fetchData
  };
};

export const useFetchPut = (endPoint, input) => {

  const [state, setState] = useState({
    data: "",
  });

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4600/${endPoint}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ""
        },
        body: JSON.stringify(input),
      });
      const data = await response.json();
      // localStorage.setItem("token", data.token);
      console.log(" responseee ", response)
      setState({
        data,
      });

    } catch (error) {
      setState({
        data: "",
      });
    }
  };

  // useEffect(() => {
  //   if(!endPoint){
  //     return
  //   }
  //   fetchData();
  //   //eslint-disable-next-line
  // }, [])

  return {
    state,
    fetchData
  };
};

