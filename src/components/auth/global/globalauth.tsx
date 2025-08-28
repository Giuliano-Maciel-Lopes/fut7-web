import { useAsideAuth } from "@/hooks/context/authaside";
import { AsideRegister } from "../asideRegister/asideregister";
import { Asideloguin } from "../asideloguin.tsx/asideloguin";

export function GlobalAuth() {
  const { loguin, register } = useAsideAuth();

  return (
    <>
      {loguin.isOpen && (
        <Asideloguin
        isOpen={loguin.isOpen}
        onOpenChange={loguin.toggle}

          toggleButton={() => {
            loguin.closed();
            register.open();
          }}
        />
      )}

      {register.isOpen && (
        <AsideRegister
        isOpen={register.isOpen}
        onOpenChange={register.toggle}
        
          toggleButton={() => {
            register.closed();
            loguin.open();
          }}
        />
      )}
    </>
  );
}

