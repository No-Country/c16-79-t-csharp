import { Button, Card, Label, TextInput, Tooltip } from 'flowbite-react';
import { useState } from 'react';
import { useFetchPost } from '../../Helpers/useFetch';
import { useNavigate } from 'react-router-dom';


export const Registro = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  })


  const [errors, setErrors] = useState({})
   // const [focused, setFocused] = useState(false);
  //agrego un use state para guardar la segunda repeticion de la pass y poder  compararla con el input anterior.
  const [repPass, setRepPass] = useState("")
  // const method = "POST"
  const { fetchData } = useFetchPost("api/UserAccount/register", input);

  const validate = (input) => {
    let errors = {}

    if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(input.email)) {
      errors.email = "Email inválido"
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(input.password)) {
      errors.password = "Password inválido"
    }

    return errors
  }

  const actualizarDatos = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }



  const navigate = useNavigate();

  // Argentina1!
  const handleSubmit = async (event) => {
    event.preventDefault();
    //verificacion de que las pass coinciden 
    if (input.password !== repPass) {
      alert("las contrasenas deben ser iguales")
      return
    } else {
      try {
        await fetchData();
        navigate("/login");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };


  return (
    <div className="container mx-auto my-20 max-w-7xl">
      {' '}
      <Card className="max-w-sm mx-auto">
        <form className="flex flex-col gap-4" onSubmit={e => handleSubmit(e)}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              placeholder="name@mail.com"
              required
              onChange={actualizarDatos}
              value={input.email}
              name="email"

            />

            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Contraseña" />
            </div>

            <div className='anchoPassword'>
              <Tooltip placement="right" content={
                <div>
                  <h2>Debe tener:</h2>
                  <ul>
                    <li>Una minúscula</li>
                    <li>Una mayúscula</li>
                    <li>Un número</li>
                    <li>Alguno de estos caracteres especiales: @$!%*?&</li>
                    <li>Longitud mínima de 6 caracteres</li>
                  </ul>
                </div>
              } >
                <TextInput
                  id="password"
                  type="password"
                  required
                  shadow
                  onChange={actualizarDatos}
                  value={input.password}
                  name="password"
                />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
              </Tooltip>
            </div>

          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="" value="Repetir contraseña" />
            </div>
            <TextInput id="repeat-password" type="password" required shadow
              onChange={(e) => setRepPass(e.target.value)} />
          </div>
          <Button type="submit" disabled={errors.email || errors.password}> Registrarse</Button>
        </form>
      </Card>
    </div >
  );
};