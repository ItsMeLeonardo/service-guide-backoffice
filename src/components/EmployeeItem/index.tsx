import React from "react";
import Avatar from "../Avatar";

export default function EmployeeItem() {
  return (
    <button className="flex gap-4 items-center w-full p-2 rounded-lg hover:bg-white">
      <Avatar name="John Doe" size={40} />
      <div className="flex flex-col items-start flex-grow ">
        <span className="text-xs font-bold">John Doe</span>
        <span className="text-xs text-gray-400">Servicios especiales</span>
      </div>

      <time>
        <span className="text-xs text-gray-400">Hace 2 horas</span>
      </time>
    </button>
  );
}
