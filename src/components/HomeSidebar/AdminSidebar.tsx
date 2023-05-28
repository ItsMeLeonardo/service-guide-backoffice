"use client";
import BellIcon from "@/icons/BellIcon";
import { Sidebar } from "flowbite-react";
import Link from "next/link";

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

export default function AdminSidebar() {
  return (
    <>
      <Sidebar.Collapse label="Servicios">
        {services.map((service) => (
          <Sidebar.Item href={service.path} as={Link} key={service.name}>
            <span className="text-sm">{service.name}</span>
          </Sidebar.Item>
        ))}
      </Sidebar.Collapse>
      <Sidebar.Item href="employee" as={Link}>
        Empleados
      </Sidebar.Item>
      <Sidebar.Item icon={() => <BellIcon height={20} width={20} />} href="#">
        Notificaciones
      </Sidebar.Item>
    </>
  );
}
