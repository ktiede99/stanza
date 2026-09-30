import { CakeSlice, Cookie, Flower2, Heart, House, Sparkles } from 'lucide-react'

const goodies = [
  { icon: CakeSlice, label: 'Baked goods' },
  { icon: Flower2, label: 'Homegrown flowers' },
  { icon: Sparkles, label: 'Self care items' },
  { icon: Cookie, label: 'Snacks' },
  { icon: House, label: 'Home goods' },
]

export function EventGoodies() {
  return (
    <section aria-labelledby="goodies-heading" className="bg-secondary">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="goodies-heading" className="font-serif text-4xl text-balance md:text-5xl">
            What happens
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Bring 6 handmade goodies to share. Take home 6 handmade goodies.
          </p>
        </div>

        <h3 className="mt-12 text-center text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Goodies can include things like
        </h3>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {goodies.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 rounded-full border bg-card px-5 py-2.5 text-sm font-medium"
            >
              <Icon className="size-4 text-primary" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-12 flex max-w-xl items-center justify-center gap-2 text-center text-lg text-pretty">
          <Heart className="size-5 shrink-0 text-primary" aria-hidden="true" />
          <span>Good vibes, laughter and friendship included with admission.</span>
        </p>
      </div>
    </section>
  )
}
