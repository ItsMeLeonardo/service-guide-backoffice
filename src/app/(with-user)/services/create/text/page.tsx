import GuideContentForm from "./components/GuideContentForm";
import GuideDataForm from "./components/GuideDataForm";

export default function Text() {
  return (
    <div className="w-full h-full pr-4 grid grid-cols-[1fr_40%] gap-4">
      <section className="overflow-auto">
        <header className="text-center mb-2">
          <h2 className="font-serif text-xl font-bold">Contenido de la guía</h2>
        </header>
        <aside className="min-h-full w-full bg-white rounded-2xl">
          <GuideContentForm />
        </aside>
      </section>

      <section className="overflow-auto">
        <header className="text-center">
          <h2 className="font-serif text-2xl font-bold">Datos de la guía</h2>
        </header>

        <GuideDataForm />
      </section>
    </div>
  );
}
