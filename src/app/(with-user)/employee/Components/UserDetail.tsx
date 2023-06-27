"use client";
import Avatar from "@/components/Avatar";
import { Employee } from "@/domain/employee/client";
import AddIcon from "@/icons/AddIcon";
import CallIcon from "@/icons/CallIcon";
import MoreIcon from "@/icons/MoreIcon";
import SmsEditIcon from "@/icons/SmsEditIcon";
import { Button, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type Props = {
  employee?: Employee | null;
  onSubmit: (data: Employee) => void;
};

export default function UserDetail(props: Props) {
  const { employee } = props;

  const [isEditing, setIsEditing] = useState(!employee);

  const { register, handleSubmit, watch, setValue } = useForm<Employee>({
    defaultValues: employee ?? undefined,
  });

  useEffect(() => {
    if (!employee) {
      setValue("name", "");
      setValue("jobTitle", "");
      setValue("email", "");
      setValue("phone", "");
      setValue("salary", 0);
      setValue("birthDate", "");
      setValue("experience", 0);
      setValue("address", "");
      setIsEditing(true);
      return;
    }
    setIsEditing(false);
    setValue("name", employee.name);
    setValue("jobTitle", employee.jobTitle);
    setValue("email", employee.email);
    setValue("phone", employee.phone);
    setValue("salary", employee.salary);
    setValue("birthDate", employee.birthDate);
    setValue("experience", employee.experience);
    setValue("address", employee.address);
  }, [employee, setValue]);

  const onSubmit = (data: Employee) => {
    const prevEmployee = employee ?? {
      id: crypto.randomUUID(),
    };
    const newEmployee = {
      ...prevEmployee,
      ...data,
    };
    props.onSubmit(newEmployee);
    setIsEditing(false);
  };

  const nameWatch = watch("name");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full flex items-center flex-col gap-4 p-4"
    >
      <header className="flex flex-col items-center">
        <Avatar
          name={isEditing ? nameWatch : employee?.name}
          src={employee?.avatar}
          size={80}
        />

        {isEditing ? (
          <TextInput
            placeholder="Nombre del empleado"
            className="my-2"
            {...register("name", {
              required: true,
            })}
          />
        ) : (
          <h4 className="text-xl font-bold">{employee?.name}</h4>
        )}

        {isEditing ? (
          <TextInput
            placeholder="Cargo"
            className="my-2"
            {...register("jobTitle", {
              required: true,
            })}
          />
        ) : (
          <span className="text-sm text-gray-400">
            <span className="text-sm font-bold">Cargo:</span>{" "}
            {employee?.jobTitle}
          </span>
        )}
      </header>
      {!isEditing && (
        <div className="flex gap-8 items-start">
          <button className="flex flex-col gap-2 items-center justify-center text-gray-400 hover:text-indigo-400">
            <span className="flex items-center text-xl justify-center p-1.5 border border-gray-200 rounded-full">
              <AddIcon />
            </span>
            <span className="text-xs">Actividad</span>
          </button>
          <button className="flex flex-col gap-2 items-center justify-center text-gray-400 hover:text-indigo-400">
            <span className="flex items-center text-xl justify-center p-1.5 border border-gray-200 rounded-full">
              <SmsEditIcon />
            </span>
            <span className="text-xs">Email</span>
          </button>
          <button className="flex flex-col gap-2 items-center justify-center text-gray-400 hover:text-indigo-400">
            <span className="flex items-center text-xl justify-center p-1.5 border border-gray-200 rounded-full">
              <CallIcon />
            </span>
            <span className="text-xs">Llamar</span>
          </button>
          <button className="flex flex-col gap-2 items-center justify-center text-gray-400 hover:text-indigo-400">
            <span className="flex items-center text-xl justify-center p-1.5 border border-gray-200 rounded-full">
              <MoreIcon />
            </span>
            <span className="text-xs">Opciones</span>
          </button>
        </div>
      )}
      {employee && !isEditing && (
        <div className="w-full grid grid-cols-2 max-w-[300px] gap-2">
          <button className="w-full p-3 text-indigo-50 bg-indigo-700 text-sm rounded-lg">
            Enviar Alerta
          </button>
          <button
            className="w-full p-3 bg-indigo-50 text-indigo-700 text-sm rounded-lg"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Editar
          </button>
        </div>
      )}

      {employee && isEditing && (
        <button
          className="p-3 px-8 bg-pink-50 text-pink-500 text-sm rounded-lg"
          onClick={() => {
            setIsEditing(false);
          }}
        >
          Cancelar
        </button>
      )}
      <section className="w-full px-4 pl-8">
        <header className="w-full text-center mb-2">
          <h4 className="font-bold">Información del empleado</h4>
        </header>
        <div className="grid grid-cols-2 gap-2 mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">Email</span>
              {isEditing ? (
                <TextInput
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                />
              ) : (
                <span className="text-base text-gray-700 w-full max-w-[22ch] overflow-hidden whitespace-nowrap text-ellipsis">
                  <a href="mailto:anna@gmail.com">{employee?.email}</a>
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">
                Teléfono <span className="text-gray-500">(Celular)</span>
              </span>
              {isEditing ? (
                <TextInput
                  type="tel"
                  {...register("phone", {
                    required: true,
                  })}
                />
              ) : (
                <span className="text-base text-gray-700">
                  <a href="tel:+51999999999">
                    {employee?.phone || "No registrado"}
                  </a>
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">
                Salario <span className="text-gray-500">(Mensual)</span>
              </span>
              {isEditing ? (
                <TextInput
                  type="number"
                  {...register("salary", {
                    required: true,
                  })}
                />
              ) : (
                <span className="text-base text-gray-700">
                  S/. {employee?.salary}.00
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">Fecha de nacimiento</span>
              {isEditing ? (
                <TextInput
                  type="date"
                  {...register("birthDate", {
                    required: true,
                  })}
                />
              ) : (
                <span className="text-base text-gray-700">
                  {employee?.birthDate &&
                    new Date(employee?.birthDate).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">
                Experiencia <span className="text-gray-500">(Años)</span>
              </span>
              {isEditing ? (
                <TextInput
                  type="number"
                  {...register("experience", {
                    required: true,
                  })}
                />
              ) : (
                <span className="text-base text-gray-700">
                  {employee?.experience}{" "}
                  <span className="text-gray-500">años</span>
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">
                Dirección <span className="text-gray-500">(Domicilio)</span>
              </span>
              {isEditing ? (
                <TextInput
                  type="text"
                  {...register("address", {
                    required: true,
                  })}
                />
              ) : (
                <span className="text-base text-gray-700">
                  {employee?.address || "No registrado"}
                </span>
              )}
            </div>
            {isEditing && (
              <Button fullSized type="submit" gradientDuoTone="purpleToBlue">
                <span className="text-xs">Guardar</span>
              </Button>
            )}
          </div>
        </div>
      </section>
    </form>
  );
}
