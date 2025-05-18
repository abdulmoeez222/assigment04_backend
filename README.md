# Portfolio Backend

A RESTful API backend for a personal portfolio website built with Node.js, Express, and MongoDB.

## Features

- CRUD operations for Education, Skills, Projects, and Work Experience
- MongoDB database with Mongoose ODM
- RESTful API design
- CORS enabled for frontend integration

## Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- dotenv for environment variables
- CORS

## Project Structure

```
portfolio-backend/
│
├── controllers/
│   ├── educationController.js
│   ├── skillController.js
│   ├── projectController.js
│   └── experienceController.js
│
├── models/
│   ├── Education.js
│   ├── Skill.js
│   ├── Project.js
│   └── Experience.js
│
├── routes/
│   ├── educationRoutes.js
│   ├── skillRoutes.js
│   ├── projectRoutes.js
│   └── experienceRoutes.js
│
├── config/
│   └── db.js
│
├── .env
├── .gitignore
├── server.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local installation or MongoDB Atlas)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio-backend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

4. Start the server
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

## API Endpoints

### Education
- GET /api/education - Get all education entries
- GET /api/education/:id - Get a specific education entry
- POST /api/education - Create a new education entry
- PUT /api/education/:id - Update an education entry
- DELETE /api/education/:id - Delete an education entry

### Skills
- GET /api/skills - Get all skills
- GET /api/skills/:id - Get a specific skill
- POST /api/skills - Create a new skill
- PUT /api/skills/:id - Update a skill
- DELETE /api/skills/:id - Delete a skill

### Projects
- GET /api/projects - Get all projects
- GET /api/projects/:id - Get a specific project
- POST /api/projects - Create a new project
- PUT /api/projects/:id - Update a project
- DELETE /api/projects/:id - Delete a project

### Work Experience
- GET /api/experiences - Get all experiences
- GET /api/experiences/:id - Get a specific experience
- POST /api/experiences - Create a new experience
- PUT /api/experiences/:id - Update an experience
- DELETE /api/experiences/:id - Delete an experience

## Frontend Integration

This backend is designed to work with a React frontend. To connect:

1. Set up CORS in the backend (already configured for http://localhost:3000)
2. Use Axios or Fetch API in the frontend to make API calls
3. Store the API URL in your frontend's environment variables

## License

MIT 