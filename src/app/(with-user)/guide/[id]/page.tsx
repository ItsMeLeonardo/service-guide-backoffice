import ContentRenderer from "./components/ContentRenderer";

export default function Guide() {
  return (
    <div className="w-full h-full pr-4 grid grid-cols-[1fr_35%] gap-4">
      <section className="overflow-auto min-h-full w-full bg-white rounded-2xl">
        <ContentRenderer />
      </section>

      <section className="overflow-auto">
        <header className="text-center">
          <h2 className="font-serif text-2xl font-bold">Datos de la guía</h2>
        </header>

        <div className="">datos ...</div>
      </section>
    </div>
  );
}
