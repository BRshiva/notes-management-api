# Notes Management API

A production-ready REST API that allows authenticated users to create and manage personal notes.
The application implements authentication, ownership enforcement, and role-based access control.

This project was developed as part of a backend assignment to demonstrate API design, authentication, and database integration.

---

# Features

* JWT Authentication
* Secure password hashing using **bcrypt**
* Role-Based Access Control (RBAC)
* Notes CRUD operations
* Pagination and search support
* Refresh token mechanism
* Swagger API documentation
* Dockerized setup

---

# Tech Stack

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

### Authentication

* JWT (JSON Web Tokens)

### Tools

* Swagger (OpenAPI)
* Docker

---

# Project Structure

```
src/
 ├── config/
 │     db.js
 │
 ├── middleware/
 │     authMiddleware.js
 │     roleMiddleware.js
 │     errorMiddleware.js
 │
 ├── routes/
 │     authRoutes.js
 │     noteRoutes.js
 │
 └── app.js

server.js
Dockerfile
README.md
.env.example
```

---

# Setup Instructions

## 1. Clone the repository

```
git clone https://github.com/BRshiva/notes-management-api.git
```

## 2. Navigate into the project folder

```
cd notes-management-api
```

## 3. Install dependencies

```
npm install
```

## 4. Configure environment variables

Create a `.env` file in the root directory.

Copy values from `.env.example`.

Example:

```
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/notesdb
JWT_SECRET=your_secret
REFRESH_SECRET=your_refresh_secret
```

## 5. Start the server

```
npm run dev
```

The server will run at:

```
http://localhost:5000
```

---

# API Documentation

Swagger UI is available when the server is running.

Open the following URL in your browser:

```
http://localhost:5000/api-docs
```

You can test all API endpoints directly from Swagger.

---

# API Endpoints

## Authentication

| Method | Endpoint         | Description                   |
| ------ | ---------------- | ----------------------------- |
| POST   | `/auth/register` | Register a new user           |
| POST   | `/auth/login`    | Login user and receive tokens |
| POST   | `/auth/refresh`  | Generate new access token     |

---

## Notes

| Method | Endpoint     | Description                      |
| ------ | ------------ | -------------------------------- |
| GET    | `/notes`     | Get notes for authenticated user |
| POST   | `/notes`     | Create a new note                |
| PUT    | `/notes/:id` | Update an existing note          |
| DELETE | `/notes/:id` | Delete a note                    |

---

# Role-Based Access Control

### User Role

* Can manage only their own notes

### Admin Role

* Can view all notes
* Can delete any note

---

# Example API Requests

## Register User

```
POST /auth/register
```

Request body:

```
{
  "email": "test@example.com",
  "password": "123456"
}
```

---

## Login

```
POST /auth/login
```

Request body:

```
{
  "email": "test@example.com",
  "password": "123456"
}
```

Response example:

```
{
  "accessToken": "JWT_TOKEN",
  "refreshToken": "REFRESH_TOKEN"
}
```

---

## Create Note

```
POST /notes
```

Headers:

```
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Request body:

```
{
  "title": "My First Note",
  "content": "Example content"
}
```

---

# Pagination and Search

Get paginated notes:

```
GET /notes?page=1&limit=10
```

Search notes by title:

```
GET /notes?search=meeting
```

---

# Docker Setup

Build Docker image:

```
docker build -t notes-api .
```

Run container:

```
docker run -p 5000:5000 notes-api
```

---

# Environment Variables

The application requires the following environment variables:

```
PORT
DATABASE_URL
JWT_SECRET
REFRESH_SECRET
```

---

# Author

**Shiva Suman**

Backend project demonstrating REST API design, authentication, and role-based access control.
