import { Event } from '@/model/types'
import { Low } from 'lowdb'
//import { JSONFileSync } from 'lowdb/node'
import { randomUUID } from 'node:crypto'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

export const createEvent = async (event: Event) => {
  console.log(event)

  // db.json file path
  // const __dirname = dirname(fileURLToPath(import.meta.url))
  // console.log(__dirname)
  //const file = join(__dirname, 'db/events.json')

  // Configure lowdb to write data to JSON file
  // const adapter = new JSONFile<Event[]>('db/events.json')
  // const adapter = new JSONFileSync('db/events.json')
  // console.log(adapter)
  // const defaultData: Event[] = []
  // const db = new Low<Event[]>(adapter, defaultData)

  // // Read data from JSON file, this will set db.data content
  // // If JSON file doesn't exist, defaultData is used instead
  // await db.read()

  // // Create and query items using plain JavaScript
  // db.data.push({
  //   ...event,
  //   id: randomUUID(),
  // })
  // const firstPost = db.data[0]

  // // Finally write db.data content to file
  // await db.write()
}

const getEvents = () => {}
