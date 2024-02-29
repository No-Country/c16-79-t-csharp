import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useFetchPost } from '../../Helpers/useFetchPost';

export const Registro = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  })
  // const fetchPost = useFetchPost();

  // console.log(input);

  const { state, fetchData } = useFetchPost("api/UserAccount/register", input);
  console.log("state", state)



  const actualizarDatos = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    // setErrors(validate({
    //     ...input,
    //     [e.target.name]: e.target.value
    // }))
    // setDisabled(e.target.value)
  }



  // const actualizarDatos = (campo, valor) => {
  //   setInput((prevdatos) => ({
  //     ...prevdatos,
  //     [campo]: valor,
  //   }));
  // };




  // Argentina1!
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetchData();
      // console.log("Data fetched successfully:", response);

    } catch (error) {
      // console.error("Error fetching data:", error);

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
            <TextInput id="repeat-password" type="password" required shadow />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};


