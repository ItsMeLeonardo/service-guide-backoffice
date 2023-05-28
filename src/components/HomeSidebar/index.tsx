"use client";

import { Sidebar } from "flowbite-react";
import EmployeeSidebar from "./EmployeeSidebar";
import AdminSidebar from "./AdminSidebar";
import Link from "next/link";

const userType: "admin" | "employee" = "admin";

export default function HomeSidebar() {
  return (
    <div className=" h-screen w-full max-w-[300px]">
      {/* <div className="shadow-pale w-full h-full"></div> */}
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Logo href="#" img="/favicon.ico" imgAlt="Flowbite logo">
          Flowbite
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/home" as={Link}>
              Home
            </Sidebar.Item>
            {userType === "employee" ? <EmployeeSidebar /> : <AdminSidebar />}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
