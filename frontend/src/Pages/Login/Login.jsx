import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useFetchLogin } from '../../Helpers/useFetch';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const [errors, setErrors] = useState({})
  const [input, setInput] = useState(
    {
      email: "",
      password: "",
    }
  )

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

  const { fetchData } = useFetchLogin("api/UserAccount/login", input);
  const navigate = useNavigate()



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetchData()
      navigate("/");
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="container mx-auto my-20 max-w-7xl">
      {" "}
      <Card className="max-w-sm mx-auto">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@mail.com"
              required
              onChange={actualizarDatos}
              name="email"
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Contraseña" />
            </div>
            <TextInput
              id="password1"
              type="password"
              required
              onChange={actualizarDatos}
              name="password" />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          </div>

          <Button type="submit" disabled={errors.email || errors.password}> Iniciar sesión</Button>
        </form>
      </Card>
    </div>
  );
};

