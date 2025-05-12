enum Frequency {
    DAILY
    WEEKLY
  }
  
  type User {
    _id: ID!
    username: String!
    email: String!
    habits: [Habit!]!
  }
  
  type Habit {
    _id: ID!
    name: String!
    description: String
    frequency: Frequency!
    targetCount: Int
    logs: [HabitLog!]!
  }
  
  type HabitLog {
    _id: ID!
    timestamp: String!    # ISO date
    count: Int!
    habit: Habit!
  }
  
  type AuthPayload {
    token: String!
    user: User!
  }
  
  type Query {
    me: User
    habits: [Habit!]!
    habit(id: ID!): Habit
    logs(habitId: ID!, from: String, to: String): [HabitLog!]!
  }
  
  type Mutation {
    signup(username: String!, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    createHabit(
      name: String!,
      description: String,
      frequency: Frequency!,
      targetCount: Int
    ): Habit!
    updateHabit(
      id: ID!,
      name: String,
      description: String,
      frequency: Frequency,
      targetCount: Int
    ): Habit!
    deleteHabit(id: ID!): Boolean!
    logHabit(
      habitId: ID!,
      timestamp: String,   # defaults to now
      count: Int!
    ): HabitLog!
  }
  