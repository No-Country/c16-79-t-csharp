import { useState } from "react";

const api_url = import.meta.env.VITE_WEB_API_URL


export const useFetchGet = (endPoint) => {
  const fetchData = async () => {
    try {
      const response = await fetch(`${api_url}/${endPoint}`, {
        headers: { 
        "Authorization" : localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ""
      }});
      const data = await response.json();
      
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
        if(response.status === 200){
        localStorage.setItem("token", data.token);}
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

export const useFetchPatch = (endPoint) => {

  const [state, setState] = useState({
    data: "",
  });

    const fetchDataPatch = async () => {
      try {
        const response = await fetch(`${api_url}/${endPoint}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",            
            "Authorization" : localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ""
          },
          body: {},
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

  return {
   state,
   fetchDataPatch
  };
};