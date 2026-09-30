import { EventDetails } from '@/components/event-details'
import { EventGoodies } from '@/components/event-goodies'
import { EventHero } from '@/components/event-hero'
import { EventRsvp } from '@/components/event-rsvp'

export default function Page() {
  return (
    <>
      <EventHero />
      <main>
        <EventDetails />
        <EventGoodies />
        <EventRsvp />
      </main>
      <footer className="border-t px-6 py-8 text-center text-sm text-muted-foreground">
        {"Farmer's Market Party · Saturday, October 24, 2026 · The Stanza Rooftop"}
      </footer>
    </>
  )
}
