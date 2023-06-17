"use client";
import { useState } from "react";
import { Button, Textarea } from "flowbite-react";
import classNames from "classnames";

import AutoFlashIcon from "@/icons/AutoFlash";

export default function AutomaticallyGeneration() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const buttonClasses = classNames(
    "w-full p-2 hover:bg-violet-50 hover:text-violet-500 cursor-pointer rounded-lg text-sm flex items-center justify-start gap-2",
    {
      "bg-violet-50 text-violet-500": open,
    }
  );

  return (
    <div className="w-full flex flex-col gap-2">
      <button className={buttonClasses} onClick={toggle}>
        <AutoFlashIcon className="text-xl" />
        <span>Generación automatica</span>
      </button>
      {open && (
        <form className="flex flex-col gap-2">
          <Textarea
            placeholder="Escribe una descripción del contenido que quieres generar"
            rows={4}
            className="text-sm"
          />

          <Button gradientMonochrome="purple" type="submit" className="text-sm">
            Generar
          </Button>
        </form>
      )}
    </div>
  );
}
