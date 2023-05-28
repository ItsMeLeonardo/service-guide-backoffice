import Link from "next/link";

export default function GuideCard() {
  return (
    <aside className="p-4 rounded-lg relative bg-white w-full h-full flex flex-col gap-8">
      <span className="py-1 px-3 text-[.65rem] text-violet-500 uppercase ring-1 self-start ring-violet-500 rounded-full">
        Retención
      </span>

      <div className="flex flex-col gap-2 items-start">
        <Link href="guide/ID">
          <h3 className="text-2xl font-serif">Retención de clientes</h3>
        </Link>
        <p className="text-xs text-gray-400 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          aut, ratione doloribus, quod veniam cumque odio similique qui ad
        </p>
      </div>
    </aside>
  );
}
