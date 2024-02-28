import { Button, Toast } from "flowbite-react";
import { useState } from "react";
import { HiFire } from "react-icons/hi";

export const ToastAgenda = () => {
  const [showToast, setShowToast] = useState(false);
  return (
    <>
      <div className="flex justify-center">
        <div className="flex space-y-4">
          <Button onClick={() => setShowToast((state) => !state)}>
            Agendar
          </Button>
          {showToast && (
            <Toast className="fixed top-20 right-5 bg-purple-100">
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                <HiFire className="h-5 w-5" />
              </div>
              <div className="ml-3 text-sm font-normal">
                Cita agendada con exito!
              </div>
              <Toast.Toggle onDismiss={() => setShowToast(false)} />
            </Toast>
          )}
        </div>
      </div>
    </>
  );
};
