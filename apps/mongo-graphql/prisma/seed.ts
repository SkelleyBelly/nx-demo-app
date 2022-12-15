import { PrismaClient, Status } from '../src/generated/prisma';
import {faker} from '@faker-js/faker'
import { ObjectId } from 'bson'

const prisma = new PrismaClient()

async function main() {

  const users = new Array(500_000).fill(undefined).map((_, index) => ({
    id: new ObjectId().toHexString(),
    name: faker.name.fullName(),
    email: faker.internet.email()
  }));

  await prisma.user.createMany({
    data: users,
  })

  console.log("USERS ADDED")

  const jobs = new Array(50).fill(undefined).map((_, index) => ({
    id: new ObjectId().toHexString(),
    title: faker.name.jobTitle()
  }));

  await prisma.job.createMany({
    data: jobs
  })

  console.log("JOBS ADDED")

  const applications = new Array(50_000).fill(undefined).map((_, index) => ({
    candidateId: users[index].id,
    jobId: jobs[Math.floor(index / 1000)].id,
    status: Status.applied
  }))

  await prisma.application.createMany({
    data: applications,
  })

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })