"use client";
import { TextInput } from "flowbite-react";
import { signIn, useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const { data } = useSession();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);

    setTimeout(() => {
      setError(false);
    }, 3000);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    setLoading(true);
    signIn("credentials", {
      email,
      password,
      callbackUrl: "/home",
      redirect: false,
    })
      .then((result) => {
        console.log({ result });
        if (result?.error) {
          handleError();
        }
        if (result?.ok) {
          router.push("/home");
        }
      })
      .catch((error) => {
        console.log({ error });
        handleError();
      })
      .finally(() => setLoading(false));
  };

  console.log({ data });

  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      <form
        className="max-w-[400px] w-full flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <header className="text-lg font-bold text-center">
          Iniciar sesión
        </header>
        <TextInput name="email" placeholder="example@mail.com" type="email" />
        <TextInput name="password" placeholder="Contraseña" type="password" />
        <button
          type="submit"
          className="py-2 w-full bg-orange-100 ring-1 ring-orange-400 text-orange-500 text-center rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}
