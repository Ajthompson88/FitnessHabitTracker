# 🏃‍♂️ Get Back On Track

<!-- Badges: Build / GraphQL / License / Coverage -->

[![Build Status](...)](...) [![GraphQL](...)](...) [![License: MIT](...)](...)

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)

   * [Prerequisites](#prerequisites)
   * [Installation](#installation)
   * [Configuration](#configuration)
5. [Usage](#usage)

   * [Running Locally](#running-locally)
   * [Available Scripts](#available-scripts)
6. [GraphQL API](#graphql-api)

   * [Authentication](#authentication)
   * [Queries](#queries)
   * [Mutations](#mutations)
7. [Folder Structure](#folder-structure)
8. [Environment Variables](#environment-variables)
9. [Testing](#testing)
10. [Deployment](#deployment)
11. [Roadmap](#roadmap)
12. [Contributing](#contributing)
13. [License](#license)
14. [Contact](#contact)

---

## Project Overview

A full‑stack Fitness & Habit Tracker that lets users create and log habits, track streaks, and visualize completion rates. Powered by MongoDB Atlas, Apollo Server (GraphQL), and React + Apollo Client.

## Features

* **User Auth**: Signup, login, JWT‑protected routes
* **Habit CRUD**: Create, update, delete habits with recurrence & targets
* **Logging**: Timestamped entries for each habit occurrence
* **Analytics**: Streak calculation, completion percentages
* **Future**: Email/push reminders, mobile‑responsive UI

## Tech Stack

| Layer      | Technology                |
| ---------- | ------------------------- |
| Database   | MongoDB Atlas + Mongoose  |
| API        | Node.js, Express, Apollo  |
| Auth       | bcrypt, JSON Web Tokens   |
| Frontend   | React, Apollo Client, TS  |
| Styling    | Tailwind CSS (optional)   |
| Deployment | Render (API), Vercel (UI) |

---

## Getting Started

### Prerequisites

Ensure you have the following installed before you begin:

* Node.js (v14 or higher)
* npm or Yarn
* A MongoDB Atlas account with a connection URI

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repo-url>
   cd get-back-on-track
   ```
2. **Install server dependencies:**

   ```bash
   cd server
   npm install
   ```
3. **Install client dependencies:**

   ```bash
   cd ../client
   npm install
   ```

### Configuration

1. Copy the `.env.example` file in both `/server` and `/client` directories to `.env`.
2. Fill in the required values:

   ```env
   # server/.env
   MONGO_URI=your_mongodb_atlas_uri
   JWT_SECRET=your_jwt_secret

   # client/.env
   REACT_APP_GRAPHQL_URI=http://localhost:4000/graphql
   ```

## Usage

### Running Locally

1. **Start the backend:**

   ```bash
   cd server
   npm run dev
   ```
2. **Start the frontend:**

   ```bash
   cd client
   npm start
   ```

### Available Scripts

* **Server**

  * `npm run dev` — Run the server with hot‑reload (ts-node-dev)
  * `npm run build` — Compile TypeScript to JavaScript
  * `npm test` — Run backend tests (Jest)
* **Client**

  * `npm start` — Run React development server
  * `npm run build` — Create production build
  * `npm test` — Run frontend tests (React Testing Library)

## GraphQL API

### Authentication

Use the `signup(username, email, password)` and `login(email, password)` mutations to receive a JWT. Include the token in the `Authorization` header for protected operations:

```
Authorization: Bearer <JWT_TOKEN>
```

### Queries

* `me` — Get current user profile and habits
* `habits` — List all habits for the authenticated user
* `habit(id: ID!)` — Fetch details for a specific habit
* `logs(habitId: ID!, from: String, to: String)` — Retrieve logs within a date range

### Mutations

* `createHabit(name, description, frequency, targetCount)` — Add a new habit
* `updateHabit(id, name, description, frequency, targetCount)` — Modify an existing habit
* `deleteHabit(id)` — Remove a habit by ID
* `logHabit(habitId, timestamp, count)` — Record one or more occurrences

## Folder Structure

```
/root
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── connection.ts      # MongoDB Atlas connection
│   │   ├── models/
│   │   │   ├── User.ts
│   │   │   ├── Habit.ts
│   │   │   └── HabitLog.ts
│   │   ├── graphql/
│   │   │   ├── typeDefs.ts       # GraphQL schema definitions
│   │   │   └── resolvers.ts      # Resolver implementations
│   │   ├── utils/
│   │   │   └── auth.ts           # JWT auth middleware
│   │   └── index.ts              # Express + Apollo Server setup
│   ├── .env                      # Env vars: MONGO_URI, JWT_SECRET
│   └── package.json
└── client/
    ├── src/
    │   ├── apollo/
    │   │   └── client.ts         # Apollo Client initialization
    │   ├── components/
    │   │   ├── HabitList.tsx
    │   │   ├── HabitForm.tsx
    │   │   ├── LogForm.tsx
    │   │   └── Dashboard.tsx
    │   ├── pages/
    │   │   ├── Home.tsx
    │   │   ├── Login.tsx
    │   │   └── Signup.tsx
    │   ├── App.tsx
    │   └── index.tsx
    ├── .env                      # Env var: REACT_APP_GRAPHQL_URI
    └── package.json
```

## Environment Variables

| Variable                | Description                            |
| ----------------------- | -------------------------------------- |
| `MONGO_URI`             | MongoDB Atlas connection string        |
| `JWT_SECRET`            | Secret for signing JSON Web Tokens     |
| `REACT_APP_GRAPHQL_URI` | URL of the GraphQL endpoint (frontend) |

## Testing

Run unit and integration tests:

```bash
# Backend tests
cd server
npm test

# Frontend tests
cd client
npm test
```

## Deployment

1. **Backend:** Connect the `server/` repo to Render as a Web Service. Use `render.yaml` or UI to configure:

   ```yaml
   services:
     - type: web
       name: get-back-on-track-api
       env: node
       buildCommand: npm install && npm run build
       startCommand: npm run start
       regions: ["ewr"]
   ```
2. **Frontend:** Deploy the `client/` app to Vercel or Netlify by connecting the GitHub repo and specifying the build folder (`build`).

## Roadmap

* Real‑time reminders via email or push notifications
* GraphQL Subscriptions for live updates
* Role‑based access control & admin dashboard
* Mobile‑optimized UI

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Contact

Created by \[Your Name] – \[[your.email@example.com](mailto:your.email@example.com)] – [@yourhandle](https://twitter.com/yourhandle)
