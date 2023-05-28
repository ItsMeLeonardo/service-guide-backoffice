import CancelIcon from "@/icons/CancelIcon";
import EmptyPageIcon from "@/icons/EmptyPageIcon";
import RefreshIcon from "@/icons/RefreshIcon";
import TrashIcon from "@/icons/TrashIcon";
import React from "react";

export default function FileItem() {
  return (
    <div className="flex gap-3 items-center rounded-lg bg-white p-2 px-2.5">
      <span className="w-10 text-2xl aspect-square flex items-center justify-center bg-neutral-100 rounded-lg">
        <EmptyPageIcon />
      </span>

      <div className="flex-grow text-xs flex flex-col">
        <span className="font-bold">Nombre del archivo</span>
        <span className="text-gray-400">200kb</span>
      </div>

      <div className="flex gap-1">
        <button className="flex p-2 rounded-lg hover:bg-blue-50 text-blue-700">
          <RefreshIcon />
        </button>
        <button className="flex p-2 rounded-lg hover:bg-orange-50 text-orange-500">
          <CancelIcon />
        </button>
        <button className="flex p-2 rounded-lg hover:bg-red-50 text-red-500">
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}
