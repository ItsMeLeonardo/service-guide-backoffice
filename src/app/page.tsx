"use client";
import { TextInput } from "flowbite-react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      <form className="max-w-[400px] w-full flex flex-col gap-4">
        <header className="text-lg font-bold text-center">
          Iniciar sesión
        </header>
        <TextInput placeholder="Usuario" />
        <TextInput placeholder="Contraseña" />
        <Link
          href="/home"
          className="py-2 w-full bg-orange-100 ring-1 ring-orange-400 text-orange-500 text-center rounded-lg"
        >
          Login
        </Link>
      </form>
    </div>
  );
}
