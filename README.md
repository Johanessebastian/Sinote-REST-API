# Todo/Note/Team Management App

This is a backend REST API for a todo/note/team management application built using Express.js and Firebase. The app supports user authentication, task management, and role-based access control.

## Features

- User Registration and Login
- Role-Based Access Control (Team Leader and Team Members)
- Create, Read, Update, and Delete Tasks
- Tasks have names, descriptions, and deadlines
- Team Leaders can assign tasks to Team Members
- Team Members can create tasks for themselves

## Project Structure

project/
│
├── controllers/
│ ├── authController.js
│ ├── taskController.js
│
├── middlewares/
│ ├── authMiddleware.js
│
├── models/
│ ├── userModel.js
│ ├── taskModel.js
│
├── routes/
│ ├── authRoutes.js
│ ├── taskRoutes.js
│
├── db/
│ ├── firebase.js
│
├── utils/
│ ├── validate.js
│
├── .env
├── package.json
├── server.js
└── README.md

markdown
Salin kode

## Getting Started

### Prerequisites

- Node.js
- npm
- Firebase Project

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
Install dependencies:

bash
Salin kode
npm install
Set up Firebase:

Create a Firebase project in the Firebase Console.
Download the service account key JSON file and place it in the db folder.
Update the firebase.js file with your Firebase database URL.
Set up environment variables:

Create a .env file in the root directory and add the following:

makefile
Salin kode
SESSION_SECRET=your-session-secret
Running the Server
To start the server, run:

bash
Salin kode
npm start
The server will run on http://localhost:3000.

API Endpoints
Authentication
Register: POST /auth/register

Request Body: { "name": "your-name", "email": "your-email", "password": "your-password", "role": "team leader" | "team member" }
Response: 201 Created
Login: POST /auth/login

Request Body: { "nameOrEmail": "your-name-or-email", "password": "your-password" }
Response: 200 OK
Logout: POST /auth/logout

Response: 200 OK
Tasks
Create Task: POST /tasks/create

Request Body: { "name": "task-name", "description": "task-description", "deadline": "task-deadline", "assignedTo": "user-id" }
Response: 201 Created
Requires: Team Leader Role
Get Tasks: GET /tasks

Response: 200 OK with a list of tasks assigned to the logged-in user
Update Task: PUT /tasks/update

Request Body: { "taskId": "task-id", "updatedData": { "name": "new-name", "description": "new-description", "deadline": "new-deadline" } }
Response: 200 OK
Delete Task: DELETE /tasks/delete

Request Body: { "taskId": "task-id" }
Response: 200 OK
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Express.js
Firebase
bcryptjs
dotenv
express-session
