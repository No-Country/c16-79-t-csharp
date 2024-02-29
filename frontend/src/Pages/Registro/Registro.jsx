import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useFetchPost } from '../../Helpers/useFetch';
import { useNavigate } from 'react-router-dom';


export const Registro = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  })

  //agrego un use state para guardar la segunda repeticion de la pass y poder  compararla con el input anterior.
  const [repPass, setRepPass] = useState("")

  const {fetchData}  = useFetchPost("api/UserAccount/register", input);

  const actualizarDatos = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }


  const navigate = useNavigate();

  // Argentina1!
  const handleSubmit = async (event) => {
    event.preventDefault();
    //verificacion de que las pass coinciden 
    if(input.password !== repPass){
      alert("las contrasenas deben ser iguales")
      return
    }else{
      try {
        await fetchData();   
        navigate("/login");
      } catch (error) {
        console.error("Error fetching data:", error);  
      }
    }
  };

  return (
    <div>
      {' '}
      <Card className="max-w-sm">
        <form className="flex flex-col gap-4" onSubmit={e => handleSubmit(e)}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
              onChange={actualizarDatos}
              value={input.email}
              name="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              required
              shadow
              onChange={actualizarDatos}
              value={input.password}
              name="password"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput id="repeat-password" type="password" required shadow
            onChange={(e) => setRepPass(e.target.value)}/>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};


