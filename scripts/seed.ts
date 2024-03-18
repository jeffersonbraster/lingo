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
    await db.delete(schema.units)
    await db.delete(schema.lessons)
    await db.delete(schema.challenges)
    await db.delete(schema.challengeOptions)
    await db.delete(schema.challengeProgress)

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
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unidade 1",
        description: "Introdução à língua espanhola",
        order: 1
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: "Aula 1",
      },
    ])

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: 'Qual desses é o "homem"?',
      },
    ])

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: "/man.svg",
        correct: true,
        text: "el hombre",
        audioSrc: "/es_man.mp3"
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "/woman.svg",
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3"
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: "/robot.svg",
        correct: false,
        text: "el robot",
        audioSrc: "/es_robot.mp3"
      },
    ])

    console.log('Seeding finished!')
  } catch (error) {
    console.error(error)
    throw new Error('Failed to seed database')
  }
}

main()