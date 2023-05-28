import GuideCard from "@/components/GuideCard";

export default function Home() {
  return (
    <div className="h-full ">
      <h2 className="font-serif text-4xl font-bold">Guias de usuario</h2>

      <div className="grid grid-cols-3 gap-4 my-4">
        <GuideCard />
        <GuideCard />
        <GuideCard />
        <GuideCard />
      </div>
    </div>
  );
}
