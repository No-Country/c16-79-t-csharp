import { useEffect, useState } from "react";

export const useFetchGet = (endPoint) => {
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4600/${endPoint}`, {
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

  useEffect(() => {
    if (!input) {
      fetchData();
    }
    //eslint-disable-next-line
  }, [input])

  console.log("token2", localStorage.getItem("token"))
  return {
    state,
    fetchData
  };

};


export const useFetchPut = (endPoint, input) => {

  // console.log(method)
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
      // if (data.token) {
      //   localStorage.setItem("token", data.token);
      // }
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
    if (!input) {
      fetchData();
    }
    //eslint-disable-next-line
  }, [input])

  console.log("token2", localStorage.getItem("token"))
  return {
    state,
    fetchData
  };

};


// export const useFetchPut = (endPoint, input) => {

//   // console.log(method)
//   const [state, setState] = useState({
//     data: "",
//   });


//   const fetchData = async () => {
//     try {
//       const response = await fetch(`http://localhost:4600/${endPoint}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ""
//         },
//         body: JSON.stringify(input),
//       });
//       const data = await response.json();
//       localStorage.setItem("token", data.token);
//       setState({
//         data,
//       });

//     } catch (error) {
//       setState({
//         data: "",
//       });
//     }
//   };

//   useEffect(() => {
//     if (!endPoint) {
//       return
//     }
//     fetchData();
//   }, [])

//   console.log("token2", localStorage.getItem("token"))
//   return {
//     state,
//     fetchData
//   };

// };



// import { useEffect, useState } from "react";

// export const useFetchGet = async (endPoint) => {
//   try {
//     const response = await fetch(`http://localhost:4600/"${endPoint}`, {
//       headers: {
//         "Authentication": localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ""
//       }
//     });
//     const data = await response.json();
//     console.log("data: ", data);
//     return data
//   } catch (error) {
//     console.log("Error: " + error);
//   }
// };

// export const useFetchPost = (endPoint, input) => {


//   const [state, setState] = useState({
//     data: "",
//   });

//   const fetchData = async () => {
//     try {
//       const response = await fetch(`http://localhost:4600/${endPoint}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authentication": localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ""
//         },
//         body: JSON.stringify(input),
//       });
//       const data = await response.json();
//       localStorage.setItem("token", data.token);
//       setState({
//         data,
//       });

//     } catch (error) {
//       setState({
//         data: "",
//       });
//     }
//   };

//   useEffect(() => {
//     if (!endPoint) {
//       return
//     }
//     fetchData();
//     //eslint-disable-next-line
//   }, [])

//   return {
//     state,
//     fetchData
//   };
// };    

