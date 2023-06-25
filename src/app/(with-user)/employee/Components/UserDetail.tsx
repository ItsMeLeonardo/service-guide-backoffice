import Avatar from "@/components/Avatar";
import { Employee } from "@/domain/employee/client";
import AddIcon from "@/icons/AddIcon";
import CallIcon from "@/icons/CallIcon";
import MoreIcon from "@/icons/MoreIcon";
import SmsEditIcon from "@/icons/SmsEditIcon";

type Props = {
  employee: Employee;
};

export default function UserDetail({ employee }: Props) {
  return (
    <div className="w-full h-full flex items-center flex-col gap-4 p-4">
      <header className="flex flex-col items-center">
        <Avatar name={employee.name} src={employee.avatar} size={80} />

        <h4 className="text-xl font-bold">{employee.name}</h4>

        <span className="text-sm text-gray-400">
          <span className="text-sm font-bold">Cargo:</span> {employee.jobTitle}
        </span>
      </header>
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
      <div className="w-full grid grid-cols-2 max-w-[300px] gap-2">
        <button className="w-full p-4 text-indigo-50 bg-indigo-700 text-sm rounded-xl">
          Enviar Alerta
        </button>
        <button className="w-full p-4 bg-indigo-50 text-indigo-700 text-sm rounded-xl">
          Editar
        </button>
      </div>

      <section className="w-full px-4 pl-8">
        <header className="w-full text-center mb-2">
          <h4 className="font-bold">Información del empleado</h4>
        </header>
        <div className="grid grid-cols-2 mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">Email</span>
              <span className="text-base text-gray-700 w-full max-w-[22ch] overflow-hidden whitespace-nowrap text-ellipsis">
                <a href="mailto:anna@gmail.com">{employee.email}</a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">
                Teléfono <span className="text-gray-500">(Celular)</span>
              </span>
              <span className="text-base text-gray-700">
                <a href="tel:+51999999999">
                  {employee.phone || "No registrado"}
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">
                Salario <span className="text-gray-500">(Mensual)</span>
              </span>
              <span className="text-base text-gray-700">
                S/. {employee.salary}.00
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">Fecha de nacimiento</span>
              <span className="text-base text-gray-700">
                {new Date(employee.birthDate).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">
                Experiencia <span className="text-gray-500">(Años)</span>
              </span>
              <span className="text-base text-gray-700">
                {employee.experience}{" "}
                <span className="text-gray-500">años</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">
                Dirección <span className="text-gray-500">(Domicilio)</span>
              </span>
              <span className="text-base text-gray-700">
                {employee.address || "No registrado"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
