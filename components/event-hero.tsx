export function EventHero() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-20 text-center md:py-28">
        <h1 className="font-serif text-5xl leading-tight text-balance md:text-7xl">
          {"Farmer's Market Party"}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-pretty text-primary-foreground/90">
          Bring 6 handmade goodies to share. Take home 6 handmade goodies.
        </p>
        <a
          href="#rsvp"
          className="mt-2 inline-flex items-center rounded-full bg-primary-foreground px-7 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground"
        >
          R.S.V.P. by October 17th
        </a>
      </div>
    </header>
  )
}
