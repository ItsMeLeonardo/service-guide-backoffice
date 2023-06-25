"use client";

import FreeChat from "@/components/AiOptions/FreeChat";
import AiIcon from "@/icons/AiIcon";
import { useState } from "react";
import { YoptaRenderer } from "yopta-editor-copy";

type Props = {
  data: any;
};

export default function ContentRenderer({ data }: Props) {
  const [showChat, setShowChat] = useState(false);

  return (
    <div>
      {showChat && (
        <FreeChat
          firstMessage="Puedo ayudarte resolviendo dudas sobre el contenido de esta guia."
          onClose={() => {
            setShowChat(false);
          }}
        />
      )}
      <button
        className="p-2 bg-white text-indigo-500 rounded-lg absolute right-3 top-3 z-10 hover:bg-indigo-50 cursor-pointer duration-100"
        onClick={() => {
          setShowChat(true);
        }}
      >
        <AiIcon />
      </button>
      <YoptaRenderer data={data} />
    </div>
  );
}
