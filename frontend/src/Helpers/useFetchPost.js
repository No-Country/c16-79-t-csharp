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
  // console.log("input",input)

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
        // console.log("data: ", data);
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



//     export const fetchData = async (endPoint, input) => {
//       const [state, setState] = useState({
//         data: null,
//         error: null,
//       });
//     try {
//       const response = await fetch(`http://localhost:4600/${endPoint}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(input),
//       });
//       const data = await response.json();
//       console.log("data: ", data);
//       setState({
//         data,
//         error: null,
//       });
//     } catch (error) {
//       console.error(error)
//       setState({
//         data: null,
//         error: "Ha ocurrido un error",
//       });
//     }
//   ;

//   useEffect(() => {
//     fetchData();
//   }, [endPoint]);

//   return data;
// };

// export default function TotalUsers() {
//     const [total, setTotal] = useState(0);
  
//     useEffect(() => {
//       // Llamada asíncrona a API usuarios
//       async function fetchData() {
//         const response = await fetch('http://localhost:3000/api/users');
//         const data = await response.json();
//         setTotal(data.count);
//       }
//       fetchData();
//     }, []);