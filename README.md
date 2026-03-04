# Notes Management API
A production-ready REST API that allows authenticated users to create and manage personal notes.
The application implements authentication, ownership enforcement, and role-based access control.
This project was developed as part of a backend assignment to demonstrate API design, authentication, and database integration.

# Features
* JWT Authentication
* Secure password hashing using bcrypt
* Role-Based Access Control (RBAC)
* Notes CRUD operations
* Pagination and Search
* Refresh Token mechanism
* Swagger API Documentation
* Dockerized setup

# Tech Stack
Backend Framework
Node.js
Express.js
Database
PostgreSQL
Authentication
JWT (JSON Web Tokens)

Other Tools:-
Swagger (OpenAPI)
Docker

# Project Structure
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

# Setup Instructions
## 1. Clone the Repository
git clone https://github.com/YOUR_USERNAME/notes-management-api.git

## 2. Navigate to Project Folder
cd notes-management-api

## 3. Install Dependencies
npm install

## 4. Create Environment Variables
create a `.env` file in the root folder.
Copy values from `.env.example`.

# Example:
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/notesdb
JWT_SECRET=your_secret
REFRESH_SECRET=your_refresh_secret

## 5. Start the Server
npm run dev
The server will run at:
http://localhost:5000

# API Documentation
Swagger documentation is available when the server is running.

## Open in your browser:
http://localhost:5000/api-docs
This allows you to test all API endpoints directly.

# API Endpoints

## Authentication
POST /auth/register
Register a new user.

POST /auth/login
Login user and receive authentication tokens.

POST /auth/refresh
Generate new access token using refresh token.

## Notes
*GET /notes
*Get notes for authenticated user.

*POST /notes
*Create a new note.

*PUT /notes/:id
*Update an existing note.

*DELETE /notes/:id
*Delete a note.

# Role-Based Access Control

## User Role
Can manage only their own notes.

## Admin Role
Can view all notes and delete any note.

# Example API Requests

## Register User
POST /auth/register
Request Body
{
"email": "[test@example.com](mailto:test@example.com)",
"password": "123456"
}

## Login
POST /auth/login
Request Body
{
"email": "[test@example.com](mailto:test@example.com)",
"password": "123456"
}

Response Example
{
"accessToken": "JWT_TOKEN",
"refreshToken": "REFRESH_TOKEN"
}

## Create Note
POST /notes
Headers
Authorization: Bearer YOUR_ACCESS_TOKEN
Request Body
{
"title": "My First Note",
"content": "Example content"
}

# Pagination and Search
GET /notes?page=1&limit=10
Search notes by title:
GET /notes?search=meeting

# Docker Setup
Build and run using Docker:
docker build -t notes-api .
Docker run -p 5000:5000 notes-api

# Environment Variables
The application requires the following environment variables.

*PORT
*DATABASE_URL
*JWT_SECRET
*REFRESH_SECRET

## Author

Shiva Suman

Backend project demonstrating REST API design, authentication, and role-based access control.
