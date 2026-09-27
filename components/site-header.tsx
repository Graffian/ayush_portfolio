import Nav from "@/components/nav";

export default function SiteHeader() {
  return (
    <header className="mb-10 sm:mb-12">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl">
          Ayushkant Behera
        </h1>
        <p className="text-sm text-muted sm:text-base">20 y/o (unc)</p>
      </div>
      <p className="mt-1 text-base text-muted sm:mt-2 sm:text-lg">
        Full-stack developer &amp; AI agent engineer.
      </p>
      <Nav />
    </header>
  );
}
