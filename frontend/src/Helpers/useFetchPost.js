import { useEffect, useState } from "react";

// export const useFetchGet = async (endPoint) => {
//   try {
//     const response = await fetch(`http://localhost:4600/${endPoint}`);
//     const data = await response.json();
//     console.log("data: ", data);
//   } catch (error) {
//     console.log("Error: " + error);
//   }
// };


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
          },
          body: JSON.stringify(input),
        });
        const data = await response.json();
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
      if(!endPoint) return 
      fetchData();
    }, [endPoint])
    
  return {
   state,
    fetchData
  };
};    
