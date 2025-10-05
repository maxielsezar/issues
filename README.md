# Issue Tracker Application

A full-stack issue application built with Node.js, Nest, MongoDB, and React. This application to manage and track issues with CRUD operations.

## Features

### Backend
- RESTful API with Nest.js
- MongoDB database with Mongoose ODM
- JWT-based authentication
- Input validation with nest-validator
- Comprehensive error handling
- Text search in issues

### Frontend
- Modern React UI with Vite
- TypeScript for type safety
- Responsive design with Tailwind 
- Create, read, update, and delete issues

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## Installation

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/maxielsezar/issues.git
cd issues
\`\`\`

### 2. Backend Setup

\`\`\`bash
cd backend
npm install
\`\`\`


### 3. Frontend Setup

\`\`\`bash
# From the root directory
cd fronent
npm install
\`\`\`



## Running the Application

### Start the Backend

\`\`\`bash
cd backend
npm run start:dev
\`\`\`

The backend will run on \`http://localhost:3000\`

### Start the Frontend

In a new terminal:

\`\`\`bash
# From the root directory
npm run dev
\`\`\`
The frontend will run on \`http://localhost:5173\`


## API Endpoints

### Issues
- \`GET /api/issues\` - Get all issues 
- \`GET /api/issues/:id\` - Get single issue 
- \`POST /api/issues\` - Create new issue 
- \`PUT /api/issues/:id\` - Update issue 
- \`DELETE /api/issues/:id\` - Delete issue 

## Technologies Used

### Backend
- Node.js
- Nest.js
- MongoDB
- Mongoose
- nest-validator


### Frontend
- Vite
- React 18
- TypeScript
- Tailwind CSS
