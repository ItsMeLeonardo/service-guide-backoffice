import EmployeeItem from "@/components/EmployeeItem";
import TextInput from "@/components/Form/TextInput";
import SearchIcon from "@/icons/SearchIcon";

const services = [
  {
    name: "Transporte de carga",
    path: "/services/transporte-de-carga",
  },
  {
    name: "Mensajería",
    path: "/services/mensajeria",
  },
  {
    name: "Documentos valorados",
    path: "/services/documentos-valorados",
  },
  {
    name: "Servicios especiales",
    path: "/services/servicios-especiales",
  },
  {
    name: "Servicio Inhouse",
    path: "/services/servicio-inhouse",
  },
  {
    name: "Servicio aéreo",
    path: "/services/servicio-aereo",
  },
];

export default function Employee() {
  return (
    <section className="grid grid-cols-2 gap-4 h-full overflow-hidden">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="w-full mb-4 flex flex-col gap-4">
          <h2 className="font-serif text-2xl font-bold">Guias de usuario</h2>
          <TextInput
            className=""
            icon={<SearchIcon />}
            placeholder="Buscar Empleado"
            labelClass="bg-white rounded-xl"
          />
          <div className="flex gap-2 w-full items-center overflow-auto">
            <span className="text-xs font-bold sticky left-0 bg-neutral-50 p-2">
              Servicios:
            </span>
            {services.map((service) => (
              <button
                key={service.path}
                className="bg-white rounded-lg py-1 px-4 hover:bg-gray-100 whitespace-nowrap"
              >
                <span className="text-xs">{service.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="h-full flex flex-col overflow-auto">
          <EmployeeItem />
          <EmployeeItem />
          <EmployeeItem />
          <EmployeeItem />
          <EmployeeItem />
          <EmployeeItem />
          <EmployeeItem />
          <EmployeeItem />
          <EmployeeItem />
          <EmployeeItem />
          <EmployeeItem />
          <EmployeeItem />
          <EmployeeItem />
        </div>
      </div>

      <aside className="h-full w-full bg-white rounded-lg "></aside>
    </section>
  );
}
