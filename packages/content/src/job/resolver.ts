import { Resolver, Query, Arg, Field, ObjectType } from 'type-graphql'
import { jobData } from './data'

@ObjectType()
export class Job {
  @Field()
  title: string

  @Field()
  description: string

  @Field({ nullable: true })
  href?: string

  @Field()
  company: string

  @Field({ description: 'Job start date' })
  start_date: Date

  @Field({ nullable: true })
  end_date?: Date
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => Job)
export class JobResolver {
  private readonly items: Job[] = jobData

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => Job, { nullable: true })
  async job(@Arg('title') title: string): Promise<Job | undefined> {
    return this.items.find((job) => job.title === title)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => [Job], {
    description: 'Gets all jobs',
  })
  async jobs(): Promise<Job[]> {
    return this.items
  }
}
