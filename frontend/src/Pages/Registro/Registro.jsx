import { Button, Card, Label, TextInput } from "flowbite-react";

export const Registro = () => {
  return (
    <div>
      {" "}
      <Card className="max-w-sm">
        <form className="flex flex-col gap-4">
          
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput id="password2" type="password" required shadow />
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
