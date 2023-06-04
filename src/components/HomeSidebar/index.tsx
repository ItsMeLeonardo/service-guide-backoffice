"use client";

import { Sidebar, ToggleSwitch } from "flowbite-react";
import EmployeeSidebar from "./EmployeeSidebar";
import AdminSidebar from "./AdminSidebar";
import Link from "next/link";
import { useState } from "react";
import { Service } from "@/domain/services/client";

type UserType = "admin" | "employee";

type Props = {
  services: Service[];
};

export default function HomeSidebar({ services }: Props) {
  const [currentUser, setCurrentUser] = useState<UserType>("admin");

  const toggleUser = () => {
    if (currentUser === "admin") {
      setCurrentUser("employee");
    } else {
      setCurrentUser("admin");
    }
  };

  const nextUser = currentUser === "admin" ? "employee" : "admin";

  return (
    <div className=" h-screen w-[var(--sidebar-width)]">
      <Sidebar aria-label="Sidebar with logo branding example">
        <div className="flex justify-center py-4">
          <ToggleSwitch
            label={nextUser}
            color="purple"
            onChange={toggleUser}
            checked={currentUser === "employee"}
          />
        </div>
        <Sidebar.Logo href="#" img="/favicon.ico" imgAlt="Flowbite logo">
          <span className="text-orange-500">JCU In</span>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/home" as={Link}>
              Home
            </Sidebar.Item>
            {currentUser === "employee" ? (
              <EmployeeSidebar />
            ) : (
              <AdminSidebar services={services} />
            )}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
