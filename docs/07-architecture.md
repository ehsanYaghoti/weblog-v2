# Architecture

## Overview

Weblog v2 is a full-stack web application consisting of three independent applications:

- Public Website
- Admin Dashboard
- Backend API

The applications are developed independently but share the same business domain.

---

## Project Structure

```
weblog-v2/
│
├── docs/
│
├── frontend/
│   ├── website/      # Next.js
│   └── admin/        # React + Vite
│
└── backend/
    └── api/          # ASP.NET Core Web API
```

---

## Technology Stack

### Public Website

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI
- TanStack Query
- Zustand
- React Hook Form
- Zod

### Admin Dashboard

- React 19
- Vite
- TypeScript
- Tailwind CSS
- Shadcn UI
- TanStack Query
- TanStack Table
- Zustand
- React Hook Form
- Zod
- ApexCharts

### Backend

- ASP.NET Core
- Entity Framework Core
- SQL Server

---

## Architecture Principles

The project follows these principles:

- Type safety first.
- Feature-driven development.
- Reusable UI components.
- Separation of concerns.
- Mobile-first responsive design.
- Accessibility by default.
- Clean and maintainable code.
- Scalable project structure.

---

## Frontend Architecture

The frontend applications follow a hybrid folder structure.

- Shared UI components
- Feature modules
- Shared hooks
- Shared utilities
- Shared types

Example:

```
src/

components/
features/
hooks/
lib/
services/
types/
utils/
styles/
```

---

## State Management

### Client State

- Zustand

Examples:

- Theme
- Sidebar
- Authentication state (if needed)
- UI preferences

### Server State

- TanStack Query

Examples:

- Articles
- Users
- Comments
- Categories
- Dashboard statistics

---

## Forms

- React Hook Form
- Zod validation

---

## Authentication

Authentication strategy:

- JWT Access Token
- Refresh Token
- OAuth (Google, GitHub) *(planned)*

---

## API

The frontend communicates with the backend through REST APIs.

Future versions may evaluate GraphQL if required.

---

## Database

Database design will follow relational principles.

ORM:

- Entity Framework Core

Database:

- SQL Server

---

## Development Standards

- TypeScript Strict Mode
- ESLint
- Prettier
- Conventional Commits
- Git Feature Branch Workflow
- Responsive Design
- WCAG Accessibility Guidelines
