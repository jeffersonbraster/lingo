"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import db from "@/db/drizzle"
import { getCourseById, getUserProgress } from "@/db/queries"
import { userProgress } from "@/db/schema"
import { auth, currentUser } from "@clerk/nextjs"



export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth()
  const user = await currentUser()

  if (!userId || !user) {
    throw new Error('Usuário sem permissão ou não encontrado')
  }

  const course = await getCourseById(courseId)

  if (!course) {
    throw new Error('Curso não encontrado')
  }

  // if(!course.units.length || !course.units[0].lessons.length) {
  //   throw new Error('Curso sem aulas no momento')
  // }

  const existingUserProgress = await getUserProgress()

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      userName: user.firstName || "User",
      userImageSrc: user.imageUrl || "/mascot.svg",
    })

    revalidatePath('/cursos')
    revalidatePath('/estudar')

    redirect('/estudar')
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user.firstName || "User",
    userImageSrc: user.imageUrl || "/mascot.svg",
  })

  revalidatePath('/cursos')
  revalidatePath('/estudar')

  redirect('/estudar')
}