# My Fullstack App

This project is a fullstack application that utilizes Node.js, Express, Sequelize, MySQL/MariaDB for the backend, and Angular for the frontend. The application allows users to store and retrieve data consisting of an ID, a number, and a string.

## Project Structure

```
my-fullstack-app
├── backend
│   ├── src
│   │   ├── controllers          # Contains controllers for handling requests
│   │   │   └── dataController.js
│   │   ├── models               # Contains Sequelize models
│   │   │   └── dataModel.js
│   │   ├── routes               # Contains route definitions
│   │   │   └── dataRoutes.js
│   │   ├── app.js               # Entry point for the backend application
│   │   └── config               # Configuration files
│   │       └── database.js
│   ├── package.json             # Backend dependencies and scripts
│   ├── .sequelizerc             # Sequelize configuration
│   └── README.md                # Documentation for the backend
├── frontend
│   ├── src
│   │   ├── app                  # Angular application components
│   │   │   ├── components
│   │   │   │   ├── post-data    # Component for posting data
│   │   │   │   │   ├── post-data.component.html
│   │   │   │   │   ├── post-data.component.ts
│   │   │   │   ├── get-data     # Component for getting data
│   │   │   │   │   ├── get-data.component.html
│   │   │   │   │   ├── get-data.component.ts
│   │   │   ├── app.component.html
│   │   │   ├── app.component.ts
│   │   │   ├── app.module.ts
│   │   ├── assets               # Static assets
│   │   ├── environments          # Environment configurations
│   │   ├── index.html           # Main HTML file
│   │   ├── main.ts              # Entry point for the Angular application
│   │   └── styles.css           # Global styles
│   ├── angular.json             # Angular CLI configuration
│   ├── package.json             # Frontend dependencies and scripts
│   └── README.md                # Documentation for the frontend
├── README.md                    # Overall project documentation
└── .gitignore                   # Git ignore file
```

## Backend

The backend is built using Node.js and Express. It handles data storage and retrieval using Sequelize ORM with a MySQL/MariaDB database.

### Key Files

- **app.js**: Initializes the Express application and sets up middleware.
- **dataController.js**: Contains methods for handling POST and GET requests.
- **dataModel.js**: Defines the data model structure.
- **dataRoutes.js**: Sets up the API routes for data operations.
- **database.js**: Configures the database connection.

## Frontend

The frontend is developed using Angular. It provides a user interface for submitting and retrieving data.

### Key Components

- **PostDataComponent**: Allows users to submit data to the backend.
- **GetDataComponent**: Displays data retrieved from the backend.

## Getting Started

1. Clone the repository.
2. Navigate to the `backend` directory and install dependencies:
   ```
   cd backend
   npm install
   ```
3. Set up the database configuration in `backend/src/config/database.js`.
4. Start the backend server:
   ```
   npm start
   ```
5. Navigate to the `frontend` directory and install dependencies:
   ```
   cd frontend
   npm install
   ```
6. Start the Angular application:
   ```
   ng serve
   ```

## License

This project is licensed under the MIT License.