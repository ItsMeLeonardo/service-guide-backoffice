"use client";
import { useRef, useState } from "react";
import DoubleCheckIcon from "@/icons/DoubleCheck";
import SuggestionIcon from "@/icons/SuggestionIcon";
import MessageIcon from "@/icons/MessageIcon";
import AutomaticallyGeneration from "./AutomaticallyGeneration";
import FreeChat from "./FreeChat";
import { useClickOutside } from "@/hooks/shared/useClickOutside";

type Props = {
  onClose: () => void;
};

export default function AiOptions(props: Props) {
  const { onClose } = props;

  const [freeChatOpen, setFreeChatOpen] = useState(false);

  const openFreeChat = () => setFreeChatOpen(true);
  const closeFreeChat = () => setFreeChatOpen(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    if (freeChatOpen) return;
    onClose();
  };

  useClickOutside(containerRef, handleClose);

  return (
    <>
      <div
        ref={containerRef}
        className="absolute z-10 bg-white shadow-pale right-3 top-14 p-2 w-full max-w-xs rounded-2xl overflow-hidden"
      >
        <AutomaticallyGeneration />
        <button className="w-full p-2 hover:bg-orange-50 hover:text-orange-500 cursor-pointer rounded-lg text-sm flex items-center justify-start gap-2">
          <DoubleCheckIcon className="text-xl" />
          <span>Corregir ortografía</span>
        </button>
        <button className="w-full p-2 hover:bg-pink-50 hover:text-pink-500 cursor-pointer rounded-lg text-sm flex items-center justify-start gap-2">
          <SuggestionIcon className="text-xl" />
          <span>Sugerir cambios</span>
        </button>

        <button
          className="w-full p-2 hover:bg-lime-50 hover:text-lime-500 cursor-pointer rounded-lg text-sm flex items-center justify-start gap-2"
          onClick={openFreeChat}
        >
          <MessageIcon className="text-xl" />
          <span>Chat libre</span>
        </button>
      </div>

      {freeChatOpen && (
        <FreeChat
          onClose={closeFreeChat}
          onSend={(message) => console.log({ message })}
        />
      )}
    </>
  );
}
