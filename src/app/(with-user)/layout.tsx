import { ReactNode } from "react";
import TextInput from "@/components/Form/TextInput";
import HomeSidebar from "@/components/HomeSidebar";
import SearchIcon from "@/icons/SearchIcon";
import Avatar from "@/components/Avatar";
import BellIcon from "@/icons/BellIcon";

type Props = {
  children: ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <div className="flex bg-neutral-50">
      <HomeSidebar />
      <div className="w-full h-screen flex flex-col gap-2 pr-4">
        <nav className="flex justify-between items-center w-full h-[var(--header-height)]">
          <div className="max-w-[400px] w-full">
            <TextInput
              className=""
              icon={<SearchIcon />}
              placeholder="Buscar una guía"
              labelClass="bg-white shadow-pale rounded-full"
            />
          </div>

          <div className="flex gap-4 items-center">
            <button className="flex items-center rounded-2xl justify-center p-3 bg-white">
              <BellIcon height={20} width={20} />
            </button>

            <Avatar size={40} name="John Doe" />
          </div>
        </nav>

        <div className="h-[var(--main-content-height)] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
