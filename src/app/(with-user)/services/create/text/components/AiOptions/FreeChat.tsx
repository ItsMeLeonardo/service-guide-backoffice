"use client";
import { Textarea } from "flowbite-react";

import Message from "@/components/Message";
import { ArrowLeft } from "@/icons/ArrowLeft";
import SendDiagonalIcon from "@/icons/SendDiagonal";
import { FormEvent } from "react";

type Props = {
  onSend: (message: string) => void;
  onClose: () => void;
};

export default function FreeChat(props: Props) {
  const { onClose, onSend } = props;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const message = formData.get("message") as string;

    if (message.trim()) {
      onSend(message);
    }
  };

  return (
    <aside className="absolute z-10 flex flex-col bg-white shadow-pale right-3 top-14 w-full max-w-xl rounded-2xl overflow-hidden h-[60vh]">
      <header className="w-full flex gap-1 items-center p-2">
        <button
          className="p-2 rounded-full hover:bg-neutral-50"
          onClick={onClose}
        >
          <ArrowLeft width={16} height={16} />
        </button>

        <h5 className="font-semibold">Chat libre</h5>
      </header>
      <div className="flex-grow flex flex-col w-full overflow-auto">
        <Message
          avatar="https://i.pinimg.com/236x/1b/f2/14/1bf214f782a995130b9daa5234ff9d1c.jpg"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur alias quasi eligendi reiciendis explicabo. Accusamus adipisci tempore animi maiores neque itaque facilis velit illum. Culpa deleniti molestiae corporis libero iusto.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur alias quasi eligendi reiciendis explicabo. Accusamus adipisci tempore animi maiores neque itaque facilis velit illum. Culpa deleniti molestiae corporis libero iusto.
          "
        />
        <Message
          avatar="https://i.pinimg.com/236x/1b/f2/14/1bf214f782a995130b9daa5234ff9d1c.jpg"
          message="Hola, ¿cómo estás?"
          self
        />
      </div>
      <form className="flex gap-2 items-end p-2" onSubmit={handleSubmit}>
        <Textarea
          placeholder="Enviar mensaje"
          rows={1}
          name="message"
          className="text-xs"
        />

        <button
          type="submit"
          className="p-2.5 text-lg bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 rounded-full"
        >
          <SendDiagonalIcon />
        </button>
      </form>
    </aside>
  );
}
