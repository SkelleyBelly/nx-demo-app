import { PrismaClient, Status } from '../src/generated/prisma';
import { faker } from '@faker-js/faker'
import { ObjectId } from 'bson'

const prisma = new PrismaClient()

async function main() {

  const users = new Array(250_000).fill(undefined).map((_, index) => ({
    id: new ObjectId().toHexString(),
    name: faker.name.fullName(),
    email: faker.internet.email()
  }));

  const jobs = new Array(10_000).fill(undefined).map((_, index) => ({
    id: new ObjectId().toHexString(),
    title: faker.name.jobTitle()
  }));

  const applications = new Array(50_000).fill(undefined).map((_, index) => {

    const applicationId = new ObjectId().toHexString()

    const candidate = users[index]
    const job = jobs[Math.floor(index / 5)];

    (candidate as any).applications = [{
      id: applicationId,
      jobId: job.id,
      status: Status.applied,
    }]
    
    return {
      id: applicationId,
      jobId: job.id,
      status: Status.applied,
      candidateId: candidate.id,
      candidate: {
        id: candidate.id,
        name: candidate.name
      }
    }
  })

  await prisma.user.createMany({
    data: users,
  })

  console.log("USERS ADDED")

  await prisma.job.createMany({
    data: jobs
  })

  console.log("JOBS ADDED")

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
