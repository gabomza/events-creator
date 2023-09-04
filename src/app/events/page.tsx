'use client'

import AddEvent from '@/components/events/AddEvent'
import { createEvent } from '@/db/events'
import { Event } from '@/model/types'

export default function Events() {
  
  const saveEvent = async (event: Event) => {
    const result = await createEvent(event)
    console.log(result)
  }

  return (
    <main className="flex min-h-screen flex-col p-6">
      <AddEvent onSave={saveEvent} />
    </main>
  )
}
