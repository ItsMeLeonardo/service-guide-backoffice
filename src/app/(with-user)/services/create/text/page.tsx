import GuideDataForm from "./components/GuideDataForm";

export default function Text() {
  return (
    <div className="w-full h-full pr-4 grid grid-cols-[1fr_40%] gap-4">
      <aside className="h-full w-full bg-white rounded-2xl">Content ---</aside>

      <div className="overflow-auto">
        <header className="text-center">
          <h2 className="font-serif text-2xl font-bold">Datos de la guía</h2>
        </header>

        <GuideDataForm />
      </div>
    </div>
  );
}
