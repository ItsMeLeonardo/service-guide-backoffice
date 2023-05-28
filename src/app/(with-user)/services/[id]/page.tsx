import GuideCard from "@/components/GuideCard";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <div className="pr-2">
      <header className="flex justify-between items-center py-1">
        <h2 className="font-serif text-4xl font-bold">Guias de usuario</h2>
        <Link
          href="/services/create"
          className="px-4 py-1 rounded-full ring-1 ring-orange-500"
        >
          <span className="text-xs text-orange-500">Crear guia</span>
        </Link>
      </header>

      <div className="grid grid-cols-3 gap-4 my-4">
        <GuideCard />
        <GuideCard />
        <GuideCard />
        <GuideCard />
      </div>
    </div>
  );
}
