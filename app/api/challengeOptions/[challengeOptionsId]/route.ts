import { NextResponse } from "next/server"
import db from "@/db/drizzle"
import { challengeOptions } from "@/db/schema"
import { eq } from "drizzle-orm"
import { getIsAdmin } from "@/lib/admin"


export const GET = async (req: Request, { params }: { params: { challengeOptionsId: number } }) => {
  if (!getIsAdmin()) {
    return new NextResponse("Sem permissão", { status: 401 })
  }

  const data = await db.query.challengeOptions.findFirst({
    where: eq(challengeOptions.id, params.challengeOptionsId)
  })

  return NextResponse.json(data)
}

export const PUT = async (req: Request, { params }: { params: { challengeOptionsId: number } }) => {
  if (!getIsAdmin()) {
    return new NextResponse("Sem permissão", { status: 401 })
  }

  const body = await req.json()

  const data = await db.update(challengeOptions).set({
    ...body
  }).where(eq(challengeOptions.id, params.challengeOptionsId)).returning()

  return NextResponse.json(data[0])
}

export const DELETE = async (req: Request, { params }: { params: { challengeOptionsId: number } }) => {
  if (!getIsAdmin()) {
    return new NextResponse("Sem permissão", { status: 401 })
  }

  const data = await db.delete(challengeOptions).where(eq(challengeOptions.id, params.challengeOptionsId)).returning()

  return NextResponse.json(data[0])
}