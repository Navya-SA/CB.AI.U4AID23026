# Vehicle Maintenance Scheduler

## Overview

This project is a backend system for optimizing vehicle maintenance scheduling using dynamic programming.

The system:
- Fetches vehicle maintenance tasks from protected APIs
- Optimizes task selection based on available mechanic hours
- Maximizes total impact score
- Implements centralized logging middleware
- Exposes REST APIs using Express.js

---

## Tech Stack

- Node.js
- Express.js
- Axios
- Dynamic Programming (0/1 Knapsack)
- REST APIs

---

## Features

- JWT-protected API integration
- Vehicle scheduling optimization
- Logging middleware
- Error handling
- Notification system design documentation

---

## API Endpoint

### GET /schedule/:hours

Returns optimized maintenance schedule.

Example:

http://localhost:3000/schedule/60

---

## Run Project

Install dependencies:

npm install

Start server:

node server.js