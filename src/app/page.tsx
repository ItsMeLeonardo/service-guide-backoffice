"use client";
import { Button, TextInput } from "flowbite-react";

export default function Home() {
  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      <form className="max-w-[400px] w-full flex flex-col gap-4">
        <header className="text-lg font-bold text-center">
          Iniciar sesión
        </header>
        <TextInput placeholder="Usuario" />
        <TextInput placeholder="Contraseña" />
        <Button color="purple">Login</Button>
      </form>
    </div>
  );
}
