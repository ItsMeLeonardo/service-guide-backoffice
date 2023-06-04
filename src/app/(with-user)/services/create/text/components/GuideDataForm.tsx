"use client";
import FileItem from "@/components/FileItem";
import CheckboxButton from "@/components/Form/CheckboxButton";
import { Spinner, TextInput } from "flowbite-react";
import { useFormContext } from "react-hook-form";
import { FormTextGuide } from "../page";
import { useEffect, useState } from "react";
import { useServices } from "@/hooks/service/useService";

export default function GuideDataForm() {
  const { register, setValue, getValues } = useFormContext<FormTextGuide>();

  const { services, isLoading } = useServices();

  const [files, setFiles] = useState([]);

  useEffect(() => {
    register("services");
  }, [register]);

  const handleServiceChange = (serviceId: number) => {
    const services = getValues("services");
    const exist = services.find((s) => s === serviceId);
    const newServices = exist
      ? services.filter((s) => s !== serviceId)
      : [...services, serviceId];

    setValue("services", newServices);
  };

  return (
    <div className="mt-4 w-full flex flex-col gap-4">
      <label className="flex flex-col gap-1">
        <span className="text-xs font-bold">Titulo</span>
        <TextInput
          {...register("title", {
            required: "Este campo es requerido",
          })}
        />
      </label>

      <div className="flex flex-col">
        <span className="text-xs font-bold">Servicios</span>
        <div className="overflow-auto w-full">
          <div className="flex gap-2 my-2 w-max justify-center items-center p-1">
            {isLoading && <Spinner color="purple" size="xl" />}
            {services.map((service) => (
              <CheckboxButton
                className="whitespace-nowrap"
                label={service.name}
                key={service.id}
                onChange={() => handleServiceChange(service.id)}
              />
            ))}
          </div>
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

          {files.map((file, index) => (
            <FileItem key={index} />
          ))}

          {/*           <FileItem />
          <FileItem />
          <FileItem />
          <FileItem /> */}
        </div>
      </div>
    </div>
  );
}
