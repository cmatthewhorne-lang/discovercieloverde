export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.7rem] text-zinc-500">
        <span>© {year} Cielo Verde · Built under Nova Forge.</span>
        <span className="text-zinc-600">
          Prototype only. Nothing you enter is stored or shared.
        </span>
      </div>
    </footer>
  );
}
