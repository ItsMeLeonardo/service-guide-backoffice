"use client";
import FileItem from "@/components/FileItem";
import CheckboxButton from "@/components/Form/CheckboxButton";
import { TextInput } from "flowbite-react";

const services = [
  {
    name: "Transporte de carga",
  },
  {
    name: "Mensajería",
  },
  {
    name: "Documentos valorados",
  },
  {
    name: "Servicios especiales",
  },
  {
    name: "Servicio Inhouse",
  },
  {
    name: "Servicio aéreo",
  },
];

export default function GuideDataForm() {
  return (
    <form className="mt-4 w-full flex flex-col gap-4">
      <label className="flex flex-col gap-1">
        <span className="text-xs font-bold">Titulo</span>
        <TextInput />
      </label>

      <div className="flex flex-col">
        <span className="text-xs font-bold">Servicios</span>
        <div className="flex gap-2 my-2 w-full overflow-auto p-1">
          {services.map((service) => (
            <CheckboxButton
              className="whitespace-nowrap"
              label={service.name}
              key={service.name}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-xs font-bold">Subir Archivos (opcional)</span>
        <div className="flex flex-col gap-2 my-2 w-full overflow-auto p-1">
          <label className="w-full aspect-video rounded-2xl border border-spacing-4 border-dashed border-gray-200 relative flex items-center justify-center cursor-pointer">
            <div className="flex flex-col gap-2 items-center">
              <picture className="w-20 aspect-square rounded-full overflow-hidden flex bg-orange-50">
                <img src="" alt="" />
              </picture>

              <strong className="text-xs">Arrastra y suelta un archivo</strong>
              <span className="text-xs"> o haz click para seleccionar uno</span>
            </div>
            <input type="file" hidden />
          </label>

          <FileItem />
          <FileItem />
          <FileItem />
          <FileItem />
          <FileItem />
        </div>
      </div>
    </form>
  );
}
