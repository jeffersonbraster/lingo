import 'dotenv/config'
import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'

import * as schema from '../db/schema'

const sql = neon(process.env.DATABASE_URL!)
// @ts-ignore
const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log('Seeding database...')

    await db.delete(schema.courses)
    await db.delete(schema.userProgress)

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Espanha",
        imageSrc: "/es.svg"
      },
      {
        id: 2,
        title: "Itália",
        imageSrc: "/it.svg"
      },
      {
        id: 3,
        title: "França",
        imageSrc: "/fr.svg"
      },
      {
        id: 4,
        title: "Japão",
        imageSrc: "/jp.svg"
      },
      {
        id: 5,
        title: "Croácia",
        imageSrc: "/hr.svg"
      },
    ])

    console.log('Seeding finished!')
  } catch (error) {
    console.error(error)
    throw new Error('Failed to seed database')
  }
}

main()