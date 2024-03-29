"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import db from "@/db/drizzle"
import { getCourseById, getUserProgress, getUserSubscription } from "@/db/queries"
import { challengeProgress, challenges, userProgress } from "@/db/schema"
import { auth, currentUser } from "@clerk/nextjs"
import { and, eq } from "drizzle-orm"
import { POINTS_TO_REFIL } from "@/constants"



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

  if (!course.units.length || !course.units[0].lessons.length) {
    throw new Error('Curso sem aulas no momento')
  }

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

export const reduceHearts = async (challengeId: number) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const currentUserProgress = await getUserProgress();
  const userSubscription = await getUserSubscription();

  const challenge = await db.query.challenges.findFirst({
    where: eq(challenges.id, challengeId),
  });

  if (!challenge) {
    throw new Error("Challenge not found");
  }

  const lessonId = challenge.lessonId;

  const existingChallengeProgress = await db.query.challengeProgress.findFirst({
    where: and(
      eq(challengeProgress.userId, userId),
      eq(challengeProgress.challengeId, challengeId),
    ),
  });

  const isPractice = !!existingChallengeProgress;

  if (isPractice) {
    return { error: "practice" };
  }

  if (!currentUserProgress) {
    throw new Error("User progress not found");
  }

  if (userSubscription?.isActive) {
    return { error: "subscription" };
  }

  if (currentUserProgress.hearts === 0) {
    return { error: "hearts" };
  }

  await db.update(userProgress).set({
    hearts: Math.max(currentUserProgress.hearts - 1, 0),
  }).where(eq(userProgress.userId, userId));

  revalidatePath('/loja')
  revalidatePath('/estudar')
  revalidatePath('/tarefa')
  revalidatePath('/missoes')
  revalidatePath('/ranking')
  revalidatePath(`tarefa/${lessonId}`)
}

export const refillHearts = async () => {
  const currentUserProgress = await getUserProgress();

  if (!currentUserProgress) {
    throw new Error("User progress not found");
  }

  if (currentUserProgress.hearts === 5) {
    throw new Error("Hearts already full");
  }

  if (currentUserProgress.points < POINTS_TO_REFIL) {
    throw new Error("Not enough points");
  }

  await db.update(userProgress).set({
    hearts: 5,
    points: currentUserProgress.points - POINTS_TO_REFIL,
  }).where(eq(userProgress.userId, currentUserProgress.userId));

  revalidatePath('/loja')
  revalidatePath('/estudar')
  revalidatePath('/tarefa')
  revalidatePath('/missoes')

}