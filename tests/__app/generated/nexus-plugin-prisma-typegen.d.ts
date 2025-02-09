import * as Typegen from '../../../src/typegen/static'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    first?: boolean
    last?: boolean
    before?: boolean
    after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  Bubble: Prisma.Bubble
  User: Prisma.User
  Location: Prisma.Location
  Post: Prisma.Post
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    bubbles: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'members' | 'private'
      ordering: 'id' | 'createdAt' | 'members' | 'private'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'posts' | 'firstName' | 'lastName' | 'location' | 'Bubble' | 'bubbleId' | 'locationId'
      ordering: 'id' | 'posts' | 'firstName' | 'lastName' | 'location' | 'Bubble' | 'bubbleId' | 'locationId'
    }
    locations: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'country' | 'city' | 'User'
      ordering: 'id' | 'country' | 'city' | 'User'
    }
    posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'authors' | 'rating' | 'likes' | 'status'
      ordering: 'id' | 'authors' | 'rating' | 'likes' | 'status'
    }
  },
  Bubble: {
    members: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'posts' | 'firstName' | 'lastName' | 'location' | 'Bubble' | 'bubbleId' | 'locationId'
      ordering: 'id' | 'posts' | 'firstName' | 'lastName' | 'location' | 'Bubble' | 'bubbleId' | 'locationId'
    }
  }
  User: {
    posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'authors' | 'rating' | 'likes' | 'status'
      ordering: 'id' | 'authors' | 'rating' | 'likes' | 'status'
    }
  }
  Location: {
    User: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'posts' | 'firstName' | 'lastName' | 'location' | 'Bubble' | 'bubbleId' | 'locationId'
      ordering: 'id' | 'posts' | 'firstName' | 'lastName' | 'location' | 'Bubble' | 'bubbleId' | 'locationId'
    }
  }
  Post: {
    authors: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'posts' | 'firstName' | 'lastName' | 'location' | 'Bubble' | 'bubbleId' | 'locationId'
      ordering: 'id' | 'posts' | 'firstName' | 'lastName' | 'location' | 'Bubble' | 'bubbleId' | 'locationId'
    }
  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    bubble: 'Bubble'
    bubbles: 'Bubble'
    user: 'User'
    users: 'User'
    location: 'Location'
    locations: 'Location'
    post: 'Post'
    posts: 'Post'
  },
  Mutation: {
    createOneBubble: 'Bubble'
    updateOneBubble: 'Bubble'
    updateManyBubble: 'AffectedRowsOutput'
    deleteOneBubble: 'Bubble'
    deleteManyBubble: 'AffectedRowsOutput'
    upsertOneBubble: 'Bubble'
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneLocation: 'Location'
    updateOneLocation: 'Location'
    updateManyLocation: 'AffectedRowsOutput'
    deleteOneLocation: 'Location'
    deleteManyLocation: 'AffectedRowsOutput'
    upsertOneLocation: 'Location'
    createOnePost: 'Post'
    updateOnePost: 'Post'
    updateManyPost: 'AffectedRowsOutput'
    deleteOnePost: 'Post'
    deleteManyPost: 'AffectedRowsOutput'
    upsertOnePost: 'Post'
  },
  Bubble: {
    id: 'String'
    createdAt: 'DateTime'
    members: 'User'
    private: 'Boolean'
  }
  User: {
    id: 'String'
    posts: 'Post'
    firstName: 'String'
    lastName: 'String'
    location: 'Location'
    Bubble: 'Bubble'
    bubbleId: 'String'
    locationId: 'Int'
  }
  Location: {
    id: 'Int'
    country: 'String'
    city: 'String'
    User: 'User'
  }
  Post: {
    id: 'Int'
    authors: 'User'
    rating: 'Float'
    likes: 'Int'
    status: 'PostStatus'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  Bubble: Typegen.NexusPrismaFields<'Bubble'>
  User: Typegen.NexusPrismaFields<'User'>
  Location: Typegen.NexusPrismaFields<'Location'>
  Post: Typegen.NexusPrismaFields<'Post'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  