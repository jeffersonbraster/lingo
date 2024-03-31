import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2djZwgVc8uNZ4Qzt9HqiwbNYuH8"
]

export const getIsAdmin = () => {
  const { userId } = auth()

  if (!userId) return false

  return adminIds.indexOf(userId) !== -1
}