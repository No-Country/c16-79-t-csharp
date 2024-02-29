import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useFetchPost } from '../../Helpers/useFetch';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const [input, setInput] = useState(
    {
      email: "",
      password: "",
    }
  )  
  const actualizarDatos = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const {fetchData}  = useFetchPost("api/UserAccount/login", input);
  const navigate = useNavigate()


  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await fetchData()
      console.log(response)
      navigate("/");
    } catch (error) {
      console.log(error)
    }
  } 


  return (
    <div>
      {" "}
      <Card className="max-w-sm">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
              name="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput 
            id="password1" 
            type="password" 
            required 
            onChange={actualizarDatos}
            name="password"/>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

