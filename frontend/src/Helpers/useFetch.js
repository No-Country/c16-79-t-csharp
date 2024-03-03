import { useState } from "react";

const api_url = import.meta.env.VITE_WEB_API_URL
console.log(api_url)




export const useFetchGet = (endPoint) => {
  const fetchData = async () => {
    try {
      const response = await fetch(`${api_url}/${endPoint}`, {
        headers: { 
        "Authorization" : localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ""
      }});
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

/* Cari - creo un fech solo para el login que setee a la variable de token en el storage */
export const useFetchLogin = (endPoint, input) => {

  const [state, setState] = useState({
    data: "",
  });
 
    const fetchData = async () => {
      try {
        const response = await fetch(`${api_url}/${endPoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",            
            "Authorization" : localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ""
          },
          body: JSON.stringify(input),
        });
        const data = await response.json();
        /* Linea que setea token */
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
    
  return {
   state,
    fetchData
  };
};

/* Cari - Este queda para usar en general - no resetea la variable token */
export const useFetchPost = (endPoint, input) => {

  // console.log(method)
  const [state, setState] = useState({
    data: "",
  });

 
    const fetchData = async () => {
      try {
        const response = await fetch(`${api_url}/${endPoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",            
            "Authorization" : localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ""
          },
          body: JSON.stringify(input),
        });
        const data = await response.json();
        /* Aca se elimina la linea para que el token no pase a estar en blanco */
/*         localStorage.setItem("token", data.token); */
        setState({
          data,
        });

      } catch (error) {
        setState({
          data: "",
        });
      }
    };
  
    
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
        const response = await fetch(`${api_url}/${endPoint}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",            
            "Authorization" : localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ""
          },
          body: JSON.stringify(input),
        });
        const data = await response.json();
        // localStorage.setItem("token", data.token);
        console.log(" responseee ",response)
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

