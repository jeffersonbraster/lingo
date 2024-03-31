import { NextResponse } from "next/server";

import db from "@/db/drizzle"
import { getIsAdmin } from "@/lib/admin";
import { courses } from "@/db/schema";

export const GET = async () => {
  if (!getIsAdmin()) {
    return new NextResponse("Sem permissão", { status: 401 })
  }

  const data = await db.query.courses.findMany()

  return NextResponse.json(data)
}

export const POST = async (req: Request) => {
  if (!getIsAdmin()) {
    return new NextResponse("Sem permissão", { status: 401 })
  }

  const body = await req.json()

  const data = await db.insert(courses).values({
    ...body
  }).returning()

  return NextResponse.json(data[0])
}