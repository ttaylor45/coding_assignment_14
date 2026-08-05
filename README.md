# Coding Assignment 14 - Portfolio Website

## Overview

This project is a personal portfolio website built using React, TypeScript, and components developed throughout previous assignments. The website showcases projects completed during the Full Stack Web Development program, along with technical skills, learning resources, and my preferred development environment.

The application is containerized using Docker and served with Nginx.

## Features

Personal introduction
Portfolio projects
Technical skills
Learning resources
Developer setup
Responsive design
Animated galaxy background
Production Docker deployment

## Technologies Used

React
TypeScript
Styled Components
Docker
Nginx
Git
GitHub
ESLint
Prettier
Jest
Storybook

# Prerequisites

Before running the application, install:

Docker Desktop
Git

# Clone the Repository

bash
git clone https://github.com/ttaylor45/coding_assignment_14.git
cd coding_assignment_14

# Build the Docker Image

bash
docker build -t taylor_trent_coding_assignment14 .

# Run the Docker Container

bash
docker run -d --name taylor_trent_coding_assignment14 -p 5575:5575 taylor_trent_coding_assignment14

# View the Website

Open your browser and navigate to:

http://127.0.0.1:5575


# Stop the Container

bash
docker stop taylor_trent_coding_assignment14

# Start the Container Again

bash
docker start taylor_trent_coding_assignment14

# Remove the Container

bash
docker rm -f taylor_trent_coding_assignment14

# Development Mode

Install dependencies:

bash
npm install

Start the React development server:

bash
npm start

Open:

http://localhost:3000


# Build the React Application

bash
npm run build

# Run Quality Checks

bash
npm run quality


or individually:

bash
npm run format:check
npm run lint
npm run test:ci

# Portfolio Sections

The website contains the following sections:

Basic Information
Work
Skills
Resources
Developer Setup

Each project includes:

Title
Description
Screenshot
GitHub link
Technologies used

# Developer

**Trent Taylor**

Full Stack Web Development Student

GitHub:

https://github.com/ttaylor45

---

# Assignment Requirements

This project satisfies the Assignment 14 requirements by:

Building upon the reusable component library from previous assignments.
Creating a portfolio website using React.
Deploying the production build with Docker and Nginx.
Hosting the application at **127.0.0.1:5575**.