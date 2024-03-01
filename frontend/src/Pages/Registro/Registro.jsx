/* eslint-disable no-undef */
import { Button, Card, Label, TextInput } from "flowbite-react";

export const Registro = () => {
  
  return (
    <div className="container mx-auto my-20 max-w-7xl">
      <Card className="max-w-sm">
        <form className="flex flex-col gap-4" onSubmit={handleForm}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              placeholder="name@flowbite.com"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="" value="Your password" />
            </div>
            <TextInput
              required
              onChange={handleInputChange}
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="" value="Repeat password" />
            </div>
            <TextInput
              required
              onChange={handleInputChange}
              shadow
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};
