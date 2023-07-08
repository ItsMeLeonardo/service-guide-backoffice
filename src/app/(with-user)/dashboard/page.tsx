"use client";

import MapView from "@/components/Map";
import { Card, DonutChart, Legend, Title } from "@tremor/react";
import { Checkbox, Table } from "flowbite-react";
import { useMemo, useState } from "react";
import { groupById } from "../../../../utils/grupBy";

type Position = "Auxiliar de amamacén" | "Conductor";

type Apartment =
  | "Transporte de carga"
  | "Mensajería"
  | "Documentos valorados"
  | "Servicios especiales"
  | "Servicio Inhouse"
  | "Servicio aéreo";

type EmployeeData = {
  id: string;
  name: string;
  apartment: Apartment;
  position: Position;
  direction: string;
  evaluation: number;
  salary: number;
  age: number;
};

type EmployeePieData = {
  name: string;
  value: number;
};

const employees: EmployeeData[] = [
  {
    name: "Juan Pérez",
    apartment: "Transporte de carga",
    position: "Auxiliar de amamacén",
    direction: "Av. 28 de Julio 123",
    evaluation: 4,
    salary: 2500,
    id: "1c88dfaf-6018-4232-a068-55230fb643b1",
    age: 25,
  },
  {
    name: "María Rodríguez",
    apartment: "Mensajería",
    position: "Conductor",
    direction: "Calle Belén 456",
    evaluation: 3,
    salary: 2800,
    id: "22bcf81f-4c5f-4398-9976-f5d2bb65e043",
    age: 24,
  },
  {
    name: "Carlos Gómez",
    apartment: "Documentos valorados",
    position: "Auxiliar de amamacén",
    direction: "Av. Grau 789",
    evaluation: 5,
    salary: 3000,
    id: "22c1db80-3cd8-4fed-8c9f-1be5752f5e84",
    age: 27,
  },
  {
    name: "Luisa Torres",
    apartment: "Servicios especiales",
    position: "Conductor",
    direction: "Jirón Junín 101",
    evaluation: 4,
    salary: 2600,
    id: "5b9cd805-d003-42cb-8cd6-2cd996e1f175",
    age: 24,
  },
  {
    name: "Pedro Sánchez",
    apartment: "Servicio Inhouse",
    position: "Auxiliar de amamacén",
    direction: "Av. Salaverry 246",
    evaluation: 3,
    salary: 2400,
    id: "303bc29a-f0a5-46c5-b5f0-5c711d70b314",
    age: 36,
  },
  {
    name: "Ana López",
    apartment: "Servicio aéreo",
    position: "Conductor",
    direction: "Calle Garcilaso 753",
    evaluation: 5,
    salary: 3200,
    id: "ec5b6ac9-4b18-4690-974d-1faddb56467d",
    age: 38,
  },
  {
    name: "Miguel Vega",
    apartment: "Transporte de carga",
    position: "Auxiliar de amamacén",
    direction: "Av. Arequipa 987",
    evaluation: 4,
    salary: 2700,
    id: "f1375b81-7d0d-44aa-9e50-6442baaeef0d",
    age: 36,
  },
  {
    name: "Sofía Mendoza",
    apartment: "Mensajería",
    position: "Conductor",
    direction: "Av. Grau 369",
    evaluation: 3,
    salary: 2500,
    id: "982e6d2b-3ab0-4815-bbfa-1b3ac6546b1c",
    age: 33,
  },
  {
    name: "Diego Castro",
    apartment: "Documentos valorados",
    position: "Auxiliar de amamacén",
    direction: "Av. Javier Prado 1234",
    evaluation: 4,
    salary: 2900,
    id: "f201b3c2-e532-4179-9f8e-ebac8cb2ab57",
    age: 25,
  },
  {
    name: "Laura Ruiz",
    apartment: "Servicios especiales",
    position: "Auxiliar de amamacén",
    direction: "Av. La Marina 567",
    evaluation: 5,
    salary: 3100,
    id: "813f519c-21cf-4cfd-a36c-c02a4bc978b1",
    age: 28,
  },
];

const getPercentage = (number: number, total: number) => (number / total) * 100;

export default function DashboardPage() {
  const [selectedEmployees, setSelectedEmployees] = useState<EmployeeData[]>(
    []
  );
  const employeesToUse = selectedEmployees.length
    ? selectedEmployees
    : employees;

  const totalEmployees = employeesToUse.length;

  const ageAverage = useMemo(() => {
    const sum = employeesToUse.reduce((acc, curr) => acc + curr.age, 0);

    const result = sum / employeesToUse.length;
    return result.toFixed(0);
  }, [employeesToUse]);

  const salaryAverage = useMemo(() => {
    const sum = employeesToUse.reduce((acc, curr) => acc + curr.salary, 0);

    const result = sum / employeesToUse.length;

    return result.toFixed(1);
  }, [employeesToUse]);

  const evaluationAverage = useMemo(() => {
    const sum = employeesToUse.reduce((acc, curr) => acc + curr.evaluation, 0);

    const result = sum / employeesToUse.length;

    return result.toFixed(1);
  }, [employeesToUse]);

  const pieData = useMemo(() => {
    const map = groupById(employeesToUse, (e) => e.position);

    const data: EmployeePieData[] = [];

    map.forEach((value, key) => {
      data.push({
        name: key,
        value: value.length,
      });
    });

    return data;
  }, [employeesToUse]);

  console.log({
    pieData,
  });

  const valueFormatter = (number: number) =>
    `${number}(${getPercentage(number, totalEmployees).toFixed(0)}%)`;

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden pr-2">
      <h2 className="font-serif text-4xl font-bold">Dashboard</h2>

      <div className="py-4 flex gap-4">
        <div className="flex flex-col gap-4">
          <div className="w-32 aspect-video bg-white rounded-lg flex flex-col justify-center items-center p-2">
            <span className="text-2xl font-bold">{totalEmployees}</span>
            <span className="text-xs text-center">Total de empleados</span>
          </div>
          <div className="w-32 aspect-video bg-white rounded-lg flex flex-col justify-center items-center p-2">
            <span className="text-2xl font-bold">{ageAverage}</span>
            <span className="text-xs text-center">Edad promedio</span>
          </div>
          <div className="w-32 aspect-video bg-white rounded-lg flex flex-col justify-center items-center p-2">
            <span className="text-2xl font-bold">{salaryAverage}</span>
            <span className="text-xs text-center">Sueldo promedio</span>
          </div>
          <div className="w-32 aspect-video bg-white rounded-lg flex flex-col justify-center items-center p-2">
            <span className="text-2xl font-bold">{evaluationAverage}</span>
            <span className="text-xs text-center">promedio de evaluación</span>
          </div>
        </div>

        <Card className="max-w-lg">
          <Title>Empleados por posición</Title>
          <DonutChart
            className="mt-6"
            data={pieData}
            category="value"
            index="name"
            valueFormatter={valueFormatter}
            colors={["slate", "violet"]}
          />
          <Legend
            className="mt-3"
            categories={["Auxiliar de amamacén", "Conductor"]}
            colors={["slate", "violet"]}
          />
        </Card>

        <Card className="max-w-lg p-0 overflow-hidden">
          <MapView />
        </Card>
      </div>

      <Table hoverable>
        <Table.Head>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>Nombre</Table.HeadCell>
          <Table.HeadCell>Departamento</Table.HeadCell>
          <Table.HeadCell>Posición</Table.HeadCell>
          <Table.HeadCell>Dirección</Table.HeadCell>
          <Table.HeadCell>Salary</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {employees.map((employee) => (
            <Table.Row
              key={employee.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.HeadCell className="p-4">
                <Checkbox
                  checked={
                    !!selectedEmployees.find((e) => e.id === employee.id)
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedEmployees([...selectedEmployees, employee]);
                    } else {
                      setSelectedEmployees(
                        selectedEmployees.filter((e) => e.id !== employee.id)
                      );
                    }
                  }}
                />
              </Table.HeadCell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {employee.name}
              </Table.Cell>
              <Table.Cell>{employee.apartment}</Table.Cell>
              <Table.Cell>{employee.position}</Table.Cell>
              <Table.Cell>{employee.direction}</Table.Cell>
              <Table.Cell>{employee.salary}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
