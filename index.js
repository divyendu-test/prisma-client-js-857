//@ts-check
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const data = await prisma.user.findOne({
    where: {
      id: 'd97227bb-97b6-4a6d-81bf-04322b686165',
    },
  })
  await prisma.$disconnect()
  const data2 = await prisma.user.findOne({
    where: {
      id: 'd97227bb-97b6-4a6d-81bf-04322b686165',
    },
  })
  console.log({ data, data2 })
}
main()
  .catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
