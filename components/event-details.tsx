import { CalendarDays, MapPin, Users } from 'lucide-react'

const details = [
  { icon: CalendarDays, label: 'When', value: 'Saturday, October 24, 2026' },
  { icon: MapPin, label: 'Where', value: 'The Stanza Rooftop' },
  { icon: Users, label: "Who it's for", value: 'Creative Souls' },
]

export function EventDetails() {
  return (
    <section aria-labelledby="details-heading" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <h2 id="details-heading" className="sr-only">
        Event details
      </h2>
      <dl className="grid gap-4 md:grid-cols-3">
        {details.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-3 rounded-2xl border bg-card px-6 py-8 text-center"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {label}
            </dt>
            <dd className="font-serif text-xl">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
