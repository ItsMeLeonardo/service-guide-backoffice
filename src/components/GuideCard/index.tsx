import Link from "next/link";

type Props = {
  services: string[];
  title: string;
  description: string;
  id: number;
};

export default function GuideCard(props: Props) {
  const { services, description, id, title } = props;
  return (
    <aside className="p-4 rounded-lg relative bg-white w-full h-full flex flex-col gap-8">
      <div className="flex gap-2 flex-wrap">
        {services.map((service) => (
          <span
            key={service}
            className="py-1 px-3 text-[.65rem] text-violet-500 uppercase ring-1 self-start ring-violet-500 rounded-full"
          >
            {service}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-2 items-start">
        <Link href={`guide/${id}`}>
          <h3 className="text-2xl font-serif">{title}</h3>
        </Link>
        <p className="text-xs text-gray-400 text-left">{description}</p>
      </div>
    </aside>
  );
}
