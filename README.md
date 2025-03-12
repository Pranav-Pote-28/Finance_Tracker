# Personal Finance Visualizer

Personal Finance Visualizer is a web application that helps users track their transactions, categorize expenses, and visualize their financial data. Built using **React** for the frontend and **MongoDB** for the backend, this project allows users to manage their financial records efficiently.


## Project Overview

- **Frontend:** React, CSS
- **Backend:** Node.js, Express, MongoDB
- **Database:** MongoDB (Atlas)
- **Deployment:** Vercel (Frontend), Render/Heroku (Backend)

## Features

 Add new transactions with descriptions and timestamps  
 Automatic balance calculation  
 Categorized transactions (Income/Expense)  
 Persistent data storage using MongoDB  
 Responsive and user-friendly UI  

## Installation

### 1. Clone the Repository

```sh
git clone https://github.com/Pranav-Pote-28/Finance_Tracker.git
cd finance-tracker
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Setup Environment Variables

Create a .env file in the root directory and add:

```sh
REACT_APP_API_URL=http://localhost:4040
MONGO_URL=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-db
```

### 4. Start the Backend
```sh
cd api
node index.js
```

### 5. Start the Frontend
```sh 
npm start
```

License
This project is open-source and available under the MIT License.